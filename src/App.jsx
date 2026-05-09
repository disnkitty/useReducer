import { useReducer } from 'react';
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'reset':
      return { ...state, count: 0 };
    case 'incrementBy':
      return { ...state, count: state.count + action.payload };
    default:
      return 'che za biliberda';
  }
}
const initialState = { count: 0, initialValue: '' };
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>{state.count}</p>
      <div className="flex">
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        <button onClick={() => dispatch({ type: 'incrementBy', payload: 5 })}>
          +5
        </button>
      </div>
    </div>
  );
}

export default App;
