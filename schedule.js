let p1 = document.querySelector("#p1"); //배열형태로 가져옴
const p1_value = p1.querySelectorAll("input");

const p2 = document.querySelector("#p2");
const p2_value = p2.querySelectorAll("input");

const p3 = document.querySelector("#p3");
const p3_value = p3.querySelectorAll("input");

const btn_FCFS = document.querySelector("#btn_FCFS");
const btn_SJF = document.querySelector("#btn_SJF");
const btn_Priority = document.querySelector("#btn_Priority");
const btn_RR = document.querySelector("#btn_RR");

let textResult = document.getElementById("textResult");

//result function part
const p1_arrive = document.getElementById("P1_arrive");
const p2_arrive = document.getElementById("P2_arrive");
const p3_arrive = document.getElementById("P3_arrive");
const p1_burst = document.getElementById("P1_burst");
const p2_burst = document.getElementById("P2_burst");
const p3_burst = document.getElementById("P3_burst");
const p1_wait = document.getElementById("P1_wait");
const p2_wait = document.getElementById("P2_wait");
const p3_wait = document.getElementById("P3_wait");
const chart0 = document.getElementById("chart0");
const chart1 = document.getElementById("chart1");
const chart2 = document.getElementById("chart2");
const chart3 = document.getElementById("chart3");
const form = document.getElementById("form_result");
const div = document.createElement("div");
const result_p1 = document.getElementById("result_p1");
const result_p2 = document.getElementById("result_p2");
const result_p3 = document.getElementById("result_p3");
const result_p4 = document.getElementById("result_p4");
form.style.display = "flex";

let rrCount = document.getElementById("RRCount");
const btn_up = document.getElementById("btn_up");
const btn_down = document.getElementById("btn_down");
