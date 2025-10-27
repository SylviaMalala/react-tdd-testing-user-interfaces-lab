import React from 'react'
import './home.css'

export default function Home() {
  return (
    <div className="home-container">
      <h1>Hi, I am Sylvia Malala</h1>
      <p>Welcome to my homepage!</p>  
      <img src="/img1.jpeg" alt="Myself" />
      <h2>About Me</h2>
      <p>I am a passionate developer with a love for creating web applications.</p>
      <h2>Contact Me</h2>
      <p>You can reach me at:</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/sylvia-malala-a770051b4" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <span> | </span>
        <a href="https://github.com/SylviaMalala" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </div>
  )
}
