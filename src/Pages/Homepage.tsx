
import bulb from '/images/image 16.png'
import banner1 from '/images/Left Band 1.png'
import banner2 from '/images/Left Band 2.png'
import figma from '/images/image 11.png'
import kay from '/images/image 9.png'
import github from '/images/image 14.png'
import react from '/images/Vector.png'
import wordpress from '/images/image 10.png'
import python from '/images/image 8.png'
import git from '/images/image 12.png'
import css from '/images/image 13.png'
import check from '/images/Subtract.png'
import image1 from '/images/Frame 183.png'
import image2 from '/images/Frame 184.png'
import image3 from '/images/Frame 185.png'
import image4 from '/images/Frame 188.png'
import dropdown from '/images/ChevronDown.png'
import circle from '/images/circle 1.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade } from "react-awesome-reveal";
import { Player } from '@lottiefiles/react-lottie-player';

import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
  } from 'react-accessible-accordion';
  import 'react-accessible-accordion/dist/fancy-example.css'
  import { useDarkMode } from '../Components/Context'








  

export default function Homepage() {



  
  const settings1 = {
    dots: false,
        infinite: true,
         slidesToShow: 5,
        autoplay: true,
        speed: 2000,
        arrows:false,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToScroll: 1,
    responsive: [
         
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  }

    const settings = {
        dots: false,
        infinite: true,
         slidesToShow: 7,
        autoplay: true,
        speed: 2000,
        arrows:false,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToScroll: 1,
        responsive: [
         
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
            }
          }
        ]
      };

    const { darkMode } = useDarkMode();

    const accordionItems = [
        { title: 'What kind of websites do you guys develop?',id:1, content: 'Your satisfaction is our top priority. We are committed to delivering exceptional service and exceeding your expectations. Our numerous satisfied clients are a testament to our dedication and commitment to building long-lasting relationships based on trust and integrity.' },
        { title: 'How much do you charge',id:2, content: 'We go beyond surface-level information. Our in-depth market analysis and insights empower you to make informed decisions. We provide you with data-driven reports, comparative market analyses, and local market trends to help you ' },
        { title: 'Do you also develop mobile apps',id:3, content: ' Our program allows you to plan your finances with confidence. With locked-in pricing, you can accurately budget for your purchase without the worry of unexpected price increases impacting your financial plans.' },
        { title: 'How can i contact you?',id:4, content: ' Our program allows you to plan your finances with confidence. With locked-in pricing, you can accurately budget for your purchase without the worry of unexpected price increases impacting your financial plans.' },
      ];


     
      const logos = [
       
        { src: figma, alt: 'figma logo' },
        { src: kay, alt: 'kay logo' },
        { src: github, alt: 'github logo' },
        { src: react, alt: 'react logo', style: { filter: darkMode ? 'invert(1)' : 'none' } },
        { src: wordpress, alt: 'wordpress logo' },
        { src: python, alt: 'python logo' },
        { src: git, alt: 'git logo', style: { filter: darkMode ? 'invert(1)' : 'none' } },
        { src: css, alt: 'css logo' },
      ];

      const teams = [
        { src: image1, alt: 'img', p: 'C.T.O' },
        { src: image2, alt: 'img', p: 'Chief Frontend Engineer' },
        { src: image3, alt: 'img', p: 'Lead Engineer' },
        { src: image4, alt: 'img', p: 'Chief Backend Engineer' },
        { src: image1, alt: 'img', p: 'Lead Designer' },
        { src: image2, alt: 'img', p: 'DevOps Engineer' },
        { src: image3, alt: 'img', p: 'Cloud Engineer' },
      
        
      ];



    return (
        
        <div className="w-[100%] h-[100%]  dark:bg-black">
  
            <div className='lg:grid lg:grid-cols-2 grid grid-cols-1 mt-12 h-full'>
           

                <div  className='mt-12 '>
                <p className='flex justify-center items-center  text-[24px] leading-[36px] mb-[-40px] font-raleway font-semibold mt-4 dark:text-darkGray block lg:hidden'>
    We Provide Digital Solutions.
</p>
                <Player
        src='https://lottie.host/77a08615-ec69-4093-96f5-9e31491a4573/9f8n9WjMCZ.json'
        className="player  md:w-[400px] md:h-[400px] w-[350px] h-[350px] m-16 "
        autoplay
        loop
      />
  

                </div>
                <div className='flex flex-col relative md:p-8 mt-[-30px] md:mt-[80px]'>
                <p className='hidden md:block lg:text-[64px] lg:leading-[83.8px] text-[32px] leading-[32px] font-euclid font-semibold  dark:text-darkGray font-raleway '>We Provide <br /> Digital Solutions.</p>
    <p className='lg:text-5 text-[16px] md:leading-[30px] leading-[23px] font-semibold font-inter dark:text-darkGray  md:text-left text-center px-6 md:px-0'>
        Let's create something extraordinary together - explore our services and start transforming your digital experience today
    </p>
    <div className=' flex justify-center lg:justify-start w-full md:mt-8 mt-2'>
        <button className='w-[147px] h-[46px] bg-customBlue font-inter font-medium text-white text-5 rounded-lg hover:bg-bYellow hover:text-black'>Get in Touch</button>
    </div>
                <img src={bulb}  alt='banner'   className='hidden md:block absolute md:top-[65%] md:right-[30%] top-[-100px] right-[2%]'  />
                
                </div>
                
        <img src={banner1}  alt='banner'   className='md:block hidden absolute top-[80px] right-0'  />
        <img src={banner2}  alt='banner'   className='md:block hidden absolute top-[150px] right-0'  />
            </div>
         
      <div className=" pt-12">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="px-2">
              <img src={logo.src} alt={logo.alt} style={logo.style} className="mx-auto" />
            </div>
          ))}
        </Slider>
      </div>

      <div className='mt-16 mx-auto flex flex-col justify-center items-center h-full'>
  <p className='md:text-[48px] text-[36px] leading-[72px] text-darkBlue font-bold dark:text-white text-center font-raleway'>
    Our Features
  </p>
  <div className="mt-6 mx-auto   md:space-x-8 space-x-0 lg:flex-row flex flex-col lg:space-y-0 space-y-8 justify-center items-center ">
    
   <Fade  direction="up" triggerOnce> <div className='bg-graybg shadow-xl flex flex-col justify-center items-center space-y-[40px] md:w-[350px] md:h-[431px] w-[295px] h-[380px] p-6 dark:bg-neutral-900'>
      <p className='font-bold leading-[30px] text-[20px] text-deepBlue dark:text-darkGray font-raleway text-center'>
        Elevate Your Online Presence
      </p>
      <div className='flex justify-center'>
      <Player
        src='https://lottie.host/f688a2ff-ab97-4bce-8da4-68c68d6ff1b9/yZYHJtAtSx.json'
       className="player w-[80px] h-[80px]"
        autoplay
        loop
       
      />
      </div>
      <p className='text-[16px] leading-[26px] font-raleway font-medium text-center dark:text-darkGray'>
        We create visually stunning, user-friendly websites that reflect
        your brand and captivate your audience.
      </p>
    </div>
   
    </Fade>
  
    <Fade direction='up' triggerOnce ><div className='bg-graybg shadow-xl flex flex-col justify-center items-center space-y-[13px] md:w-[350px] md:h-[431px] w-[295px] h-[380px]  p-6 dark:bg-neutral-900'>
      <p className='font-semibold leading-[30px] text-[20px] text-deepBlue dark:text-darkGray font-raleway text-center'>
        Client-focused solutions.
      </p>
      <div className='flex justify-center'>
      <Player
        src='https://lottie.host/395cc1db-233d-4664-a15d-65ba866a2bad/KHf6Ym2Knp.json'
        className="player w-[130px] h-[130px]"
        autoplay
        loop
       
      />
      </div>
      <p className='text-[16px] leading-[26px] font-raleway text-center font-medium dark:text-darkGray'>
        Whether you need a sleek portfolio site or a complex web application, 
        we design and develop solutions that meet your specific needs.
      </p>  
    </div>
    </Fade> 

    <Fade   direction="up" triggerOnce>
    <div className='bg-graybg shadow-xl flex flex-col justify-center items-center space-y-[13px] md:w-[350px] md:h-[431px] w-[300px] h-[380px] p-6 dark:bg-neutral-900'>
      <p className='font-semibold leading-[30px]  text-[20px] text-deepBlue dark:text-darkGray font-raleway text-center'>
        Transforming Your Digital Experience.
      </p>
      <div className='flex justify-center'>
      <Player
        src='https://lottie.host/07f077a9-733f-4488-91ae-5075e6b9c1f9/ouIMCDKbjR.json'
        className="player w-[130px] h-[130px] "
        autoplay
        loop
       
      />
      </div>
      <p className='text-[16px] leading-[26px] font-raleway font-medium  text-center dark:text-darkGray'>
        Build robust, high-performance applications that streamline
        your business processes and engage users effectively.
      </p>
    </div> </Fade> 
  </div>
