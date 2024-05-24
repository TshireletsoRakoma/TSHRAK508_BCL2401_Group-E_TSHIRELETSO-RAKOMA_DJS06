// forEachBasics.js

// ForEach Basics
function forEachBasics(names, provinces) {
  // Logging each name and province
  console.log("ForEach Basics:");
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
  }
  