import React from "react";
import {BsFileEarmarkPersonFill} from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component/dist-modules";
import "./style.scss";
import { data } from "./util";
import {MdWork} from 'react-icons/md';
import 'react-vertical-timeline-component/style.min.css'


const Resume= () =>
{
    return (
        <section className="resume" id="resume">
        <PageHeaderContent 
        headerText="Resume"
        icon ={<BsFileEarmarkPersonFill size={40}/>}/>

        <div className="timeline">
            <div className="timeline__achievements">
                <h3 className="timeline__achievements__header-text">ACHIEVEMENTS</h3>
                <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
            {data.achievements.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__achievements__vertical-timeline-element"
                contentStyle={{
                  background: 'none',
                  color : 'var(--yellow-theme-sub-text-color)',
                  border : '1.5px solid var(--yellow-theme-main-color)'
                }}
                icon={<MdWork/>}
                iconStyle={{
                  background : '#181818',
                  color : 'var(--yellow-theme-main-color)',

                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>
                    {item.title}
                  </h3>

                  <h4>
                    {item.subTitle}
                  </h4>
                </div>
                <p className="vertical-timeline-element-title-wrapper-description">{item.description} </p>

              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
            </div>
            <div className="timeline__education">
                <h3 className="timeline__education__header-text">EDUCATION</h3>
                <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
          {data.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__achievements__vertical-timeline-element"
                contentStyle={{
                  background: 'none',
                  color : 'var(--yellow-theme-sub-text-color)',
                  border : '1.5px solid var(--yellow-theme-main-color)'
                }}
                icon={<MdWork/>}
                iconStyle={{
                  background : '#181818',
                  color : 'var(--yellow-theme-main-color)',

                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>
                    {item.title}
                  </h3>

                  <h4>
                    {item.subTitle}
                  </h4>
                </div>
                <p className="vertical-timeline-element-title-wrapper-description">{item.description} </p>

              </VerticalTimelineElement>
            ))}
            </VerticalTimeline>
            </div>

        </div>

        </section>
    )
}

export default Resume;