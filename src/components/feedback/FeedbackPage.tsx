
import Navbar from "../navbar/Navbar"
import FeedBack from "./Feedback"


export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar/>
      <main id="feedback" className="container mx-auto pt-8"><FeedBack/></main>
    </div>
  )
}