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
    label: '',
    title: '준비중',
    badge: [],
  },
  {
    label: '17:50',
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
