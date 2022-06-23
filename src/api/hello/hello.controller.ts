import LogQueue from '../../queues/console.queue';
import EmailQueue from '../../queues/email.queue';
import VoteQueue from '../../queues/vote.queue';

const getHello = async (_req, res) => {
  const body = { message: 'hello' }
  await LogQueue.getInstance().add(body);
  await EmailQueue.getInstance().add(body);
  await VoteQueue.getInstance().add(body);

  res.send(body);
}

export { getHello };