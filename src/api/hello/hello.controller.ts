import Queue from '../../queues/base.queue';

const getHello = async (_req, res) => {
  const body = { message: 'hello' }
  await Queue.add('ConsoleQueue', body);
  Queue.process();

  res.send(body);
}

export { getHello };