</div>

                    
                    <div className='lg:grid lg:grid-cols-2 grid grid-col-1 md:p-8 p-4 mt-12 flex gap-y-12  justify-center items-center w-full  h-full'>
                        <div className=' flex flex-col items-center '>
                            <p className='md:text-[48px] text-[40px]  leading-[72px] dark:text-white font-pacifico '>Start Planning</p>
                            <Player
        src='  https://lottie.host/ead7980b-13fb-4262-8f2b-adfd42500660/mRnHkH2Wmf.json  '
        className="player md:w-[500px] md:h-[550px] w-[295px] h-[350px] "
        autoplay
        loop
       
      />
                        </div>

                        <div className=' shadow-xl border border-none rounded-lg bg-graybg md:m-14 m-6 flex  flex-col md:p-12 p-6  gap-y-[23px] font-raleway dark:bg-neutral-900'>
                            <p className='text-bYellow font-raleway leading-[48px] md:text-[32px] text-[25px] font-semibold'>We Work with your</p>

                            <div className='flex flex-col gap-y-[22px] md:text-[16px] text-[16px] text-deepBlue font-medium '>
                            <div className='flex items-center space-x-4 dark:text-darkGray'>
  <img src={check} alt='check logo' className='w-[20px] h-[20px]' style={{ filter: darkMode ? 'invert(1)' : 'none' }} />
  <p className='font-medium text-[22px] leading-[30px] font-raleway'>Budget</p>
