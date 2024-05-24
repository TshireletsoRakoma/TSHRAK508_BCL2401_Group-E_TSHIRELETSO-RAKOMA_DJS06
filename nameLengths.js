// nameLengths.js

// Name Lengths
function nameLengths(names) {
    // Creating a new array containing the length of each name
    console.log("\nName Lengths:");
    const nameLengths = names.map(name => name.length);
    console.log(nameLengths);
}

module.exports = nameLengths;