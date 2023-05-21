import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import * as API from '@/utils/api';
import { getUserInfo } from "@/utils/util"
import {
	Container,
	Form,
	Input,
	ButtonWrapper,
	Button,
	InputWrapper,
	SignupTitle,
	InputTitle,
	Bio
} from './ModifyInfo-styled';

interface userData {
  email: string | any;
  nickname: string | any;
  blogName: string;
  bio: string;
}

export const ModifyInfo = () => {
  const [userData, setUserData] = useState<userData>({
    email: '',
    nickname: '',
    blogName: '',
    bio: '',
  });

	const router = useRouter()

	useEffect(() => {
		const firstRender = async () => {
			const getUser = await getUserInfo()
			setUserData({ email: getUser.email, nickname: getUser.nickname })
	}
	firstRender()
	}, [userData])

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

	const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
			event.preventDefault();
			// 회원가입 로직 구현
			try {
				console.log(userData)
				const res = await API.patch(`/user`, userData);
				console.log("수정 완료", res);
			} catch (error) {
				console.error("에러 발생", error)
			}
	};
	
	const handleCancel = () => {
			router.push('/my-user')
	};

	return (
			<Container>
					<Form onSubmit={handleSubmit}>
							<SignupTitle>회원 정보 수정</SignupTitle>
							<InputWrapper>
									<InputTitle>이메일</InputTitle>
										<Input 
											name="email" 
											type="email"
											onChange={handleChange} 
											value={userData.email}
											placeholder={userData.email}
											required />
									<InputTitle>닉네임</InputTitle>
										<Input 
										name="nickname" 
										type="text" 
										onChange={handleChange}
										value={userData.nickname}	 
										placeholder={userData.nickname} 
										required />
									<InputTitle>블로그 명</InputTitle>
										<Input 
										name="blogName" 
										type="text" 
										onChange={handleChange}
										value={userData.blogName}										
										placeholder={'수정할 블로그명'}
										required />
									<InputTitle>블로그 소개</InputTitle>
										<Bio 
										name="bio" 
										onChange={handleChange}
										value={userData.bio}												
										placeholder={'블로그 설명을 입력해주세요.'} 
										required />
							</InputWrapper>
							<ButtonWrapper>
								<Button className='cancel' onClick={handleCancel}>수정 취소</Button>
								<Button type="submit">수정 완료</Button>
							</ButtonWrapper>
					</Form>
			</Container>
	);
};

export default ModifyInfo