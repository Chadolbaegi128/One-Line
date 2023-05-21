import {
  HeaderWrapper,
  LinkWrapper,
  Nav,
  Search,
  Title,
  Home,
  SearchUI,
  SearchInput,
  SearchButton,
  WriteButton,
  LogIn,
} from './header-styled';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import auth from './auth';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import * as API from '@/utils/api';
import { useRouter } from 'next/router';

const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const router = useRouter();

  // const handleClick = (): void => {
  //   setIsSearchVisible(show => !show);
  // };

  // const handleSearchInputChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ): void => {
  //   setSearchInput(event.target.value);
  // };

  // const submitSearch = () => {
  //   console.log('검색어', searchInput);
  //   setIsSearchVisible(false);
  // };
  // const checkAdmin = async () => {
  //   const res: any = await API.get<any>('/user');
  //   setIsAdmin(res.data.data.admin);
  // };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const idToken = await user.getIdToken()
        const res = await API.get<any>('/user', {
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        });
        setIsAdmin(res.data.data.admin);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);


  const handleLogout = () => {
    signOut(auth);
    router.replace('/');
  };

  return (
    <HeaderWrapper>
      <Home href={'/'}>
        <Title>One-Line</Title>
      </Home>

      <Nav>
        {/* <form
          onSubmit={submitSearch}
          className={`${SearchUI.search} ${
            isSearchVisible ? SearchUI.show : SearchUI.hide
          }`}
        >
          <Search
            src="/images/Search.png"
            alt="검색"
            width="30"
            height="30"
            onClick={handleClick}
          />
          {isSearchVisible ? (
            <SearchInput
              type="text"
              placeholder="검색어를 입력하세요"
              value={searchInput}
              onChange={handleSearchInputChange}
            />
          ) : null}
        </form> */}
        {isLoggedIn ? (
          <>
            <LogIn onClick={handleLogout}>Logout</LogIn>
            {isAdmin ? (
              <LinkWrapper href={'/admin'}>
                <Image
                  src="/images/Admin.png"
                  alt="관리자"
                  width="32"
                  height="32"
                />
              </LinkWrapper>
            ) : (
              <>
                <LinkWrapper href={'/write'}>
                  <WriteButton>Write</WriteButton>
                </LinkWrapper>
                <LinkWrapper href={'/my-user'}>
                  <Image
                    src="/images/User.png"
                    alt="마이페이지"
                    width="32"
                    height="32"
                  />
                </LinkWrapper>
              </>
            )}
          </>
        ) : (
          <>
            <LinkWrapper href={'/login'}>Login</LinkWrapper>
            {!isLoggedIn && <LinkWrapper href={'/join'}>Join</LinkWrapper>}
          </>
        )}
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
