import express from 'express';
import cors from 'cors';

import { router } from './routes/phones.js';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use('/products', router);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`API is ready on http://localhost:${PORT} 🚀🚀🚀`);
});
