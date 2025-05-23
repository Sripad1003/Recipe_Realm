import React from 'react';
import './Home.css';
import pic1 from './pic1.png';
import pic2 from './pic2.png';
import pic3 from './pic3.png';

const Home = () => {
  return (
    <div className='home-div'>
      <section className='section-beige'>
        <div className='container-scrollable' id="container-1">
          <h1>Mission, Vision & Values of Recipe Realm</h1>
          <p>The lifestyles we lead and the environments we work in have brought in drastic changes in our health over the past few decades. Urban lifestyles have become taxing on our bodies and mental health, due to polluted environments along with untimely work hours leading to physical and mental ailments and diseases. As the world is changing around us, it is important to pay attention to the food and fitness so we can battle all the challenges that the lifestyles dump onto us. And we are here to help you do that!</p>
        </div>
      </section>
      <section className='section-bisque'>
        <div className='container-scrollable' id="container-2">
          <h1>How-to-Use</h1>
          <p>1. Enter each ingredient in the search bar and press enter if you find it in the auto-suggest list. Check if all the ingredients appear below in the yellow boxes. After ensuring that all the items have been added, click the 'Generate Recipe' button. Your recipe will be generated based on the selected ingredients.</p>
          <img src={pic1} alt="Search Bar" />
          <p>2. Select any dish.</p>
          <img src={pic2} alt="Yellow Boxes" />
          <p>3. Use the chatbot for any queries</p>
          <img src={pic3} alt="Generate Button" />
        </div>
      </section>
    </div>
  );
};

export default Home;
