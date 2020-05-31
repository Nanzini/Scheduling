const RR = () => {
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
  if (rrCount.innerHTML === "0") {
    alert("quantum이 없습니다");
    return;
  }

  let Queue = [
    {
      arriveTime: Number(p1_value[0].value),
      burst: Number(p1_value[1].value),
      wait: 0,
      fromWho: 0,
    },
    {
      arriveTime: Number(p2_value[0].value),
      burst: Number(p2_value[1].value),
      wait: 0,
      fromWho: 0,
    },
    {
      arriveTime: Number(p3_value[0].value),
      burst: Number(p3_value[1].value),
      wait: 0,
      fromWho: 0,
    },
  ];

  //도착순으로 정렬
  Queue.sort((a, b) => {
    if (a.arriveTime > b.arriveTime) return 1;
    if (a.arriveTime < b.arriveTime) return -1;
    return 0;
  });
  let quantum = Number(rrCount.innerHTML);
  let schedQ = [];
  let waitQ = [];
  let currentTime = Queue[0].arriveTime;

  let count = 0; //for 도는 횟수

  for (i = 0; i < Queue.length; i++)
    count += Math.round(Queue[i].burst / quantum);

  //스케줄링
  for (i = 0; i < 2 * count; i++) {
    let tmp = {
      arriveTime: 0,
      innTime: 0,
      burst: 0,
      wait: 0,
      fromWho: 0,
    };
    k = i % Queue.length;

    if (Queue[k].burst < quantum) {
      tmp.arriveTime = Queue[k].arriveTime;
      tmp.innTime = currentTime;
      tmp.burst = Queue[k].burst; //
      tmp.fromWho = k;

      schedQ.push(tmp);
      currentTime += Queue[k].burst;
      Queue[k].burst = 0;
    } else {
      tmp.arriveTime = Queue[k].arriveTime;
      tmp.innTime = currentTime;
      tmp.burst = quantum; //
      tmp.fromWho = k;

      Queue[k].burst -= quantum;
      schedQ.push(tmp);
      currentTime += quantum;
    }
  }

  Queue = rrWaitTime(currentTime, schedQ);
  for (i = schedQ.length - 1; i > 0; i--)
    if (schedQ[i].burst === 0) schedQ.splice(i, 1);
  result1(schedQ, currentTime, "RR");
};

RR();

const rrWaitTime = (currentTime, Queue) => {
  //currentTime은 이미 실행되어진 후로, 다음프로세스가 실행될 시간.
  currentTime =
    (Queue[0].burst < rrCount.innerText
      ? Queue[0].burst
      : Number(rrCount.innerText)) + Queue[0].arriveTime;

  for (i = 0; i < Queue.length; i++) {
    //무조건 실행

    //wait
    let l = i + 2 >= Queue.length ? i + 2 - Queue.length : i + 2;
    for (j = i + 1; j <= l; j++) {
      if (
        currentTime - Queue[i].burst <= Queue[j].arriveTime &&
        Queue[j].arriveTime < currentTime
      )
        //처리시간 도중에 도착했을 때
        Queue[j].wait += currentTime - Queue[j].arriveTime;
      else if (currentTime <= Queue[j].arriveTime || Queue[j].burst === 0);
      else Queue[j].wait += Queue[i].burst;
    }
    if (i === Queue.length - 1);
    else currentTime += Queue[i + 1].burst;
  }

  return Queue;
};
