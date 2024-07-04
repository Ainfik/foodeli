function Hero() {
  return (
    <div className="flex py-20 justify-betwen px-28">
      <div className="left">
        <button className="bg-blue-400 rounded-full py-2 px-4 text-white mb-6">
          <h1>More than Faster</h1>
        </button>
        <h1 className="text-6xl font-bold">Claim Best R on <br />
          Fast <span className="text-blue-700">Food</span>  & <br />
         <span className="text-blue-700">Restaurants</span> </h1>
        <p className="mt-6">Our job is to filling your tummy with delicious food <br />
          and  with fast and free delivery</p>

        <div className="flex items-center space-x-4">
          <a className="bg-blue-600 py-3 px-4 text-white rounded-full mt-4" href="">Get Started</a>
          <a className="items-center mt-4 " href=""><img className="w-24 mt-3 " src="/images/play.png" alt="" /></a>
        </div>
      </div>

      <div className="right">
        <img className="w-[600px] pr-0" src="/images/hero.png" alt="" />
      </div>
    </div>
  )
}
export default Hero