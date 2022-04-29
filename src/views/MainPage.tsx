import React from "react";
import { Header } from "../views/Header/Header";
import { Footer } from "../views/Footer/Footer";


const MainPage = ({ children }: any) => {
  return (
    <>
      <Header />
      <main className="pb-5">{children}</main>
      <Footer />
    </>
  );
};

export default MainPage;
