import styled from 'styled-components'

export const CounterStyled = styled.div`
  width: calc(100vw -50px);
  height: calc(100vh - 20px);

  justify-content: center;
  align-items: center;
  display: flex;
  align-items: center;
  font-size: 5rem;
  gap: 3rem;

  background-color: hsla(152, 90%, 30%, 30%);

  outline-offset: -5px;
  outline: 1px solid blue;
  border-radius: 15px;
  border: 1px solid blue;

  span {
    display: flex;
    justify-content: center;
    width: 5rem;
  }
  button {
    display: flex;
    justify-content: center;
    line-height: 0;
    padding: 2rem;
    height: 4rem;
    width: 4rem;
    font-size: 2rem;
    border-radius: 12px;
    border: solid 1px #4444ff;
    background-color: hsla(200, 90%, 30%, 10%);
  }
`
