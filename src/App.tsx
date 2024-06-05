import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import SaudeMentalEErvas from "@/pages/saudeMentalEErvas";
import SaudeMentalETecnologia from "@/pages/saudeMentalETecnologia";
import SaudeMentalEAtividadeFisica from "@/pages/saudeMentalEAtividadeFisica";
import ProdArtisticaXsaudeMental from "@/pages/saudeMentalxProdArtistica";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<SaudeMentalEErvas />} path="/ervas" />
      <Route element={<SaudeMentalETecnologia />} path="/saudeTec" />
      <Route element={<SaudeMentalEAtividadeFisica />} path="/saudeFisica" />
      <Route element={<ProdArtisticaXsaudeMental />} path="/saudeProd" />
    </Routes>
  );
}

export default App;
