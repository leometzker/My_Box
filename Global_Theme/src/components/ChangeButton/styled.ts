import styled from 'styled-components'

export const ChangeButtonStyle = styled.button`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  width: 80%;
  height: 50px;
  border-radius: 8px;
  justify-content: center;
  margin: 3rem auto;
  background-color: ${props => props.theme.colors.secundary};
  color: ${props => props.theme.colors.primary};
  border: none;
  opacity: 70%;

  &:hover {
    opacity: 100%;
  }
`
