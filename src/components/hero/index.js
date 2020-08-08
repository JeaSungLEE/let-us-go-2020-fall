import S from './styles';
import React from "react"
import badgeIcon1 from '../../resources/dg.png';
import badgeIcon2 from '../../resources/js.png';
import badgeIcon3 from '../../resources/hj.png';
import badgeIcon4 from '../../resources/badge2.svg';
import badgeIcon5 from '../../resources/mask.png';
import { GA_ACTION, GAClickEvent } from "../../utils/ga"

export const Hero = () => {


  return (
    <S.Header>
      <S.SubTitle
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-duration="800"
        data-sal-easing="ease"
      >
        2020 SUMMER
      </S.SubTitle>
      <S.Title
        id="hero"
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-duration="800"
        data-sal-easing="ease"
      >
        Let us: Go! SEMINAR
      </S.Title>
      <S.Description
        data-sal="slide-up"
        data-sal-delay="400"
        data-sal-duration="800"
        data-sal-easing="ease"
      >
        LIVE STREAMING
      </S.Description>
      <S.Contents
        data-sal="slide-up"
        data-sal-delay="600"
        data-sal-duration="800"
        data-sal-easing="ease"
      >
        2020년 8월 15일 13:00~18:00
      </S.Contents>
      <a
        href='https://github.com/eastroots92'
        target='_blank'
        onClick={ GAClickEvent('히어로_버튼', GA_ACTION.CLICK, '이동근') }
      ><S.Badge1 src={badgeIcon1} /></a>
      <a
        href='https://github.com/JeaSungLEE'
        target='_blank'
        onClick={ GAClickEvent('히어로_버튼', GA_ACTION.CLICK, '이재성') }
      ><S.Badge2 src={badgeIcon2} /></a>
      <a
        href='https://www.behance.net/wwwhyeongj4196'
        target='_blank'
        onClick={ GAClickEvent('히어로_버튼', GA_ACTION.CLICK, '김형진') }
      ><S.Badge3 src={badgeIcon3} /></a>
      <S.Badge4 src={badgeIcon4} />
      <S.Badge5 src={badgeIcon5} />
    </S.Header>
  )
}
