
"use client";
import '../Styles/Navbar.css';
import { useState } from 'react';
import { FiAlignJustify, FiX } from 'react-icons/fi';
import Link  from 'next/link';
import Image from 'next/image';
import LogoImage from '../../public/Assets/logo1.png'
import Profilepic from "../../public/Assets/userImg.jpg";
const dummyUser = {
  isLoggedIn: false,
  // toggle to true to simulate logged-in state
  username: "JohnDoe",
  profilePic: {Profilepic},
};

const Navbar = () => {
  const [AccountBtnStatus, setAccountBtnStatus] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const user = dummyUser;

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const toggleAccountBtn = () => setAccountBtnStatus(!AccountBtnStatus);
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
              <Image src={user.profilePic} alt="Profile" className="profile-pic" ></Image>
              <span className="username">{user.username}</span>
            </div>
          ) : (
            <>
            <div className='form-open-button-area'>
              <button className="btn form-open-button" id="login-page-open-btn" >Login</button>
              <button className="btn form-open-button" id="signup-page-open-btn">Sign Up</button>
            </div>
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