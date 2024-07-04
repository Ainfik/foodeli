import React from 'react'

function ShowMenu() {
  return (
    <div>
        <div className='mt-16'>
            <p className='text-xs text-sky-600 font-bold'>OUR MENU</p>
            <h1 className='text-3xl font-bold mt-6'>Menu That Always <br/>
                                             Makes You Fall In Love</h1>
        </div>
        <div className='flex py-32 px-10 justify-around'>
            <div >
            <a href='' className='flex items-center bg-red-600 rounded-full px-8 py-2'><img className='pr-4' src='../public/images/icon-pizza.png' alt='pizza'/>Pizza</a>
            </div>
            <div>
            <a href='' className='flex items-center  px-8 py-2'><img src='../public/images/icon-burger.png' alt='pizza'></img>Pizza</a>
            </div>
            <div>
            <a href='' className='flex items-center  px-8 py-2'><img src='../public/images/icon-cupcake.png' alt='pizza'></img>Pizza</a>
            </div>
            <div>
            <a href='' className='flex items-center px-8 py-2'><img src='../public/images/icon-ramen.png' alt='pizza'></img>Pizza</a>
            </div>
        </div>
        <div className='flex justify-around items-center text-center'>
            <div className='inline-block'>
                <img src='../public/images/pizza-1.png' className='w-36'></img>
                <p className=''>California Pizza</p>
            </div>
            <div className='inline-block'>
                <img src='../public/images/pizza-2.png' className='w-36'></img>
                <p className=''>Pepperoni Pizza</p>
            </div>
            <div className='inline-block'>
                <img src='../public/images/pizza-3.png' className='w-36'></img>
                <p className=''>Beef Pizza</p>
            </div>
            <div className='inline-block'>
                <img src='../public/images/pizza-4.png' className='w-36'></img>
                <p className=''>Mushromm Pizza</p>
            </div>
        </div>
        
    </div>
  )
}

export default ShowMenu