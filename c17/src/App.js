import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SingIn from "./pages/singin/SingIn";
import SingUp from "./pages/singup/SingUp";
import ProtectedRoutes from "./components/protectedRoutes/ProtectedRoutes";
function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handlerUserRegistry = ({ name, email, password }) => {
    setUserInfo({ name: name, email: email, password: password });
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes isLogged={isLogged} />}>
          <Route path="/home" exact element={<Home />} />
        </Route>
        <Route
          path="/singin"
          exact
          element={<SingIn setIsLogged={setIsLogged} userInfo={userInfo} />}
        />
        <Route
          path="/singup"
          exact
          element={<SingUp setIsLogged={setIsLogged} userRegistry={handlerUserRegistry} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
