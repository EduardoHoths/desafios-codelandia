import { GlobalStyles } from "./GlobalStyles";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Series } from "./pages/Series";
import { Notice } from "./pages/Notice";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/series" element={<Series />} />
        <Route path="/notice/:category/:id" element={<Notice />} />
      </Routes>

      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
