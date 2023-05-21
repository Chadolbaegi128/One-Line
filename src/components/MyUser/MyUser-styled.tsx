import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  * {
    display: flex;
    flex-direction: row;
    align-items: center;   
    margin: 0.5rem;
  }

  #name {
    font-weight: 600;
  }
`;

export const NameDiv = styled.div`
  display: flex;
`