</div>

<div className='flex items-center space-x-4 dark:text-darkGray'>
  <img src={check} alt='check logo' className='w-[20px] h-[20px]' style={{ filter: darkMode ? 'invert(1)' : 'none' }} />
  <p className='font-medium text-[22px] leading-[30px] font-raleway'>Timelines</p>
</div>

<div className='flex items-center space-x-4 dark:text-darkGray'>
  <img src={check} alt='check logo' className='w-[20px] h-[20px]' style={{ filter: darkMode ? 'invert(1)' : 'none' }} />
  <p className='font-medium text-[22px] leading-[30px] font-raleway'>Plan</p>
</div>

<div className='flex items-center space-x-4 dark:text-darkGray'>
  <img src={check} alt='check logo' className='w-[20px] h-[20px]' style={{ filter: darkMode ? 'invert(1)' : 'none' }} />
  <p className='font-medium text-[22px] leading-[30px] font-raleway'>Deadlines</p>
</div>

                            
                           
                            </div>

                            <p className='md:text-[22px] text-[18px] font-raleway font-medium leading-[36px] text-deepBlue pt-6 dark:text-white'>Start your journey with us today to achieve your online goals and stand out in the digital landscape. </p>

                        </div>


                    </div>
               

                    <div className='my-12 md:pb-8 pb-4 px-4 md:mx-[100px] mx-0 flex flex-col justify-center items-center md:items-end h-full font-raleway'>
  <p className='md:text-[48px] text-[36px] leading-[72px] text-[30px] text-darkBlue font-bold dark:text-white'>Our Team</p>

                    <p className='   h-full flex   font-medium  w-full p-4  dark:text-darkGray  md:text-right  text-center'>our web development team is the cornerstone of our success, bringing together a diverse set of skills and a wealth of experience 
                     deliver exceptional digital solutions. Here's what sets our team apart:</p>

                     
                     <div className="w-full mt-6 ">
  <Slider {...settings1}>
    {teams.map((team, index) => (
      <div key={index} className="px-4">
        <img 
          src={team.src} 
          alt={team.alt}  
          className="mx-auto  h-auto object-cover"
        />
        <p className='flex justify-center items-center text-deepBlue p-2 leading-tight font-semibold dark:text-darkGray text-center'>
    {team.p}
</p>

      </div>
    ))}
  </Slider>
