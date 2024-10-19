import React from 'react'
import nopage from '../asset/page_not_found.png'

const ErrorPage = () => {
  return (
   <>
   <div className="w-full mx-auto max-w-[1440px] py-10">
   <div className='flex justify-center'>
    <img src={nopage} alt="Error page"/>
   </div>
   </div>
   </>
  )
}

export default ErrorPage;