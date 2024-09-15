

import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInputs {
    name: string;
    email: string;
    message: string;
  }

export default function Contact (){


    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<IFormInputs>();


      const onSubmit: SubmitHandler<IFormInputs> = (data) => {
        console.log(data);

      };
    
      
    return (
        <div className="w-full h-full py-16 dark:bg-neutral-800">
            <div className="w-full  pt-12">
             <p className=' md:text-[48px] text-[36px] leading-[72px] text-darkBlue font-bold dark:text-white text-center font-raleway'>
            Our Contact
        </p>
        <p className='text-center mx-auto md:w-2/3 w-full md:text-[22px] text-[20px] px-6  font-raleway dark:text-darkGray'>
        Have a project in mind or simply want to connect? Fill the form below, and we'll get back to you soon!
  </p>
        </div>


        <div className="mt-8 px-12 w-full lg:grid lg:grid-cols-2 grid grid-cols-1 md:gap-y-4 gap-y-8 font-raleway dark:text-white ">
           
        <form className="flex flex-col items-center md:h-[800px]" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col space-y-2 pb-6 w-full max-w-[500px] ">
        <label htmlFor="name" className="text-[22px]">Name :</label>
        <input
          type="text"
          placeholder="John Doe"
          id="name"
          {...register("name", { required: "Name is required" })}
          className="  bg-transparent border rounded-lg border-neutral-500  focus:outline-none md:h-[60px] md:text-[18px] text-[16px] p-4"
        />
        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
      </div>

      <div className="flex flex-col space-y-2 pb-6 w-full max-w-[500px]">
        <label htmlFor="email" className="text-[22px]">Email :</label>
        <input
          type="email"
          placeholder="userexample@gmail.com"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })}
          className="bg-transparent border rounded-lg border-neutral-500 focus:outline-none md:h-[60px] md:text-[18px] text-[16px] p-4"
        />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
      </div>

      <div className="flex flex-col space-y-2 pb-6 w-full max-w-[500px]">
        <label htmlFor="message" className="text-[22px]">Message :</label>
        <textarea
          id="message"
          placeholder="Your Message ..."
          {...register("message", { required: "Message is required" })}
          className="md:h-[250px] h-[150px] bg-transparent border rounded-lg border-neutral-500 focus:outline-none text-[18px] p-4"
        />
        {errors.message && <span className="text-red-500">{errors.message.message}</span>}
      </div>

      <button
        type="submit"
        className="bg-customBlue text-white w-[150px] h-[50px] text-[20px] border-none rounded-lg p-2 hover:bg-bYellow hover:text-black"
      >
        Submit
      </button>
    </form>

    <div className='flex justify-center items-center'>
            <div className='bg-customBlue px-6 text-gray-200 shadow-xl flex flex-col  space-y-[20px] md:w-[350px] md:h-[331px]  p-6 dark:bg-neutral-950 border-none rounded-xl '>
            <p className='md:text-[24px] flex justify-center items-center md:leading-[36px] text-[14px] leading-[18px] font-semibold dark:text-darkGray'>
  <span className='text-yellow-400 font-bold md:text-[40px] text-[21px] leading-[60px]'>Get</span>
  <span className='mx-2 '>in</span> 
  <span className='text-yellow-400 font-bold md:text-[40px] text-[21px] leading-[60px]'>touch</span>
  <span className='mx-2 '>with us</span> 
</p>

 

      <p className='text-[16px] leading-[26px] font-raleway font-medium  text-center dark:text-white'>
      <span className='text-yellow-400  text-[16px] leading-[26px]'>Email</span> : userexample@gmail.com
      </p>
      <p className='text-[16px] leading-[26px] font-raleway font-medium  text-center dark:text-white'>
      <span className='text-yellow-400  text-[16px] leading-[26px]'>Mobile</span>   : 055545555545
      </p>
      <p className='text-[16px] leading-[26px] font-raleway font-medium  text-center dark:text-white'>
      <span className='text-yellow-400  text-[16px] leading-[26px]'>Location</span> : Lagos,Nigeria
      </p>

      <div className='flex justify-center items-center space-x-2'>
                    <img src="/images/Frame (1).png" alt='instagramLogo'  />
                    <img src="/images/Frame (2).png" alt='xLogo'  />
                    <img src="/images/Frame (3).png" alt='linkedinLogo'  />
                    </div>
    </div> </div>
    </div>
        </div>

    )
}