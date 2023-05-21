import styled from 'styled-components';

export const PostListContainer = styled.div`
    padding: 40px;
    position: relative;
    background: #fbfbfb;
`;



export const PostItemWrapper = styled.div`
    height: 340px;
    display:flex;
    flex-direction:column;
    background:#fefefe;
    justify-content:space-between;
    cursor: pointer;
    border-radius: 10px;
    padding: 10px 20px;
    &:hover {
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        transition: all 0.5s;
    }
`


export const Detail = styled.div`
    flex-grow:1;
`

export const UserInfoAndTime = styled.div`
display:flex;
justify-content:space-between;
border-top: 1px solid #eee;
div {
    display:flex;
    align-items:center;
    span {
        margin-left: 5px;
    }
}
p {
    font-size:0.8rem;
}
`

export const ViewsAndLikes = styled.div`
display:flex;
justify-content:right;
p {
    margin-left: 10px;
    font-size: 0.8rem;
}
`
