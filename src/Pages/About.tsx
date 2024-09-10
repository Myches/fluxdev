
import banner7 from '/images/Rectangle 4497.png'
import image1 from '/images/Frame 183.png'
import image2 from '/images/Frame 184.png'
import image3 from '/images/Frame 185.png'
import image4 from '/images/Frame 188.png'
import CountUp from "react-countup";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function About() {

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

      
        <div className='w-full h-full relative dark:bg-black mt-12'>
           
          

               
              
                    
        <div className=' grid grid-cols-1 lg:grid lg:grid-cols-2 font-raleway flex justify-center py-6 space-y-12 md:space-y-0 text-darkBlue p-6'>

            <div className='pt-16 space-y-6 md:w-[70%] w-full mx-auto dark:text-darkGray '>
        <p className='text-center text-bYellow text-[32px] leading-[24px]  font-bold'>How it started</p>
            <p className='font-bold text-[24px]   text-center'>Our Goal is to  transform your Ideas of Business into Reality </p>
            <p className='text-[16px]  text-center'>PTS is a cutting-edge software development startup dedicated to creating bespoke software solutions that 
                drive business growth and innovation. By leveraging the latest technologies and agile methodologies, 
                CodeWave Innovations aims to help companies across various industries transform their operations and enhance their digital presence.</p>
                </div>
                <img src={banner7}  alt='banner7' className='p-6 md:p-12 '   />
       </div>

       <div className='grid grid-cols-2 md:grid md:grid-cols-4 flex justify-between mx-6 dark:text-darkGray font-raleway '>
       <div className='text-center'>
        <p className='text-[24px] md:text-[30px] dark:text-bYellow font-bold'><CountUp start={0} end={2.5} duration={10}/> <span className="text-blue-800">+</span></p>
        <p className='font-medium text-[12px] md:text-[24px] '>Years of experience</p>
       </div>
       <div className='text-center'>
        <p className='text-[24px] md:text-[30px] dark:text-bYellow  font-bold' ><CountUp start={5} end={20} duration={20}/></p>
        <p  className='font-medium text-[12px] md:text-[24px] '>Projects work</p>
       </div>
       <div  className='text-center'>
        <p className='text-[24px] md:text-[30px] dark:text-bYellow font-bold' > <CountUp start={10} end={150} duration={70}/><span className="text-blue-800">+</span></p>
        <p  className='font-medium text-[12px] md:text-[24px] '>Positive reviews</p>
       </div>
       <div className='text-center' >
        <p  className='text-[24px] md:text-[30px] dark:text-bYellow font-bold'><CountUp start={4} end={20} duration={70}/> <span className="text-blue-800">+</span></p>
        <p className='font-medium text-[12px] md:text-[24px] ' >Customers</p>
       </div>

       </div>

       <div className='flex flex-col justify-center items-center h-full font-raleway p-8 mt-4 '>
        <p className='text-center font-bold md:text-[48px] text-[36px] leading-[72px]  dark:text-darkGray '>Our Team</p>
        <p className='text-center text-[22px] md:w-2/3 w-full dark:text-darkGray'>
    Our web development team is the cornerstone of our success, bringing together a diverse set of skills and a wealth of experience to deliver exceptional digital solutions. Here's what sets our team apart:
  </p>
  <div className="w-full grid grid-cols-2 md:grid-cols-1 lg:flex lg:flex-wrap   lg:space-x-6 gap-y-4 mt-6 md:px-8">
  {teams.map((team, index) => (
    <div key={index} className="px-2">
      <img 
        src={team.src} 
        alt={team.alt}  
        className="mx-auto h-auto object-cover"
      />
      <p className='flex justify-center items-center text-center text-deepBlue p-2 leading-tight font-bold dark:text-darkGray'>
        {team.p}
      </p>
    </div>
  ))}
</div>




       </div>
           
       </div> 
    
    )
}