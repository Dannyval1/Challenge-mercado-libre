import React from "react";
import { Header } from "./Header";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Pruebas del Header", () => {
  test("Header test", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const btn_search = getByTestId("btn_search");
    fireEvent.click(btn_search);

    const btn_go_home = getByTestId("btn_go_home");
    fireEvent.click(btn_go_home);

    const input_query = getByTestId("input_query");
    fireEvent.change(input_query, { target: { value: "perro" } });
  });
});
