// import { useState } from 'react';
import { MainWrapper, SubHeader, MainNav, MainNavImage, MainNavLink } from './mainHeader-styled'

const MainHeader = () => {

    return (
            <MainWrapper>
                <SubHeader>
                    <MainNavImage
                    className='trending'
                    src="/images/Trending.png"
                    alt="트렌딩"
                    width="25"
                    height="25"
                    />
                    <MainNavLink
                    href="/"
                    className='trend'>
                        <MainNav>Trending</MainNav>
                    </MainNavLink>
                    <MainNavImage
                    className='recentPosts'
                    src="/images/RecentPosts.png"
                    alt="최신게시물"
                    width="23"
                    height="23"
                    />
                    <MainNavLink
                    href="/recent-posts"
                    className='recent'>
                        <MainNav>Recent Posts</MainNav>
                    </MainNavLink>
                </SubHeader>
            </MainWrapper>
    )
}

export default MainHeader;