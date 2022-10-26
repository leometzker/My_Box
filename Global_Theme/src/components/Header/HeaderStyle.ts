import styled from 'styled-components'

export const HeaderStyle = styled.header`
  width: 80vw;
  height: 80px;

  background-color: ${props => props.theme.colors.secundary};
  color: ${props => props.theme.colors.primary};

  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 15px;
`
