let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".three");
let start = false;
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
   if (!start) {
    nums.forEach((nnn) => startcount(nnn));

   }
   start = true
  }
};

function startcount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

counter down

let countDown = new Date("Dec 31, 2022 23:59:59").getTime();

let counter = setInterval(() => {
  let dataNow = new Date().getTime();
  let dataDiff = countDown - dataNow;
  //   get unites
  //   let days = dataDiff / 1000 / 60 / 60 / 24;
  let days = Math.floor(dataDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dataDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dataDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dataDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;

  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0 ${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0 ${seconds}` : seconds;
  if (dataDiff < 0) clearInterval(counter);
}, 1000);

  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate

