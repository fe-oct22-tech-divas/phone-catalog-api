import express from 'express';
import cors from 'cors';

import { router as phoneRouter } from './routes/phones';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use('/products', phoneRouter);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`API is ready on http://localhost:${PORT} 🚀🚀🚀`);
});
