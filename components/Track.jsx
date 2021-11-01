import styles from '../styles/Redirect.module.css'

const Track = ({ track }) => {
    return (
        <div className={styles.track} key={track.id}>
            <a href={`/music/${track.id}`} target="_self">
            <img src={track.images[0]?.url} className={styles.image} alt="" />
            <h1>{track.name}</h1>
            </a>
        </div>
    );
}
 
export default Track;