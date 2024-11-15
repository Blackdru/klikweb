import Cards from "../home/Cards";
import Dice from "../home/Dice";
import Home from "../home/Home";



export default function Main() {
  return (
    <main id="main" className="container mx-auto pt-8">
        <Home/>
        <Cards/>
        <Dice/>
        <section id="about" className="min-h-screen flex items-center justify-center">
          <h2 className="text-4xl font-bold">About Us</h2>
          {/* Add about content here */}
        </section>

        <section id="service" className="min-h-screen flex items-center justify-center">
          <h2 className="text-4xl font-bold">Our Services</h2>
          {/* Add services content here */}
        </section>

        <section id="terms" className="min-h-screen flex items-center justify-center">
          <h2 className="text-4xl font-bold">Terms and Conditions</h2>
          {/* Add terms and conditions content here */}
        </section>

        <section id="privacy" className="min-h-screen flex items-center justify-center">
          <h2 className="text-4xl font-bold">Privacy Policy</h2>
          {/* Add privacy policy content here */}
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center">
          <h2 className="text-4xl font-bold">Contact Us</h2>
          {/* Add contact form or information here */}
        </section>
      </main>

  )
}
