
"use client";
import '../Styles/Navbar.css';
import { useState } from 'react';
import { FiAlignJustify, FiX } from 'react-icons/fi';
import Link  from 'next/link';
import Image from 'next/image';
import LogoImage from '../../public/Assets/logo1.png'

const dummyUser = {
  isLoggedIn: false,
  // toggle to true to simulate logged-in state
  username: "JohnDoe",
  profilePic: "./foid-assets/userImg.jpg"
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = dummyUser;

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logoarea">
        <Image
          src={LogoImage}
          alt="Logo"
          width={50}
          height={50} >
        </Image>
        <div className="CompanyName">
          <p className='Name'>FOID</p>
        </div>
      </div>

      <div className={`menuarea ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <Link href={"/"} onClick={closeMenu}>
              <button className="btn-primary">Home</button>
            </Link>
          </li>
          <li>
            <Link href="/MainEducation" onClick={closeMenu}>
              <button className="btn-primary">Education</button>
            </Link>
          </li>
          <li>
            <Link href="/Mainevent" onClick={closeMenu}>
              <button className="btn-primary">Events</button>
            </Link>
          </li>
          <li>
            <Link href="/MainaboutUs" onClick={closeMenu}>
              <button className="btn-primary">About</button>
            </Link>
          </li>
        </ul>

        <div className='loginarea'>
          {user.isLoggedIn ? (
            <div className="profile">
              <img src={user.profilePic} alt="Profile" className="profile-pic" />
              <span className="username">{user.username}</span>
            </div>
          ) : (
            <>
              <button className="btn btn-primary">Login</button>
              <button className="btn btn-outline-primary">Sign Up</button>
            </>
          )}
        </div>
      </div>

      <div className='menuBtn' onClick={toggleMenu}>
        {menuOpen ? <FiX size={24} /> : <FiAlignJustify size={24} />}
      </div>
    </nav>
  );
};

export default Navbar;