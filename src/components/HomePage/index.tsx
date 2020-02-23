import React, { useState } from 'react';
import { CreateWorkspaceForm } from './CreateWorkspaceForm';
import { JoinWorkspaceForm } from './JoinWorkspaceForm';
import { HomePageStyled, AccordianStyled } from './styles';

export const HomePage = () => {
  const [activeIndex, setIndex] = useState<number>(-1);
  return (
    <HomePageStyled>
      <h1 style={{ textAlign: 'center' }}>Slack Clone</h1>
      <AccordianStyled styled>
        <JoinWorkspaceForm activeIndex={activeIndex} setIndex={setIndex} />
        <CreateWorkspaceForm activeIndex={activeIndex} setIndex={setIndex} />
      </AccordianStyled>
    </HomePageStyled>
  );
};
