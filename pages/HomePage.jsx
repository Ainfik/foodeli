import Nav from"../src/Components/Nav";
import Hero from"../src/Components/Hero";
import ServiceBang from"../src/Components/ServiceBang";
import ShowMenu from "../src/Components/ShowMenu";
import Customers from "../src/Components/Customers";
import GetApp from "../src/Components/GetApp";
import Footer from "../src/Components/Footer";




export default function HomePage() {
  return (
    <>
      <Nav/>
      <Hero/>
      <ServiceBang />
      <ShowMenu/>
      <Customers/>
      <GetApp/>
      <Footer/>
    </>

  )
}