</div>




                 </div>

                
                <div className='lg:grid lg:grid-cols-2 grid grid-cols-1 w-full md:space-x-16 space-x-0  md:h-[850px] h-full md:space-y-0 md:p-12 p-4'>
                    <div className='w-[100%] md:px-6 px-2'>
                <p className='md:text-[48px] text-[21px] md:leading-[72px] leading-[32px] font-raleway font-bold text-darkBlue w-[70%] dark:text-white'>Frequently Asked Questions</p>
                <Accordion className='space-y-6  my-8 dark:text-darkGray font-raleway '>
    {accordionItems.map((item) => (
        <AccordionItem key={item.id}>
            <AccordionItemHeading className='bg-graybg dark:bg-neutral-900 p-4 border border-none rounded-lg'>
                <AccordionItemButton className='flex justify-between items-center'>
                
             <span className="md:text-[20px] text-[16px] leading-[22px] text-deepBlue font-raleway font-normal dark:text-bYellow">  {item.title}</span>
             <span className="dropdown-icon"><img src={dropdown}  alt='dropdown logo'   style={{ filter: darkMode ? 'invert(1)' : 'none' }}  /></span>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className=' md:text-[18px] text-[16px] p-8 bg-accbg font-raleway border  dark:bg-neutral-800 dark:border-none'  >
              {item.content}
            </AccordionItemPanel>
        </AccordionItem>
    ))}
</Accordion>
</div>

<div className='flex flex-col justify-center items-center relative md:mx-8   m-12  pb-6 dark:text-darkGray font-raleway'>
  
<div className='relative mr-auto top-[10px] space-x-4 bg-graybg  shadow-xl border-lg  flex justify-center items-center w-[236px] h-[68px] mx-[5px] z-10 dark:bg-neutral-900  border-none rounded-lg'>
     <img src={circle}  alt='circle'    /> <p className=' font-semibold text-[18px] '>We offer solutions</p>
    </div>
    <div className='p-12  relative   bg-graybg  flex flex-col  shadow-xl  border-none rounded-lg dark:bg-neutral-800 '>
        
   <p className='font-medium text-[16px] flex justify-center  items-center   md:w-[400px] md:h-[200px] w-[200px] h-[300px]'> Our client-focused solutions include custom web design, innovative web development, 
    UX/UI design, e-commerce solutions, and SEO optimization. We are dedicated to transforming
     your digital experience with designs that captivate and applications that perform.</p>

      <div className='absolute md:bottom-[-20px] bottom-[-45px] right-0  shadow-xl border-lg bg-graybg space-x-4 flex justify-center items-center w-[236px] h-[68px] border-none  border rounded-lg dark:bg-neutral-900'>
     <img src={circle}  alt='circle'    /> <p className=' font-semibold text-[18px]'>Backend Dev</p>
    </div>
    
    </div>
    
    
   <div className='bg-graybg  mr-auto shadow-xl space-x-4 mt-16 md:mt-4 border-lg z-10 flex justify-center items-center w-[236px] h-[68px]  border-none rounded-lg dark:bg-neutral-900'>
     <img src={circle}  alt='circle'    /> <p className='font-semibold  text-[18px]'>Frontend Dev</p>
    </div>
     <div className='ml-auto mt-4 md:mt-0 shadow-xl border-lg bg-graybg space-x-4 z-10 flex justify-center items-center w-[236px] h-[68px]  border-none rounded-lg dark:bg-neutral-900'>
     <img src={circle}  alt='circle'    /> <p className='font-semibold  text-[18px]'>Product Designers</p>
    </div>
</div>          </div>
                   

<div className='flex flex-col justify-center items-center font-raleway pb-8 '>
    <p className='md:text-[24px] md:leading-[36px] text-[14px] leading-[18px] font-semibold  dark:text-darkGray'>Have You <span className='text-yellow-400 font-bold md:text-[40px] text-[21px] leading-[60px]'>Seen</span> our <span className='text-yellow-400 font-bold md:text-[40px] text-[21px] leading-[60px]'>Products?</span></p>
    <p className='md:text-[18px] text-[16px] font-normal md:leading-[27px] leading-[10px] text-darkBlue dark:text-darkGray '>What are you waiting for  <span> <button className='md:w-[139px] md:h-[46px] w-[100px] h-[32px] text-[12px] md:text-[18px]  bg-customBlue font-inter font-medium text-white rounded-lg  hover:bg-bYellow hover:text-black dark:bg-bYellow'>Get in Touch</button></span> with Us</p>
</div>

            </div>
            
      
    )
}