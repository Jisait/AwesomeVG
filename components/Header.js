import styles from '../styles/Header.module.css';
import { Icon } from '@iconify/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaystation, faXbox, faSteam} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

function Home() {
  return (
    <Link href="/">
      <main className={styles.main}>
        <div className={styles.appName}>AWESOME VG</div>
        <div className={styles.searchBar}></div>
        <div className={styles.buttonPS4Under}>
          <div className={styles.buttonPS4Over}></div>
          <FontAwesomeIcon className={styles.PS4logo}  icon={faPlaystation} />

        </div>
        <div className={styles.buttonXboxUnder}>
          <div className={styles.buttonXboxOver}></div>
          <FontAwesomeIcon className={styles.Xboxlogo}  icon={faXbox} />

        </div>
        <div className={styles.buttonSteamUnder}>
          <div className={styles.buttonSteamOver}></div>
          <FontAwesomeIcon className={styles.Steamlogo}  icon={faSteam} />

        </div>
        <div className={styles.buttonSwitchUnder}>
          <div className={styles.buttonSwitchOver}></div>
          <Icon className={styles.Switchlogo} icon="mdi:nintendo-switch" />



        </div>
      </main>
    </Link>
  );
}

export default Home;
