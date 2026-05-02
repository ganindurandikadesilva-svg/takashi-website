import { useState } from "react";
import { Link } from "react-router-dom";

function ChevronDown({ className = "" }) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        d="M2 4l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function TakashiLogo() {
  return (
    <img
      src="../assests/company_logo.png"
      alt="Takashi logo"
      width={42}
      height={42}
      style={{
        mixBlendMode: "screen",
        display: "block",
        flexShrink: 0,
      }}
    />
  );
}

function NavDropdown({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={`
          flex items-center gap-1 h-16 px-4 text-[13px]
          font-semibold uppercase tracking-wide
          text-gray-300 hover:text-white
          transition-colors duration-200 relative
          after:absolute after:bottom-0 after:left-4 after:right-4
          after:h-0.5 after:bg-red-600 after:scale-x-0
          after:transition-transform after:duration-200
          ${open ? "text-white after:scale-x-100" : ""}
        `}
      >
        {item.label}
        <ChevronDown
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <ul
        className={`
          absolute top-16 left-0 min-w-[220px]
          bg-[#111] border border-gray-800
          border-t-2 border-t-red-600
          transition-all duration-200 z-50
          ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}
        `}
      >
        {item.links.map((link) => (
          <li
            key={link.label}
            className="border-b border-[#1e1e1e] last:border-b-0"
          >
            <Link
              to={link.to}
              onClick={() => setOpen(false)}
              className="
                flex items-center gap-2 px-5 py-3
                text-gray-300 text-sm
                hover:text-white hover:bg-[#1a1a1a]
                hover:pl-6 transition-all duration-150 group
              "
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

function MobileAccordion({ item, onNavigate }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#1e1e1e]">
      <button
        onClick={() => setOpen(!open)}
        className="
          flex items-center justify-between w-full
          px-6 py-4 text-sm font-bold uppercase
          tracking-widest text-gray-300 hover:text-white
        "
      >
        {item.label}
        <ChevronDown
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="bg-[#111]">
          {item.links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={onNavigate}
              className="
                flex items-center gap-3 px-8 py-3
                text-gray-400 text-sm border-b border-[#1a1a1a]
                hover:text-white hover:bg-[#161616] transition-all
              "
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const NAV_ITEMS = [
    {
      label: "Cutting",
      links: [
        {
          label: "Diamond Cutting Discs",
          to: "/product/Diamond Cutting Disc",
        },
        { label: "Metal Cutting Discs", to: "/product/Cutting Discs" },
        {
          label: "Masonry Cutting Discs",
          to: "#",
        },
        { label: "Hacksaw Blades", to: "/product/Hacksaw Blades" },
      ],
    },
    {
      label: "Grinding",
      links: [
        { label: "Metal Grinding Discs", to: "/product/Grinding Discs" },
        { label: "Flap Discs", to: "#" },
        { label: "Wire Wheels", to: "#" },
      ],
    },
    {
      label: "Drilling",
      links: [
        { label: "HSS Drill Bits", to: "/product/Drill Bits" },
        { label: "Masonry Drill Bits", to: "#" },
        { label: "SDS Drill Bits", to: "#" },
        { label: "Hole Saws", to: "3#" },
      ],
    },
    {
      label: "Accessories",
      links: [
        { label: "Adapters & Flanges", to: "/product/Accessories" },
        { label: "Safety Guards", to: "#" },
        { label: "Tool Kits", to: "#" },
      ],
    },
  ];

  return (
    <>
      <nav className="bg-[#0d0d0d] border-b border-[#222] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-3 mr-8">
            <TakashiLogo />
            <div className="flex flex-col leading-none">
              <span className="text-white font-black text-2xl uppercase tracking-wide italic">
                Takashi
              </span>
              <span className="text-red-600 text-[10px] font-bold uppercase tracking-wider">
                Edge of Excellence
              </span>
            </div>
          </Link>

          {/* ── Desktop Menu ── */}
          <ul className="hidden lg:flex items-center flex-1">
            {/* Home */}
            <li>
              <Link
                to="/"
                className="
                  flex items-center h-16 px-4
                  text-[13px] font-semibold uppercase
                  tracking-wide text-gray-300
                  hover:text-white transition-colors relative
                  after:absolute after:bottom-0 after:left-4 after:right-4
                  after:h-0.5 after:bg-red-600 after:scale-x-0
                  hover:after:scale-x-100 after:transition-transform after:duration-200
                "
              >
                Home
              </Link>
            </li>

            {/* Dropdown nav items */}
            {NAV_ITEMS.map((item) => (
              <NavDropdown key={item.label} item={item} />
            ))}

            {/* Contact Us */}
            <li>
              <a
                href="#contact"
                className="
                  flex items-center h-16 px-4
                  text-[13px] font-semibold uppercase
                  tracking-wide text-gray-300
                  hover:text-white transition-colors relative
                  after:absolute after:bottom-0 after:left-4 after:right-4
                  after:h-0.5 after:bg-red-600 after:scale-x-0
                  hover:after:scale-x-100 after:transition-transform after:duration-200
                "
              >
                Contact Us
              </a>
            </li>
          </ul>

          {/* ── Right Icons ── */}
          <div className="flex items-center gap-2 ml-auto">
            <button className="w-10 h-10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#1a1a1a] rounded">
              <SearchIcon />
            </button>

            <button className="hidden lg:flex w-10 h-10 items-center justify-center text-gray-300 hover:text-white hover:bg-[#1a1a1a] rounded">
              <UserIcon />
            </button>

            <button className="relative w-10 h-10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#1a1a1a] rounded">
              <CartIcon />
              <span className="absolute top-1 right-1 w-4 h-4 bg-red-600 text-white text-[10px] rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col gap-[5px] p-2"
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-white ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Drawer ── */}
      <div
        className={`
          lg:hidden fixed top-16 left-0 right-0 bottom-0
          bg-[#0a0a0a] overflow-y-auto z-40
          transition-transform duration-300
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Home */}
        <Link
          to="/"
          onClick={() => setMobileOpen(false)}
          className="
            block px-6 py-4 text-sm font-bold uppercase
            tracking-widest text-gray-300
            border-b border-[#1e1e1e] hover:text-white
          "
        >
          Home
        </Link>

        {NAV_ITEMS.map((item) => (
          <MobileAccordion
            key={item.label}
            item={item}
            onNavigate={() => setMobileOpen(false)}
          />
        ))}

        {/* Contact Us */}
        <a
          href="#contact"
          onClick={() => setMobileOpen(false)}
          className="
            block px-6 py-4 text-sm font-bold uppercase
            tracking-widest text-gray-300
            border-b border-[#1e1e1e] hover:text-white
          "
        >
          Contact Us
        </a>
      </div>
    </>
  );
}
