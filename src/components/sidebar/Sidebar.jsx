import './sidebar.css'
import { sidebarLinks } from '../../data/dummy';

const Sidebar = () => {

    return (<div className='sidebar'>
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                {sidebarLinks.map((link, index) => (
                    <li className="sidebarListItem" key={index}>
                        <div className='sidebarIcon'>{link.icon}</div>
                        <span className="sidebarListItemText">{link.spanText}</span>
                    </li>
                ))}
            </ul>
            <button className='sidebarButton'>Show More</button>
            <hr className="sidebarHr" />
            <ul className="sidebarFriendList">
                <li className='sidebarFriend'>
                    <img className='sidebarFriendImg' src="/assets/profile/profile4.jpg" alt="" />
                    <span className='sidebarFriendName'>Mary Niyokwizerwa</span>
                </li>
                <li className='sidebarFriend'>
                    <img className='sidebarFriendImg' src="/assets/profile/profile4.jpg" alt="" />
                    <span className='sidebarFriendName'>Mary Niyokwizerwa</span>
                </li>
                <li className='sidebarFriend'>
                    <img className='sidebarFriendImg' src="/assets/profile/profile4.jpg" alt="" />
                    <span className='sidebarFriendName'>Mary Niyokwizerwa</span>
                </li>

            </ul>
        </div>
    </div>);
}

export default Sidebar;