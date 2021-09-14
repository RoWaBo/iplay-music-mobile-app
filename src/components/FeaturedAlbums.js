import ShadowBox from '../components/ShadowBox';
import { Link } from '@reach/router';
import useSpotifyApiFetch from '../functions/useSpotifyApiFetch';

const FeaturedAlbums = () => {

    // Fetches Yussef Dayes albums
    const featuredAlbums = useSpotifyApiFetch("https://api.spotify.com/v1/artists/2rspptKP0lPBdlJJAJHqht/albums?limit=10");

    return (
        <>
            {featuredAlbums?.data.items.map(album => (
                <Link to={`/album_details/${album.id}`} key={album.id}>
                    <ShadowBox>
                        <img src={album.images[0].url} alt={album.name} />
                    </ShadowBox>
                </Link>
            ))}
        </>
    );
}

export default FeaturedAlbums;