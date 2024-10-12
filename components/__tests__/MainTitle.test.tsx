import { render } from "@testing-library/react-native";
import MainTitle from "../MainTitle";

describe("MAin title", () => {
  test("title should be present", () => {
    const { getByText } = render(<MainTitle />);
    getByText(/Sélectionner le dé et\/ou vos numéros fétiches/);
  });
});
