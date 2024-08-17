import banner1 from '/images/Left Band 1.png'
import banner7 from '/images/Rectangle 4497.png'
import image1 from '/images/Frame 183.png'
import image2 from '/images/Frame 184.png'
import image3 from '/images/Frame 185.png'
import image4 from '/images/Frame 188.png'
import CountUp from "react-countup";

export default function About() {



    return (

        <div className=''>
        <div className='w-full h-full relative dark:bg-black'>
           
                <img src={banner1}    alt='banner' className='block md:hidden absolute right-0 top-0'  />

               
              
                    
        <div className=' grid grid-cols-1 lg:grid lg:grid-cols-2 font-raleway flex justify-center py-6 space-y-12 md:space-y-0 text-darkBlue p-6'>

            <div className='pt-16 space-y-6 w-[70%] mx-auto dark:text-darkGray'>
        <p className='text-center text-bYellow text-[16px] leading-[24px]  font-bold'>How it started</p>
            <p className='font-bold text-[24px]   text-center'>Our Goal is to  transform your Ideas of Business into Reality </p>
            <p className='text-[16px]  text-center'>PTS is a cutting-edge software development startup dedicated to creating bespoke software solutions that 
                drive business growth and innovation. By leveraging the latest technologies and agile methodologies, 
                CodeWave Innovations aims to help companies across various industries transform their operations and enhance their digital presence.</p>
                </div>
                <img src={banner7}  alt='banner7' className='px-6'   />
       </div>

       <div className='grid grid-cols-2 md:grid md:grid-cols-4 flex justify-between m-12 dark:text-darkGray font-raleway '>
       <div className='text-center'>
        <p className='text-[20px] md:text-[30px] dark:text-bYellow font-bold'><CountUp start={0} end={2.5} duration={10}/> <span className="text-blue-800">+</span></p>
        <p className='font-medium text-[12px] md:text-[24px] '>Years of experience</p>
       </div>
       <div className='text-center'>
        <p className='text-[20px] md:text-[30px] dark:text-bYellow  font-bold' ><CountUp start={5} end={20} duration={20}/></p>
        <p  className='font-medium text-[12px] md:text-[24px] '>Projects work</p>
       </div>
       <div  className='text-center'>
        <p className='text-[20px] md:text-[30px] dark:text-bYellow font-bold' > <CountUp start={10} end={150} duration={70}/><span className="text-blue-800">+</span></p>
        <p  className='font-medium text-[12px] md:text-[24px] '>Positive reviews</p>
       </div>
       <div className='text-center' >
        <p  className='text-[20px] md:text-[30px] dark:text-bYellow font-bold'><CountUp start={4} end={20} duration={70}/> <span className="text-blue-800">+</span></p>
        <p className='font-medium text-[12px] md:text-[24px] ' >Customers</p>
       </div>

       </div>

       <div className='flex flex-col justify-center items-center h-full font-raleway p-14 space-y-6 '>
        <p className='text-center font-bold text-[20px] md:text-[30px] dark:text-darkGray'>Our Team</p>
        <p className='text-center text-[14px] md:text-[20px] md:w-2/3 w-full dark:text-darkGray'>
    Our web development team is the cornerstone of our success, bringing together a diverse set of skills and a wealth of experience to deliver exceptional digital solutions. Here's what sets our team apart:
  </p>
        <div className='h-full flex justify-center items-center md:flex-row  flex flex-col md:space-y-0 space-y-8 md:space-x-14 space-x-0 text-deepBlue leading-[36px] font-bold'>
        <div><img src={image1}  alt='img'  className=' border border-none rounded-xl '/><p className='flex justify-center items-center dark:text-darkGray'>C.T.O </p></div>
                        <div><img src={image2}  alt='img' className='border border-none rounded-xl '   /><p className='flex justify-center items-center dark:text-darkGray'>Chief Frontend Engineer</p></div>
                        <div><img src={image3}  alt='img' className=' border border-none rounded-xl '   /><p className='flex justify-center items-center dark:text-darkGray'>Lead Engineer</p></div>
                        <div> <img src={image4}  alt='img'  className=' border  border-none rounded-xl '  /><p className='flex justify-center items-center  dark:text-darkGray' >Chief Backend Engineer</p></div>  


        </div>

       </div>
           
       </div> 
        </div>
    )
}