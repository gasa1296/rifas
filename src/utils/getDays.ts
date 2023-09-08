export const getDays = (date: string) => {
  const today = new Date();
  const endDate = new Date(date);
  const difference = endDate.getTime() - today.getTime();
  const days = Math.ceil(difference / (1000 * 3600 * 24));
  if (days < 0) return 0;
  return days;
};
