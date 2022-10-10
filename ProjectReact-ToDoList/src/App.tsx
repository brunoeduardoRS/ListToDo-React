import reactLogo from "./assets/react.svg";
import "./global.css";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Task } from "./components/Task";

import styles from "./App.module.css";
function App() {
  return (
    <div>
      <Header />
      <Input />
    </div>
  );
}
export default App;
