import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background-color:  #e2e2e2;
  color:  #972424;
  font-size: 2rem;
  border-width: 0 0.3rem 0.3rem 0;
  border-radius: 1rem;
  border-style: solid;
  border-color:  #972424;
  transform: scale(1, 1);
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05, 1.05);
  }
`

export const ButtonCommand = styled(ButtonContainer)`
  background-color:  #972424;
  color: #e2e2e2;
`

export const ButtonLarge = styled(ButtonContainer)`
  grid-column: span 2;
  background-color: #cc3636;
`