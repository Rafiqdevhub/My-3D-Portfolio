import React from 'react'
import { socialLinks } from '../constant'

import { Link } from '@nextui-org/react'
const Socials = () => {
  return (
    <div className='py-100 flex flex-col'>
        <h2 className='subhead-text'>Socials Links.</h2>
        <div className='mt-16 flex flex-wrap-reverse gap-12'>
        {socialLinks.map((social) => (
          <div className="block-container w-20 h-20" key={social.name}>
            <div className='btn-back rounded-xl'/>
            <div className='btn-front rounded-xl flex justify-center items-center cursor-pointer'>
              <img src={social.iconUrl} alt={social.name} className='w-1/2 h-1/2 object-contain' />
            </div>
            <div>
            <Link href={social.link} target='_blank' className="pb-20 neo-brutalism-white neo-btn">{social.name}</Link>
            </div>
          </div>
        ))}
      </div>
      </div> 
  )
}

export default Socials
