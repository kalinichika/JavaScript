/*fetch('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
 */

 /*fetch('http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
 */
let users = new Array();

fetch(
  "http://www.filltext.com/?rows=20&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}"
)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let i = 0;
    for (let item of data) {
      console.log(
        i + ". " + item.firstName + " " + item.lastName.toUpperCase()
      );
      i++;
    }
  })

  .then()
  .catch(err => {
    console.log("Fetch Error :-S", err);
  });
