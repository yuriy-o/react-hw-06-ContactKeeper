export const nanoidUA = () => {
  const { customAlphabet } = require('nanoid');
  const alphabet = '0123456789';
  const nanoid = customAlphabet(alphabet, 3);
  const idResult = 'UA-' + nanoid();
  return idResult;
};
