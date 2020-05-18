const result = (Queue, currentTime, fromwhat) => {
  textResult.innerHTML = fromwhat + " Result";

  p1_arrive.innerHTML = Queue[0].arriveTime;
  p2_arrive.innerHTML = Queue[1].arriveTime;
  p3_arrive.innerHTML = Queue[2].arriveTime;
  p1_burst.innerHTML = Queue[0].burst;
  p2_burst.innerHTML = Queue[1].burst;
  p3_burst.innerHTML = Queue[2].burst;
  p1_wait.innerHTML = Queue[0].wait;
  p2_wait.innerHTML = Queue[1].wait;
  p3_wait.innerHTML = Queue[2].wait;
  let text;

  chart0.style.backgroundColor = "gray";
  chart0.style.width = Queue[0].arriveTime * 40 + "px";
  chart0.style.borderStyle = "dotted";

  text = Queue[0].arriveTime;
  chart1.style.backgroundColor = "red";
  chart1.style.width += Queue[0].burst * 40 + "px";
  const text1 = document.createTextNode(text);
  chart1.innerHTML = "P1";

  result_p1.appendChild(text1);
  result_p1.style.left = Queue[0].arriveTime * 40 + "px";

  text += Queue[0].burst;
  chart2.style.background = "blue";
  chart2.style.width += Queue[1].burst * 40 + "px";
  const text2 = document.createTextNode(text);
  chart2.innerHTML = "P2";

  result_p2.appendChild(text2);
  result_p2.style.left = (Queue[0].arriveTime + Queue[0].burst) * 40 + "px";

  text += Queue[1].burst;
  chart3.style.background = "green";
  chart3.style.width += Queue[2].burst * 40 + "px";
  const text3 = document.createTextNode(text);
  chart3.innerHTML = "P3";

  result_p3.appendChild(text3);
  result_p3.style.left = text * 40 + "px";

  text += Queue[2].burst;
  const text4 = document.createTextNode(text);

  result_p4.appendChild(text4);
  result_p4.style.left = text * 40 + "px";
};
