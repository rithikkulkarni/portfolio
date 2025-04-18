// src/components/Timeline.tsx
import React from "react";
import ncstateLogo  from '../assets/images/ncsulogo.png';
import axtra3dLogo  from '../assets/images/axtra3d.png';
import syntelliLogo from '../assets/images/syntelli.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>

          {/* NCSU */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Jan 2025 - present"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div className="timeline-header">
              <img
                src={ncstateLogo}
                alt="NCSU Logo"
                className="company-logo"
              />
              <div>
                <h3 className="vertical-timeline-element-title">
                  Undergraduate Research Associate
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  @ North Carolina State University
                </h4>
              </div>
            </div>
          </VerticalTimelineElement>

          {/* Axtra3D */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2024 - Jul 2024"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div className="timeline-header">
              <img
                src={axtra3dLogo}
                alt="Axtra3D Logo"
                className="company-logo"
              />
              <div>
                <h3 className="vertical-timeline-element-title">
                  Data Analytics Intern
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  @ Axtra3D
                </h4>
              </div>
            </div>
          </VerticalTimelineElement>

          {/* Syntelli Solutions */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Apr 2022 - May 2022"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div className="timeline-header">
              <img
                src={syntelliLogo}
                alt="Syntelli Solutions Logo"
                className="company-logo"
              />
              <div>
                <h3 className="vertical-timeline-element-title">
                  Software Development Intern
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  @ Syntelli Solutions
                </h4>
              </div>
            </div>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
