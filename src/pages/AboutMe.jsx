import React from "react";
import "./AboutMe.css";
import myPhoto from "../assets/photo_2025-05-06_01-21-47.jpg";
import { FaCode, FaShapes, FaPaintBrush, FaFileAlt } from "react-icons/fa";

function AboutMe() {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <div className="about-header">
          <img src={myPhoto} alt="Моє фото" className="about-photo" />
          <div className="about-intro">
            <h1 className="about-title">Про мене</h1>
            <p className="about-text">
            Привіт, мене звати Яна. Навчаюсь в університеті, цікавлюсь веброзробкою, дизайном інтерфейсів та графікою. Працюю з HTML, CSS, JavaScript і React, створюю макети у Photoshop та Figma. Впевнено володію програмами Microsoft Office: Word, Excel, і Access. Швидко навчаюсь і завжди відкрита до нових знань.
            </p>
          </div>
        </div>

        <blockquote className="quote">
          “Все здається неможливим, доки це не зробиш.» — Нельсон Мандела” 
        </blockquote>

        <h2 className="section-title">Навички</h2>
        <div className="skills">
          <div className="skill-card"><FaCode /><p>Front-End</p></div>
          <div className="skill-card"><FaShapes /><p>Figma</p></div>
          <div className="skill-card"><FaPaintBrush /><p>Photoshop</p></div>
          <div className="skill-card"><FaFileAlt /><p>MS Office</p></div>
        </div>

        <h2 className="section-title">Мої цінності та захоплення</h2>
        <p className="about-text">
        Ціную щирість, постійний розвиток і естетику в деталях. Мені подобається вчитися, знаходити красу у простих речах і створювати щось, що має сенс. Надихаюсь спілкуванням, новими ідеями та роботою, яка приносить користь.
        </p>

        <h2 className="section-title">Досвід навчання</h2>
        <p className="about-text">
        Вивчаю фронтенд-розробку в університеті та самостійно. Працювала над кількома проєктами з HTML, CSS, JavaScript та React. Також цікавлюсь вебдизайном — маю базові навички роботи з Figma та Photoshop, вивчаю принципи UI/UX, щоб створювати зручні та естетичні інтерфейси.
        </p>

        <h2 className="section-title">Мої проєкти</h2>
        <div className="project-category">
          <h3>HTML + CSS</h3>
          <a className="project-btn" href="https://github.com/yanisiaa/Mamma_Mia.git" target="_blank" rel="noreferrer">Mamma-Mia</a>
          <a className="project-btn" href="https://github.com/yanisiaa/html-css-landing.git" target="_blank" rel="noreferrer">Landing</a>
        </div>
        <div className="project-category">
          <h3>JavaScript</h3>
          <a className="project-btn" href="https://github.com/yanisiaa/js-DOM1.git" target="_blank" rel="noreferrer">JS DOM1</a>
          <a className="project-btn" href="https://github.com/yanisiaa/js-DOM2.git" target="_blank" rel="noreferrer">JS DOM2</a>
        </div>
        <div className="project-category">
          <h3>React</h3>
          <a className="project-btn" href="https://github.com/yanisiaa/React-router-dom_Lab_16.git" target="_blank" rel="noreferrer">Інтерфейс</a>
          <a className="project-btn" href="https://github.com/yanisiaa/react-second-lab.git" target="_blank" rel="noreferrer">Галерея</a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
