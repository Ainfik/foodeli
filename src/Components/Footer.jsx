function Footer() {
  return (
    <div className="pt-32 flex justify-around">
        <div>
        <img className="w-32" src="../public/images/judul.png"/>
     <div>
        <p className="pt-6">Our job is to filling your tummy with<br/>
         delicious food and  with fast and<br/>
         free delivery.</p>
     </div>
     <div className="flex pt-6 ">
        <img src="../public/images/ig.png"/>
        <img className="px-6" src="../public/images/fb.png"/>
        <img src="../public/images/twitter.png"/>
     </div>
        </div>
        <div className="list-none">
        <ul className="font-bold pb-4">About</ul>
        <li className="pb-4" href="">About Us</li>
        <li className="pb-4" href="">Features</li>
        <li className="pb-4" href="">News</li>
        <li className="pb-4" href="">Menu</li>
        </div>
        <div className="list-none">
        <ul className="font-bold pb-4">Company</ul>
        <li className="pb-4" href="">Why ROFIIQ</li>
        <li className="pb-4" href="">Partner With us</li>
        <li className="pb-4" href="">FAQ</li>
        <li className="pb-4" href="">Blog</li>
        </div>
        <div className="list-none">
        <ul className="font-bold pb-4">Support</ul>
        <li className="pb-4" href="">Acount</li>
        <li className="pb-4" href="">Support Center</li>
        <li className="pb-4" href="">FeedBack</li>
        <li className="pb-4" href="">Contact Us</li>
        <li className="pb-4" href="">Accessibility</li>
        </div>
        <div>
            <p className="font-bold pb-4">Get in Touch</p>
            <p className="pb-4">Question or feedback? <br/>
            We’d love to hear from you</p>
            <div className="flex mt-6">
            <a className='bg-white shadow-md text-xs shadow-black py-2 px-6 rounded-full flex items-center' href=''>Email Address<img className="pl-4 pt-1 w-8" src="../public/images/kirim.png"/></a>
            </div> 
        </div>
    </div>
  )
}

export default Footer