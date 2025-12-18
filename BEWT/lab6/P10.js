const fs = require("fs");

// Watch the file
fs.watch("watchme.txt", () => {
    console.log("File Changed");
});

console.log("Watching for changes in watchme.txt...");