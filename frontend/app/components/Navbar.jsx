"use client";

import "../Styles/Navbar.css";
import { useState } from "react";
import { FiAlignJustify, FiX } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

import LogoImage from "../../public/Assets/logo1.png";
import Profilepic from "../../public/Assets/userImg.jpg";

// dummy auth data
const dummyUser = {
  isLoggedIn: false, // change to true to test logged-in state
  username: "JohnDoe",
  profilePic: Profilepic,
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = dummyUser;

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logoarea">
        <Image src={LogoImage} alt="Logo" width={45} height={45} />
        <p className="Name">FOID</p>
      </div>

      {/* Menu */}
      <div className={`menuarea ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link href="/" onClick={closeMenu}><button>Home</button></Link>
          </li>
          <li>
            <Link href="/MainEducation" onClick={closeMenu}><button>Education</button></Link>
          </li>
          <li>
            <Link href="/Mainevent" onClick={closeMenu}><button>Events</button></Link>
          </li>
          <li>
            <Link href="/MainaboutUs" onClick={closeMenu}><button>About</button></Link>
          </li>
        </ul>

        {/* Account Button (ONLY ONE) */}
        <div className="loginarea">
          {user.isLoggedIn ? (
            <button className="account-btn">
              <Image
                src={user.profilePic}
                alt="Profile"
                width={32}
                height={32}
                className="profile-pic"
              />
              <span>{user.username}</span>
            </button>
          ) : (
            <button className="account-btn">
              Login
            </button>
          )}
        </div>
      </div>
      <div className="menuBtn" onClick={toggleMenu}>
        {menuOpen ? <FiX size={26} /> : <FiAlignJustify size={26} />}
      </div>
    </nav>
  );
};

export default Navbar;
