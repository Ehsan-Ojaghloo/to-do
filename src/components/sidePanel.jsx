import React from 'react'
import "./sidePanel.scss"

import { Link } from 'react-router-dom';

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
                            <p>Inbox</p>
                        </div>
                        <div id="today" className='page-panels'>
                            <FaRegStar />
                            <p>Today</p>
                        </div>
                    </div>
                    <div>
                        <div id="scheduled" className='page-panels'>
                            <RiCalendarScheduleLine />
                            <p>Scheduled</p>
                        </div>
                        <div id="pinboard" className='page-panels'>
                            <MdOutlinePushPin />
                            <p>Pinboard</p>
                        </div>
                    </div>
                    <div>
                        <Link to='/labels'>
                            <div id="labels" className='page-panels'>
                                <FaTag />
                                <p>Labels</p>
                            </div>
                        </Link>
                        <div id="completed" className='page-panels'>
                            <CiCircleCheck />
                            <p>Completed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default sidePanel