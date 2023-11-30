import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>Have a project in mind? <br className='sm:block hidden' /> let's build something together!</p>
      <Link to='/Contact' className='btn'>Contact</Link>
    </section>
  )
}

export default CTA
