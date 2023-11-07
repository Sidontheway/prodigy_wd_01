import React from 'react'
import hero_img from '../assets/hero_img.svg'

const Home1 = ()=> {
  return (
    <div className=' flex gap-5 ml-24  flex-row-reverse max-sm:flex-col-reverse'>
        {/* hero text */}
        <div className='text-left w-2/5 max-sm:w-full z-20'>
            <div className='mb-10 mr-10 mt-20 '>
                <p className='text-[#17b978] font-bold mb-4 tracking-widest leading-tight'>BEST SELLER BOOK OF THE WEEK</p>
                <h1 className='text-6xl font-extrabold text-[#263b5e] font-sans mb-4 leading-snug'>Clue Of The Wooden Cottage</h1>
                <p className='text-[#6a7695] leading-6 mb-4 font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quisquam, maiores quis iste voluptas id et doloribus unde distinctio consequatur esse, aut dolorem! Dolor quas culpa dolores id blanditiis ipsa.</p>

                {/* for button */}
                <button className ='btn text-white bg-[#17b978] rounded-3xl p-3 pl-5 pr-5 text-sm font-semibold hover:shadow-lg' > BUY NOW FOR $22.78</button>
            </div>
        </div>

        {/* hero image */}
        <div className='-mt-8 max-sm:opacity-50 max-sm:absolute max-sm:mb-20'>
            <img src= {hero_img} alt="heroimg" />

        </div>
    </div>
  )
}

export default Home1;