import styles from '../styles/Home.module.css'

const Track = ({ track }) => {

    const artist = null
    const genre = null
    const owner = null


    if (track.type === 'album') {
        artist = track.artists[0].name
    } else

    if (track.type === 'artist') {
        genre = track.genres[0]
    }
    
    if (track.type === 'playlist') {
        owner = 'Por ' + track.owner.display_name
    }

    return (
        <div className={styles.track} key={track.id}>
            <a href={`${track.external_urls.spotify}`} target="_self">
            <img src={track.images[0]?.url} className={styles.image} alt="" />
            <div className={styles.track_info}>
                <h1>{track.name}</h1>
                {track.type === 'artist' ? <span>{genre}</span> : null}
                {track.type === 'album' ? <span>{artist}</span> : null}
                {track.type === 'playlist' ? <span>{owner}</span> : null}
            </div>
            </a>
        </div>
    );
}
 
export default Track;