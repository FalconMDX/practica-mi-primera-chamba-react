import Navbar from "./components/Navbar";
import Presidents from "./components/Presidents";
import Now3d from "./components/Now3d";
import Prefot from "./components/Prefot";
import Footter from "./components/Footter";

function App() {
  return (
    <div>
      <div className="mx-28">
        <Navbar/>
        <Presidents/>
        <Now3d/>
      </div>
      <Prefot/>
      <Footter/>
    </div>
  );
}

export default App;