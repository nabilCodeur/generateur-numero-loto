
import { render, screen } from "@testing-library/react-native";
import "@testing-library/react-native/extend-expect";
import ModalWarning from "../ModalWarning";

describe("ModalWarning component", () => {
    beforeEach(() => {
        render(<ModalWarning/>)
    }
    )
    test("should content welcome text and two warning text", () => {
       
        const welcomeText = screen.getByRole("text", { name: /Loto Quick génère pour vous des numéros à jouer/i });
        const warningText = screen.getByRole("text", { name: /Les jeux d'argents sont réservés aux personnes de plus de 18 ans/i });
        const secondWarningTExt = screen.getByRole("text", { name: /Cette application n'est pas affiliée à la FDJ/i });
        expect(warningText).toBeOnTheScreen();
        expect(welcomeText).toBeOnTheScreen();
        expect(secondWarningTExt).toBeOnTheScreen();
    }
    ),
        test("should contains button close",() => {
            const closeButton = screen.getByRole("button")
            expect(closeButton).toBeOnTheScreen()
            expect(closeButton).toHaveTextContent(/Fermer/i)
            expect(closeButton).toBeVisible()
            // expect(closeButton).toHaveProp("title","Fermer")
        }
        ),
        test("handlePress should be called on click button",() => {
            
        }
        )
}
)