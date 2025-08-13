
import { useState } from "react";

const NavLinkWithSub = ({ title, subLinks }: { title: string; subLinks: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Main link/title */}
      <h5
        className={`cursor-pointer ztext-red-600 flex items-center select-none`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {title} {subLinks ? <span className="text-gray-400"><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.33268 2.8335L3.99935 5.16683L1.66602 2.8335" stroke="#E71C24" stroke-linecap="round" strokeLinejoin="round"></path></svg></span> : null}
      </h5>

      {/* Sublinks (show on hover or when clicked) */}
      {(isOpen || false) && (
        <ul className="absolute left-0 mt-0 bg-white shadow-lg rounded min-w-[150px] z-10">
          {subLinks.map((link, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 hover:text-red-600 cursor-pointer"
            >
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavLinkWithSub;
