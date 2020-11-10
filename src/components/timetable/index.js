import React from 'react';
import S from './styles';
import { TimetableItem } from "../timetable-item"

const timetableList = [
  {
    label: '13:00',
    title: '개회사',
    badge: ['Kuu'],
  },
  {
    label: '13:10',
    title: 'GoogleSheet로 .strings 파일 관리하기 (문구 수정 떠넘기기)',
    badge: ['유현식'],
  },
  {
    label: '13:40',
    title: '위젯과 앱클립에 대해서 만들면서 발생하는 다양한 상황',
    badge: ['안솔찬'],
  },
  {
    label: '14:10',
    title: 'DI container를 이용하여 레거시와 모듈화를 동시에 잡기',
    badge: ['안정민'],
  },
  {
    label: '14:40',
    title: '빌드 버튼이 눌린다음에 무슨일이 일어나는 걸까?',
    badge: ['이현호'],
  },
  {
    label: '15:10',
    title: 'Deprecated API로 보는 SwiftUI',
    badge: ['Fourenn'],
  },
  {
    label: '15:40',
    title: '열거형을 활용하는 열가지 방법',
    badge: ['도미닉'],
  },
  {
    label: '16:00',
    title: '코드 삼분지계: 관심사에 따른 코드 분리',
    badge: ['곰튀김'],
  },
  {
    label: '16:20',
    title: '폐회사',
    badge: [],
  },
];

export const Timetable = () => (
  <S.Section>
    <S.Title
      id='timetable'
      data-sal="slide-up"
      data-sal-delay="100"
      data-sal-duration="600"
      data-sal-easing="ease"
    >
      TIMETABLE
    </S.Title>
    <S.Wrap>
      {timetableList.map((item, index) => (<TimetableItem item={item} index={index} key={item.title} />))}
    </S.Wrap>
  </S.Section>
)
