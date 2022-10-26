import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {};

const About = (props: Props) => {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl'>
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        src='https://images.unsplash.com/photo-1666526320312-d07111a23bdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
        className='-mb-20 mt-8 md:mb-0 flex-shrink-0 w-56 h-56 object-cover rounded-full md:rounded-lg md:w-64 md:h-95 lg:w-[300px] lg:h-[400px] xl:w-[300px] xl:h-[400px]'
      />

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Hear is a{' '}
          <span className='underline decoration-[#478778]/50'>little</span>{' '}
          background
        </h4>
        <p className='text-base'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ad dolore
          enim exercitationem rerum deserunt facere earum sint odit omnis
          officia temporibus id, quas quo quia, doloremque accusantium
          voluptatem repudiandae. Doloremque non ipsa quasi id? Esse similique
          sit inventore molestias eum aut maxime accusantium necessitatibus,
          quas architecto quis veritatis nisi quasi nam deleniti rerum deserunt.
          Assumenda deserunt reiciendis architecto ipsam. Non debitis in ad
        </p>
      </div>
    </div>
  );
};

export default About;
