/* eslint-disable react/prop-types */
import { useState } from "react";
import Logo from "./Logo";

const navMenuData = [
  {
    name: "Home",
    id: crypto.randomUUID(),
  },
  {
    name: "About Us",
    id: crypto.randomUUID(),
  },
  {
    name: "Contact Us",
    id: crypto.randomUUID(),
  },
  {
    name: "SignIn / SignUp",
    id: crypto.randomUUID(),
  },
];

const htmlId = ["home", "about", "contact"]; //html id in home, about, contact section

export default function NavBar({ onOpenSignIn }) {
  return (
    <nav>
      <div className="flex mx-auto max-w-7xl justify-between px-6">
        <Logo logoStyle={{ width: "120px" }} onOpenSignIn={onOpenSignIn} />
        <NavItem onOpenSignIn={onOpenSignIn} />
      </div>
    </nav>
  );
}

function NavItem({ onOpenSignIn }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((is) => !is);
  }
  return (
    <div className="flex items-center gap-4">
      <ul
        className={`flex uppercase font-semibold tracking-tight md:translate-x-0 md:opacity-100 md:visible md:pointer-events-auto md:flex-row md:static md:bg-transparent ${
          isOpen ? "ham-open" : "ham-close"
        }`}
      >
        {navMenuData.map((value, index) => (
          <NavList
            listItem={value}
            key={value.id}
            lastItem={navMenuData[navMenuData.length - 1]}
            index={index}
            onOpenSignIn={onOpenSignIn}
          />
        ))}
      </ul>
      <HamMenu onHandleClick={handleClick} />
    </div>
  );
}

function NavList({ listItem, lastItem, index, onOpenSignIn }) {
  const isLastItem = listItem.id === lastItem.id;
  return (
    <li
      className={`hover:bg-green-500 p-1 rounded-md hover:text-white ${
        isLastItem ? "bg-green-500 text-white" : ""
      }`}
      onClick={isLastItem ? onOpenSignIn : null}
    >
      <a href={index < 3 ? `#${htmlId[index]}` : "##"}>{listItem.name}</a>
    </li>
  );
}

function HamMenu({ onHandleClick }) {
  return (
    <>
      <svg
        width="40px"
        height="40px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="md:hidden relative z-10"
        onClick={onHandleClick}
      >
        <path
          d="M4 18L20 18"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 12L20 12"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 6L20 6"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
}
