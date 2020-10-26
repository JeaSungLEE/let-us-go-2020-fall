import S from './styles';
import React from "react"
import scheduleIcon from '../../resources/schedule.svg';
import { GA_ACTION, GAClickEvent } from "../../utils/ga"

const downlaodLink = 'https://drive.google.com/uc?id=1tq1m3myzWKDEaMJgopxjVEhPd9FrhzKJ&authuser=0&export=download';

export const FloatingButton = () => (
  <S.Button
    href={downlaodLink}
    target='_blank'
    onClick={ GAClickEvent('플로팅_버튼', GA_ACTION.CLICK, '스케쥴') }
  >
    <S.Icon src={scheduleIcon} />
    <span>Add Schedule</span>
  </S.Button>
)
