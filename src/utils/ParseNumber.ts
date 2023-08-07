export const parseNumber = (number: number) => {
  number = Number(number);
  const options = { minimumFractionDigits: 0, maximumFractionDigits: 0 };
  return number.toLocaleString("es-ES", options); //
};
