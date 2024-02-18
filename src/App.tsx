import "./App.css";
import Sidebar from "./components/sidebar";

function App() {
  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  // async function letMeTellYouSomething() {
  //   setTell(await invoke("tell"));
  // }

  return (
    <div>
      <Sidebar />
    </div>
  );
}

export default App;
