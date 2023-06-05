exports.getDate = () => {

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  const today = new Date();
  const day = today.toLocaleString("en-US",options);
  return day; 
}

