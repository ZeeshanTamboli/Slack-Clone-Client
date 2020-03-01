import styled from 'styled-components';
import { colorPrimary } from '../../../common/styles/colors';
import { Button } from 'semantic-ui-react';

export const FormButton = styled(Button)({
  backgroundColor: `${colorPrimary} !important`,
  color: 'white !important'
});

export const StyledErrorMessage = styled.div`
  color: red;
`;
