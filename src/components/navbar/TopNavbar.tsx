import NavLinkWithSub from './NavLinkWithSub'

const TopNavbar = () => {
  return (
     <div className="hidden md:flex items-center justify-between text-sm px-6 py-4 border-b">
        <div className="flex gap-6">
          <a href="/" className="hover:text-red-600">Partner with HomeLane</a>
          <a href="/" className="hover:text-red-600">Refer and Earn</a>
          <a href="/" className="hover:text-red-600">Join Us</a>
        </div>
        <div className="flex items-center gap-6">
          <a href="/stores" className=" flex items-center gap-2"><NavLinkWithSub title={"customer Supprots"} subLinks={[
            "Rates issues",
            "My issues",
            "Contact us",
            "FAQs"
          ]} /></a>
          <a href="/login" className="hover:text-red-600">Login/Register</a>
        </div>
      </div>

  )
}

export default TopNavbar