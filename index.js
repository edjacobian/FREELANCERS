const users = [
  { name: "John", age: 25, occupation: "gardener" },
  { name: "Lenny", age: 51, occupation: "programmer" },
  { name: "Andrew", age: 43, occupation: "teacher" },
  { name: "Peter", age: 81, occupation: "teacher" },
  { name: "Anna", age: 43, occupation: "teacher" },
  { name: "Albert", age: 76, occupation: "programmer" },
  { name: "Adam", age: 47, occupation: "teacher" },
  { name: "Robert", age: 72, occupation: "driver" },
];

document.body.style.backgroundColor="cornflowerblue";
document.body.style.color="white";

function main() {
  const root = document.getElementById("root");
  const h1 = document.createElement("h1");
  h1.innerText = "FREELANCERS";
  root.appendChild(h1);
  //place for loop within function
  const usersForLoop = (arr, func) => {
    const ul = document.createElement(`ul`);
    root.appendChild(ul);

    // Create for loop
    for(let i=0; i <arr.length; i++) {
      const li = document.createElement(`li`);
      // loop through the users array
      // console.log ((arr[i]))
      // create li elements
      ul.appendChild(li);
      li.innerText = `${arr[i].name}`;
      // createLi(arr[i]);
      // append elements to document
    }
  }
  return usersForLoop(users);


}

main();






  