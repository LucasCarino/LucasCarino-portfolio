import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { shaq, bwmap, worldmap } from '../assets';

const Hero = () => {
  return (
    <>

      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto bg-[#072E5C]
        sm:bg-gradient-to-br sm:from-[#072E5C] sm:from-60% sm:to-[#f4f4f6] sm:to-0% overflow-hidden ">
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
         mx-auto flex flex-row items-start
          justify-between`}>


          <div>
            <h1
              className={`${styles.heroHeadText} text-[#f4f4f6] font-poppins uppercase w-full`}>
              Hello, I'm{' '} 
              <br/>
              <span
                className="sm:text-[#f4f4f6] sm:text-[90px] 
                text-eerieBlack text-[45px] font-poppins
                font-extrabold uppercase">
                Lucas Carino
              </span>
            </h1>
            {/* <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
              Lorem ipsum dolor sit amet. <br className="sm:block hidden" />
              consectetur adipisicing elit deleniti, voluptas.
            </p> */}
          </div>

        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
             border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        {/* <div>
          <img
            className="absolute bottom-0 ml-[50vw] 
            lg:ml-[75vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[83vw]
            sm:h-[90vh] md:h-[70vh] xl:h-[80vh]"
            src={shaq}
            alt="shaquille"
          />
        </div> */}
      </section>
    </>
  );
};

export default Hero;
