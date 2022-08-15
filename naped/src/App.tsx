import { GlobalStyles } from "./GlobalStyles";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Series } from "./pages/Series";
import { Notice } from "./pages/Notice";
import { Animes } from "./pages/Animes";
import { Movies } from "./pages/Movies";
import { Games } from "./pages/Games";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/notice/:category/:id" element={<Notice />} />
          <Route path="/animes" element={<Animes />} />
          <Route path="/series" element={<Series />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/games" element={<Games />} />
        </Routes>

        <GlobalStyles />
      </BrowserRouter>
  );
}

export default App;
