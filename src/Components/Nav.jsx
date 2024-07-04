function Nav() {
  return (
    <div className="flex bg-white justify-center items-center py-4 px-10 shadow-xl">
     <nav className="">
      <a className="inline-block text-white items-center p-0 px-2 bg-blue-600 " href=""> R O <br />
                  F Q </a>
     </nav>
     <nav className=" justify-center ">
      <a className="px-10 hover:text-blue-800" href="">Home</a>
      <a className="px-10 hover:text-blue-800" href="">Service</a>
      <a className="px-10 hover:text-blue-800" href="">Menu</a>
      <a className="px-10 hover:text-blue-800" href="">Contact</a>
     </nav>
     <nav className="flex items-center space-x-8">
      <a className=" w-6" href=""><img src="../images/search.png" alt="" /></a>
      <a className=" w-6" href=""><img src="../images/shop.png" alt="" /></a>
      <nav className=" bg-blue-600 items-center py-1 px-2 rounded-lg items-center hover:bg-black">
      <a className="flex justify-center items" href=""><img className="w-14" src="../images/button.png" alt="" /></a>
     </nav>
     </nav>
     
  </div>
  )
}
export default Nav;