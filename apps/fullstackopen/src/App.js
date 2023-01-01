import "./App.css";
import { createStore } from "redux";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "ZERO":
      return 0;
    default:
      return state;
  }
};

const store = createStore(counterReducer);
store.subscribe(() => {
  const storeNow = store.getState();
  console.log(storeNow);
});
const generateId = () => Number((Math.random()*1000000).toFixed(0))

function App() {

  return <div className="App">
    <form onSubmit={}>
      <input name={'note'}/>
      <button type={"submit"}>add</button>
    </form>
    <ul>
      {store.getState().map(note=><li key={note.id} onClick={()=>toggleImportance(note.id)}>{note.content} <strong>{note.important?"important":""}</strong></li>)}
    </ul>
  </div>;
}

export default App;
