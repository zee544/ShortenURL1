import React, { useState } from "react";
import "./About.css";
import "./faq.css";

function About() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Q1: What is an Auto-Generate Link?",
      answer: "An auto-generated link is created automatically from any long URL. Just paste your URL and click 'Generate Short URL', and the system generates a unique short link ready to share."
    },
    {
      question: "Q2: What is a Custom Link?",
      answer: "A custom link allows you to choose a memorable alias for your short URL. For example, instead of a random code like abc123, you can create yourdomain.com/my-link. The alias must be unique."
    },
    {
      question: "Q3: How do I use the Auto-Generate Link feature?",
      answer: (
        <ul>
          <li>Paste your long URL into the input box.</li>
          <li>Click "Generate Short URL".</li>
          <li>Copy the generated short link and share it anywhere.</li>
        </ul>
      )
    },
    {
      question: "Q4: How do I use the Custom Link feature?",
      answer: (
        <ul>
          <li>Paste your long URL.</li>
          <li>Enter your desired custom alias.</li>
          <li>Click "Generate Short URL".</li>
          <li>Share your custom link like ........</li>
        </ul>
      )
    },
    {
      question: "Q5: Why should I use Link Shortener?",
      answer: "It makes long URLs clean, short, and easy to share. Custom links help you create memorable URLs for marketing, social media, or personal use."
    },
    {
      question: "Q6: Is Auto Link Shortener free and secure?",
      answer: "Yes! All features are completely free, and your URLs are safely stored."
    }
  ];

  return (
    <div className="about-wrapper">
      <div className="about-card">
        <h1 className="about-head">About Link Shortener</h1>
        <div className="about-para">
          <p>
            <b>Link Shortener</b> is a fast and easy tool to turn long URLs into
            short, shareable links. It helps you share links clearly on social
            media, emails, or messaging apps.
          </p>
          <h5 className="about-sub">Features</h5>
          <ul className="list-about">
            <li>
              <i>Auto-Generated Links:</i> Quickly generate a short link from
              any long URL.
            </li>
            <li>
              <i>Custom Links:</i> Create memorable links with your own custom
              alias.
            </li>
            <li>
              <i>Secure & Free:</i>All links are safe, easy to share, and
              generated instantly.
            </li>
          </ul>
          <p>
            With <b>Auto Link Shortener</b> and <b>Customize Link</b>, you get
            clean, clickable URLs in seconds, making link sharing effortless.
          </p>
        </div>
      </div>
    
      <section className="faq-container">
        <h1 className="faq-title">FAQ</h1>
        <p className="faq-subtitle">
          Learn how Auto-Generate Links and Custom Links work
        </p>

        {faqItems.map((item, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <h3>{item.question}</h3>
            <div className="faq-answer">
              {typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}
            </div>
          </div>
        ))}
      </section>
     
    </div>
  );
}

export default About;