const FCFS = () => {
  btn_FCFS.addEventListener("click", run_FCFS);
};

const run_FCFS = () => {
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

  //오름차순으로 arriveTime정렬 완료
  Queue.sort((a, b) => {
    if (a.arriveTime > b.arriveTime) return 1;
    if (a.arriveTime < b.arriveTime) return -1;
    return 0;
  });

  for (i = 0; i < Queue.length; i++) Queue[i].fromWho = i;
  let currentTime = Queue[0].burst + Queue[0].arriveTime;

  Queue = waitTime(currentTime, Queue);
  result1(Queue, currentTime, "FCFS");
};

const waitTime = (currentTime, Queue) => {
  for (i = 0; i < Queue.length; i++) {
    //무조건 실행

    //wait
    for (j = i + 1; j < Queue.length; j++)
      if (
        currentTime - Queue[i].burst < Queue[j].arriveTime &&
        Queue[j].arriveTime < currentTime
      )
        //처리시간 도중에 도착했을 때
        Queue[j].wait += currentTime - Queue[j].arriveTime;
      else if (currentTime <= Queue[j].arriveTime);
      else Queue[j].wait += Queue[i].burst;

    if (i === Queue.length - 1);
    else currentTime += Queue[i + 1].burst;
  }

  return Queue;
};

FCFS();
