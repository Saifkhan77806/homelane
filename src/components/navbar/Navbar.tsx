import { useState, useEffect } from "react";
import type { designGalleryItemsType, citiesItemsType, guidesItemsType, moreItemsType, priceCalculatorItemsType, MenuItem } from '../../../types/navbarTypes'

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) {
                setMobileMenuOpen(false);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleMouseEnter = (dropdown: string) => {
        if (!isMobile) setActiveDropdown(dropdown);
    };

    const handleMouseLeave = () => {
        if (!isMobile) setActiveDropdown(null);
    };

    const handleMobileClick = (dropdown: string) => {
        if (isMobile) {
            setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
        }
    };

    const designGalleryItems: designGalleryItemsType[] = [
        { icon: "🏠", title: "Modular Kitchen", category: "Kitchen" },
        { icon: "🛏️", title: "Bedroom", category: "Bedroom" },
        { icon: "🛋️", title: "Living Room", category: "Living" },
        { icon: "🚿", title: "Bathroom", category: "Bathroom" },
        { icon: "👔", title: "Wardrobe", category: "Storage" },
        { icon: "📦", title: "Space Saving Furniture", category: "Furniture" },
        { icon: "💼", title: "Home Office", category: "Office" },
        { icon: "🏡", title: "Home Interiors", category: "Interiors" },
    ];

    const citiesItems: citiesItemsType[] = [
        { name: "Mumbai", region: "West" },
        { name: "Delhi", region: "North" },
        { name: "Bangalore", region: "South" },
        { name: "Chennai", region: "South" },
        { name: "Hyderabad", region: "South" },
        { name: "Pune", region: "West" },
        { name: "Kolkata", region: "East" },
        { name: "Ahmedabad", region: "West" },
    ];

    const guidesItems: guidesItemsType[] = [
        { name: "Full Home Interiors", description: "Complete home solutions" },
        { name: "Modular Kitchen", description: "Custom kitchen designs" },
        { name: "Wardrobe Solutions", description: "Storage solutions" },
        { name: "Space Optimization", description: "Maximize your space" },
        { name: "Luxury Interiors", description: "Premium designs" },
        { name: "Budget Interiors", description: "Affordable options" },
    ];

    const priceCalculatorItems: priceCalculatorItemsType[] = [
        { name: "Kitchen Cost Calculator", type: "Kitchen" },
        { name: "Bedroom Cost Calculator", type: "Bedroom" },
        { name: "Living Room Calculator", type: "Living Room" },
        { name: "Wardrobe Calculator", type: "Storage" },
        { name: "Full Home Calculator", type: "Complete" },
    ];

    const moreItems: moreItemsType[] = [
        { name: "About Us" },
        { name: "Customer Reviews" },
        { name: "Blog" },
        { name: "Career" },
        { name: "Contact" },
        { name: "FAQ" },
    ];

    const menus: MenuItem[] = [
  { label: "Design Gallery", key: "design", data: designGalleryItems, type: "grid" },
  { label: "Cities", key: "cities", data: citiesItems, type: "grid" },
  { label: "Guides", key: "guides", data: guidesItems, type: "list" },
  { label: "Price Calculators", key: "calculator", data: priceCalculatorItems, type: "list" },
  { label: "More", key: "more", data: moreItems, type: "list" },
];

    return (
        <nav className="sticky top-0 bg-white shadow-md z-40 font-sans">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-18">
                <a href="/" className="flex items-center gap-2">
                    <img
                        src="https://ext.same-assets.com/2401524322/1139068877.svg"
                        alt="HomeLane"
                        className="h-7"
                    />
                </a>

                {/* Desktop & Mobile Menu */}
                
                <div
                    className={`flex items-center gap-8 transition-all duration-300 md:flex ${mobileMenuOpen
                            ? "flex-col absolute top-full left-0 w-full bg-white shadow-lg p-4 opacity-100"
                            : "hidden md:flex"
                        }`}
                >
                    {/* Menu Items */}
                    {menus.map((menu) => (
                        <div
                            key={menu.key}
                            className="relative text-gray-800 font-normal text-base cursor-pointer py-2 hover:text-red-600"
                            onMouseEnter={() => handleMouseEnter(menu.key)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleMobileClick(menu.key)}
                        >
                            {menu.label}
                            <span className="text-xs ml-1">▼</span>
                            {activeDropdown === menu.key && (
                                <div
                                    className={`absolute top-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg p-6 min-w-[280px] animate-fadeIn ${menu.type === "grid"
                                            ? "grid grid-cols-2 gap-4"
                                            : "flex flex-col gap-2"
                                        }`}
                                >
                                    {menu.data.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                                        >
                                            {item.icon && (
                                                <span className="text-lg flex-shrink-0">{item.icon}</span>
                                            )}
                                            <div className="flex flex-col">
                                                <span className="font-semibold text-sm text-gray-800">
                                                    {item.title || item.name}
                                                </span>
                                                <span className="text-xs text-gray-500">
                                                    {item.category || item.region || item.description || item.type}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                 

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button className="bg-red-600 text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-red-700 hover:shadow-lg transform hover:-translate-y-0.5 transition">
                        Get Free Estimate
                    </button>
                    <button
                        className="flex flex-col gap-1 md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
                        <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
                        <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
