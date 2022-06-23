const express = require('express');

const router = express.Router();

import { getHello, postCandidate } from './hello/hello.controller';
router.use('/candidate', postCandidate);
router.use('/', getHello);

export default router;