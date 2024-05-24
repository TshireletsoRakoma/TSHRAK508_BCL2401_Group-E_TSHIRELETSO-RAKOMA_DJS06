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