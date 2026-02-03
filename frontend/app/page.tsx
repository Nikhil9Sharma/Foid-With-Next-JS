"use client";
import AboutUs from "./components/AboutUs";
import Projects from "./components/NavbarUpperPart";
import Contact from "./components/Ourteam";
import Profile from "./components/Event";
import JoiningForm from "./components/JoiningForm";
import Learnsection from "./components/Learnsection";

import { useState } from "react";

export default function Home() {
  const [activePage, setActivePage] = useState("about");
  switch (activePage) {
      case "AboutUs":
        return <AboutUs />;
      case "Projects":
        return <Projects />;
      case "Contact":
        return <Contact />;
      case "JoiningForm":
        return <JoiningForm />;
      case "Learnsection":
        return <Learnsection />;
      case "Profile":
        return <Profile />;
      default:
        // return <AboutMe />;
    }
  
  return (
<>
    <div></div>
</>
  );
}
