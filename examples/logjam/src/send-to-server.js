/**
 *
 * @param {'info' | 'error' | 'warn'} level
 * @param {string} message
 */
export const sendToServer = (level, message) => {
  throw new Error("I shouldn't run!");
  return `You must mock this function: sendToServer(${level}, ${message})`;
};
