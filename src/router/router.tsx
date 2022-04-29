import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../views/MainPage";
import { Index } from "../views/Index/Index";
import {ProductDetail} from "../views/ProductDetail/ProductDetail";
import {QueryResult} from "../views/QueryResult/QueryResult";

export default function Router() {
  return (
    <BrowserRouter>
      <MainPage>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/items" element={<QueryResult />} />
          <Route path="/items/:id" element={<ProductDetail />} />
        </Routes>
      </MainPage>
    </BrowserRouter>
  );
}
