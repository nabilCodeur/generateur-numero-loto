import { render, screen } from "@testing-library/react-native";
import MainTitle from "../MainTitle";

describe("MAin title", () => {
  test("title should be present", () => {
    render(<MainTitle />);
    const title = screen.getByRole("text", { name: "Grille" });
  });
});
