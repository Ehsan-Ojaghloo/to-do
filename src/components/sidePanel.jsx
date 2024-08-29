import React from 'react'
import "./sidePanel.scss"

import { FiMenu } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { GoInbox } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { MdOutlinePushPin } from "react-icons/md";
import { FaTag } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";

function sidePanel() {
    return (
        <div className='side-nav'>
            <div className="inner-side-nav">
                <div className="search-section">
                    <FiMenu />
                    <CiSearch />
                </div>
                <div className="pagination">
                    <div>
                        <div id="inbox" className='page-panels'>
                            <GoInbox />
                            <span>Inbox</span>
                        </div>
                        <div id="today" className='page-panels'>
                            <FaRegStar/>
                            <span>Today</span>
                        </div>
                    </div>
                    <div>
                        <div id="scheduled" className='page-panels'>
                            <RiCalendarScheduleLine/>
                            <span>Scheduled</span>
                        </div>
                        <div id="pinboard" className='page-panels'>
                            <MdOutlinePushPin/>
                            <span>Pinboard</span>
                        </div>
                    </div>
                    <div>
                        <div id="labels" className='page-panels'>
                            <FaTag/>
                            <span>Labels</span>
                        </div>
                        <div id="completed" className='page-panels'>
                            <CiCircleCheck/>
                            <span>Completed</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default sidePanel