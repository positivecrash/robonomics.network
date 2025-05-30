---
title: "로보어셈블러 개발 보고서 #1"
date: 2024-12-08
published: true
locale: 'ko'
cover_image: ../images/robossembler-dev-report-december-2024/Cover.webp
description: "로보어셈블러 프로젝트는 모든 DIY 애호가에게 접근 가능한 산업용 로봇 및 그들의 생산을 위한 도구를 개발하는 데 초점을 맞추고 있습니다. 이 기사에서는 현재 진행 상황을 공유할 것입니다 - 업데이트 및 테스트된 기어박스, 5번째 버전의 꼬임 기계, 그리고 3D 프린팅을 위한 추가 최적화가 적용된 로봇 조작기!"
abstract: "로보어셈블러 프로젝트는 모든 DIY 애호가에게 접근 가능한 산업용 로봇 및 그들의 생산을 위한 도구를 개발하는 데 초점을 맞추고 있습니다. 이 기사에서는 현재 진행 상황을 공유할 것입니다 - 업데이트 및 테스트된 기어박스, 5번째 버전의 꼬임 기계, 그리고 3D 프린팅을 위한 추가 최적화가 적용된 로봇 조작기!"
tags: ['로보어셈블러']
---


## 서보

일반적으로 모터 자체는 현실 세계에서 무거운 물체를 돌리거나 들기에 충분한 토크를 갖고 있지 않기 때문에 기어박스나 변속기가 필요합니다. 기어박스는 모터의 토크를 사용 가능한 출력 힘으로 변환합니다. 이는 특히 우리의 경우에 중요한 역할을 했습니다 - DIN 나사로 인쇄된 스테이터는 전기강철로 만든 고체 금속 스테이터를 사용한 대조군보다 3-4배 약했다.2024-12-08_00-03-21.webp" alt="" />

상대적으로 낮은 힘을 출력하기 때문에, 로보셈블러의 모든 것과 마찬가지로 조립이 간단하고 3D 프린팅에 적합한 고기어 비율의 기어박스가 필요했습니다. 우리는 여러 가지 기어박스 디자인을 탐구했는데, 이 중 일부는 이상적이었지만 우리의 기준을 충족시키지 못했습니다. 우리의 마지막 시도인 중간 롤링 요소가 있는 스트레인 웨이브 기어박스는 성능이 우수했지만 제조가 너무 복잡했습니다.

긴 시행착오 끝에 우리는 완벽한 디자인을 발견했습니다: 1:43 기어 비율의 프리싱 기어박스!

<rb-image zoom src="./images/robossembler-dev-report-december-2024/reducer-photo_2024-12-07_21-54-20.webp" alt="" />

조립이 얼마나 간단한지 확인해보세요:

<iframe width="100%" height="500" src="https://www.youtube.com/embed/0vXwFmTB_L4?si=soNbSNKg9tjPWY1f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

기어박스는 주요 테스트와 시험을 완료했습니다. 여기 인상적인 사실이 있습니다 — 기어박스가 장착된 서보 드라이브의 무게는 단 273g으로, 표준적인 무게와 일치합니다.기어박스나 컨트롤러 없이 금속 모터!

<rb-image zoom src="./images/robossembler-dev-report-december-2024/reducer-photo_2024-12-08_14-02-33.webp" alt="" />

## 스테이터 와인딩 기계

버전 4의 와인딩 기계는 첫 번째 스테이터를 반자동으로 성공적으로 감았지만, 안정성과 반복성을 개선해야 했습니다. 버전 5는 다수의 향상을 가져왔으며, 여기에 주요 사항이 있습니다.

버전 4에서 사용된 프로프리어터리 Creality 스테퍼 모터 컨트롤러에서 전설적인 RepRap 프린터의 검증된 컨트롤러인 RAMPS로 업그레이드했습니다.

<rb-image zoom src="./images/robossembler-dev-report-december-2024/winder-photo_2024-12-07_21-50-12.webp" alt="" />

