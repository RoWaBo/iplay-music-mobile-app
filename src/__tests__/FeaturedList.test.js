import { render, act, cleanup, waitFor } from "@testing-library/react";
import FeaturedList from "../components/FeaturedList";

describe('feautredList component', () => {

    afterEach(cleanup);

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
                    },
                    {
                        description: "The very best in new music from around the world",
                        id: 2,
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

    it('expert the playlists prop to be provided', () => {
        act(() => {
            render((<FeaturedList playlists={response.data.playlists.items}/>))
        })

        waitFor(() => {
            expect(playlists).toBeTruthy()
        })
    })

    it('expert the playlists prop to be an array', () => {
        act(() => {
            render((<FeaturedList playlists={response.data.playlists.items}/>))
        })

        waitFor(() => {
            expect(typeOf(playlists) === "Array").toBeTruthy()
        })
    })
})