import S from './styles';
import React from "react"
import scheduleIcon from '../../resources/schedule.svg';
import { GA_ACTION, GAClickEvent } from "../../utils/ga"

const downlaodLink = 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/db40ad0a-a849-4085-9526-f8c9a9c66f1a/iCal-20201022-211304.ics?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201022%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201022T121544Z&X-Amz-Expires=86400&X-Amz-Signature=d2b262c5e5fde8f8c00bfd1fc6e65d5d3579d5c7dfc25e7d6be7fbfaa48fe7cf&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22iCal-20201022-211304.ics%22';

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
