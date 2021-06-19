import styles from './Search.module.css'
function SearchBar({...rest}) {
    return (
        <div className = {styles.coin_search}>
            <input className={styles.coin_input} {...rest}/>
        </div>
    )
}

export default SearchBar
