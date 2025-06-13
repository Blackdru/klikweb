import { useState } from "react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Button } from "../ui/button"
import logo from "@/assets/logo.png"
import { useNavigate, useLocation } from "react-router-dom"

export default function Navbar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { href: "home", label: "Home" },
    { href: "terms", label: "Terms and conditions" },
    { href: "privacy", label: "Privacy policy" },
    { href: "contact", label: "Contact" },
    { href: "feedback", label: "Feedback" },
  ]

  // 👇 derive activeSection from current pathname
  const activeSection = location.pathname === "/" ? "home" : location.pathname.slice(1)

  const handleNavClick = (href: string) => {
    if (href === "home") {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      navigate("/") // go to root
    } else {
      navigate(`/${href}`)
    }
    setIsSheetOpen(false)
  }

  return (
    <header className="px-4 py-4 flex items-center justify-between fixed top-0 left-0 right-0 bg-black z-20">
      <input type="image" src={logo} alt="Logo" className="text-blue-400 h-10 ml-2" />

      {/* Desktop nav */}
      <nav className="hidden lg:flex items-center space-x-8 flex-grow justify-center">
        {navItems.map((item) => (
          <button
            key={item.href}
            onClick={() => handleNavClick(item.href)}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ease-in-out ${
              activeSection === item.href
                ? "bg-purple-600 text-white"
                : "hover:bg-purple-400 hover:text-white"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Mobile nav */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-gray-900 text-white">
          <SheetHeader>
            <SheetTitle className="text-white">Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col space-y-4 mt-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ease-in-out ${
                  activeSection === item.href
                    ? "bg-purple-600 text-white"
                    : "hover:bg-purple-400 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <SheetClose className="sr-only">Close</SheetClose>
        </SheetContent>
      </Sheet>
    </header>
  )
}
