import React from 'react'
import {
  AiFillAccountBook,
  AiFillAlert,
  AiFillAlipaySquare,
  AiFillAliwangwang,
  AiFillAmazonCircle,
  AiFillBank,
  AiFillBug,
  AiFillBoxPlot
} from "react-icons/ai"

const Services = () => {
  const services = [
    { id: 1, title: 'Membership Organisations', description: 'Our membership management software provides full automation of membership renewals and payments', image: '/src/assets/membership.svg' },
    { id: 2, title: 'National Associations', description: 'Our membership management software provides full automation of membership renewals and payments', image: "/src/assets/national_ass.svg" },
    { id: 3, title: 'Clubs And Groups', description: 'Our membership management software provides full automation of membership renewals and payments', image: "/src/assets/clubs.svg" }

  ]

  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
      <div className='text-center'>
        <h2 className='text-4xl text-neutralDgray font-semibold mb-2'>Our Clients</h2>
        <p className='text-neutralgray '> We have been working with some Fortune 500 Client</p>
      </div>

      {/* Logo Section */}
      <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
        <AiFillAccountBook className='h-14 w-14' />
        <AiFillAlert className='h-14 w-14' />
        <AiFillAlipaySquare className='h-14 w-14' />
        <AiFillAliwangwang className='h-14 w-14' />
        <AiFillAmazonCircle className='h-14 w-14' />
        <AiFillBank className='h-14 w-14' />
        <AiFillBoxPlot className='h-14 w-14' />
        <AiFillBug className='h-14 w-14' />
      </div>

      {/* service cards*/}
      <div className='text-center mt-20 md:w-1/2 mx-auto'>
        <h2 className='text-4xl text-neutralDgray font-semibold mb-3'>Manage your entire community in a single system</h2>
        <p className='text-neutralgray '> Who is Nextcent suitable for?
        </p>
      </div>

      {/* cards */}
      <div>
        {
          services.map(services => <div key={services.id}>
            <div>
              <div className='bg-[#E8F5E9] h-14 w-14 mx-auto rounded-br-3xl rounded-tl-3xl'> <img  className = "-ml-5"    src={services.image} alt="picture" /></div>
              <h4 className='text-2xl font-bold text-neutralDgray mb-2 px-2'>{services.title}</h4>
              <p className='text-sm text-neutralDgray '>{services.description}</p>
            </div>

          </div>)
        }
      </div>
    </div>

  )
}

export default Services;