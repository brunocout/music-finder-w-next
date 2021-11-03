import styles from '../styles/Home.module.css'

const Categories = ({ categories }) => {
    return (
        <div className={styles.track} key={categories.id}>
            <a href={`https://open.spotify.com/search`} target="_self">
            <img src={categories.icons[0]?.url} className={styles.image} alt="" />
            <div className={styles.track_info}>
                <h1>{categories.name}</h1>
            </div>
            </a>
        </div>
    );
}
 
export default Categories;