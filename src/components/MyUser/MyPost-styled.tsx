import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

	height: auto;

  * {
    display: flex;
    flex-direction: row;
    align-items: center;   
    margin: 0.5rem;
  }
`;

export const TopDiv = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;   
	justify-content: right;
	padding: 0 3%;
	width: 100%;
`

export const SearchDiv = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;   
	justify-content: space-between;	

	margin-left: 3%;
`

export const SearchInput = styled.input`
	padding-left: 0.5rem;

	width: 15rem;
	height: 2rem;

	border: 1px solid black;
  border-radius : 0.5rem;
`

export const SearchBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0.5rem 1rem 0.5rem 1rem;

  flex-basis: 1rem;
  flex-grow: 1;
  border-radius : 0.5rem;
  background-color: white;
`

export const MainWrap = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;

	width: 100%;
`

export const SideDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 15%;
	margin-left: 3%;
	
	
	border: 1px solid lightgray;

	& > div {
		justify-content: center;		
		padding: 0.5rem;
		width: 50%;
		border-bottom: 1px solid black;
	}

	& > button {
		padding-bottom: 0.5rem;
		margin: 0rem;

		border: 0px;
		background-color: white;
		&: hover {
			color: green;
		}
	}
`

export const MainDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	
	width: 80%;
`

export const ContentDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;   
	margin: 0 2rem 2rem 2rem;
	border: 1px solid lightgray;

	width: 95%
`

export const HeaderWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;   
	justify-contents: center;
	border-bottom: 1px solid black;

	margin: 0.5rem 0;
	padding: 1rem 0;
	width: 90%
`

export const PostThumbnail = styled.img`
	display: flex;
	flex-direction: column;
	align-items: center;   
	justify-contents: center;

	// flex-basis: 1rem;
  // flex-grow: 0;

`

export const FooterWrap = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;   
	// justify-content: ;	
	width: 90%;
	margin: 0 0 0.5rem 0;

	* {
		margin-right: 10%;
	}
`