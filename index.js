// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// ForEach Basics
console.log("ForEach Basics:");
// Logging each name and province
console.log("Names:");
names.forEach(name => console.log(name));
console.log("\nProvinces:");
provinces.forEach(province => console.log(province));

// Logging each name with matching province
console.log("\nName with matching province:");
names.forEach(name => {
  const provinceIndex = names.indexOf(name);
  console.log(`${name} (${provinces[provinceIndex]})`);
});

// Uppercase and Lowercase Transformation
console.log("\nUppercase and Lowercase Transformation:");
// Creating new arrays of province names in uppercase and lowercase
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log("Uppercase:", uppercaseProvinces);
const lowercaseProvinces = provinces.map(province => province.toLowerCase());
console.log("Lowercase:", lowercaseProvinces);

// Name Lengths
console.log("\nName Lengths:");
// Creating a new array containing the length of each name
const nameLengths = names.map(name => name.length);
console.log(nameLengths)

// Sorting
console.log("\nSorting:");
// Alphabetically sorting the provinces
const sortedProvinces = provinces.sort();
console.log(sortedProvinces);

// Filtering Cape
console.log("\nFiltering Cape:");
// Removing provinces containing "Cape" and logging the count of remaining provinces
const filteredProvinces = provinces.filter(province => !province.includes("Cape"));
console.log(filteredProvinces);
console.log(`Remaining provinces count: ${filteredProvinces.length}`);

// Finding 'S'
console.log("\nFinding 'S':");
// Creating a boolean array to determine if a name contains the letter 'S'
const containsS = names.map(name => name.includes('S') || name.includes('s'));
console.log(containsS);

// Creating Object Mapping
console.log("\nCreating Object Mapping:");
// Transforming the names array into an object mapping names to their respective provinces
const nameProvinceMapping = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameProvinceMapping);