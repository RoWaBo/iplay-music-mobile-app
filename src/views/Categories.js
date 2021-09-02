/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import NavigationBar from '../components/NavigationBar';
import HeadingPrimary from '../components/HeadingPrimary';
import MainFullViewContainer from '../components/MainFullViewContainer';
import useSpotifyApiFetch from '../functions/useSpotifyApiFetch';
import UtilityBar from '../components/UtilityBar';
import SubHeading from '../components/SubHeading';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { font, spacing } from '../style/Styles';
import { useState } from 'react';


const Categories = () => {

    const [categoryId, setCategoryId] = useState();
    const [isCategoryOpened, setIsCategoryOpened] = useState(false);

    const allCategories = useSpotifyApiFetch("https://api.spotify.com/v1/browse/categories")?.data.categories.items

    allCategories && console.log(allCategories);

    const categoryContainer = ({ colors }) => css`
        padding: 0 ${spacing.m};

        & > * {
            margin-bottom: ${spacing.m};
        }
    `
    const categoryButton = ({ colors }) => css`
        color: ${colors.font.secondary};
        background: grey;
        padding: ${spacing.s} ${spacing.m};
        display: flex;
        align-items: center;
        width: 100%;
        border-radius: 8px;
        border: none;

        & h2 {
            color: ${colors.font.secondary};
        }

        & svg {
            margin-left: auto;
            color: ${colors.font.secondary};
            font-size: ${font.size.xl}; 
        }
    `

    const toggle = e => {
        if (e.target.value === "false") {
            e.target.value = "true"
            setIsCategoryOpened(true)
        } else {
            e.target.value = "false"
            setIsCategoryOpened(false)
        }
    }

    return (
        <MainFullViewContainer>
            <UtilityBar heading="categories" />
            <HeadingPrimary />
            <section css={categoryContainer}>
                {allCategories?.map((category, index) => index < 8 && (
                    <div>
                        <button css={categoryButton} onClick={(category.id) => toggle(category.id)} value="false">
                            <SubHeading>{category.name}</SubHeading>
                            <HiOutlineDotsHorizontal />
                        </button>
                        {isCategoryOpened && <p>category is opened</p>}
                    </div>
                ))}
            </section>
            <NavigationBar />
        </MainFullViewContainer>
    );
}

export default Categories;