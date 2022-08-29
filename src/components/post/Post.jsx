import { MoreVert } from '@mui/icons-material';
import './post.css'

const Post = () => {
    return (<div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src="/assets/profile/profile1.jpg" alt="" />
                    <span className='postUsername'>Christian Habineza</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter"><span className="postText">Hey! It's my first post:)</span>
                <img src="/assets/post/away.jpg" alt="" />
            </div>
            <div className="postBottom">
                <div className='postBottomLeft'>
                    <img src="/assets/like.png" alt="" className="likeIcon" />
                    <img src="/assets/heart.png" alt="" className="likeIcon" />
                    <span className="postLikeCounter">32 people liked it</span>
                </div>
                <div className="postBottomRight"><span className="postCommentText">9 comments</span></div>
            </div>
        </div>
    </div>);
}

export default Post;