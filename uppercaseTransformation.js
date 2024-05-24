// uppercaseTransformation.js

// Uppercase Transformation
function uppercaseTransformation(provinces) {
    // Creating a new array of province names in uppercase
    console.log("\nUppercase Transformation:");

    const uppercaseProvinces = provinces.map(province => province.toUpperCase());
    console.log(uppercaseProvinces);
}

module.exports = uppercaseTransformation;