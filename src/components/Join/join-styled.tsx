import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 500px;
    height: 1100px;
    margin-top: 10px;
    position: relative;
    top: 100px;
    left: 38%;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 20px;
    border: 1px solid;
    border-radius: 4px;
    width: 150%;
    height: 200%;
    position: relative;
    bottom: 55px;
`;

export const Input = styled.input`
    padding: 10px;
    margin-top: 30px;
    border: 0;
    border-bottom: 1px solid;
    width: 500px;
    font-size: 15px;
`;

export const Button = styled.button`
    padding: 10px;
    width: 300px;
    height: 50px;
    position: relative;
    top: 150px;
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
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
`

export const SignupTitle = styled.h2`
    font-size: 40px;
    font-family: 'Roboto Flex', sans-serif;
    font-weight: bold;
    position: relative;
    top: 5%;
`

export const InputTitle = styled.h2`
    font-family: 'Roboto Flex', sans-serif;
    text-align: left;
    position: relative;
    left: 0px;
    top: 5%;
`;

export const Bio = styled.textarea`
    resize: none; // 사용자가 크기를 조절할 수 없도록 설정.
    border: 1px solid;
    overflow-y: scroll;
    padding: 10px 5px;
    height: 100px;
    position: relative;
    top: 45px;
`

