import React from 'react';
import './Home.css';
import pic1 from './pic1.png';
import pic2 from './pic2.png';
import pic3 from './pic3.png';

const Home = () => {
  return (
    <main className='home-div' role="main" aria-label="Home page content">
      <section className='section-beige' aria-labelledby="mission-vision-title">
        <h1 align='center' id="mission-vision-title">🌟 Mission, Vision & Values of Recipe Realm 🌟</h1>
        <div className='container-scrollable' id="container-1">
          <p>
            The lifestyles we lead and the environments we work in have brought about drastic changes in our health over the past few decades.
            🏙️ With urban routines becoming increasingly taxing—polluted surroundings 🌫️, irregular work hours ⏰, and high-stress levels 💼—many of us face physical fatigue and mental burnout 😞.
          </p>
          <p>
            As the world around us evolves, it's crucial to pause, reflect, and prioritize what fuels us: food and fitness 🍲💪.
          </p>
          <p>That's where <strong>Recipe Realm</strong> steps in!
          </p>
          <p><strong>🚀 Our Mission:</strong></p>
          <p>
            To inspire and empower people of all backgrounds to reclaim their health through creative, nutritious, and easy-to-make recipes. We aim to make healthy living simple, exciting, and accessible! 🥗👩‍🍳✨
          </p>

          <p><strong>🌈 Our Vision:</strong></p>
          <p>
            To build a vibrant, global community where food is more than sustenance—it’s a source of joy, wellness, and connection 🌍❤️. We envision a world where cooking becomes a daily ritual of self-love and well-being.
          </p>

          <p><strong>💡 Our Core Values:</strong></p>
          <ul>
            <li>🔥 <strong>Inspiration</strong> — Encouraging creativity in the kitchen</li>
            <li>🧘‍♂️ <strong>Wellness First</strong> — Promoting a holistic and healthy lifestyle</li>
            <li>🧂 <strong>Simplicity</strong> — Making every recipe doable and fun</li>
            <li>🌿 <strong>Sustainability</strong> — Caring for our planet as much as our plates</li>
            <li>🤝 <strong>Community</strong> — Fostering togetherness, sharing, and growth</li>
          </ul>
        </div>
      </section>

      <section className='section-bisque' aria-labelledby="how-to-use-title">
        <h1 id="how-to-use-title">📖 How to Use</h1>
        <div className='container-scrollable' id="container-2">
          <ol>
            <li>Enter each ingredient in the search bar and press Enter when it appears in the auto-suggest list.</li>
            <li>Check that all the ingredients show up in the yellow boxes below.</li>
            <li>Click the <strong>'Generate Recipe'</strong> button to see a recipe based on your selected ingredients.</li>
            <li>Explore the dishes and click any of them for full details.</li>
            <li>Use the chatbot anytime for instant help or cooking guidance. 🤖</li>
          </ol>
          <img src={pic1} alt="Search Bar" />
          <img src={pic2} alt="Yellow Boxes" />
          <img src={pic3} alt="Generate Button" />
        </div>
      </section>
    </main>
  );
};


export default Home;
