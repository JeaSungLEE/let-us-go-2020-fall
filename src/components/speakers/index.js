import React from 'react';
import S from './styles';
import { SpeakerItem } from "../speaker-item"
import hyunhoIcon from '../../resources/lee.png';
import gomtigimIcon from '../../resources/gom.png';
import dominic from '../../resources/dominic.jpeg';
import minsone from '../../resources/minsone.jpeg';
import giftbot from '../../resources/giftbot.jpeg';
import hyunsik from '../../resources/hyunsik.jpeg';
import solchan from '../../resources/solchan.png';

const speakerList = [
  {
    name: '유현식',
    company: '시어스랩',
    profile: hyunsik,
    email: 'dbgustlr92@gmailcom',
    git: 'https://github.com/Hyunsik-Yoo',
    blog: 'https://mcflynn.tistory.com/',
    summary: '마스크 벗고 싶어요…',
  }, {
    name: '안정민',
    company: '카카오뱅크',
    profile: minsone,
    summary: '은행원 좋아요',
  }, {
    name: '안솔찬',
    company: '컬쳐히어로',
    profile: solchan,
    summary: '왜 벌써 11월이죠..?',
  }, {
    name: '이현호',
    company: 'wadiz',
    profile: hyunhoIcon,
    email: 'mizzking75@gmail.com',
    git: 'https://github.com/M1zz',
    blog: 'https://dev200ok.blogspot.com/',
    summary: '노래하는 iOS개발자 입니다',
  }, {
    name: 'Fourenn',
    profile: giftbot,
    email: 'fourenn@naver.com',
    summary: ' SwiftUI 오픈 베타 종료!',
  }, {
    name: '도미닉',
    company: '세차왕',
    profile: dominic,
    email: 'kiljh@me.com',
    git: 'https://github.com/appleceo',
    blog: 'https://kiljh.tistory.com/',
    youtube: 'https://www.youtube.com/channel/UCmCI-JYClFCrs3OEEqhXb4Q',
    summary: '안녕하세요 도미닉입니다',
  }, {
    name: '곰튀김',
    company: 'n.code',
    profile: gomtigimIcon,
    email: 'iamchiwon@gmail.com',
    git: 'https://github.com/iamchiwon',
    blog: 'https://iamchiwon.github.io/',
    youtube: 'https://www.youtube.com/channel/UCsrPur3UrxuwGmT1Jq6tkQw',
    summary: '리얼리즘 프로그래머',
  }
]

export const Speakers = () => (
  <S.Section>
    <S.Title
      id='speakers'
      data-sal="slide-up"
      data-sal-delay="100"
      data-sal-duration="600"
      data-sal-easing="ease"
    >
      Speakers
    </S.Title>
    <S.Wrap>
      { speakerList.map((speaker, index) => (<SpeakerItem speaker={speaker} index={index} key={speaker.name} />))}
    </S.Wrap>

  </S.Section>
)
