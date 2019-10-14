let isMomHappy = true;
/*
let willIGetNewPhone = new Promise((resolve, reject) => {
  if (isMomHappy) {
    let phone = {
      brand: "Samsung",
      color: "black"
    };
    resolve(phone); // Всё выполнено
  } else {
    let reason = new Error("mom is not happy");
    reject(reason); // reject
  }
});*/

let willIGetNewPhone = new Promise(
  (resolve,reject) => {
    if (isMomHappy) {
      let phone = {
        brand: "Samsung",
        color: "black"
      };
      resolve(phone);
    } else {
      let reason = new Error ("mom is not happy");
      reject(reason);
    }
  }
);

async function showOff(phone) {
  return new Promise((resolve, reject) => {
    let message =
      "Hey friend, I have a new " + phone.color + " " + phone.brand + " phone";
    resolve(message);
  });
};

async function askMom() {
  try {
    console.log("before");
    let phone = await willIGetNewPhone;
    let message = await showOff(phone);

    console.log(message);
    console.log("after");
  } catch (error) {
    console.log(error.message);
  }
}
(async () => {
  await askMom();
})();
