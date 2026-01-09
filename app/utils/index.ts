// May 1st, 1987
const FOUNDED_DATE = new Date(1987, 4, 1);

export const getYearsOfExperience = (): number => {
  const now = new Date();

  return (
    now.getFullYear() -
    FOUNDED_DATE.getFullYear() -
    (now < new Date(now.getFullYear(), 4, 1) ? 1 : 0)
  );
};

export const capitalizeWords = (str: string): string =>
  str.replace(/\b\w/g, (char) => char.toUpperCase());

export const capitalizeFirst = (string: string): string => {
  if (!string) {
    return string;
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const formatPhoneNumber = (value: string): string => {
  const digits = value.replace(/\D/g, "");

  if (digits.length === 0) {
    return "";
  }

  if (digits.length <= 3) {
    return `(${digits}`;
  }

  if (digits.length <= 6) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  }

  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
};

export const validateEmail = (email: string): boolean => {
  if (!email) {
    return true;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const digits = phone.replace(/\D/g, "");

  return digits.length === 10;
};

export const getImageUrl = (id: string, size: string = "800x600"): string =>
  `https://ucarecdn.com/${id}/-/preview/${size}/-/format/auto/-/quality/smart/`;
