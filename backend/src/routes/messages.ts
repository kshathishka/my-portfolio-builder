import { Router, Request, Response } from 'express';
import ContactMessage from '../models/ContactMessage';

const router = Router();

// GET all messages (admin)
router.get('/', async (req: Request, res: Response) => {
  try {
    const messages = await ContactMessage.findAll({
      order: [['createdAt', 'DESC']],
    });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

// GET unread count
router.get('/unread/count', async (req: Request, res: Response) => {
  try {
    const count = await ContactMessage.count({ where: { read: false } });
    res.json({ unreadCount: count });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch unread count' });
  }
});

// POST new message
router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    const msg = await ContactMessage.create({
      name,
      email,
      subject,
      message,
    });

    res.status(201).json(msg);
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// PUT mark as read
router.put('/:id/read', async (req: Request, res: Response) => {
  try {
    const message = await ContactMessage.findByPk(req.params.id);
    if (!message) {
      res.status(404).json({ error: 'Message not found' });
      return;
    }

    await message.update({ read: true });
    res.json(message);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update message' });
  }
});

// DELETE message
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const message = await ContactMessage.findByPk(req.params.id);
    if (!message) {
      res.status(404).json({ error: 'Message not found' });
      return;
    }

    await message.destroy();
    res.json({ message: 'Message deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete message' });
  }
});

export default router;
