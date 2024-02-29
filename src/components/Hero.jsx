import { Link } from 'react-router-dom'

import hero1 from '../assets/hero1.webp'
import hero2 from '../assets/hero2.webp'
import hero3 from '../assets/hero3.webp'
import hero4 from '../assets/hero4.webp'

const carouselImages = [hero1, hero2, hero3, hero4]

const Hero = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
      <div>
        {/* tracking-tight: letter-spacing*/}
        <h1 className='max-w-2xl text-4xl font-bold tracking-tight'>
          We’re changing the way people shop.
        </h1>
        {/* leading-8: line-height: 2rem */}
        <p className='mt-8 max-w-xl text-lg leading-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          delectus officia sunt ab, dolor laudantium ipsam ratione ipsa iste
          voluptates.
        </p>
        <div className='mt-8'>
          <Link to='/products' className='btn btn-primary'>
            Our Products
          </Link>
        </div>
      </div>
      <div className='hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box'>
        {carouselImages.map((image, index) => {
          return (
            <div key={index} className='carousel-item'>
              <img
                src={image}
                className='rounded-box h-full w-80 object-cover'
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Hero
