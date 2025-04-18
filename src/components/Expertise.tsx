import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython, faJava, faJs, faGithub } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import 'devicon/devicon.min.css';

const labelsFirst = [
    "React",
    "Java",
    "Python",
    "C",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Git",
    "Project Management",
    "MySQL",
    "Spring Boot",
];

const labelsSecond = [
    "Python",
    "Pandas",
    "NumPy",
    "matplotlib",
    "sklearn",
    "Git",
];

const labelsThird = [
    "NLP",
    "Sentiment Analysis",
    "PyTorch",
    "Git",
    "Python",
    "Pandas",
    "NumPy",
    "matplotlib",
    "sklearn",
];

function Expertise() {
    return (
      <div className="container" id="expertise">
        <div className="skills-container">
          <h1>Expertise</h1>
          <div className="skills-grid">
  
            {/* SOFTWARE ENGINEERING */}
            <div className="skill">
              {/* ← new wrapper for spacing */}
              <div className="icon-row">
                <i
                    className="devicon-java-plain colored"
                    style={{ fontSize: '3rem' }}
                />
                <i
                    className="devicon-javascript-plain colored"
                    style={{ fontSize: '3rem' }}
                />
                <i
                    className="devicon-react-plain colored"
                    style={{ fontSize: '3rem' }}
                />
                <i
                    className="devicon-mysql-original colored"
                    style={{ fontSize: '3rem' }}
                />
                <i
                    className="devicon-git-plain colored"
                    style={{ fontSize: '3rem' }}
                />
              </div>
  
              <h3>Software Engineering</h3>
              <p>
                I have experience both building web applications from scratch and extending
                existing applications using modern technologies. I have worked with both
                frontend & backend development.
              </p>
              <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>
                {labelsFirst.map((label, index) => (
                  <Chip key={index} className="chip" label={label} />
                ))}
              </div>
            </div>
  
            {/* DATA SCIENCE */}
            <div className="skill">
              <div className="icon-row">
              <i
                    className="devicon-python-plain colored"
                    style={{ fontSize: '3rem' }}
                />
                <i
                    className="devicon-pytorch-plain colored"
                    style={{ fontSize: '3rem' }}
                />
                <i
                    className="devicon-numpy-plain colored"
                    style={{ fontSize: '3rem' }}
                />
                <i
                    className="devicon-scikitlearn-plain colored"
                    style={{ fontSize: '3rem' }}
                />
                <i
                    className="devicon-git-plain colored"
                    style={{ fontSize: '3rem' }}
                />
              </div>
              <h3>Data Science</h3>
              <p>
                I have experience performing data analysis and conducting research with
                various pipelines and goals. I have worked particularly with Python and its
                many data science libraries.
              </p>
              <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>
                {labelsSecond.map((label, index) => (
                  <Chip key={index} className="chip" label={label} />
                ))}
              </div>
            </div>
  
            {/* MACHINE LEARNING */}
            <div className="skill">
              <div className="icon-row">
                <i
                    className="devicon-python-plain colored"
                    style={{ fontSize: '3rem' }}
                />
                <i
                    className="devicon-pytorch-plain colored"
                    style={{ fontSize: '3rem' }}
                />
                <i
                    className="devicon-numpy-plain colored"
                    style={{ fontSize: '3rem' }}
                />
                <i
                    className="devicon-scikitlearn-plain colored"
                    style={{ fontSize: '3rem' }}
                />
                <i
                    className="devicon-git-plain colored"
                    style={{ fontSize: '3rem' }}
                />
              </div>
              <h3>Machine Learning</h3>
              <p>
                I have experience conducting research with, building, and innovating to
                enhance machine learning techniques and projects. I am particularly
                experienced with the general machine learning pipeline and the PyTorch
                framework.
              </p>
              <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>
                {labelsThird.map((label, index) => (
                  <Chip key={index} className="chip" label={label} />
                ))}
              </div>
            </div>
  
          </div>
        </div>
      </div>
    )
  }

export default Expertise;