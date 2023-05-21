import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

export const HeaderWrapper = styled.header`
  max-width: 1800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px 10px;
  align-items: center;

  @media (max-width: 540px) {
    & {
      flex-direction: column-reverse;
    }
  }
`;

export const Title = styled.div`
  font-family: 'Roboto Flex', sans-serif;
  font-weight: bold;
  font-size: 28px;
  color: #598392;
  padding: 20px 0;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 360px;
`;

export const LinkWrapper = styled(Link)`
  margin: 0 0 0 25px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
`;

export const Search = styled(Image)`
  cursor: pointer;
  width: 28px;
  height: 28px;
`;

export const SearchUI = styled.div`
  .search {
    position: relative;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -20%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }

  .show {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, 0);
  }

  .hide {
    opacity: 0;
    visibility: hidden;
    transform: translate(-50%, -20%);
  }
`;

export const SearchInput = styled.input`
  font-family: 'Roboto Flex', sans-serif;
  font-size: 15px;
  width: 150px;
  border: 0;
  border-bottom: 1px solid;
`;

export const SearchButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #598392;
  font-family: 'Roboto Flex', sans-serif;
  font-weight: bold;
  font-size: 15px;
  width: 60px;
  height: 28px;
  position: relative;
  bottom: 3px;
  left: 2px;
`;

export const Home = styled(Link)`
  cursor: pointer;
`;

export const LogIn = styled.button`
  border: none;
  background: none;
  font-weight: bold;
  font-family: 'Roboto Flex', sans-serif;
  font-size: 16px;
  margin: 0 0 0 25px;
  cursor: pointer;
  text-decoration: none;
`;

export const WriteButton = styled.span`
  background-color: #aec3b0;
  padding: 3px 10px;
  border-radius: 10px;
  &:hover {
    opacity: 0.7;
    transition: all 0.2s;
  }
`;
