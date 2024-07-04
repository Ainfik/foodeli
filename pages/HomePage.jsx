import Nav from"../src/Components/Nav";
import Hero from"../src/Components/Hero";
import ServiceBang from"../src/Components/ServiceBang";
import ShowMenu from "../src/Components/ShowMenu";
import Customers from "../src/Components/Customers";



export default function HomePage() {
  return (
    <>
      <Nav/>
      <Hero/>
      <ServiceBang />
      <ShowMenu/>
      <Customers/>
    </>

  )
}