import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'JavaScript Mastery',
          from_email: form.email,
          to_email: 'sujata@jsmastery.pro',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert('Ahh, something went wrong. Please try again.');
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium text-2xl mb-4 text-xl sm:text-2xl'>
              Gad Nadjar
            </span>
          </label>
          <label className='flex flex-col'>
            <span className='text-white text-2xl font-medium mb-4 text-xl sm:text-2xl'>
              gadnadjar@gmail.com
            </span>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium text-2xl mb-4 text-xl sm:text-2xl '>
              0586305529
            </span>
          </label>
          <a
            href='https://github.com/Gadnadj'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white font-medium mb-4 text-xl sm:text-2xl hover:text-purple-500 break-words'
          >
            <span>https://github.com/Gadnadj</span>
          </a>

          <a
            href='https://www.linkedin.com/in/gad-nadjar/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white font-medium mb-4 text-xl sm:text-2xl hover:text-purple-500 break-words'
          >
            <span>https://www.linkedin.com/in/gad-nadjar/</span>
          </a>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
