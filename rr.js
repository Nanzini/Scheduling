import init from "./tmp.js";
const RR = () => {
  init();
  btn_up.addEventListener("click", click_up);
  btn_down.addEventListener("click", click_down);
  btn_RR.addEventListener("click", run_RR);
};

const click_up = () => {
  rrCount.innerText = Number(rrCount.innerText) + 1;
};

const click_down = () => {
  rrCount.innerText = Number(rrCount.innerText) - 1;
};

const run_RR = () => {
  console.log(" RR : " + rrCount.innerText);
};

RR();
