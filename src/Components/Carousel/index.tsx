import styles from "./styles.module.css"

import imageCarousel from "../../assets/svg/image-carrossel.svg"

export function Carousel() {
    return (
        <div className={styles.container}>
            <div className={styles.slider}>
                <img src={imageCarousel} alt="" className={styles.image} />
                <img src={imageCarousel} alt="" className={styles.image} />
                <img src={imageCarousel} alt="" className={styles.image} />
                <img src={imageCarousel} alt="" className={styles.image} />
                <img src={imageCarousel} alt="" className={styles.image} />
            </div>
        </div>
    )
}