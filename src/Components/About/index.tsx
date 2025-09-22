import styles from "./styles.module.css"

import type { ReactNode } from "react";

type Props = {
  image: string;
  title: string;
  description: ReactNode;
};


export function About({ image, title, description }: Props) {
  return (
    <div className={styles.container}>
      <img src={image} alt="" />

      <div className={styles.description}>
        <h2>{title}</h2>
        <div>{description}</div>
      </div>
    </div>
  );
}
