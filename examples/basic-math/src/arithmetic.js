export const add = (a, b) => {
  if (typeof a === 'string') a = Number(a);
  if (typeof b === 'string') b = Number(b);

  return a + b;
};

export const subtract = (a, b) => {
  return a - b;
};

export const multiply = (a, b) => {
  return a * b;
};

export const divide = (a, b) => {
  return a / b;
};
