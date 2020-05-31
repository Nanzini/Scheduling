const result1 = (Q, currentTime, fromwhat) => {
  debugger;
  //이미 결과가 있을 때
  let table_tr = document.querySelectorAll("tr");
  let chart_div = chart.querySelectorAll("div");
  let chart_text = time.querySelectorAll("span");
  if (table_tr[1]) {
    for (i = 1; i < table_tr.length; i++) table_tr[i].remove();
  }

  if (chart_div[0]) {
    for (i = 0; i < chart_div.length; i++) chart_div[i].remove();
  }
  if (chart_text[0]) {
    for (i = 0; i < chart_text.length; i++) chart_text[i].remove();
  }

  for (i = 0; i < Q.length; i++) {
    if (Q[i].fromWho === 0) {
      const P1_result = document.createElement("tr");
      const P1_order = document.createElement("td");
      const P1_arrive = document.createElement("td");
      const P1_burst = document.createElement("td");
      const P1_wait = document.createElement("td");

      P1_order.innerHTML = "  P1  ";
      P1_arrive.innerHTML = Q[i].arriveTime;
      P1_burst.innerHTML = Q[i].burst;
      P1_wait.innerHTML = Q[i].wait;

      P1_result.appendChild(P1_order);
      P1_result.appendChild(P1_arrive);
      P1_result.appendChild(P1_burst);
      P1_result.appendChild(P1_wait);

      div_result.appendChild(P1_result);
    } else if (Q[i].fromWho === 1) {
      const P2_result = document.createElement("tr");
      const P2_order = document.createElement("td");
      const P2_arrive = document.createElement("td");
      const P2_burst = document.createElement("td");
      const P2_wait = document.createElement("td");

      P2_order.innerHTML = "   P2   ";
      P2_arrive.innerHTML = Q[i].arriveTime;
      P2_burst.innerHTML = Q[i].burst;
      P2_wait.innerHTML = Q[i].wait;

      P2_result.appendChild(P2_order);
      P2_result.appendChild(P2_arrive);
      P2_result.appendChild(P2_burst);
      P2_result.appendChild(P2_wait);

      div_result.appendChild(P2_result);
    } else {
      const P3_result = document.createElement("tr");
      const P3_order = document.createElement("td");
      const P3_arrive = document.createElement("td");
      const P3_burst = document.createElement("td");
      const P3_wait = document.createElement("td");

      P3_order.innerHTML = "P3";
      P3_arrive.innerHTML = Q[i].arriveTime;
      P3_burst.innerHTML = Q[i].burst;
      P3_wait.innerHTML = Q[i].wait;

      P3_result.appendChild(P3_order);
      P3_result.appendChild(P3_arrive);
      P3_result.appendChild(P3_burst);
      P3_result.appendChild(P3_wait);

      div_result.appendChild(P3_result);
    }
  }

  let wait1 = 0;
  (wait2 = 0), (wait3 = 0);
  let burst1 = 0,
    burst2 = 0;
  burst3 = 0;
  for (i = 0; i < Q.length; i++) {
    if (Q[i].fromWho === 0) {
      burst1 += Q[i].burst;
      wait1 += Q[i].wait;
    } else if (Q[i].fromWho === 1) {
      burst2 += Q[i].burst;
      wait2 += Q[i].wait;
    } else {
      burst3 += Q[i].burst;
      wait3 += Q[i].wait;
    }
  }
  textResult.innerHTML = fromwhat + " Result";
  totalBurst.innerHTML = "총 실행 시간 : " + Number(burst1 + burst2 + burst3);
  totalWait.innerHTML = "총 대기 시간 : " + Number(wait1 + wait2 + wait3);
  avgWait.innerHTML =
    "평균 대기 시간 : " + Number(wait1 + wait2 + wait3) / Q.length;

  let currentPostion = 0;
  const chart0 = document.createElement("div");
  chart0.style.backgroundColor = "gray";
  chart0.style.width = Q[0].arriveTime * 40 + "px";
  chart0.style.borderStyle = "dotted";

  chart.appendChild(chart0);

  currentTime = Q[0].arriveTime;

  for (i = 0; i < Q.length; i++) {
    if (Q[i].fromWho == 0) {
      const chart1 = document.createElement("div");
      chart1.style.backgroundColor = "red";
      currentPostion = Q[i].burst * 40;
      chart1.style.width = currentPostion + "px";

      const text1 = document.createTextNode("P1");
      const time1 = document.createTextNode(currentTime);
      const span1 = document.createElement("span");

      span1.style.left = currentTime * 40 + "px";
      span1.style.left = currentTime * 40 + "px";
      span1.appendChild(time1);

      chart1.appendChild(text1);
      time.appendChild(span1);
      chart.appendChild(chart1);
      currentTime += Q[i].burst;
    } else if (Q[i].fromWho == 1) {
      const chart2 = document.createElement("div");
      chart2.style.backgroundColor = "blue";
      currentPostion = Q[i].burst * 40;
      chart2.style.width = currentPostion + "px";

      const text2 = document.createTextNode("P2");
      const span2 = document.createElement("span");
      const time2 = document.createTextNode(currentTime);

      span2.style.left = currentTime * 40 + "px";
      span2.appendChild(time2);

      time.appendChild(span2);
      chart2.appendChild(text2);
      chart.appendChild(chart2);
      currentTime += Q[i].burst;
    } else {
      const chart3 = document.createElement("div");
      chart3.style.backgroundColor = "green";
      currentPostion = Q[i].burst * 40;
      chart3.style.width = currentPostion + "px";

      const text3 = document.createTextNode("P3");
      const time3 = document.createTextNode(currentTime);
      const span3 = document.createElement("span");

      span3.style.left = currentTime * 40 + "px";
      span3.appendChild(time3);

      time.appendChild(span3);
      chart3.appendChild(text3);
      chart.appendChild(chart3);
      currentTime += Q[i].burst;
    }
  }
};
