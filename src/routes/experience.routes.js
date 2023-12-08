import { Router } from "express";
import { authRequired } from '../middlewares/validateToken.js';
import {getExps, getExp, createExp, updateExp, deleteExp} from '../controllers/experience.controller.js'
import {validateSchema} from '../middlewares/validator.middleware.js';
import { createExperienceSchema } from "../schemas/experience.schema.js";

const router = Router();

router.get('/exps', authRequired, getExps);

router.get('/exps/:id', authRequired, getExp);

router.post('/exps', authRequired, validateSchema(createExperienceSchema), createExp);

router.delete('/exps/:id', authRequired, deleteExp);

router.put('/exps/:id', authRequired, updateExp);

export default router;