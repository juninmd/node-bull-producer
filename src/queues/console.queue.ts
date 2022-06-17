
export default {
  key: 'ConsoleQueue',
  options: {
    delay: 5000,
  },
  async handle({ data }) {
    console.log(data);
  },
};