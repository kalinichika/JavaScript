console.log("\n----------Registration---------\n");
const readline = require("readline");
const fs = require("fs");
const crypto = require("crypto");
const hash = crypto.createHash("sha256");
let user = {};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your LOGIN: ", login => {
  user.LOGIN = login.trim();
  rl.question("Enter your PASSWORD: ", password => {
    user.PASSWORD = password.trim();
    rl.close();

    let users = JSON.parse(fs.readFileSync("ex8_hash/users.json"));
    hash.update(user.LOGIN + user.PASSWORD);
    user.HASH = hash.digest("hex");
    users[user.LOGIN] = user.HASH;
    fs.writeFileSync("ex8_hash/users.json", JSON.stringify(users, null, 2));
  });
});
