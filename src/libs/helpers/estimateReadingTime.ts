const estimateReadingTime = (text: string, wordPerMinutes = 200) => {
  const words = text.split('/\s+/').length;
  const minutes = Math.ceil(words / wordPerMinutes);
  return minutes;
};

export default estimateReadingTime;
