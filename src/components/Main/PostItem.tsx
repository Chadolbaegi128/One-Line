import { PostType } from "@/types/getTypes"
import {PostItemWrapper,ViewsAndLikes,Detail,UserInfoAndTime} from './posts-styled'
import { convertCreatedAt } from "@/utils/util"
import Image from "next/image"


const PostItem = (props :PostType) => {
    // console.log('props', props)
return(
    <PostItemWrapper>
        <Detail>
            <h3>{props.title}</h3>
            <p>{props.summary}</p>
        </Detail>
        <UserInfoAndTime>
            <div>
            <Image src={'/images/user-solid.svg'}
                alt="프로필"
                width="16"
                height="16"
            />
                <span>{props.User?.nickname}</span>
            </div>
            <p>
            {convertCreatedAt(props.createdAt)}
            </p>
        </UserInfoAndTime>
        <ViewsAndLikes>
            <p><span>views </span> {props.views}</p>
            <p><Image src={'/images/heart-solid.svg'}
                alt="좋아요"
                width="12"
                height="12"
            /> {props.Likers?.length}</p>
        </ViewsAndLikes>

    </PostItemWrapper>
)
}

export default PostItem
