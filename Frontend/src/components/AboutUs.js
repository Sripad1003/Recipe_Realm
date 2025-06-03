import React from 'react';
import styled from 'styled-components';
import CreditPage from './Creditpage';
import './AboutUs.css'
const PageContainer = styled.main`
  background-color: #fba5fd;
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  color: #fff;
  box-sizing: border-box;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  transition: background-color 0.7s ease, color 0.7s ease;
`;

const TopSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 1rem;
  background-color: #333;
`;

const BottomSection = styled.section`
  flex: 1;
  overflow: hidden;
  padding: 1rem;
  background-color: #333;
`;

const TextBox = styled.div`
  color: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgb(24, 34, 10);
  max-width: 1200px;
  width: 90%;
  height: auto;
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.6;
  transition: background-color 0.7s ease, color 0.7s ease;
`;

const Heading = styled.h1`
  margin-top: 0;
  font-size: 2rem;
  font-weight: 700;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 1rem 0;
`;

const AboutSashakt = () => {
  return (
    <PageContainer role="main" aria-label="About Us page content">
      <TopSection>
        <TextBox>
          <Heading>Welcome to Recipe Realm!</Heading>
          <Paragraph>
            At Recipe Realm, we believe that every cook deserves to explore their
            culinary creativity in a way that sparks inspiration, encourages experimentation, and fosters a
            sense of accomplishment. Our team of six passionate individuals—Sudheep,
            Lalith, Yeshwanth, Tejaswini, Rithika, and Sripad—is dedicated to making
            your cooking experience an exhilarating adventure.
          </Paragraph>
          <Paragraph>
            In the vibrant world of Recipe Realm, users embark on a thrilling journey
            where new recipes are discovered through play, and mastering the art of cooking
            becomes an exciting quest. Our carefully crafted features, delightful
            interface, and engaging content weave together to create an immersive
            experience that not only educates but also entertains.
          </Paragraph>
          <Paragraph>
            Join us on this exciting expedition as we empower the chefs of tomorrow,
            one recipe at a time. Recipe Realm—because every cook deserves to be informed,
            inspired, and truly empowered!
          </Paragraph>
          <Paragraph>🚀 Let the culinary adventure begin! 🚀</Paragraph>
        </TextBox>
      </TopSection>
      <BottomSection>
        <CreditPage />
      </BottomSection>
    </PageContainer>
  );
};

export default AboutSashakt;
