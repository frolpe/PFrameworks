import { Router } from "express";
import { authRequired } from '../middlewares/validateToken.js';
import {getStudies, getStudy, createStudy, updateStudy, deleteStudy} from '../controllers/study.controller.js'
import {validateSchema} from '../middlewares/validator.middleware.js';
import { createStudySchema } from "../schemas/study.schema.js";

const router = Router();

router.get('/studies', authRequired, getStudies);

router.get('/studies/:id', authRequired, getStudy);

router.post('/studies', authRequired, validateSchema(createStudySchema), createStudy);

router.delete('/studies/:id', authRequired, deleteStudy);

router.put('/studies/:id', authRequired, updateStudy);

export default router;