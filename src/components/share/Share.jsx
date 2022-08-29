import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material';
import './share.css'

const Share = () => {

    return (<div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img className='shareProfileImg' src="/assets/profile/profile1.jpg" alt="" />
                <input className="shareInput" placeholder="What's in your mind?" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia className='shareIcon' htmlColor='tomato' />
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <Label className='shareIcon' htmlColor='blue' />
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room className='shareIcon' htmlColor='green' />
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions className='shareIcon' htmlColor='goldenrod' />
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <div>
                    <button className='shareButton'>Share</button>
                </div>
            </div>
        </div>
    </div>);
}

export default Share;