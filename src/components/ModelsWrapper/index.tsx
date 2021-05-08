import { GetStaticProps } from 'next';
import { ReactNode } from 'react';
import { useModels } from '../../contexts/ModelsContext';
import ModelOverlay from '../ModelOverlay';

import styles from './styles.module.scss';

interface ModelsWrapperProps {
  children: ReactNode;
}

export function ModelsWrapper({ children }: ModelsWrapperProps) {
  const { wrapperRef, registeredModels } = useModels();

  return (
      <div className={styles.container} ref={wrapperRef}>
        <div className={styles.overlaysRoot}>
          {registeredModels.map(item => (
            <ModelOverlay key={item.modelName} model={item}>{item.overlayNode}</ModelOverlay>
          ))}
        </div>
        {children}
      </div>
  );
};