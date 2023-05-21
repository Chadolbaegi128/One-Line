import { useState, useEffect } from 'react';
import * as API from '@/utils/api';
import InfiniteScroll from 'react-infinite-scroll-component';
import { PostListContainer, } from './posts-styled';
import { Grid,Box } from '@mui/material';
import { PostType } from '@/types/getTypes';
import PostItem from './PostItem';
import { useRouter } from 'next/router';

const RecentPosts = () => {
    const [posts, setPosts] = useState<PostType[]>([]);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [page, setPage] = useState(1); // 페이지 번호를 저장하는 상태
    const router = useRouter()
    
    useEffect(() => {
      loadPosts(page);
    }, []);
  
    const loadMorePosts = () => {
      const nextPage = page + 1;
      loadPosts(nextPage);
      setPage(nextPage);
    };
  
    const loadPosts = async (page: number) => {
      const { data }: any = await API.get(`/posts/recent?pageNo=${page}`);
      const response = data.data.rows;
      console.log(response);
  
      if(response.length === 0){
          setHasMore(false);
          return;
      }
  
      setPosts(prevItems => [...prevItems, ...response]);
    }
  
    const goToDetail = (id) => {
      router.push(`/posts/${id}`)
    }
  

    return (
        <PostListContainer>
        <InfiniteScroll
                dataLength={posts.length}
                next={loadMorePosts}
                hasMore={hasMore}
                loader={<h3>로딩중...</h3>}
                endMessage={
                    <p style={{textAlign: 'center'}}>
                        <b>마지막 게시물</b>
                    </p>
                }
                >
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={5}>
                      {posts.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index} onClick={()=>goToDetail(item.id)}>
                            <PostItem {...item} />
                        </Grid>                 
                      ))}
              </Grid>
            </Box>
        </InfiniteScroll>
      </PostListContainer>  
    )
}

export default RecentPosts;