const fs = require("fs");

fs.readFile("text.txt", "utf-8", (err, data) => {
  console.log("\n\tАсинхронное чтение файла");
  if (err) {
    console.log("error");
    throw err;
  }
  console.log(data);
});

let data = fs.readFileSync("text.txt", "utf-8");
console.log("\n\tСинхронное чтение файла");
console.log(data);

fs.writeFileSync("1.txt", "Синхрон");
console.log(
  "\n\tСинхронная запись произведена\nСодержимое файла:\n");

fs.writeFile("2.txt", "Аснхрон", error => {
  if (error) {
    console.log("error");
    throw error;
  }
  console.log(
    "\n\tАсинхронная запись произведена\nСодержимое файла:\n" +
      fs.readFileSync("2.txt", "utf-8"));
  })