- 기계 부품을 더 가볍고 좋게 만들었습니다 - 이제 25% 더 적은 플라스틱 소재를 사용하며 추가 지지 구조 없이 더 쉽게 3D 프린팅할 수 있습니다.
- 와이어 공급 시스템은 스풀 브레이크와 바퀴의 깊은 와이어 홈이 추가되어 더 안정적으로 되었습니다.
- 디스플레이 케이스와 후면 커버를 재설계하여 더 나은 보호를 제공합니다.
- 프로젝트 문서는 이제 자세한 체결 부품 사양, 프린팅 시간 및 플라스틱 소비 데이터로 완성되었습니다.

<rb-image zoom src="./images/robossembler-dev-report-december-2024/winder-photo_2024-12-07_21-51-26.webp"alt="" />

기계 설계에 바늘 교정기를 추가하여 장비 설정을 간단하게 했습니다.

<rb-image zoom src="./images/robossembler-dev-report-december-2024/winder-photo_2024-12-04_11-41-56.webp" alt="" />

버전 5는 현재 테스트 중이며 새로운 와인딩 GCode 프로그램 생성기와 함께 진행 중입니다. 이전에는 특정 모터 수정을 위한 하드코딩된 프로그램을 사용했지만, 새로운 GCode 생성기를 통해 다양한 스테이터 디자인에 빠르게 적응할 수 있게 되었습니다.

## 로봇 조작기

모터와 기어박스의 생산 준비가 마무리되는 가운데, 조작기의 디자인을 개선하고 있습니다. 3D 프린팅에 최적화되어 있다고 생각했지만, 10년 경력을 가진 3D 기술 전문가인 새로운 팀원들이 개선할 여지가 있는 몇 가지 영역을 발견했습니다. 저렴한 프린터에서도 부품 인쇄를 예측 가능하게 만들기 위해 주요 바디 링크를 최소한의 지원물을 사용하여 인쇄할 수 있도록 재설계했습니다.

<rb-image zoom src="./images/robossembler-dev-report-december-2024/3d-supports.webp" alt="" />

<rb-image zoom src="./images/robossembler-dev-report-december-2024/roboarm-3d-optimize-photo_2024-11-20_15-56-53.webp" alt="" />

모션 제어 프로그래머의 요청에 따라 조작기의 드라이브 링크를 단일 기구 체인으로 연결하는 구성 요소인 포크를 재설계했습니다.이전 디자인은 더 큰 작업 반경을 제공했지만 궤적 계산 중 빈번한 단일 위치를 유발하여 시뮬레이션 제어를 복잡하게 만들었습니다. 새로운 포크 디자인은 이 문제를 해결하여 로봇의 키네마틱스를 더 최적화하고 Kuka Iiwa와 더 유사하게 만듭니다 ;D.

<rb-image zoom src="./images/robossembler-dev-report-december-2024/fork-roboarm-photo_2024-12-07_11-39-31.webp" alt="" />

제어 소프트웨어에 대해, 우리는 ROS 2 Humble (Jazzy 테스트 중)와 Behaviour Tree CPP v4를 사용한 솔루션을 개발 중이며 현재 AR4에서 유효성을 검사 중입니다. 핵심 혁신은 런타임 매개변수 변경을 위해 라이프사이클 관리 노드를 널리 활용하는 것입니다. 이는 컨트롤러 구성 또는 새로운 머신 비전 신경망 가중치를 실시간으로 로드하는 것과 같은 작업을 가능하게 합니다.

## 계획

저희의 다가오는 목표:

- 새로운 모터, 기어박스 및 교체 가능한 손가락을 갖춘 업그레이드된 그리핑 장치 출시
- 꼬임 기계의 GCode 생성기 및 완전 자동 스테이터 꼬임 테스트
- 로봇의 3D 최적화를 완료하고 조립 데모 비디오 제작
- 서보 드라이브 온도 관리를 최적화하고 링크 내에서 부하 조건에서 테스트

제 블로그에서 업데이트를 확인하세요 [x.com](https://x.com/movefasta) !

## 소프트웨어 및 하드웨어 소스

- Robossembler Arm - https://gitlab.com/robossembler/roboarm-diy-version
- 꼬임 기계: https://gitlab.com/robossembler/cnc/motor-wire-winder
- Servo - https://gitlab.com/robossembler/servo
- 그립 도구 - https://gitlab.com/robossembler/arm-tools/grip-tool
- Robossembler ROS 2 런타임 - https://gitlab.com/robossembler/robossembler-ros2