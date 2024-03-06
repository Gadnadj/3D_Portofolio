import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { studies } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const StudyCard = ({ studie }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        color: '#fff',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={studie.date}
      iconStyle={{ background: studie.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={studie.icon}
            alt={studie.company_name}
            className='w-[100%] h-[100%] object-contain rounded-full '
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{studie.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {studie.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {studie.points.map((point, index) => (
          <li
            key={`studie-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Study = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Journey so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Educational & Certificats Background
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {studies.map((studie, index) => (
            <StudyCard key={`experience-${index}`} studie={studie} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Study, 'study');
