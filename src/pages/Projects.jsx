import React from 'react'
import {projects} from '../constant'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'


const Projects = () => {
  return (
    <section className='max-container'>
    <h1 className="head-text">
      My <span className='blue-gradient_text font-semibold'>Projects</span>
    </h1>
    <div className="mt-5 flex flex-col gap-3 text-slate-500">
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores facere necessitatibus ratione et placeat numquam laboriosam aspernatur ut quas maiores, quis, provident reiciendis debitis cumque in? Veniam tempore incidunt consequatur.</p>
    </div>
    <div className="flex flex-wrap my-20 gap-16">
      {projects.map((project) => (
        <div className='lg:w-[400] w-full' key={project.name}>
          <div className='block-container w-12 h-12'>
            <div className={`btn-back rounded-xl ${project.theme}`}/>
            <div className='btn-front rounded-xl flex justify-center items-center'>
            <img src={project.iconUrl} alt="Project Icon" className='w-1/2 h-1/2 object-contain' />
            </div>
          </div>
          <div className='mt-5 flex flex-col'>
             <h4 className='text-2xl font-worksans font-semibold'>
              {project.name}
             </h4>
             <p className='mt-2 text-slate-500'>
              {project.description}
             </p>
             <div className='mt-5 flex items-center gap-2 font-poppins'>
              <Link
               to={project.link}
               target="_blank"
               rel='noopener nonerefernce'
               className='text-blue-500 font-semibold'
              > Live Link</Link>
              <img src={arrow} alt="arrow" className='w-4 h-4 object-contain' />
             </div>
          </div>
        </div>

      ))}
    </div>
    <hr className='border-slate-200'/>
  
    </section>
  )
}

export default Projects
