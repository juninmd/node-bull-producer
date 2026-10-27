import queues from '../queues';
import * as express from 'express';
import RedisCli from '../redis';

const redis = RedisCli.getInstance();
const router = express.Router();

// Express 4 does not catch rejected promises: forward them to the error middleware
const wrap =
  (fn) =>
  (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next);

const getPing = async (_req, res) => {
  const body = { message: 'hello' };
  return res.status(200).send(body);
};

const postLog = async (req, res) => {
  const body = { message: req.body.message };
  await queues.log.add(body);
  return res.send(body);
};

const postEmail = async (req, res) => {
  const body = { message: req.body.message };
  await queues.email.add(body);
  return res.send(body);
};

const postCandidate = async (req, res) => {
  const body = req.body;
  await queues.candidate.add(body);
  return res.send(body);
};

const postVote = async (req, res) => {
  const body = req.body;
  await queues.vote.add({ partyNumber: body.partyNumber });
  return res.send(body);
};

const getCandidates = async (_, res) => {
  const body = await redis.getJSON('candidates');
  return res.send(body);
};

const getVotes = async (_, res) => {
  const body = await redis.getJSON('votes');
  return res.send(body);
};

router.post('/log', wrap(postLog));
router.post('/email', wrap(postEmail));
router.post('/candidates', wrap(postCandidate));
router.post('/votes', wrap(postVote));
router.get('/candidates', wrap(getCandidates));
router.get('/votes', wrap(getVotes));
router.get('/', wrap(getPing));

export default router;
