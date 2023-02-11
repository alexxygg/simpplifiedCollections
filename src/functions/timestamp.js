// Get the current date and time

// Format the date and time as a string
const timestamp = (e) => {
  let now = new Date();
  let date = now.toLocaleString();
  e.target.timestamp = date;
};
export default timestamp;
