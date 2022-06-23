import CandidateQueue from '../../queues/candidate.queue';
import LogQueue from '../../queues/console.queue';
import EmailQueue from '../../queues/email.queue';
import VoteQueue from '../../queues/vote.queue';

const getHello = async (_req, res) => {
  const body = { message: 'hello' }
  await LogQueue.getInstance().add(body);
  await EmailQueue.getInstance().add(body);
  await VoteQueue.getInstance().add({ partyNumber: 12 });

  res.send(body);
}

const postCandidate = async (_req, res) => {
  const body = { partyNumber: 1, name: 'b' }
  await CandidateQueue.getInstance().add(body);
  await VoteQueue.getInstance().add({ partyNumber: body.partyNumber });

  res.send(body);
}

export { getHello, postCandidate };