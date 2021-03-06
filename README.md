# Scheduling

## 1. 개요

운영체제에서 할당되는 프로세스들 중에서, 큐에 들어온 프로세스들이 어떤 방식으로 스케줄러가 CPU에 할당시킬 것인지에 대한 다양한 스케줄링 정책의 구현.

<br><br>

## 2. FCFS (First In First Service)

먼저 들어온 프로세스가 먼저 할당되어지는 정책.</br>

- convoy현상(편의점에서 껌 하나 사는 데 앞 사람이 너무 많이 사서 기다리는 시간이 길어지는 현상)
- 간단하지만 성능이 그닥 좋지는 않다.

<br>

## 2. SJF

가장 빨리 끝날 것 같은 프로세스를 먼저 처리하는 정책<br>
처리시간이 긴 프로세스는 비교적 할당되는 시간이 길어진다.

- 심한 경우 Starvation이 일어나기도 한다.
- 각 프로세스들에 대한 실행시간에 대해 미리 알고 있어야 한다.

<br>

## 3. Prioirity

프로세스들은 프로세스에 대한 정보를 가지고 태어나게 되는 데, 그 중에서 우선순위 변수도 존재한다. 우선순위가 높은 프로세스부터 처리하는 정책.

- 중요한 태스크부터 처리하는 장점이 있다.
- 하지만, 우선순위가 낮은 프로세스는 Starvation이 발생하기도 한다.

<br>

## 4. Round robin

순서에 따라 공정하게 정해진 시간만큼 실행되어 지는 정책.

- Starvation이 발생하지 않는다.
  - Starvation이 일어나면 HRNN방식으로 Aging처리를 해야하는 데 그럴 필요가 없어진다.
- 하나의 프로세스를 먼저 끝낸 다음에 다른 프로세스를 실행하는 방식이 아니기 때문에 반응성이 좋다.
- 하지만, 끝나기도 전에 다음 프로세스를 할당해야하는 CPU입장에서는 Context Switching이 자주 일어나며 Overhead가 크다.
