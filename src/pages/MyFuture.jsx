import React from 'react';
import './MyFuture.css';
import meme1 from '../assets/memes/meme1.jpg';
import meme2 from '../assets/memes/meme2.jpg';
import meme3 from '../assets/memes/meme3.jpg';

function MyFuture() {
  return (
    <section className="future">
      <div className="future-container">
        <h1 className="future-title">Мій професійний розвиток</h1>

        <ul className="future-steps">
          <li><strong>2027:</strong> Завершити навчання, опанувати TypeScript, Next.js, розвиватися у Figma та UI/UX-дизайні, отримати позицію Junior Frontend Developer.</li>
          <li><strong>2028:</strong> Працювати над командними проєктами, розвивати сильні навички у фронтенді та дизайні, перейти на рівень Middle Developer.</li>
          <li><strong>2029:</strong> Відчувати професійну впевненість, мати стабільну роботу з улюбленими задачами, підтримувати баланс між розвитком і особистим життям.</li>
        </ul>

        <blockquote className="future-quote">
          “Твоя робота заповнить велику частину твого життя, і єдиний спосіб бути по-справжньому задоволеним — 
          робити те, що вважаєш великою справою.” — Стів Джобс
        </blockquote>

        <p className="future-text">
          Я прагну створювати зручні, естетичні інтерфейси, які покращують користувацький досвід. Моє бачення — 
          поєднувати технічну якість з продуманим дизайном. 
        </p>

        <h2 className="future-subtitle">Улюблені меми</h2>
        <div className="future-carousel">
          <img src={meme1} alt="Meme 1" className="carousel-image" />
          <img src={meme2} alt="Meme 2" className="carousel-image" />
          <img src={meme3} alt="Meme 3" className="carousel-image" />
        </div>
      </div>
    </section>
  );
}

export default MyFuture;
