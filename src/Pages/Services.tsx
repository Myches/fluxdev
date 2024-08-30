import arrow1 from '/images/Frame 39519.png'
import arrow2 from '/images/Frame 39519 (1).png'
import banner5 from '/images/Rectangle 4500.png'
import banner6 from '/images/Frame 39606.png'




export default function Services() {



    return (
       
        <div className="w-full h-full relative  dark:bg-black">
            <div className=" flex flex-col lg:flex-row lg:p-16 p-8 lg:space-x-12 space-x-0">
                <p className="md:text-[64px] font-bold md:leading-[73px] font-raleway text-[41px] leading-[42px]  dark:text-darkGray">Request a quote or consultation time <br />
                    <span className="md:text-[32px] text-[20px] leading-[22px] font-raleway">Get responds between 24hours</span> </p>
                <div className="flex flex-col space-y-8 mt-6 flex justify-center items-center">
                    <p className="text-[18px] leading-[24px] font-raleway md:w-[70%] dark:text-darkGray">We are aimed at helping companies across various industries
                         transform their operations and enhance their digital presence.</p>
                         <button className='w-[139px] h-[46px]  bg-customBlue text-white rounded-lg font-montserrat'>Request Now</button>     
                </div> 
            </div>
<div className=" mt-8">
<img src={banner5}  alt='logo' className='w-[100%]'   />
</div>

<div className="flex flex-col justify-center items-center mt-8 space-y-6 font-raleway">
  <div className='flex space-x-4'>  <p className="md:text-[32px] text-[25px] font-bold dark:text-darkGray heading-bar">What we offer </p> <img src={arrow1}  alt='logo' className='w-[31px] h-[31px] mt-2'  /></div>

<div className="lg:grid lg:grid-cols-2 grid grid-cols-1 gap-y-12 gap-x-12  m-8 h-full flex justify-center items-center dark:text-darkGray">
    <div className="space-y-4 bg-gray-200 border border-none shadow-xl rounded-lg md:p-12 p-6 md:m-8  md:h-[372px] dark:bg-neutral-900">
        <p className="text-[20px]">08 Jobs</p>
        <p className="md:text-[38px] text-[27px] font-bold">Branding</p>
        <p className="text-[20px] pt-8">we are aimed at helping companies across various industries transform their operations </p>
        </div>
        <div className="space-y-4 bg-gray-200 shadow-xl border border-none rounded-lg md:p-12 p-6 md:m-8   md:h-[372px] dark:bg-neutral-900">
        <p className="text-[20px]">08 Jobs</p>
        <p className="md:text-[38px] text-[27px]  font-bold">Web Dev ...</p>
        <p className="text-[20px] pt-8">we are aimed at helping companies across various industries transform their operations </p>
        </div>
        <div className="space-y-4 bg-gray-200 shadow-xl border border-none rounded-lg md:p-12 p-6 md:m-8  md:h-[372px]  dark:bg-neutral-900">
        <p className="text-[20px]">08 Jobs</p>
        <p className="md:text-[38px] text-[27px]  font-bold">Ui/UX Design</p>
        <p className="text-[20px] pt-8">we are aimed at helping companies across various industries transform their operations </p>
        </div>
        <div className="space-y-4 bg-gray-200 shadow-xl border border-none rounded-lg md:p-12 p-6 md:m-8  md:h-[372px]  dark:bg-neutral-900">
        <p className="text-[20px]">08 Jobs</p>
        <p className="md:text-[38px] text-[27px]  font-bold">SEO</p>
        <p className="text-[20px] pt-8">we are aimed at helping companies across various industries transform their operations </p>
        </div>
</div>
</div>
<div className="lg:grid lg:grid-cols-2 grid grid-cols-1 lg:m-12 m-6 font-raleway space-y-8  space-x-4  mb-0">
    <div className="md:space-y-16 space-y-6 mt-6">
    <div className='flex md:space-x-12 space-x-6 flex justify-center items-center'> <p className="font-medium font-euclid md:text-[55px] text-[30px]  dark:text-darkGray">Recent Work</p> <p><img src={arrow2}  alt='logo' className='mt-2'   /></p> </div>
    <div className="space-y-4 text-blueShade px-4">
        <p className="text-[32px] font-bold   dark:text-darkGray">School website</p>
        <img src={banner6} alt='picture' className='md:p-8 md:w-[472px] md:h-[368px]' />
        <p className=" md:text-[20px] text-[15px] font-bold  md:px-6  dark:text-darkGray">We designed a full functional school website that captured the details of 120 students</p>
        <p className=" text-[15px] md:px-6  dark:text-darkGray">Requirement Gathering: We started by thoroughly understanding your needs, ensuring that every essential feature, from the student portal to the event calendar, was clearly defined and aligned with your school’s goals.
        <p className=' text-[15px]  md:pt-4 dark:text-darkGray'>   Development: With the designs approved, we moved into the development phase, where we built the site from the ground up. This included integrating all the necessary functionalities like enrollment forms, online payments, and secure access to student information.</p></p>
        <p className=' text-[15px] text-bYellow  md:px-6 '>Read More...</p>
    </div>

    </div>
   




    <div className="space-y-4 text-blueShade font-raleway md:px-8 px-2 ">
        <p className="text-[32px] font-bold  dark:text-darkGray">School website</p>
         <img src={banner6} alt='picture' className='md:p-8 md:w-[472px] md:h-[368px]' />
        <p className="md:text-[20px] text-[15px] font-bold md:px-6    dark:text-darkGray">We designed a full functional school website that captured the details of 120 students</p>
        <p className=" text-[15px] md:px-6  dark:text-darkGray">Requirement Gathering: We started by thoroughly understanding your needs, ensuring that every essential feature, from the student portal to the event calendar, was clearly defined and aligned with your school’s goals.
      <p className=' text-[15px] md:pt-4  dark:text-darkGray'>  Development: With the designs approved, we moved into the development phase, where we built the site from the ground up. This included integrating all the necessary functionalities like enrollment forms, online payments, and secure access to student information.</p></p>
      <p className=' text-[15px] md:px-6 text-bYellow'>Read More...</p>
    </div>

</div>

<div className='lg:hidden block flex flex-col justify-center items-center py-12 font-raleway'>
    <p className='md:text-[24px] md:leading-[36px] text-[14px] leading-[18px] dark:text-darkGray'>Have You <span className='text-yellow-400 font-bold md:text-[40px] text-[21px] leading-[60px]'>Seen</span> our <span className='text-yellow-400 font-bold md:text-[40px] text-[21px] leading-[60px]'>Products?</span></p>
    <p className='md:text-[18px] text-[12px] md:leading-[27px] leadding-[10px] text-darkBlue'>What are you waiting for  <span> <button className='w-[139px] h-[46px] bg-customBlue text-white rounded-lg'>Get in Touch</button></span> with Us</p>
</div>




<div className="hidden lg:flex flex-col relative top-5 left-[20%] w-[710px] h-[195px] border rounded-lg bg-warning justify-center items-center font-raleway z-10">
    <p className="flex justify-center items-center h-full text-[16px]">
        Subscribe to our newsletter and never miss New products and good offers
    </p>
    <div className="flex items-center border-b border-blue-200 text-16px pb-6 w-full justify-center">
        <input
            type="text"
            placeholder="@example@gmail.com"
            className="p-4 bg-white w-[70%] h-[40px] focus:outline-none"
        />
        <button type="button" className="bg-deepBlue text-white p-2 ">
            Subscribe
        </button>
    </div>
</div>

</div>     
   
    )
}