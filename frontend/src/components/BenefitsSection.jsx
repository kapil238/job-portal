// BenefitsSection.js
import React from "react";
import styled from "styled-components";

// Main Container
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #5f4d98;
  color: white;
  padding: 40px 20px;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

// Individual Benefit Card
const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  margin: 15px;
  flex: 1;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 768px) {
    margin: 20px;
  }
`;

// Title
const Title = styled.h2`
  font-size: 28px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 600;
`;


// Benefit Card Image
const CardImage = styled.img`
  max-width: 100px;
  margin-bottom: 15px;
  border-radius: 50%;
  display: block;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 250px;
  }
`;


const BenefitsSection = () => {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <div className="text-4xl font-bold">
        <Title>
          What makes <span className="text-[#6A38C2]">JobPortal better?</span>
        </Title>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <Card>
          <CardImage src="https://almablog-media.s3.ap-south-1.amazonaws.com/thumbnail_web3_developer_eaf4c16c2d.webp" alt="Simple Hiring" />
          <h3 className="my-5">Simple Hiring</h3>
          <p>
            Receive calls from qualified candidates in under an hour of posting
            a job.
          </p>
        </Card>
        <Card>
          <CardImage
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIWrYvrwbGEqgDaVoiE9uKsssnKqkfWqo6Ge2V1peIpR9QT87valjPKfemHiCtn3etoXc&usqp=CAU"
            alt="Intelligent Recommendations"
          />
          <h3 className="my-5">Intelligent Recommendations</h3>
          <p>
            Only the best candidates are recommended by our ML as per your
            requirements.
          </p>
        </Card>
        <Card>
          <CardImage
            src="https://almablog-media.s3.ap-south-1.amazonaws.com/thumbnail_web3_developer_eaf4c16c2d.webp"
            alt="Priority Customer Support"
          />
          <h3 className="my-5">Priority Customer Support</h3>
          <p>Prioritized customer support for paid plan users.</p>
        </Card>
      </div>
    </div>
  );
};

export default BenefitsSection;
