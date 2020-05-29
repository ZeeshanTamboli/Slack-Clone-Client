import React, { useState } from "react";
import { CreateWorkspaceForm } from "./CreateWorkspaceForm";
import { JoinWorkspaceForm } from "./JoinWorkspaceForm";
import { HomePageStyled } from "./styles";

export const HomePage: React.FC = () => {
  const [activeIndex, setIndex] = useState<number>(-1);
  return (
    <HomePageStyled>
      <h1 style={{ textAlign: "center" }}>Slack Clone</h1>
      <JoinWorkspaceForm activeIndex={activeIndex} setIndex={setIndex} />
      <CreateWorkspaceForm activeIndex={activeIndex} setIndex={setIndex} />
    </HomePageStyled>
  );
};
