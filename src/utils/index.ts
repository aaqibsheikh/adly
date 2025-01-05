/* eslint-disable no-useless-escape */
export function isEmptyObject(obj: Record<string, any>) {
  return Object.keys(obj).length === 0;
}

export function extractSubString([beg, end]: Array<string>) {
  const matcher = new RegExp(`${beg}(.*?)${end}`, 'gm');
  const normalise = (str: string) => str.slice(beg.length, end.length * -1);
  return function (str: string) {
    const result = str.match(matcher);

    if (result) {
      return result.map(normalise);
    } else {
      return null;
    }
  };
}

export function replaceAllSubstr(str: string, mapObj: Record<string, any>) {
  const re = new RegExp(Object.keys(mapObj).join('|'), 'gi');

  return str.replace(re, function (matched) {
    return mapObj[matched];
  });
}

export const setToLocalStorage = (itemName: string, value: unknown) => {
  window.localStorage.setItem(itemName, JSON.stringify(value));
};

export const removeFromLocalStorage = (itemName: string) =>
  window.localStorage.removeItem(itemName);

export const getFromLocalStorage = (itemName: string) => window.localStorage.getItem(itemName);

export const isValidURL = (string: string) => {
  const res = string.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
  );
  return res !== null;
};

export const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export const removeNonNumeric = (input: string) => input.replace(/[^0-9]/g, '');

export const commaSeparator = (input: string) => {
  const removedNonNumeric = removeNonNumeric(input);
  return removedNonNumeric.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const cutEmail = (email: string) => {
  return email.length > 20 ? email.substring(0, 17) + '...' : email;
};

export const validateEmail = (email: string) =>
  Boolean(
    email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    ),
  );


// using in Datepicker
export const getMinMaxDateFromNow = (rangeValue: number) => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - rangeValue);
  return date;
}

export const getMinDate = () => {
  const date = new Date(1970, 0, 1);
  return date;
};
