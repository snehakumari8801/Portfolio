
import React from 'react';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import sneha_Img from '../images/sneha_Img.jpg';
import resume from '../components/Snehakumari_CV.docx'

function Home() {
  return (
    <div className='flex justify-between pt-40 pl-16 pr-16 flex-col sm:flex-row '>
      <div className='text-white w-full sm:w-1/2'>
        <h1 className='text-5xl font-bold'>Hy! I Am </h1>
        <h1 className='text-amber-400 text-5xl font-bold'>Sneha kumari</h1>
        <p className='pt-9'>Hello and welcome to my frontend portfolio! I specialize in creating captivating user interfaces with a focus on user experience.Explore my projects to see how I bring design to life through frontend development</p>
        <a href={resume} download>
        <button className='bg-amber-600 h-10 w-40 mt-10'>Download CV</button>
        </a>
        <div className='flex gap-16 pl-30 pt-12 text-3xl text-amber-400'>
         <a href='https://www.linkedin.com/in/sneha-kumari-05137029a/'><FaLinkedinIn /></a>
         <a href='https://github.com/snehakumari8801'><FaGithub /></a>
        </div>
      </div>
      <div className='w-full sm:w-auto mt-10 sm:mt-0'>
        <img src={sneha_Img} alt='snehaphoto' className='h-44 sm:h-80  border-amber-400 rounded-lg shadow-lg imageCustom'/>
        <div className='text-xl sm:text-2xl bg-amber-600 w-56 sm:w-72 h-10 rounded-lg  mt-8 ml-2 sm:ml-12 pl-5 sm:pl-10 pt-1 sm:pt-0'>
          <button>Frontend Developer</button>
        </div>
     </div>
       
      
    </div>
  );
}

export default Home;









