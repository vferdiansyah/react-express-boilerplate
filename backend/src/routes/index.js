import createError from 'http-errors';
import express from 'express';

import userRoutes from './userRoutes';

const router = express.Router();

router.use('/users', userRoutes);

router.use((req, res, next) => {
  next(createError(404));
});

export default router;
