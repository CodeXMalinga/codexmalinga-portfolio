import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Freelance from '../public/Freelance.jpg';

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 1,
        }}
        viewport={{
          once: true,
        }}
        className='relative w-32 h-32 xl:w-[200px] xl:h-[200px] object-cover object-center'
      >
        <Image
          className='rounded-full md:rounded-none'
          src={Freelance}
          alt='/'
          layout='fill'
        />
      </motion.div>

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Freelance Frontend Developer</h4>
        <p className='font-bold text-2xl mt-1'>Fiverr, UpWork</p>
        <div className='flex space-x-2 my-2'>
          <img
            className='w-10 h-10 rounded-full'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrXJUQ4Ucie1n4sXcpx7Hxgl3J2ejt080TFezRRst2pa5yievcohnWRw7J2AtA_lnZ8rc&usqp=CAU'
            alt='/'
          />
          <img
            className='w-10 h-10 rounded-full'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrXJUQ4Ucie1n4sXcpx7Hxgl3J2ejt080TFezRRst2pa5yievcohnWRw7J2AtA_lnZ8rc&usqp=CAU'
            alt='/'
          />
          <img
            className='w-10 h-10 rounded-full'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrXJUQ4Ucie1n4sXcpx7Hxgl3J2ejt080TFezRRst2pa5yievcohnWRw7J2AtA_lnZ8rc&usqp=CAU'
            alt='/'
          />
        </div>
        <p className='uppercase py-5 text-gray-300'>
          Started Work... - Ended Work...
        </p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Summery Points</li>
          <li>Summery Points</li>
          <li>Summery Points</li>
          <li>Summery Points</li>
          <li>Summery Points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
