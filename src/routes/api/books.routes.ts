import { Request, Response, Router } from 'express';

const router = Router();

router.get('/', (_req: Request, res: Response) => {
  res.send('Books API');
});

export default router;
