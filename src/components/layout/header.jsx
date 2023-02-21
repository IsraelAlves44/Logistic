import styles from "./header.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser} from "@fortawesome/free-solid-svg-icons";

function Header(){
    return(
        <header className={styles.headerSearchBox}>
            <div className={styles.headerContent}>
                <h2>Logo</h2>
                <div className={styles.searchBox}>
                    <FontAwesomeIcon size="lg" icon={faSearch} className={styles.icon} />
                    <input placeholder="Search" type="text" name="SearchBox" id="SearchBox" />
                </div>

                <div className={styles.userContainer}>
                    <FontAwesomeIcon size="2xl" icon={faUser} />
                    <h2>Israel Alves</h2>
                </div>
            </div>
        </header>
    )
}

export default Header