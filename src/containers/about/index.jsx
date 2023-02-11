import React from "react";
import {BsPerson} from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./style.scss";
import { DiNodejs, DiReact } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails =[
        {
           label:"Name:",
           value:"Divya Porwal"
        },
        {
            label:"Age:",
            value:"21"
         },
         {
            label:"Address:",
            value:"Etawah, Uttar Pradesh"
         },
         {
            label:"Email:",
            value:"divyaporwal100@gmail.com"
         },
         {
            label:"Contact No.:",
            value:"+916396057677"
         }
     
]; 

const jobSummary =
  "I am a pre-final year student from Kamla Nehru Institute of Technology Sultanpur pursuing a Bachelor of Technology in Information Technology.I love competitive programming and problem-solving and have solved 1200+ problems on different programming platforms. I am also a Full Stack Developer and done two hands on project using MERN stack. I am an innovative and agile learner with a keen interest in new technologies. I am a detailed oriented person and keep my goals and tasks organized to maintain productivity.";


const About= () =>
{
    return (
        <section className="about" id="about">
        <PageHeaderContent 
        headerText="About Me"
        icon ={<BsPerson size={40}/>}/>
         <div className="about__content">
         <div className="about__content__personalWrapper">
         <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateX(-900px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        
          <h3>Full Stack Developer</h3>
          <p>{jobSummary}</p>
           </Animate>

           <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateX(500px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
           </Animate>
         </div>
         <div className="about__content__servicesWrapper">
         <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateX(600px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
         <div className="about__content__servicesWrapper__innerContent">
         <div> <FaDatabase color="var(--yellow-theme-main-color)" size={60}/></div>
            <div><FaDev color="var(--yellow-theme-main-color)" size={60} /></div>
            <div><DiNodejs color="var(--yellow-theme-main-color)" size={60}/></div>
            <div><DiReact color="var(--yellow-theme-main-color)" size={60}/></div>
         </div>
         </Animate>   
         </div>
         </div>

        </section>

    )
}

export default About;