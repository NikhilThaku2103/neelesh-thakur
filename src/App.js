// src/App.js
import React from 'react';
import './App.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

const Home = () => {
  return (
    <section id="home" className="section home-section">
      <div className="home-content">
        <div className="home-image">
          <img src="/WhatsApp_Image_2024-01-07_at_13.05.41-removebg-preview.png" alt="Nileshwar Thakur" />
        </div>
        <div className="home-text">
          <h2>NEELESHWAR THAKUR</h2>
          <p>
            From India to the United States, a journey of success. Renowned software engineer turned entrepreneur, 
            his story is a blend of tech expertise and culinary flair, creating a legacy that resonates with passion and purpose. 
            Unique in his Indian English accent, Nileshwar's narrative is a testament to resilience and triumph.
          </p>
        </div>
      </div>
    </section>
  );
};


const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>About</h2>
          <p>
            In the exciting journey of accomplishments, Nileshwar Thakur shines as a success story. Originally from India, 
            he moved to the United States, making his mark in software engineering. His unique Indian English accent adds a 
            special touch to his tale of triumph.
          </p>
          <p>
            Starting with a good job, Nileshwar soared in the world of software engineering, leaving his impact on various projects. 
            But his story doesn't stop there. Using his success wisely, he ventured into the restaurant business, creating a 
            thriving place that reflects his Indian roots.
          </p>
          <p>
            Nileshwar's journey is all about resilience and transformation, and his Indian English accent adds a warm touch to the narrative. 
            His story isn't just about career success; it's about embracing change and crafting a life full of passion and purpose in the United States.
          </p>
          <p> Please ignore if its too simple, it's my first react project(so Starting with you ) ;) </p>
        </div>
        <div className="about-image">
          <img src="/IMG_0977.JPG" alt="Nileshwar Thakur's Restaurant" />
        </div>
      </div>
    </section>
  );
};
// src/components/Contact.js


// src/components/Contact.js


const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-content">
        <h2>Contact</h2>

        <div className="contact-details">
          <p><strong>Email:</strong> Mamaeatz2020@gmail.com
</p>
          <p><strong>Phone:</strong> +1 (313)399-4149</p>
          <p><strong>Address:</strong> Lal Darwaza Hyderabad</p>
        </div>

        <form>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};







const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Home />
      <About />
      <Contact />
    </div>
  );
};

export default App;