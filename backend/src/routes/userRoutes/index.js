import express from 'express';

import { getUserFullName } from '../../controllers/userController';

const router = express.Router();

router.get('/', getUserFullName);

export default router;
