import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import { Fox } from '../models/Fox';
import { Loader } from '@react-three/drei';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';


const Contact = () => {
  const formRef=useRef(null)
  const[form, setForm]=useState({name:'', email:'', message:''})
  const[loading, setLoading]=useState(false)
  const[currentAnimation, setCurrentAnimation]=useState('idle')
  const {alert, showAlert, hideAlert}=useAlert();

  const handleChange=({target:{name, value}})=>{
    setForm({...form, [name]:value})

  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    setLoading(true)
    setCurrentAnimation('hit')
    emailjs.send(
      import.meta.env.VITE_APP_SERVICE_ID,
      import.meta.env.VITE_APP_TEMPLATE_ID,
      {
        from_name:form.name,
        to_name:'Rafiq',
        from_email:form.email,
        to_email:'rafkhan9323@gmail.com',
        message:form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      
    ).then(()=>{
      setLoading(false)
      showAlert({show:true, text:'Message Sent', type:'success'})

      setTimeout(()=>{
        hideAlert()
        setCurrentAnimation('idle')
        setForm({name:'', email:'', message:''})
      },[3000])
     
    }).catch((error)=>{
      setLoading(false)
      setCurrentAnimation()
      console.log(error)
      showAlert({show:true, text:'Something went wrong', type:'danger'})
    })
    
  }
  const handleFocus=()=>setCurrentAnimation('walk')
  const handleBlure=()=>setCurrentAnimation('idle')
  return (
    <section className='relative flex lg:flex-row flex-col max-container h-[100vh]'>
      {alert.show && <Alert{...alert}/>}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className='head-text'>Get In Touch</h1>
        <form className=' w-full flex flex-col gap-7 mt-14' 
        onSubmit={handleSubmit}
        action="">
          <label htmlFor="" className=' text-black-500 font-semibold'>Name
          <input type="text" name="name" className='input' placeholder='Rafiq' required value={form.name}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlure}
          />
          </label>
          <label  className=' text-black-500 font-semibold'>Email
          <input type="email" name="email" className='input' placeholder='...@gmail.com' required value={form.email}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlure}
          />
          </label>
          <label htmlFor="" className=' text-black-500 font-semibold'>Your Message
          <textarea  name="message" 
          rows={4}
          className='textarea' placeholder='let me know how i can help you' required value={form.message}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlure}
          /> 
          </label>
          <button className='btn' 
          disabled={loading}
          type='submit'
          onFocus={handleFocus}
          onBlur={handleBlure}
          >{loading ? 'Sending...' : 'Send Message'}</button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas 
        camera={{position:[0,0,5],
        fov:75,
        far:1000,
        near:0.1
        }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]}/>
          <ambientLight intensity={0.5}  />
          <Suspense fallback={<Loader/>}>
            <Fox
            currentAnimation={currentAnimation}
            position={[0.5, 0.35, 0]}
            rotation={[12.6,-0.6, 0]}
            scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact
