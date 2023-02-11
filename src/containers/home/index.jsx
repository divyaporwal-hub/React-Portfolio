import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import {SiLeetcode, SiCodechef,SiCodeforces} from "react-icons/si"
import {BsLinkedin,BsGithub} from "react-icons/bs";

const Home= () =>
{
    const navigate = useNavigate();
    const handleNavigateToContactMePage =()=>
    {
        navigate('/contact');
    }
    return (
        <secton id="home" className="home">
            <div className="home__text-wrapper">
            <h1>
                Hello, I'm Divya Porwal
                <br/>
                Full Stack Developer
            </h1>

            </div>
            <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
            <div className="home__contact-me">
            <button onClick={handleNavigateToContactMePage}>Hire Me</button>
            </div>
            </Animate>

            <Animate
        play
        duration={2}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >

            <div className="footer" >
                <a href="https://www.linkedin.com/in/divya-porwal-99604a204">
                <BsLinkedin className="icon" size={40} color="var(--yellow-theme-main-color)" />
                </a>
                <a href="https://leetcode.com/Divyaporwal/">
                <SiLeetcode className="icon" size={40} color="var(--yellow-theme-main-color)"/>
                </a>
                <a href="https://www.codechef.com/users/noerror123" target={"_blank"}>
                <SiCodechef className="icon" size={40} color="var(--yellow-theme-main-color)"/>
                </a>
                <a href="https://codeforces.com/profile/The__Optimist" target={"_blank"}>
                <SiCodeforces className="icon"  size={40} color="var(--yellow-theme-main-color)"/>
                </a>
                <a href="https://github.com/divyaporwal-hub" target={"_blank"}>
                <BsGithub className="icon" size={40} color="var(--yellow-theme-main-color)" />
                </a>
            </div>
            </Animate>
        </secton>
    )
}

export default Home;