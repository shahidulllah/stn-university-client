export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const monthOptions = monthNames.map((item) => ({
  value: item,
  label: item,
}));

//Genders options
export const genders = ["Male", "Female", "Other"];

export const genderOptions = genders.map((item) => ({
  value: item.toLowerCase(),
  label: item,
}));
