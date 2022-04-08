import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from './Components/Users/Users';
import SingleUser from './Components/SingleUser/SingleUser';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />}>
          <Route path="/users"  element={<Users />} />
          <Route path="/user/:id" element={<SingleUser/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
