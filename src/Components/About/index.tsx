import styles from "./styles.module.css"

import type { ReactNode } from "react";

type Props = {
  image: string;
  title: string;
  description: ReactNode;
  imageWidth?: string; // permite customizar o width da imagem
};


export function About({ image, title, description, imageWidth }: Props) {
  // Se imageWidth for passado, aplica uma classe especial
  const imgClass = imageWidth === '80%' ? `${styles.imgLarge}` : '';
  return (
    <div className={styles.container}>
      <img src={image} alt="" className={imgClass} />
      <div className={styles.description}>
        <h2>{title}</h2>
        <div>{description}</div>
      </div>
    </div>
  );
}
