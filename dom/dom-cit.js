// let result = document.getElementById("one").innerHTML = "<h1>MERN 2402</h1>"
// console.log(result);

// let result = document.getElementById("one")
// result.style.color = "red"

// const counter = document.querySelector(".counter");

// console.log(counter.dataset.number);

// let count = 0;
// setInterval(function greeting(){

//  count ++;
//  console.log(count);
//  counter.innerHTML = count
//  if(count == counter.dataset.number){

//  }

// }, 1000)

// let count = 0;
// function counters() {
//   count++;
//   console.log(count);
//   counter.innerHTML = count;
//   if (count == counter.dataset.number) {
//     clearInterval(stop);
//   }
// }
// counters();

// let stop = setInterval(counters, 100);

// ============================================


// const counter = document.querySelector(".counter");

// console.log(counter.dataset.number);

// let counterArry = Array.from(counter);
// console.log(counterArry);

// ================================================


// let students = [
//     {
//         name: "tamzid",
//         id: "1"
//     },
//     {
//         name: "tamzid",
//         id: "1"
//     },
//     {
//         name: "tamzid",
//         id: "1"
//     }
// ]

// console.log(students);

// students.map((item)=>{
//     console.log(item);
    
// })

// =============================================


// const counter = document.querySelectorAll(".counter");
// let counterArr = Array.from(counter);


// counterArr.map((item) =>{
//     let count = 0;
//     function counters() {
//       count++;
//       console.log(count);
//       item.innerHTML = count
//       if (count == item.dataset.number) {
//         clearInterval(stop);
//       }
//     }
//     counters();
    
//     let stop = setInterval(counters, 1000);
// })

// ===============================================


const counter = document.querySelectorAll(".counter");
let counterArr = Array.from(counter);


counterArr.map((item) =>{
    let count = 0;
    function counters() {
      count++;
      console.log(count);
      item.innerHTML = count
      if (count == item.dataset.number) {
        clearInterval(stop);
      }
    }
    counters();
    
    let stop = setInterval(counters, item.dataset.speed);
})



