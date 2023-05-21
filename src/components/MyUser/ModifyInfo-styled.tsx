import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

	height: auto;

  * {
    display: flex;
    align-items: center;   
  }
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: left;
	align-items: center;

	width: 55%;
	height: 70%;

	border: 1px solid black;
	border-radius: 4px;
`;

export const SignupTitle = styled.h2`
	font-size: 2rem;
	font-family: 'Roboto Flex', sans-serif;
	font-weight: bold;

	margin: 1rem;
`

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	width: 80%;
`

export const InputTitle = styled.h2`
	display: flex;
	flex-direction: row;
	justify-content: left;
	font-family: 'Roboto Flex', sans-serif;
	text-align: left;

	width: 80%;
	margin-top: 1.5rem;
`

export const Input = styled.input`

	width: 80%;
	margin: 0.5rem;

	border: 0;
	border-bottom: 1px solid;
	font-size: 1rem;
`;

export const Bio = styled.textarea`
    resize: none; // 사용자가 크기를 조절할 수 없도록 설정.
    overflow-y: scroll;
		font-size: 1rem;

    width: 80%;
		height: 5rem;

    border: 1px solid;
    padding: 0.5rem;
`

export const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	padding: 1rem;
	margin: 1rem;
	width: 15rem;
	height: 3rem;

	background-color: #598392;
	color: #01161E;
	font-size: 20px;
	font-weight: bold;
	border: none;
	border-radius: 4px;
	cursor: pointer;

	&:hover {
			background-color: #124559;
	}
	
	&.cancel {
		background-color: lightgray;

		&:hover{
			background-color: gray
		}
	}
`;