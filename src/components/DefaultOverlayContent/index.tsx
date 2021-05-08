import React from 'react';

import styles from './styles.module.scss';

type Props = {
  label: string;
  description: string;
  leftButton: string;
  rightButton: string;
}

export function DefaultOverlayContent({ label, description, leftButton, rightButton}: Props) {
  return (
    <div className={styles.container}>
      <header className={styles.heading}>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </header>

      <div className={styles.buttonsContainer}>
        <button>{leftButton}</button>
        <button className={rightButton === "" ? styles.empty : styles.white}>{rightButton}</button>
      </div>
    </div>
  )
}