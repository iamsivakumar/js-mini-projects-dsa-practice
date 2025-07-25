const indiaCities = ["Delhi", "Mumbai", "Chennai"];
const usaCities = ["New York", "Chicago", "San Francisco"];
const combinedCities = [...indiaCities, ...usaCities];
console.log(combinedCities);

const [firstCity, secondCity, ...remainingCities] = combinedCities;
console.log(`🌆 First: ${firstCity}`);
console.log(`🌆 Second: ${secondCity}`);
console.log(`🌎 Others:${remainingCities}`);

// output;
// 🌆 First: Delhi
// 🌆 Second: Mumbai
// 🌎 Others: Chennai,New York,Chicago,San Francisco
