import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/home/Home";
import Layout from "./Header/Layout";
import Products from "./Components/home/Products";
import ClassCompos from "./Components/class-components/ClassCompos";
import { useSelector } from "react-redux";
import ContextApiUsecase from "./Components/contextApiConcepts/ContextApiUsecase";
import HooksConcepts from "./Components/hooksInReact/HooksConcepts";

function App() {

  const loggedIn = useSelector(state => state.isLoggedIn);

  return(
    <Layout>
      <Routes>
        {/* All path match excatly by default, Hence 'exact' is not supported and 
            NOT NEEDED in react router version 6+ for path="/" 
        */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={loggedIn ? <Products /> : <Navigate to={"/"} />} />
        <Route path="/contextApi" element={loggedIn ? <ContextApiUsecase /> : <Navigate to={"/"} />} />
        <Route path="/hooks" element={loggedIn ? <HooksConcepts /> : <Navigate to={"/"} />} />
        {/* /classComonents/* here * means ClassCompos have child routes defined in it  */}
        <Route path="/classComponents/*" element={loggedIn?<ClassCompos />:<Navigate to={"/"} />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Layout>
  )
}

export default App;
