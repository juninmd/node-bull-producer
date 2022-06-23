import CandidateQueue from '../queues/candidate.queue';
import LogQueue from '../queues/console.queue';
import EmailQueue from '../queues/email.queue';
import VoteQueue from '../queues/vote.queue';

import * as express from 'express';

const router = express.Router();

const getPing = async (_req, res) => {
  const body = { message: 'hello' };
  return res.send(body).status(200);
};

const postLog = async (req, res) => {
  const body = { message: req.body.message };
  await LogQueue.getInstance().add(body);
  return res.send(body);
};

const postEmail = async (req, res) => {
  const body = { message: req.body.message };
  await EmailQueue.getInstance().add(body);

  return res.send(body);
};

const postCandidate = async (req, res) => {
  const body = req.body;
  await CandidateQueue.getInstance().add(body);
  return res.send(body);
};

const postVote = async (req, res) => {
  const body = req.body;
  await VoteQueue.getInstance().add({ partyNumber: body.partyNumber });
  return res.send(body);
};

router.post('/log', postLog);
router.post('/email', postEmail);
router.post('/vote', postVote);
router.post('/candidate', postCandidate);
router.get('/', getPing);

export default router;
