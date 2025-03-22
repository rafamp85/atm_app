import styles from '../styles/styles.module.css';
import creditCardSprite from '../assets/creditcard_sprite.png';
import atmSign from '../assets/atm_sign.png';
import stickerGraf from '../assets/sticker_graf.png';
import systemsImg from '../assets/systems.png';
import { AtmOperations } from '../components/AtmOperations';


export const AtmControlsCenter = () => {
  return (
    <div className={styles.control_center}>
        <header className={styles.header}>
            <img src={atmSign} alt="encabezado" className={styles.header__img} />
        </header>
        <main className={styles.control_center__main}>
            <section className={styles.credit_card}>
                <img src={creditCardSprite} alt="credit card" className={styles.credit_card__img} />
            </section>

            <section>
                <AtmOperations />
            </section>

            <section className={styles.footer}>
                <img src={stickerGraf} alt="Sticker" className={styles.footer__sticker_img} />
                <img src={systemsImg} alt="systems" className={styles.footer__systems_img} />
            </section>
        </main>
    </div>
  )
}
