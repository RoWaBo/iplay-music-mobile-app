import ShadowBox from '../components/ShadowBox';
import { Link } from '@reach/router';


const FeaturedAlbums = ({ contentArray }) => {

    return (
        <>
            {contentArray?.map(album => (
                <Link to={`/album_details/${album.album.id}`} key={album.id}>
                    <ShadowBox>
                        <img src={album.images[0].url} alt={album.name} />
                    </ShadowBox>
                </Link>
            ))}
        </>
    );
}

export default FeaturedAlbums;