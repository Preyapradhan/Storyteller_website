import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    {
      title: "Once Upon a Time...",
      content: "In a world filled with countless stories, one website dared to bring them all together. Welcome to Storyteller, a place where stories come to life.",
      image: "welcome-image.png"
    },
    {
      title: "The Hero's Journey",
      content: "Our team embarked on a quest to create a platform where readers and writers can connect, share, and discover the magic of storytelling.",
      image: "hero-journey.png"
    },
    {
      title: "A Tale of Passion",
      content: "Fueled by a passion for words, we built Storyteller with the belief that stories can inspire, educate, and entertain. Each story is a new adventure waiting to be explored.",
      image: "tale-of-passion.png"
    },
    {
      title: "The Next Chapter",
      content: "Join us as we continue to write the story of Storyteller. Whether you're a reader seeking your next adventure or a writer ready to share your voice, your story begins here.",
      image: "next-chapter.jpg"
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSection((prevSection) => (prevSection + 1) % sections.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="about-page"
      style={{
        backgroundImage: `url(/images/${sections[currentSection].image})`,
      }}
    >
      <div className="story-narrative">
        <h1 className="section-title">{sections[currentSection].title}</h1>
        <p className="section-content">{sections[currentSection].content}</p>
        <div className="controls">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSection(index)}
              className={currentSection === index ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;