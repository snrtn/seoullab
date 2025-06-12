import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "@view/HomeView";
import Layout from "@view/LayoutView";
import MenuPage from "@view/MenuPage"; // ← 이거 추가

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<MenuPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
