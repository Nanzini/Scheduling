const Priority = () => {
  btn_Priority.addEventListener("click", run_Priority);
};

const run_Priority = () => {
  let Queue = [
    {
      arriveTime: Number(p1_value[0].value),
      burst: Number(p1_value[1].value),
      priority: Number(p1_value[2].value),
      wait: 0,
      fromWho: 0,
    },
    {
      arriveTime: Number(p2_value[0].value),
      burst: Number(p2_value[1].value),
      priority: Number(p2_value[2].value),
      wait: 0,
      fromWho: 0,
    },
    {
      arriveTime: Number(p3_value[0].value),
      burst: Number(p3_value[1].value),
      priority: Number(p3_value[2].value),
      wait: 0,
      fromWho: 0,
    },
  ];

  let arriveQueue = Queue.slice();

  //우선순위 높은 순서
  Queue.sort((a, b) => {
    if (a.priority > b.priority) return 1;
    if (a.priority < b.priority) return -1;
    return 0;
  });

  //도착시간 짧은 순서
  arriveQueue.sort((a, b) => {
    if (a.arriveTime > b.arriveTime) return 1;
    if (a.arriveTime < b.arriveTime) return -1;
    return 0;
  });

  let currentTime = arriveQueue[0].arriveTime;

  //우선순위와 도착시간 종합한 스케줄링 큐
  let schdQ = [];

  for (i = 0; i < Queue.length; i++) {
    //기다려야할때 다른걸로 넘어간다
    if (currentTime < Queue[i].arriveTime) {
      for (j = i + 1; j < Queue.length; j++) {
        //제일짧은거 찾음
        if (currentTime >= Queue[j].arriveTime) {
          currentTime += Queue[j].burst;
          schdQ.push(Queue[j]);
          Queue.splice(j, 1);
          i--;
        }
      }
    } else {
      currentTime += Queue[i].burst;
      schdQ.push(Queue[i]);
      Queue.splice(i, 1);
      i--;
    }
  }

  for (i = 0; i < schdQ.length; i++) schdQ[i].fromWho = i;

  currentTime = schdQ[0].burst + schdQ[0].arriveTime;
  schdQ = waitTime(currentTime, schdQ);

  result1(schdQ, currentTime, "Priority");
};

Priority();
