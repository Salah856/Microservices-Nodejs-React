import express, { Request, Response } from 'express';
import { Ticket } from '../models/ticket';

const router = express.Router();

// TODO: Handle limit and skip for pagination

router.get('/api/tickets', async (req: Request, res: Response) => {
  const tickets = await Ticket.find({});

  res.send(tickets);
});

export { router as indexTicketRouter };
