import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Index } from "../views/Index/Index";


export default function Router() {
  return (
      <BrowserRouter>
        {/* <MainPage> */}
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
        {/* </MainPage> */}
      </BrowserRouter>
  );
}
