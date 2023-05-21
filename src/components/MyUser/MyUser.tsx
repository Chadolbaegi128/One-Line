import { useState, useEffect } from 'react'
// import { useRouter } from 'next/router'
import { Container, NameDiv} from './MyUser-styled'
import Btn from '../common/my_page/button'
import { getUserInfo } from "@/utils/util"

const MyUser = () => {
  const [user, setUser] = useState<string>('XYZ')

  const FirstRender = async () => {
    const getUser: any = await getUserInfo()
    setUser(getUser.nickname)
  }

  useEffect(() => {
    FirstRender()
  }, [])

  return (
    <Container>
      <NameDiv>
        안녕하세요. <div id='name'>{`${user}`} </div> 님!
      </NameDiv>
      
      <Btn value={'내 게시글 보기'} onRoute={`/my-post`} alert={null} />
      <Btn value={'카테고리 설정'} onRoute={`/category`} alert={null} />
      <Btn value={'회원정보 수정'} onRoute={`/modify-info`} alert={null} />
      <Btn value={'회원 탈퇴'} onRoute={`/`} alert={'정상적으로 탈퇴되었습니다.'} />
    </Container >
  );
};

export default MyUser;
