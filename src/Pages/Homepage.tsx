import banner from '/images/image 29.png'
import bulb from '/images/image 16.png'
import banner1 from '/images/Left Band 1.png'
import banner2 from '/images/Left Band 2.png'
import airbnb from '/images/_Client logo.png'
import hubspot from '/images/_Client logo (1).png'
import google from '/images/_Client logo (2).png'
import microsoft from '/images/_Client logo (3).png'
import walmart from '/images/_Client logo (4).png'
import figma from '/images/image 11.png'
import kay from '/images/image 9.png'
import github from '/images/image 14.png'
import react from '/images/Vector.png'
import wordpress from '/images/image 10.png'
import python from '/images/image 8.png'
import git from '/images/image 12.png'
import css from '/images/image 13.png'
import fedex from '/images/_Client logo (5).png'
import devices from '/images/devices.png'
import combo from '/images/combo shape.png'
import grid from '/images/grid.png'
import banner3 from '/images/Frame 207.png'
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

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        autoplay: true ,
        arrows: false,
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
              slidesToShow: 1,
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
        { src: airbnb, alt: 'airbnb logo' },
        { src: hubspot, alt: 'hubspot logo' },
        { src: google, alt: 'google logo' },
        { src: microsoft, alt: 'microsoft logo' },
        { src: walmart, alt: 'walmart logo' },
        { src: fedex, alt: 'fedex logo' },
        { src: figma, alt: 'figma logo' },
        { src: kay, alt: 'kay logo' },
        { src: github, alt: 'github logo' },
        { src: react, alt: 'react logo', style: { filter: darkMode ? 'invert(1)' : 'none' } },
        { src: wordpress, alt: 'wordpress logo' },
        { src: python, alt: 'python logo' },
        { src: git, alt: 'git logo', style: { filter: darkMode ? 'invert(1)' : 'none' } },
        { src: css, alt: 'css logo' },
      ];




    return (
        
        <div className="w-full h-full  md:p-8  p-4 dark:bg-black">
            <div className='lg:grid lg:grid-cols-2 grid grid-cols-1  h-full'>
                <div  className='relative '>
                    <img src={banner}  alt='banner'  className=''   />
                    <img src={bulb}  alt='banner'  className='lg:absolute lg:left-[68%] lg:top-[12%] absolute left-[-30px] top-[15%]'   />

                </div>
                <div className='gap-y-[26px] relative md:p-14 p-7'>
                    <p className='lg:text-[64px] lg:leading-[83.8px] text-[24px] leading-[36px] font-raleway font-semibold mt-4 dark:text-darkGray'>We Provide<br /> Digital Solutions.</p>
                    <p className='lg:text-5 text-[15px] md:leading-[30px] leading-[23px] font-semibold font-raleway dark:text-darkGray' >Lets create something extraordinary together - 
                    explore our services and start transforming your digital experience today</p>
                <div className='flex space-x-16 mt-8'>
                    <button className='w-[147px] h-[46px] bg-customBlue font-inter font-medium text-white text-5 rounded-lg'>Get in Touch</button>
                    
                </div> 
                <img src={bulb}  alt='banner'   className='absolute md:top-[50%] md:right-[20%] top-[-100px] right-[2%]'  />
                
                </div>
                
            <img src={banner1}  alt='banner'   className='md:block hidden absolute top-[100px] right-0'  />
            <img src={banner2}  alt='banner'   className='md:block hidden absolute top-[175px] right-0'  />
            </div>
            <div className="hidden md:flex md:flex-row md:justify-center md:items-center md:space-x-10">
        {logos.slice(0, 6).map((logo, index) => (
          <div key={index}><img src={logo.src} alt={logo.alt} style={logo.style} /></div>
        ))}
      </div>
      <div className="hidden md:flex md:flex-row md:justify-between md:items-center md:space-x-10 mt-12">
        {logos.slice(6).map((logo, index) => (
          <div key={index}><img src={logo.src} alt={logo.alt} style={logo.style} /></div>
        ))}
      </div>
      <div className="md:hidden pt-12">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="px-2">
              <img src={logo.src} alt={logo.alt} style={logo.style} className="mx-auto" />
            </div>
          ))}
        </Slider>
      </div>

                 <div className='mt-16 flex flex-col justify-center items-center  h-full'>
                    <p className='text-[48px] leading-[72px] text-darkBlue font-bold dark:text-white'>Our Features</p>
                    <div className="mt-6 mx-12 md:space-x-8 space-x-0 lg:flex-row  flex flex-col lg:space-y-0 space-y-8 justify-center items-center  " >
                        <div className='bg-graybg shadow-xl flex flex-col justify-center items-center space-y-[13px] w-[313px] h-[331px] p-6 dark:bg-neutral-900'>
                            <p className='font-bold leading-[30px] text-deepBlue dark:text-darkGray font-raleway'>Elevate  Your Online Presence</p>
                            <div><img src={devices}  alt='devices logo'  style={{ filter: darkMode ? 'invert(1)' : 'none' }}   /></div>
                            <p className='text-[16px] leading-[26px] font-raleway items-center dark:text-darkGray'>We create visually stunning, user-friendly websites that reflect
                             your brand and captivate your audience.</p>
                        </div>
                        <div className='bg-graybg shadow-xl flex flex-col justify-center items-center space-y-[13px] w-[313px] h-[331px] p-6  dark:bg-neutral-900'>
                        <p className='font-bold leading-[30px] text-deepBlue   dark:text-darkGray font-raleway'> Client-focused solutions.</p>
                            <div><img src={combo}  alt=' logo' className='dark:text-white' style={{ filter: darkMode ? 'invert(1)' : 'none' }}   /></div>
                            <p className='text-[16px] leading-[26px]  items-center dark:text-darkGray font-raleway'>Whether you need a sleek portfolio site or a complex web application, 
                                we design and develop solutions that meet your specific needs.</p>  
                        </div>
                        <div className='bg-graybg shadow-xl flex flex-col justify-center items-center p-6 space-y-[13px] w-[313px] h-[331px] dark:bg-neutral-900 '>
                        <p className='font-bold leading-[30px] text-deepBlue   dark:text-darkGray font-raleway'>Transforming Your Digital Experience.</p>
                            <div><img src={grid}  alt='grid logo'  style={{ filter: darkMode ? 'invert(1)' : 'none' }}   /></div>
                            <p className='text-[16px] leading-[26px]   items-center  dark:text-darkGray font-raleway'>Build robust, high-performance applications that streamline
                             your business processes and engage users effectively.</p>
                        </div>
                    </div>

                    <div className='lg:grid lg:grid-cols-2 grid grid-col-1 md:p-8 p-4 mt-8 flex  justify-center items-center  h-full'>
                        <div >
                            <p className='text-[48px]  leading-[72px] dark:text-white font-pacifico'>Start Planning</p>
                            <img src={banner3}  alt='banner'   />
                        </div>

                        <div className='shadow-xl border border-none rounded-lg bg-graybg md:m-14 m-2 flex  flex-col md:p-8 p-4   gap-y-[23px] font-raleway dark:bg-neutral-900'>
                            <p className='text-bYellow font-raleway leading-[48px] md:text-[32px] flex justify-center text-center text-[25px] font-medium'>We Work with you</p>

                            <div className='flex flex-col gap-y-[22px] md:text-[16px] text-[16px] text-deepBlue font-medium '>
                          <div className='space-x-4 flex  dark:text-darkGray'><img src={check}  alt='check logo'  style={{ filter: darkMode ? 'invert(1)' : 'none' }}  />  <p >Budget</p></div>  
                           <div className='space-x-4 flex  dark:text-darkGray'><img src={check}  alt='check logo'   style={{ filter: darkMode ? 'invert(1)' : 'none' }} />   <p >Timelines</p></div>
                           <div className='space-x-4 flex  dark:text-darkGray' ><img src={check}  alt='check logo'   style={{ filter: darkMode ? 'invert(1)' : 'none' }}  />    <p >Plan</p></div>
                           <div className='space-x-4 flex dark:text-darkGray '> <img src={check}  alt='check logo'   style={{ filter: darkMode ? 'invert(1)' : 'none' }}  />     <p >Deadlines</p></div> 
                            
                           
                            </div>

                            <p className='md:text-[16px] text-[14px] font-medium leading-[36px] text-deepBlue pt-6 dark:text-white'>Start your journey with us today to achieve your online goals and stand out in the digital landscape. </p>

                        </div>


                    </div>
                 </div>

                 <div className=' md:my-12 md:pb-8 pb-4 flex flex-col justify-center items-center h-full font-raleway space-y-8'>
                    <p className='text-[48px] leading-[72px] text-darkBlue  font-bold dark:text-white'>Our Team</p>
                    <p className='text-[16px] leading-[24px] h-full flex justify-center items-center font-medium md:w-[80%] w-full p-4  dark:text-darkGray'>our web development team is the cornerstone of our success, bringing together a diverse set of skills and a wealth of experience 
                     deliver exceptional digital solutions. Here's what sets our team apart:</p>

                     <div className='md:flex-row  flex flex-col md:space-y-0 space-y-8 md:space-x-14 space-x-0 text-deepBlue leading-[36px] font-bold dark:text-darkGray'>
                        <div><img src={image1}  alt='img'  className='w-[182px] h-[202px] border border-none rounded-xl '/><p className='flex justify-center items-center'>C.T.O </p></div>
                        <div><img src={image2}  alt='img' className='w-[182px] h-[202px] border border-none rounded-xl '   /><p className='flex justify-center items-center'>Chief Frontend Engineer</p></div>
                        <div><img src={image3}  alt='img' className='w-[182px] h-[202px] border border-none rounded-xl '   /><p className='flex justify-center items-center'>Lead Engineer</p></div>
                        <div> <img src={image4}  alt='img'  className='w-[182px] h-[202px] border border-none rounded-xl '  /><p className='flex justify-center items-center' >Chief Backend Engineer</p></div>
                     </div>

                 </div>

                
                <div className='lg:grid lg:grid-cols-2 grid grid-cols-1 w-full md:space-x-16 space-x-0 h-full  md:space-y-0 md:p-12 p-4'>
                    <div className='w-[100%]  '>
                <p className='md:text-[48px] text-[18px] md:leading-[72px] leading-[31px] font-montserrat font-bold text-darkBlue w-[70%] dark:text-white'>Frequently Asked Questions</p>
                <Accordion className='space-y-6  my-8 dark:text-darkGray font-inter '>
    {accordionItems.map((item) => (
        <AccordionItem key={item.id}>
            <AccordionItemHeading className='bg-graybg dark:bg-neutral-900 p-4'>
                <AccordionItemButton className='flex justify-between items-center'>
                
             <span className="md:text-[16px] text-[14px] leading-[22px] text-deepBlue font-montserrat font-normal dark:text-bYellow">  {item.title}</span>
             <span className="dropdown-icon"><img src={dropdown}  alt='dropdown logo'   style={{ filter: darkMode ? 'invert(1)' : 'none' }}  /></span>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className=' md:text-[16px] text-[14px] p-4 bg-accbg font-raleway   dark:bg-neutral-800'  >
              {item.content}
            </AccordionItemPanel>
        </AccordionItem>
    ))}
