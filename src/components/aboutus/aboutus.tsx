import React from 'react'
import { TextFade } from '../ui/textFade';  
const Aboutus = () => {

  return (
    <div className='flex items-start pt-32 justify-start bg-black text-white'>
    <TextFade
    direction="up"
    className="flex-col flex pl-5"
  >
    <h2 className=" text-5xl font-bold tracking-tighter">
      About Us
    </h2>
    <div className="pt-5 w-[60%] text-xl text-balance dark:text-zinc-300">
        In the ever-expanding Tech Industry, students play a crucial role, 
        meeting its demands for brainpower, effort, and creativity. Networking 
        Nexus was created by a group of like-minded students to address the absence 
        of student participation in Industry Grade Project Development. They aim to 
        empower students and foster innovation by forming a diverse team of innovators, developers, 
        and creators. Networking Nexus also oversees the functioning of &quot;Technical Multi-Discipline Rich&quot; 
        communities to ensure the future of developers is not undermined by a lack of experience and effort.
    </div>
    <div className="py-5 w-[60%] text-xl text-balance dark:text-zinc-300">
    Being a fraternity of future pioneers in the Internet of Things and Cloud Computing, 
    we aim to create and curate a section of Innovators, Developers, and Creators who apply 
    their domain-specific technical knowledge to work on Industrial Grade projects. With our 
    base and initiatives in the Internet of Things, we have a pre-planned structure to create a 
    Multi-Stack Learning and Project Experience providing community. Our organization highly believes 
    in community learning, and for the same, with our &quot;domain-wise specialized&quot; teams, 
    we would be looking up to the formation and functioning of Technical Multi-Discipline enriched Communities.
    </div>
  </TextFade>
  </div>
  )
}

export default Aboutus