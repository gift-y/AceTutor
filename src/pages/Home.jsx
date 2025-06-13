import React from 'react'
import Wrapper from '../components/Wrapper';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
   <Wrapper className="">
       <section>
         <div className="flex items-center justify-center flex-col gap-6 min-h-[100dvh] w-full">
           <h1 className="text-4xl md:text-8xl md:leading-22 tracking-tight font-semibold max-w-5xl text-center text-[var(--secondary-color)] ">
             Personalized Education, Driven by AI
           </h1>
           <p className="text-base md:text-2xl leading-7 max-w-xs md:max-w-2xl text-center md:py-6  text-[var(--secondary-color)]">
             Empower every learner with AI-crafted education, unlocking
             personalized paths to success and growth.
           </p>
           <div className="hidden md:flex items-center justify-center gap-5">
             <Button size="large" variant="primary">
               <Link to="/get-started">Get Started</Link>
             </Button>
             <Button size="large" variant="secondary">
               <Link to="/about">Learn More</Link>
             </Button>
           </div>
           <div className="md:hidden flex items-center justify-center gap-3">
             <Button size="small" variant="primary">
               <Link to="/get-started">Get Started</Link>
             </Button>
             <Button size="small" variant="secondary">
               <Link to="/about">Learn More</Link>
             </Button>
           </div>
         </div>
       </section>
       </Wrapper>
 
      
  )
}

export default Home