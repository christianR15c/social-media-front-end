import React from 'react'
import './topbar.css'
import { Chat, Notifications, Person, Search } from '@mui/icons-material'

export default function Topbar() {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className='logo'>Chrisocial</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className='searchIcon' />
                    <input type="text" className="searchInput" placeholder='Search for  friends, post or video' />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                    <span className="topbarLink"></span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconLtem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconLtem">
                        <Chat />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconLtem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/profile/profile1.jpg" alt='' className="topbarProfilePicture" />
            </div>
        </div>
    )
}
