import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  Container,
  Form,
  Input,
  Button,
  InputWrapper,
  SignupTitle,
  InputTitle,
  Bio,
} from './join-styled';
import * as API from '@/utils/api';

interface SignupData {
  email: string;
  password: string;
  nickname: string;
  blogName: string;
  bio: string;
}

const Join = () => {
  const router = useRouter();
  const [signupData, setSignupData] = useState<SignupData>({
    email: '',
    password: '',
    nickname: '',
    blogName: '',
    bio: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 회원가입 로직 구현

    try {
      const response = await API.post('/auth/join', signupData, {
        timeout: 10000, // 10초 시간 제한 설정
      });
      console.log(response);
      router.push('/login');
    } catch (error) {
      console.error(error);
      alert('회원가입이 완료되지 않았습니다!');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <SignupTitle>회원가입</SignupTitle>
        <InputWrapper>
          <InputTitle>이메일</InputTitle>
          <Input
            name="email"
            type="email"
            id="email"
            placeholder="example@email.com"
            defaultValue={signupData.email}
            onChange={handleChange}
            required
          />
          <InputTitle>비밀번호</InputTitle>
          <Input
            name="password"
            type="password"
            className="password"
            placeholder="●●●●●●●"
            defaultValue={signupData.password}
            onChange={handleChange}
            required
          />
          <InputTitle>닉네임</InputTitle>
          <Input
            name="nickname"
            type="text"
            placeholder="nickname"
            defaultValue={signupData.nickname}
            onChange={handleChange}
            required
          />
          <InputTitle>블로그명</InputTitle>
          <Input
            name="blogName"
            type="text"
            placeholder="최소 4자~최대 32자의 영문 소문자,숫자,하이픈 포함"
            defaultValue={signupData.blogName}
            onChange={handleChange}
            required
          />
          <InputTitle>블로그 소개</InputTitle>
          <Bio
            name="bio"
            placeholder="소개글을 입력하세요"
            defaultValue={signupData.bio}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              handleChange(e)
            }
            required
          />
        </InputWrapper>
        <Button type="submit">회원가입</Button>
      </Form>
    </Container>
  );
};

export default Join;
