import React, { useEffect, useRef } from 'react';
import { ReactNode } from 'react';
import useModel from '../../utils/useModel';

import styles from './styles.module.scss';

interface ModelSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  // children: ReactNode;
  modelName: string;
  overlayNode: ReactNode;
}

export function ModelSection({ 
  children,
  modelName,
  overlayNode, 
  ...props }: ModelSectionProps) {
  const { registerModel } = useModel(modelName)

  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sectionRef.current) {
      registerModel({
        modelName,
        overlayNode,
        sectionRef,
      })
    }
  }, [])

  return <div className={styles.container} ref={sectionRef} {...props}>{children}</div>
};