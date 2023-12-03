import { Router } from "express";
import { authRequired } from '../middlewares/validateToken.js';

const router = Router();

router.get('/skills', authRequired, (req, res) => res.send('skills'));

export default router;