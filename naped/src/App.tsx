import { GlobalStyles } from "./GlobalStyles";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Series } from "./pages/Series";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/series" element={<Series />} />
      </Routes>

      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
