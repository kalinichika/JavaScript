console.log("\n----------Registration---------\n");
const { once } = require("events");
const readline = require("readline");
const fs = require("fs");
const crypto = require("crypto");
const hash = crypto.createHash("sha256");
let user = {};
let options = ["LOGIN", "PASSWORD", "HASH"];

async function readUserData() {
  try {
    let i = 0;
    const rl = readline.createInterface({
      input: process.stdin,
      srlfDelay: Infinity
    });
    console.log("Enter your LOGIN:");
    rl.on("line", line => {
      user[options[i++]] = line.trim();
      if (i === 2) {
        rl.close();
      } else console.log("Enter your PASSWORD:");
    });
    await once(rl, "close");
  } catch (err) {
    console.error(err);
  }
}

(async function main() {
  let users = JSON.parse(fs.readFileSync("ex8_hash/users.json"));
  await readUserData();
  hash.update(user.LOGIN + user.PASSWORD);
  user.HASH = hash.digest("hex");
  users[user.LOGIN] = user.HASH;
  fs.writeFileSync("ex8_hash/users.json", JSON.stringify(users, null, 2));
})();
