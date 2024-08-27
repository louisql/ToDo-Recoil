import logo from "./logo.svg";
import "./App.css";
import Todos from "./components/Todos";
import { RecoilRoot, useRecoilValue } from "recoil";
import totalTodos from "./state/selectors/TotalTodos";

function App() {
  const totalTodosState = useRecoilValue(totalTodos);
  
  return (
    <div className="App">
      <h1>React App</h1>
      <Todos />
      <h3>Total Todos: {totalTodosState}</h3>
    </div>
  );
}

export default App;
