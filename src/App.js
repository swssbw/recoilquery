import "./App.css";
import { RecoilRoot } from "recoil";
import User from "./components/User";
import Info from "./components/Info";

function App() {
  return (
    <RecoilRoot>
      <User />
      <Info />
    </RecoilRoot>
  );
}

export default App;
