import React from 'react';
import S from './styles';
import { GA_ACTION, GAClickEvent } from "../../utils/ga"

export const Footer = () => (
  <S.Footer>
    <S.Link
      id='footer'
      href='https://let-us-go-2020-summer.vercel.app'
      target='_blank'
      data-sal="slide-up"
      data-sal-delay= "100"
      data-sal-duration="600"
      data-sal-easing="ease"
      onClick={ GAClickEvent('푸터_버튼', GA_ACTION.CLICK, '지난링크 보기') }
    >
      지난 let us: Go! 보기
    </S.Link>
    <S.Contents
      data-sal="slide-up"
      data-sal-delay= "200"
      data-sal-duration="600"
      data-sal-easing="ease"
    >
      Ⓒ let us: Go! iOS Developers Korea<S.Break/>
      { ` All rights reserved` }
    </S.Contents>
  </S.Footer>
)
