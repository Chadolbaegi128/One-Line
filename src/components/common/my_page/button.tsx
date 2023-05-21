import { memo } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import * as API from '@/utils/api';

type BtnProps = {
  value: any;
  onRoute: string;
  alert: string | null
}

export default memo(function Btn(props: BtnProps) {
  const router = useRouter();

  const handleClick = async () => {    
    if (props.value === '회원탈퇴') {
      const res: any = await API.delete(`/user`)
      alert(res)
      router.push(props.onRoute)
    } 
    else router.push(props.onRoute)
  }

  return <>
    <Button
      onClick={handleClick}
    >
      {`${props.value}`}
    </Button>
  </>
})

// ? 사용법
// import Btn from '../hooks/button'
// <Btn value={'버튼 이름'} />

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0.5rem 1rem 0.5rem 1rem;

  flex-basis: 1rem;
  flex-grow: 0.1;
  border-radius : 0.5rem;
  background-color: white;
`