</Accordion>
</div>

<div className='flex flex-col justify-center items-center  md:mx-8   m-12 md:pb-12 pb-6 dark:text-darkGray '>
    <div className='mr-auto bg-graybg  shadow-xl border-lg  space-x-4 md:mb-4 mb-8 flex justify-center items-center w-[236px] h-[68px] z-10 dark:bg-neutral-900  border-none rounded-lg'>
     <img src={circle}  alt='circle'    /> <p className='font-raleway font-semibold text-[18px] '>We offer solutions</p>
    </div>
    <div className='p-12  flex justify-center  bg-graybg  flex flex-col  shadow-xl  border-none rounded-lg dark:bg-neutral-800 '>
        
   <p className='font-medium text-[16px]  text-center   font-raleway  '> Our client-focused solutions include custom web design, innovative web development, 
    UX/UI design, e-commerce solutions, and SEO optimization. We are dedicated to transforming
     your digital experience with designs that captivate and applications that perform.</p>
    </div>
    <div className='ml-auto mt-4 shadow-xl border-lg bg-graybg space-x-4 flex justify-center items-center w-[236px] h-[68px]   border-none rounded-lg dark:bg-neutral-900'>
     <img src={circle}  alt='circle'    /> <p className='font-raleway font-semibold text-[18px]'>Backend Dev</p>
    </div>
    
    
    <div className='bg-graybg  mr-auto shadow-xl space-x-4 md:mt-2 mt-4 border-lg z-10 flex justify-center items-center w-[236px] h-[68px]  border-none rounded-lg dark:bg-neutral-900'>
     <img src={circle}  alt='circle'    /> <p className='font-semibold font-raleway text-[18px]'>Frontend Dev</p>
    </div>
    <div className='ml-auto shadow-xl mt-4 border-lg bg-graybg space-x-4 z-10 flex justify-center items-center w-[236px] h-[68px]  border-none rounded-lg dark:bg-neutral-900'>
     <img src={circle}  alt='circle'    /> <p className='font-semibold font-raleway text-[18px]'>Product Designers</p>
    </div>
</div>          </div>
                   

<div className='flex flex-col justify-center items-center  md:pt-12  '>
    <p className='md:text-[24px] md:leading-[36px] text-[14px] leading-[18px] font-semibold font-raleway dark:text-darkGray'>Have You <span className='text-yellow-400 font-bold md:text-[40px] text-[21px] leading-[60px]'>Seen</span> our <span className='text-yellow-400 font-bold md:text-[40px] text-[21px] leading-[60px]'>Products?</span></p>
    <p className='md:text-[18px] text-[12px] font-normal md:leading-[27px] leading-[10px] font-raleway text-darkBlue dark:text-darkGray '>What are you waiting for  <span> <button className='w-[139px] h-[46px] bg-customBlue font-inter font-medium text-white rounded-lg dark:bg-bYellow'>Get in Touch</button></span> with Us</p>
</div>

            </div>
            
      
    )
}