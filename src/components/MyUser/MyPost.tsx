import { useState, useEffect, useRef, ChangeEvent, MouseEvent } from 'react'
// import { useRecoilState, useRecoilValue } from 'recoil';
// import { useRouter } from 'next/router';
import * as API from '@/utils/api';
import {
	Container,
	TopDiv,
	MainWrap,
	MainDiv,
	SideDiv,
	SearchDiv,
	SearchInput,
	SearchBtn,
	ContentDiv,
	HeaderWrap,
	PostThumbnail,
	FooterWrap
} from './MyPost-styled'
// import './pagination.scss'
import Btn from '../common/my_page/button'
import PostRouter from '../common/my_page/post_router'
import { CategoryType, PostType } from '@/types/getTypes';

//----- MockData
const postsMockList: any[] = [{
	"id": 2,
	"user": { "nickname": "hi" },
	"category": "카테고리1",
	"title": "제목1",
	"content": "내용1",
	"summary": "요약1",
	"views": "999",	
	"updatedAt": "2023-04-24T03:10:52.668Z",
	"createdAt": "2023-04-24T03:10:52.668Z"
}, {
	"id": 3,
	"user": { "nickname": "hello" },
	"category": "카테고리2",
	"title": "제목2",
	"content": "내용2",
	"summary": "요약2",
	"views": "100",
	"updatedAt": "2023-04-25T03:10:52.668Z",
	"createdAt": "2023-04-25T03:10:52.668Z"
}]

const MyPost = () => {
	const [postsList, setPostsList] = useState<PostType[]>()
	const [category, setCategory] = useState<CategoryType[]>()
	const search: any = useRef('')

	// * 최초 게시글 목록 렌더
	const FirstRender = async () => {
		const res: any = await API.get('/user')
		setPostsList(res.data.data.Posts)
		setCategory(res.data.data.Categories)
		console.log('res',res.data.data)
	}
	
	useEffect(() => {
		FirstRender()
	}, [])

	// * 검색
	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		search.current = e.target.value
	}

	const handleSearch = async() => {
		try {
			const res: any = await API.get('/user')
			const searchingPosts = await res.data.data.Posts.filter(post=>
            post.title.includes(search.current)
          );
          setPostsList(searchingPosts);
		} catch (error) {
			console.error("에러", error)
		}
	}

	// * 카테고리 설정

	const handleCategory = async(e: MouseEvent<HTMLButtonElement>) => {
		// setCategory(e.currentTarget.value)
		try {
			const res: any = await API.get('/user')
            setPostsList(res.data.data.Posts);			
		} catch (error) {
			
		}
	}

	const getCategoryPosts = async(id) => {
		console.log('iddddd', id)
		try {
		const res: any = await API.get(`/posts/category/${id}`)
		setPostsList(res.data.data)
			console.log(res.data.data)
		} catch (error) {
			console.error("에러", error)
		}
	}

	if (!postsList || !category) {
		return <></>
	  }

	return (
		<Container>
			<TopDiv>
				<Btn value={'뒤로가기'} onRoute={`/my-user`} alert={null} />
				<SearchDiv>
					<SearchInput placeholder={'검색어를 입력해주세요.'} onChange={handleInput}></SearchInput>
					<SearchBtn onClick={() => handleSearch()}>검색</SearchBtn>
				</SearchDiv>
			</TopDiv>
			<MainWrap>
				<SideDiv>
					<div id="cate-line">Category</div>{
						<button value={"All"} onClick={(e) => handleCategory(e)}>All</button>
					}
					{
						category.map((post, idx) => {
							return (
								<button value={post.name} onClick={e => getCategoryPosts(post.id)}>
									{post.name}
								</button>
							)
						})
					}
				</SideDiv>
				<MainDiv>
				{
					postsList?.map((post, idx) => {
						return (
							<ContentDiv key={post.id}>
								<HeaderWrap>
									<PostRouter link={`/posts/${post.id}`} title={post.title} />
									<div>{post.summary}</div>
								</HeaderWrap>
								<FooterWrap>
									<div>작성일 : {post.createdAt.split('T')[0]}</div>
									<div>좋아요 : {post.Likers?.length}</div>
									<div>조회수 : {post.views}</div>
								</FooterWrap>
							</ContentDiv>
						)
					}
					)}
					</MainDiv>
				</MainWrap>	
		</Container >
	);
};

export default MyPost;