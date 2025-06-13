import { FaYoutube, FaInstagram, FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0A051C] text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Klik Games Column */}
            <h3 className="text-white font-bold mb-4">Klik Games</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy & Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Term & Condition</a></li>
              <li><a href="/cantact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

        {/* Copyright */}
        <div className="text-center pt-8 mt-8 border-t border-gray-800 text-sm">
          Created by{' '}
          <span className="text-white">2025 Klik Games</span>
          {' '}| All Right Reserved! <div>Budrock Technologies Private Limited</div>
        </div>
      </div>
    </footer>
  )
}