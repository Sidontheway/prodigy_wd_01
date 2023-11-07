import React from 'react'
import {BsMicrosoft,
    BsGoogle,
    BsAndroid2

} from 'react-icons/bs'
import {
    BiLogoJava,
    BiLogoAdobe} from 'react-icons/bi'

const Services1 = ()=> {
  return (
    <div className='flex gap-8 justify-between p-10'>
        <BsMicrosoft className='h-12 w-12'/>
        <BiLogoJava className='h-12 w-12'/>
        <BsAndroid2 className='h-12 w-12'/>
        <BsGoogle className='h-12 w-12'/>
        <BiLogoAdobe className='h-12 w-12'/>
    </div>
  )
}

export default Services1