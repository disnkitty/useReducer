import { useReducer } from 'react';
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'reset':
      return { ...state, count: 0 };
    case 'incrementByFive':
      return { ...state, count: state.count + action.payload };
    case 'incrementBy':
      return { ...state, count: state.count + action.payload };
    case 'updateInput':
      return {...state, inputValue: action.payload};
    default:
      return 'che za biliberda';
  }
}
const initialState = { count: 0, inputValue: '' };
function App() {
  function handleIncrementBy() {
    const value = parseInt(state.inputValue, 10);
    if (!isNaN(value)) {
      dispatch({ type: 'incrementBy', payload: value });
    }
    dispatch({ type: 'updateInput', payload: '' });
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>{state.count}</p>

      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'incrementByFive', payload: 5 })}>
        +5
      </button>
      <div>
        <input
          type="number"
          value={state.inputValue}
          onChange={(e) => dispatch({type: 'updateInput', payload: e.target.value})}
        />
        <button onClick={handleIncrementBy}>Increment by</button>
      </div>
    </div>
  );
}

export default App;
