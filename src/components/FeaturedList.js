import ShadowBox from "../components/ShadowBox";
import { Link } from "@reach/router";
import PropTypes from 'prop-types';

const FeaturedList = ({ contentArray }) => {
    return (
        <> 
        {contentArray?.map(list => (
            <li key={list.id}>
                <ShadowBox>
                    <Link to={`/playlists/${list.id}`}>
                        <img src={'/placeholder-image.png'} alt={list.name} data-src={list.images[0].url} />
                    </Link>
                </ShadowBox>
            </li>
            ))}
        </>
    );
}

FeaturedList.propTypes = {
    contentArray: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        images: PropTypes.array
    })).isRequired
}

export default FeaturedList;