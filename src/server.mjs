import express from 'express';
import cors from 'cors';

import { router as phoneDetailsRouter } from '../src/routes/phoneDetails.js';
import { router as phonesRouter } from '../src/routes/phones.js';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/product_details', phoneDetailsRouter);
app.use('/products', phonesRouter);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`API is ready on http://localhost:${PORT} 🚀🚀🚀`);
});
