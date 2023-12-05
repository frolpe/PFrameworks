import { Router } from "express";
import { authRequired } from '../middlewares/validateToken.js';
import {getSkills, getSkill, createSkill, updateSkill, deleteSkill} from '../controllers/skilss.controler.js';
import {validateSchema} from '../middlewares/validator.middleware.js';
import {createSkillSchema} from '../schemas/skills.schema.js';

const router = Router();

router.get('/skills', authRequired, getSkills);

router.get('/skills/:id', authRequired, getSkill);

router.post('/skills', authRequired, validateSchema(createSkillSchema), createSkill);

router.delete('/skills/:id', authRequired, deleteSkill);

router.put('/skills/:id', authRequired, updateSkill);

export default router;