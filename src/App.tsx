import "./App.css";
import Sidebar from "./components/sidebar";
import Clock from "./components/clock";

function App() {
  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  // async function letMeTellYouSomething() {
  //   setTell(await invoke("tell"));
  // }

  return (
    <div className="flex flex-row justify-between">
      <Sidebar />
      <Clock />
    </div>
  );
}

export default App;
