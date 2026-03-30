import { Router, Request, Response } from 'express';
import Project from '../models/Project';

const router = Router();

// GET all projects
router.get('/', async (req: Request, res: Response) => {
  try {
    const projects = await Project.findAll({
      order: [['year', 'DESC']],
    });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

// GET single project
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) {
      res.status(404).json({ error: 'Project not found' });
      return;
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch project' });
  }
});

// POST new project (admin only in production)
router.post('/', async (req: Request, res: Response) => {
  try {
    const { title, description, tags, year, metrics, link, color } = req.body;

    if (!title || !description || !year) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    const project = await Project.create({
      title,
      description,
      tags: tags || [],
      year,
      metrics: metrics || [],
      link,
      color: color || 'primary',
    });

    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create project' });
  }
});

// PUT update project
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) {
      res.status(404).json({ error: 'Project not found' });
      return;
    }

    await project.update(req.body);
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update project' });
  }
});

// DELETE project
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) {
      res.status(404).json({ error: 'Project not found' });
      return;
    }

    await project.destroy();
    res.json({ message: 'Project deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete project' });
  }
});

export default router;
