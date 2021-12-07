import { render, screen, act, waitFor, cleanup } from "@testing-library/react";
import { AuthContext } from "../contexts/AuthContext";
import ThemeContextProvider from "../contexts/ThemeContext";
import Featured from "../views/Featured";
import axios from "axios";

describe("Featured component", () => {
    //vi skal lige fortælle jest at vi skal køre vores pseudo axios
    jest.mock("axios")
    afterEach(cleanup) //efter hver test unmounter/mounter igen
    const response = {
        data: {
            playlists: {
                items: [
                    {
                        description: "The very best in new music from around the world",
                        id: 1,
                        images: [
                            {
                                url: "https://via.placeholder.com/150"
                            }
                        ],
                        name: "New Music Friday"
                    }
                ]
            }
        }
    }
    const mockContext = {
        access_token: "1234"
    }
    it("Has the alt-text 'The very best in new music from around the world'", async () => {
        jest.spyOn(axios, "get").mockResolvedValue(response);
        //act metoden efterligner react (useEffect) ift renders
        act(() => {
            render(
                <AuthContext.Provider value={{ mockContext }}>
                    <ThemeContextProvider>
                        <Featured />
                    </ThemeContextProvider>
                </AuthContext.Provider>
            )
        })
        await waitFor(() => {
            const imageText = screen.getAllByAltText(/The very best in new music from around the world/i);
            expect(imageText).toBeInTheDocument();
        })
    })
})