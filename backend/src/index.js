import express from 'express';
import logger from 'morgan';

import { API_SERVER_PORT } from './config';
import router from './routes';

const app = express();

app.disable('etag');

app.use(logger('dev'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

const port = API_SERVER_PORT || 5000;
app.listen(port, () => {
  console.info('Knock knock!');
  console.info("Who's there?");
  console.info(`Your server, listening on port ${port}`);
});

export default app;
