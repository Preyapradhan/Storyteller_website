import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CoverPage.css';
import { FaPencilAlt, FaSearch, FaUsers} from 'react-icons/fa'; // Import Font Awesome icons
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CoverPage = () => {
  return (
    <div className="cover-page">
      <div className="hero-section">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="pexels-mark-neal-201020-2954199.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>Welcome to Storyteller</h1>
              <p>Discover amazing stories or write your own!</p>
              <Link to="/stories" className="cta-button" >Get Started</Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="pexels-ianr-21854003.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h1>Welcome to Storyteller</h1>
              <p>Discover amazing stories or write your own!</p>
              <Link to="/stories" className="cta-button" >Get Started</Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="pexels-conojeghuo-185762.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h1>Welcome to Storyteller</h1>
              <p>Discover amazing stories or write your own!</p>
              <Link to="/stories" className="cta-button" >Get Started</Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="featured-section">
        <h1>Featured Stories</h1>
        <div className="featured-stories">
          <div className="story-card">
            <img src="Designer (1).png" alt="Featured Story 1" />
            <h2>Echoes of Eternity</h2>
            <h3> Genre: Fantasy</h3>
            <p> <strong>Synopsis: </strong>In a realm where time loops and reincarnation intertwine, follow the 
            tale of Amar, a young scholar who discovers he is the reincarnation of a legendary mage. As he unravels 
            the mysteries of his past lives, he must confront a dark force threatening to unravel the fabric of
            existence itself.</p>
          </div>
          <div className="story-card">
            <img src="My first design.png" alt="Featured Story 2" />
            <h2>Whispers in the Mist</h2>
            <h3> Genre: Mystery/Thriller</h3>
            <p><strong>Synopsis: </strong>In a fog-shrouded town nestled deep in the mountains, strange disappearances have plagued 
              the community for decades. Sarah, a determined journalist, arrives to uncover the truth behind these 
              vanishing acts. As she digs deeper, she uncovers a chilling secret buried within the misty veil that 
              threatens everyone she loves.</p>
          </div>
          <div className="story-card">
            <img src="Designer (2).png" alt="Featured Story 3" />
            <h2>Threads of Destiny</h2>
            <h3> Genre: Romance/Drama</h3>
            <p><strong>Synopsis:</strong> Against the backdrop of a bustling city, two souls—Liam, an aspiring musician, and Maya, 
              a talented artist—meet by chance. Drawn together by their shared dreams and ambitions, their lives 
              become intertwined in unexpected ways. But as their bond deepens, they must navigate past heartbreaks 
              and challenges to weave their destinies into a harmonious melody of love and creativity.</p>
          </div>
        </div>
      </div>
      <div className="overview-section">
        <h1>Website Overview</h1>
        <div className="overview-content">
          <div className="overview-card">
            <FaPencilAlt className="overview-icon" />
            <h2>Create and Share Stories</h2>
            <p>Our platform allows you to create your own stories and share them 
              with a wide audience. Use our powerful editor to write and format your 
              stories beautifully.</p>
          </div>
          <div className="overview-card">
            <FaSearch className="overview-icon" />
            <h2>Explore Various Genres</h2>
            <p>Discover stories across a wide range of genres including fantasy, 
              mystery, romance, thriller, and more. There's something for everyone!</p>
          </div>
          <div className="overview-card">
            <FaUsers className="overview-icon" />
            <h2>Join the Community</h2>
            <p>Connect with other readers and writers in our community. 
              Leave comments, give feedback, and support your favorite authors.</p>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>About Storyteller</h2>
            <p>Storyteller is a platform where you can discover and share amazing stories from various genres. Our goal is to connect readers and writers in a creative and supportive community.</p>
          </div>
          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li><Link to ="/">Home</Link></li>
              <li><Link to="/stories">Stories</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section social">
            <h2>Follow Us</h2>
            <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Storyteller. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CoverPage;
