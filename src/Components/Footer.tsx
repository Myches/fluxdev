


import insta from '/images/Frame (1).png'
import x from '/images/Frame (2).png'
import news from  '/images/news.png'
import loc from  '/images/location.png'
import msg from  '/images/message.png'
import person from  '/images/person.png'
import legal from  '/images/legal.png'
import about from  '/images/about.png'
import pricing from  '/images/pricing.png'
import faq from  '/images/faq.png'  
import li from  '/images/Frame (3).png'
import call from  '/images/call.png' 
import sub from  '/images/sub.png' 

export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <div className='w-full lg:h-[319px]  bg-deepBlue p-8 font-raleway'>
          
            <div className="lg:grid lg:grid-cols-4 grid grid-cols-1 gap-[30px]">
                <div className='flex-col space-y-6  flex justify-center md:mx-4'>
                    <div className='flex space-x-4'>
                    <img src={sub} alt='Logo'  />
                    <p className='text-[16px] pt-4 text-gray-200 leading-[22px]'>Building products that meets user needs</p>
                    </div>
                    <div className='flex space-x-2'>
                    <img src={insta} alt='instagramLogo'  />
                    <img src={x} alt='xLogo'  />
                    <img src={li} alt='linkedinLogo'  />
                    </div>
                    
                </div>

                <div className='md:flex md:justify-center md:items-center flex-col space-y-4 text-gray-200 '>
                    <p className='font-bold text-[14px] leading-[26px]'>Links</p>
                    <ul className=' flex flex-col justify-center  text-[14px] leading-[26px] font-normal'>
                    <li className='flex   items-center space-x-4'><img src={msg} alt="products logo "    /><p>Our Products</p></li>
                        <li className='flex items-center space-x-6 pl-2'><img src={about} alt="about logo"  className='w-[15px] h-[14px]'  /><p>About Us</p> </li>
                        <li className='flex  items-center space-x-4'><img src={loc} alt="location Logo"    /><p>Our Location</p></li>
                    </ul>
                </div>
                <div className='md:flex md:justify-center md:items-center flex-col space-y-4 text-gray-200'>
                <p className='font-bold text-[14px] leading-[26px]'>Legal</p>
                    <ul className=' flex flex-col justify-center  text-[14px] leading-[26px] font-normal'>
                    <li className='flex   items-center space-x-4'><img src={news} alt="T&C Logo"    /><p>Terms and Conditions</p></li>
                        <li className='flex  items-center space-x-4'><img src={person} alt="person logo"    /><p>Privacy and Policy</p></li>
                        <li className='flex   items-center space-x-4'><img src={legal} alt="reviews Logo"    /><p>Company Reviews</p></li>  
                    </ul>
                </div>
                <div className='md:flex md:justify-center md:items-center flex-col space-y-4 text-gray-200 '>
                <p className='font-bold text-[14px] leading-[26px]'>Support</p>
                    <ul className=' flex flex-col justify-center  text-[14px] leading-[26px] space-y-2 font-normal'>
                    <li className='flex items-center space-x-6 '><img src={faq} alt="FAQ Logo"  className='w-[15px] h-[14px]' /><p>FAQs</p></li>
                        <li className='flex items-center  space-x-6'><img src={call} alt="Contact logo"   className='w-[15px] h-[14px]'  /><p>Contact Us</p></li>
                        <li className='flex  items-center space-x-6 '><img src={pricing} alt="Pricing logo"  className='w-[15px] h-[14px]'   /><p>Pricing</p></li>
                    </ul>
                </div>
                  
            </div>
            <div className="flex flex-col  md:flex-row md:justify-center md:items-center justify-center items-center text-gray-200 md:text-[16px] text-[13px] font-medium leading-[30px] py-8  pt-12 space-x-14">
                    <p>Terms and Conditions</p>
                    <p>&copy; {currentYear} PTS,Copyright and All Rights reserved</p>

                </div> 
                </div>
      
    )
}