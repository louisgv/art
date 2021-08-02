import Layout from "../components/layout";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { AnimatedCard } from "components/animated-card";
import Header from "next/head";

import React from "react";

const Background = styled.main`
  padding: 40px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 100vh;

  background: #7f00ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #e100ff,
    #7f00ff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #e100ff,
    #7f00ff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const globalPopulation = 7794799000;
const usaPopulation = 331003000;
const koreaPopulation = 25779000;

const Input = styled.input`
  max-width: 704px;

  width: calc(100% - 16px);
  border: none;

  height: 64px;

  font-size: 32px;
  font-weight: bold;
  text-align: center;

  padding: 8px;

  color: white;

  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  margin-bottom: 8px;
`;

const TwoCardSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-between;
  align-items: center;
  flex-basis: 180px;

  width: 100%;

  max-width: 720px;
`;

const SingleCardSection = styled(TwoCardSection)`
  justify-content: stretch;
  align-items: stretch;
`;

export default function Population() {
  const [count, setCount] = React.useState(0);

  return (
    <Background>
      <Header>
        <title>Population</title>
      </Header>
      <Input
        type="number"
        onChange={(e) => setCount(parseInt(e.target.value || 0))}
      />
      <SingleCardSection>
        <AnimatedCard>
          <h1>{((count / globalPopulation) * 100).toFixed(2)}%</h1>
          <h3>{"🌐"}</h3>
        </AnimatedCard>
      </SingleCardSection>

      <TwoCardSection>
        <AnimatedCard>
          <h1>{((count / usaPopulation) * 100).toFixed(2)}%</h1>
          <h3>{"USA"}</h3>
        </AnimatedCard>

        <AnimatedCard>
          <h1>{((count / koreaPopulation) * 100).toFixed(2)}%</h1>
          <h3>{"KR"}</h3>
        </AnimatedCard>
      </TwoCardSection>

      <SingleCardSection>
        <AnimatedCard
          style={{
            height: 80,
          }}
        >
          Made with {"❤☮🤚"}
        </AnimatedCard>
      </SingleCardSection>
    </Background>
  );
}
