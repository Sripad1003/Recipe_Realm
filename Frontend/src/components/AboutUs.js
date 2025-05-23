import React from 'react';
import styled from 'styled-components';
import CreditPage from './Creditpage'
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #333;
  color: #fff;
  box-sizing: border-box;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 10px;
`;

const BottomSection = styled.div`
  flex: 1;
  overflow: hidden;
  padding: 10px;
`;

const TextBox = styled.div`
  background-color: #4CAF50;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  width: 90%;
  height: auto;
  text-align: center;
`;

const Heading = styled.h1`
  margin-top: 0;
  font-size: 1.5em;
`;

const Paragraph = styled.p`
  font-size: 1em;
  line-height: 1.4;
  margin: 10px 0;
`;

const AboutSashakt = () => {
  return (
    <PageContainer>
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
