import styled from 'styled-components';
import { Accordion } from 'semantic-ui-react';

export const HomePageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  /* source: http://www.brandgradients.com/slack-colors/ */
  background: linear-gradient(-120deg, #3eb991, #6ecadc, #e9a820, #e01563);
`;

export const AccordianStyled = styled(Accordion)`
  box-shadow: none !important;
`;
