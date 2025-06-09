import Greeting from "./Greeting"; // Importerar React-komponenten Greeting som ska testas
import { render, screen } from "@testing-library/react"; // Funktioner för att rendera komponenten och söka i DOM
import { expect, test } from "vitest"; // Testfunktioner från testbiblioteket Vitest

// Definierar ett test med beskrivningen "visa hälsning med namn"
test("visa hälsning med namn", () => {
  render(<Greeting name="Rachel" />); // Renderar komponenten Greeting med prop name="Rachel"
  const heading = screen.getByText(/Hej, Rachel/i); // Hittar element som innehåller texten "Hej, Rachel" (case-insensitive)
  expect(heading).to.exist; // Kontrollerar att elementet faktiskt finns (testet passerar om elementet hittas)
});
