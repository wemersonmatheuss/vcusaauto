import styles from "./styles.module.css"
import type { ReactNode } from "react";

type Props = {
  image: string;
  title: string;
  description: ReactNode;
  imageWidth?: string;
  roundedBg?: boolean; // nova prop para moldura circular
};

export function About({ image, title, description, imageWidth, roundedBg }: Props) {
  // Classes dinâmicas
  const imgClass = `
    ${imageWidth === '80%' ? styles.imgLarge : ''} 
    ${roundedBg ? styles.roundedBg : ''}
  `;

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
