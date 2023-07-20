import Home from "./pages/Home.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInModal from "./components/SignInModal.tsx";
import SignupModal from "./components/SignupModal.tsx";

function App() {
  return (
    <>
      <Home />
      <BrowserRouter>
        <Routes>
          <Route path={"/login"} element={<SignInModal />} />
          <Route path={"/register"} element={<SignupModal />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
