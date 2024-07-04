function ServiceItem({ imageSrc, title, description }) {
  return (
    <div className="item px-10 w-72">
      <img src={imageSrc} alt={title} />
      <div className="text-center">
        <h1 className="text-xl font-bold">{title}</h1>
        <p>{description}</p> 
      </div>
    </div>
  );
}

export default function ServiceBangMain() {
  return (
    <div className="">
      <div className="text-center">
        <h1 className="text-red-500 font-bold">WHAT WE SERVE</h1>
        <h1 className="text-4xl font-bold">
          Your Favourite Food <br />
          Delivery Partner
        </h1>
      </div>

      <div className="flex justify-center">
        <ServiceItem
          imageSrc="/images/service-1.png"
          title="Easy To Order"
          description="Order your favorite meals easily through our user-friendly app."
        />
        <ServiceItem
          imageSrc="/images/service-2.png"
          title="Fastest Delivery"
          description="Get your food delivered in record time."
        />
        <ServiceItem
          imageSrc="/images/service-3.png"
          title="Best Quality"
          description="Enjoy meals made with the highest quality ingredients."
        />
      </div>
    </div>
  );
}
