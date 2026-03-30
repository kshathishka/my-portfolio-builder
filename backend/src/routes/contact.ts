import { Router, Request, Response } from 'express';
import Experience from '../models/Experience';

const router = Router();

// GET all experiences
router.get('/', async (req: Request, res: Response) => {
  try {
    const experiences = await Experience.findAll({
      order: [['startDate', 'DESC']],
    });
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch experiences' });
  }
});

// GET single experience
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const experience = await Experience.findByPk(req.params.id);
    if (!experience) {
      res.status(404).json({ error: 'Experience not found' });
      return;
    }
    res.json(experience);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch experience' });
  }
});

// POST new experience
router.post('/', async (req: Request, res: Response) => {
  try {
    const { title, company, startDate, endDate, current, description, highlights } = req.body;

    if (!title || !company || !startDate) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    const experience = await Experience.create({
      title,
      company,
      startDate,
      endDate,
      current: current || false,
      description: description || [],
      highlights: highlights || [],
    });

    res.status(201).json(experience);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create experience' });
  }
});

// PUT update experience
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const experience = await Experience.findByPk(req.params.id);
    if (!experience) {
      res.status(404).json({ error: 'Experience not found' });
      return;
    }

    await experience.update(req.body);
    res.json(experience);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update experience' });
  }
});

// DELETE experience
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const experience = await Experience.findByPk(req.params.id);
    if (!experience) {
      res.status(404).json({ error: 'Experience not found' });
      return;
    }

    await experience.destroy();
    res.json({ message: 'Experience deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete experience' });
  }
});

export default router;
