const rivers = {
  nile: {
    continent: "Africa",
    length: "6,650 km",
    outflow: "Mediterranean",
  },
  niagra: {
    continent: "North America",
    length: "6,575 km",
    outflow: "Atlantic Ocean",
  },
  amazon: {
    continent: "South America",
    length: "6,575 km",
    outflow: "Atlantic Ocean",
  },
  mississippi: {
    continent: "North America",
    length: "6,275 km",
    outflow: "Gulf of Mexico",
  },
};

export default function getRiverInformation(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(rivers[name]);
    }, 1500);
  });
}
