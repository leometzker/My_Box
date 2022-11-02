import { useReducer } from 'react'
import { CounterStyled } from './CounterStyled'

const defaultState = { counter: 0, step: 1 }

type State = typeof defaultState

type ActionType =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'double'; value: number }

export const Counter = () => {
  // \/\/\/\/\/\/\/ invocação/criação do useReducer \/\/\/\/\/\/
  const [{ counter, step }, dispatch] = useReducer(reducer, defaultState)

  function reducer(state: State, action: ActionType) {
    switch (action.type) {
      case 'increment':
        return { ...state, counter: state.counter + state.step }

      case 'decrement':
        return { ...state, counter: state.counter - state.step }

      case 'double':
        return { ...state, step: action.value }

      default:
        return state
    }
  }

  function increment() {
    dispatch({ type: 'increment' })
  }

  function decrement() {
    dispatch({ type: 'decrement' })
  }
  function double() {
    dispatch({ type: 'double', value: 2 })
  }

  return (
    <CounterStyled>
      <button onClick={() => dispatch({ type: 'double', value: 1 })}>x1</button>
      <button onClick={decrement}>-</button>
      <span>{counter}</span>
      <button onClick={increment}>+</button>

      <button onClick={double}>x2</button>
    </CounterStyled>
  )
}
