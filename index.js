const weekEl25 = document.getElementById("week25");
const dayEl25 = document.getElementById("day25");
const hourEl25 = document.getElementById("hour25");
const minuteEl25 = document.getElementById("minute25");
const secondEl25 = document.getElementById("second25");
const milisecondEl25 = document.getElementById("milisecond25");


const weekEl26 = document.getElementById("week26");
const dayEl26 = document.getElementById("day26");
const hourEl26 = document.getElementById("hour26");
const minuteEl26 = document.getElementById("minute26");
const secondEl26 = document.getElementById("second26");
const milisecondEl26 = document.getElementById("milisecond26");

const newYearTime25 = new Date("Jan 1, 2025 00:00:00").getTime();
const newYearTime26 = new Date("Jan 1, 2026 00:00:00").getTime();

updateCountdown25();
mil25();
updateCountdown26();
mil26();

function updateCountdown25() {
  const now = new Date().getTime();
  const gap = newYearTime25 - now;

  //const milisecond = 1;
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;

  const w = Math.floor(gap / week);
  const d = Math.floor((gap % week) / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);
  //const ms = Math.floor((gap % second) / milisecond);

  weekEl25.innerText = w;
  dayEl25.innerText = d;
  hourEl25.innerText = h;
  minuteEl25.innerText = m;
  secondEl25.innerText = s;
  //milisecondEl25.innerText = ms;
  setTimeout(updateCountdown25, 1000);
}

function mil25() {
  const now = new Date().getTime();
  const gap = newYearTime25 - now;

  const milisecond = 1;
  const second = 1000;
  const ms = Math.floor((gap % second) / milisecond);

  milisecondEl25.innerText = ms;
  setTimeout(mil25, 1);
}


function updateCountdown26() {
  const now = new Date().getTime();
  const gap = newYearTime26 - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;

  const w = Math.floor(gap / week);
  const d = Math.floor((gap % week) / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  weekEl26.innerText = w;
  dayEl26.innerText = d;
  hourEl26.innerText = h;
  minuteEl26.innerText = m;
  secondEl26.innerText = s;
  setTimeout(updateCountdown26, 1000);
}

function mil26() {
  const now = new Date().getTime();
  const gap = newYearTime25 - now;

  const milisecond = 1;
  const second = 1000;
  const ms = Math.floor((gap % second) / milisecond);

  milisecondEl26.innerText = ms;
  setTimeout(mil26, 1);
}
