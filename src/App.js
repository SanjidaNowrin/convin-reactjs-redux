import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from './Components/Users/Users';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />}>
          <Route path="/users"  element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
