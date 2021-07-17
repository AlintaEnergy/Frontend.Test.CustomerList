// eslint-disable-next-line no-useless-escape
export const nameRegex = /^[A-Za-z\s\'-]*$/;

// Accepting 04xx xxx xxx, (0x) xxxx xxxx, +61 xxx xxx xxx and without space
// eslint-disable-next-line no-useless-escape
export const phoneRegex = /^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/;

export const toHeaderCase = (input: string) => {
  const replaceInput = input.replace(/([A-Z])/g, " $1");
  const changedInput =
    replaceInput.charAt(0).toUpperCase() + replaceInput.slice(1);
  return changedInput;
};
