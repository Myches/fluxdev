import banner7 from '/images/Rectangle 4497.png'

import { useState, useEffect } from 'react';
import axios from "axios";

interface Product {
    image: string;
    description: string;
    more_details: string;
    alt: string;
    name: string;
    link: string;
    date: string;
    price: number;
    id: number;
    images: string[];
}

export default function Projects() {
    const [products, setProducts] = useState<Product[]>([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                "https://fluxdevsng.pythonanywhere.com/api/projects"
            );

            const products: Product[] = response.data;
            setProducts(products);
            console.log(products)
            

        } catch (error) {
            console.error(`Error fetching data: ${error}`);
            setProducts([]);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className=''>
        <div className="w-full h-full  dark:bg-black">
            <div className="" style={{
                backgroundImage: `url('./images/Rectangle 4496.png')`, height: '256px'
            }}>
                <p className="font-raleway font-bold md:text-[48px] text-[24px] md:leading-[72px] leading-[36px] text-white md:pl-[10%] md:pt-[10%] pl-[30%] pt-[40%] ">Our Projects</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 m-12 gap-12 ">
                <img src={banner7} alt="banner" />
                <div className='md:space-y-12 space-y-6 flex flex-col justify-center '>
                    <p className='text-bYellow font-raleway font-bold text-[24px] leading-[36px] flex justify-center items-center'>Our Projects</p>
                    <p className='font-bold font-raleway md:text-[40px] text-[24px] leading-[60px] text-deepBlue dark:text-darkGray'>Embark on a visual journey as you look through our projects</p>
                </div>
            </div>

            <div className="md:p-8 p-4 md:space-y-12 space-y-6 font-raleway">
                <p className=' font-bold md:text-[48px] text-[30px] leading-[72px] flex justify-center items-center dark:text-darkGray '>Recent Works</p>
                <div className='grid grid-cols-1 md:grid md:grid-cols-2 md:gap-8 gap-4  dark:text-darkGray'>
                    {products.map((product) => (
                        <div key={product.id} className='grid grid-cols-2 relative m-12 '>
                        <p className='flex justify-center items-center bg-gray-300 p-8  dark:bg-neutral-900'>{product.description}</p>
                            <img src={product.image} alt= 'Product image' />
                            <p className=' bg-transparent text-[14px] p-[2px] backdrop-blur-xl font-medium text-bgreen  lg:right-10 lg:top-0 absolute right-5 top-[10%]'>{product.name}</p> 
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex flex-col justify-center items-center py-12'>
    <p className='md:text-[24px] md:leading-[36px] text-[14px] leading-[18px] font-semibold font-raleway  dark:text-darkGray'>Have You <span className='text-yellow-400 font-bold md:text-[40px] text-[21px] leading-[60px]'>Seen</span> our <span className='text-yellow-400 font-bold md:text-[40px] text-[21px] leading-[60px]'>Products?</span></p>
    <p className='md:text-[18px] text-[12px] font-normal md:leading-[27px] leading-[10px] font-raleway text-darkBlue dark:text-darkGray'>What are you waiting for  <span> <button className='w-[139px] h-[46px] bg-customBlue font-inter font-medium text-white rounded-lg  dark:bg-bYellow'>Get in Touch</button></span> with Us</p>
</div>

        </div></div>
    )
}