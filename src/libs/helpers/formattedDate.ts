const formattedDate = (d: string) => {
  return new Date(d).toDateString().split(' ').slice(1).join(' ');
};

export default formattedDate;
