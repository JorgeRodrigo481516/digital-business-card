export function namePattern(str) {
  let newStr = str.replace(/[^A-Z\s\u00C0-\u00FF]/gi, "");

  while (newStr.length > 16) {
    newStr = newStr.slice(0, -1);
  }

  return newStr;
}

export function jobPattern(str) {
  let newStr = str.replace(/[^\w\s\u00C0-\u00FF]/gi, "");

  while (newStr.length > 32) {
    newStr = newStr.slice(0, -1);
  }

  return newStr;
}

export function emailPattern(str) {
  const newStr = str.replace(/[^\w._&@-]/g, "");

  return newStr;
}

export function descriptionPattern(str) {
  let newStr = str;

  while (newStr.length > 256) {
    newStr = newStr.slice(0, -1);
  }

  return newStr;
}
