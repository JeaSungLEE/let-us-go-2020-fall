import S from './styles';
import React from "react"
import youtubeIcon from '../../resources/youtube_b.svg';
import { GA_ACTION, GAClickEvent } from "../../utils/ga"

const youtubeLink = 'https://youtu.be/73IVJfFHDzI';

export const FloatingButton = () => (
  <S.Button
    href={youtubeLink}
    target='_blank'
    onClick={ GAClickEvent('플로팅_버튼', GA_ACTION.CLICK, '유튜브') }
  >
    <S.Icon src={youtubeIcon} />
    <span>Live Seminar</span>
  </S.Button>
)
