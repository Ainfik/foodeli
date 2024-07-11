import React from 'react'

function Customers() {
  return (
    <div>
        <div className='flex justify-center py-28 items-center'>
            <div>
                <img className='' src='../public/images/customers.png'></img>
            </div>
            <div className='font-sans'>
              <div>
              <p className='text-red-600 font-bold'>WHAT THEY SAY</p>
            <p className='py-3 font-bold text-3xl'>WHAT OUR CUSTOMERS <br/> SAY ABOUT US</p>
            <p className='text-sm'>"Fudo is the best. Besides the many and delicious <br/>
             meals,the service is also very good, especially in <br/>
              the very fast delivey. I highly recomend Fudo <br/>
              to you"</p>
              </div>
              <div className='py-8 flex'>
                <img className='w-12' src='../public/images/profile-testi.png'/>
                <div className='px-4'>
                  <p className='font-bold text-xl'>Theresa jordan</p>
                  <p className='text-xs'>Food Enthusiast</p>
                </div>
              </div>
              <div className='flex items-center'>
                <img className='pl-2' src='../public/images/star-full.png'/>
                <img className='pl-2' src='../public/images/star-full.png'/>
                <img className='pl-2' src='../public/images/star-full.png'/>
                <img className='pl-2' src='../public/images/star-full.png'/>
                <img className='pl-2' src='../public/images/star-empety.png'/>
                <p className='pl-4 font-bold text-base'>4,8</p>
              </div>
              <div>
                
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default Customers