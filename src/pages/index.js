import Image from 'next/image'
import { useState } from 'react'
import {BsChevronCompactLeft,BsChevronCompactRight} from "react-icons/bs"
import { RxDot, RxDotFilled } from 'react-icons/rx'
import Timer from './components/Timer'


export default function Home() {
  const slides = [
    { 
      url:"https://media.lesechos.com/api/v1/images/view/6453961139f85e0e925a1dbb/1280x720/2061030-1683199449-1517020-1451989026-ferrari-3.jpg"
    },
    { 
      url:"https://upload.wikimedia.org/wikipedia/commons/c/c6/2011_Ferrari_458_Italia_DCT_S-A_4.5_Front.jpg"
    },
    { 
      url:"https://www.funcars.biz/wp-content/uploads/2023/07/1684959544-ferrari-458-002.jpg"
    },
    { 
      url:"https://media.ed.edmunds-media.com/jeep/grand-cherokee-l/2022/oem/2022_jeep_grand-cherokee-l_4dr-suv_limited_fq_oem_1_1600.jpg"
    },
    { 
      url:"https://d2hucwwplm5rxi.cloudfront.net/wp-content/uploads/2022/10/17071727/jeep-cherokee-facts-cover-1710221214.jpg"
    },
  ]    

  const [countIndex, setCountIndex] = useState(0)

  const prevSlide = ()=>{
    const isFirstSlide = countIndex === 0
    const newIndex = isFirstSlide ? slides.length -1 : countIndex -1
    setCountIndex(newIndex)
  }

  const nextSlide = ()=>{
    const isLastSlide = countIndex === slides.length -1
    const newIndex = isLastSlide ? 0 : countIndex +1
    setCountIndex(newIndex)
  }

  const goToSlideIndex = slideIndex=>{
    setCountIndex(slideIndex)
  }

  return (
    <div className='max-w-[900px] h-[400px] m-auto w-full py-16 px-4 relative group'>
      <div style={{backgroundImage:`url(${slides[countIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>

      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '>
        <BsChevronCompactLeft size={30} onClick={prevSlide} />
      </div>

      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '>
        <BsChevronCompactRight size={30} onClick={nextSlide}  />
      </div>

      <div className='flex top-4 justify-center py-2'>
        { slides.map((slide,slideIndex)=>(
            <div 
              key={slideIndex} 
              onClick={()=>goToSlideIndex(slideIndex)}
              className='text-2xl cursor-pointer'
            >
              <RxDotFilled />
            </div>
         ))}
      </div>

      <div>
        <Timer onSlide={nextSlide} />
      </div>

    </div>
  )

}
