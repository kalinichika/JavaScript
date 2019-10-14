console.log("\n----------Authorization---------\n");
const readline = require("readline");
const fs = require("fs");
const crypto = require("crypto");
const hash = crypto.createHash("sha256");
let user = {};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let users = JSON.parse(fs.readFileSync("ex8_hash/users.json"));

rl.question("Enter your LOGIN: ", login => {
  user.LOGIN = login.trim();
  rl.question("Enter your PASSWORD: ", password => {
    user.PASSWORD = password.trim();
    rl.close();

    user.HASH = hash.update(user.LOGIN + user.PASSWORD).digest("hex");
    if (user.LOGIN in users) {
      console.log(
        users[user.LOGIN] === user.HASH ? "You are signed in." : "Try again."
      );
    } else {
      console.log("User not found.");
    }
  });
});
