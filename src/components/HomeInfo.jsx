import React from 'react'
import {arrow} from '../assets/icons'
import { Link } from 'react-router-dom';
const InfoBox=({text, link, btnText})=>(
    <div className="info-box">
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className=" neo-brutalism-white neo-btn">{btnText}
        <img src={arrow} className='w-4 h-4 object-contain' alt="" />
        </Link>

    </div>
)

const renderContent={
    1:(
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>Hi, I am <span className='font-semibold'>Muhammad Rafiq</span> <br />
        A Web Develper from Pakistan
        </h1>
    ),
    2:(
        <InfoBox
        text='I am a bigginer in Web Deveplement'
        link='/about'
        btnText='learn More'
        />
    ),
    3:(
        <InfoBox
        text='I am tring my best'
        link='/Projects'
        btnText='Visit my portfolio'
        />
    ),
    4:(
        <InfoBox
        text='I am a bigginer in Web Deveplement'
        link='/Contact'
        btnText='Lets talk'
        />
    )
}



const HomeInfo = ({currentStage}) => {
  return  renderContent[currentStage] || null;
}

export default HomeInfo
