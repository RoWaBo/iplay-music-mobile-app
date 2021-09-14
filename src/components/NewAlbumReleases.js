import useSpotifyApiFetch from '../functions/useSpotifyApiFetch';
import { Link } from '@reach/router';
import ItemPresentationBar from '../components/ItemPresentationBar';
import { decideSingularPlural } from '../functions/HelperFunctions';

const NewAlbumReleases = ({ limit }) => {

    const newReleases = useSpotifyApiFetch(`https://api.spotify.com/v1/browse/new-releases?limit=${limit}`);

    return (
        <>
            {newReleases?.data.albums.items.map(album => (
                <Link to={`/album_details/${album.id}`} key={album.id}>
                    <ItemPresentationBar
                        imgUrl={album.images[2].url}
                        heading={album.name}
                        description={album.artists[0].name}
                        additionalInfo={decideSingularPlural(album.total_tracks, "Song")}
                    />
                </Link>
            ))}
        </>
    );
}

export default NewAlbumReleases;