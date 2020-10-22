import React from 'react';
import S from './styles';
import { SpeakerItem } from "../speaker-item"
import unnyoungIcon from '../../resources/unnnyong.jpeg';
import hyunhoIcon from '../../resources/lee.png';
import yagomIcon from '../../resources/ya.png';
import gomtigimIcon from '../../resources/gom.png';
import nosujinIcon from '../../resources/no.jpg';
import dogilIcon from '../../resources/do.png';
import genetoryIcon from '../../resources/genetory.png';
import sungIcon from '../../resources/sung.png';
import anyIcon from '../../resources/any.jpeg';
import jangIcon from '../../resources/jang.png';

const speakerList = [
  {
    name: '유현식',
  }, {
    name: '민소네',
  }, {
    name: '안솔찬',
  }, {
    name: '이현호',
    company: 'wadiz',
    profile: hyunhoIcon,
    email: 'mizzking75@gmail.com',
    git: 'https://github.com/M1zz',
    blog: 'https://dev200ok.blogspot.com/',
    summary: '노래하는 iOS개발자 입니다',
  }, {
    name: 'giftbot',
  }, {
    name: '도미닉',
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
