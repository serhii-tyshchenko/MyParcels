const actionsConfig = {
  string: (arg) => arg,
  object: (arg) =>
    Object.keys(arg)
      .filter((key) => arg[key])
      .join(' ')
      .trim(),
  array: (arg) => arg.join(' ').trim(),
};
const typesConfig = {
  string: (arg) => typeof arg === 'string',
  object: (arg) => typeof arg === 'object' && !Array.isArray(arg),
  array: (arg) => Array.isArray(arg),
};
const mapConfig = (arg) => {
  const argType = Object.keys(typesConfig).find((key) => typesConfig[key](arg));
  return actionsConfig[argType](arg);
};

export const myClassnames = (...args) =>
  args
    .map((arg) => mapConfig(arg))
    .join(' ')
    .trim();