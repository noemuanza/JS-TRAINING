// promise example

function myDisplayer(some) {
  console.log(some);
}

let myPromise = new Promise(function (myResolve, myReject) {
  let x = 0;
  x++;

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function (value) { myDisplayer(value); },
  function (error) { myDisplayer(error); }
);

//waiting timeout

let myPromise1 = new Promise((myResolve, myReject) => {
  setTimeout(() => { myResolve('shudup'); }, 3000);
});

myPromise1.then((value) => {
  console.log(value);
})


//async example

async function myFunction() {
  return "Hello";
}
myFunction().then(
  (value)=>{ console.log(value); }
);

//await basic example
async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    setTimeout(()=>{resolve("I love You !!");},3000);
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();