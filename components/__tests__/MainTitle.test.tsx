import { render, screen } from "@testing-library/react-native";
import "@testing-library/react-native/extend-expect";
import MainTitle from "../MainTitle";

describe("Main title component", () => {
  test("subtitle should be present", () => {
     render(<MainTitle />);
    expect(
      screen.getByRole("text",{name:/Sélectionner le dé et\/ou vos numéros fétiches/i}),
    ).toBeOnTheScreen();
  });
});
