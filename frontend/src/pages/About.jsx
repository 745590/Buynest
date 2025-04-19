import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

function About() {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img
          className='w-full md:max-w-[400px]'
          src={assets.about_img}
          alt="About our e-commerce brand"
        />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to Byunest, your one-stop destination for quality products at unbeatable prices. We curate an exclusive range of items to meet the diverse needs of modern shoppers, combining style, affordability, and convenience in every purchase.</p>
          <p>Our team is passionate about offering the latest trends and timeless essentials, ensuring that every product reflects our commitment to excellence. Whether you're shopping for fashion, electronics, or daily essentials, Byunest is here to serve you better every day.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission at Byunest is to empower customers with choice and confidence. We strive to provide a seamless shopping experience supported by top-notch customer service, secure transactions, and a user-friendly platform. We believe in creating value through trust, quality, and innovation.</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We handpick every product to ensure it meets our high standards for durability, functionality, and design. Your satisfaction is our top priority.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Enjoy a smooth and secure online shopping experience with fast shipping, easy returns, and a mobile-friendly website you can shop from anywhere.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our support team is always ready to help you with any inquiries, returns, or assistance. We value every customer and aim to exceed expectations.</p>
        </div>
      </div>
        <NewsletterBox />
    </div>
  )
}

export default About