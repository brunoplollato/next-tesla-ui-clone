import { motion, useTransform } from 'framer-motion';
import { ReactNode, useCallback, useEffect, useLayoutEffect, useState } from 'react';

import { CarModel } from '../../contexts/ModelsContext'
import useWrapperScroll from '../../utils/useWrapperScroll';

import styles from './styles.module.scss';

type ModelOverlayProps = {
  model: CarModel;
  children: ReactNode;
}

type SectionDimensions = Pick<HTMLDivElement, 'offsetTop' | 'offsetHeight'>

function ModelOverlay({ model, children }: ModelOverlayProps) {
  const getSectionDimensions = useCallback(() => {
    return {
      offsetTop: model.sectionRef.current?.offsetTop,
      offsetHeight: model.sectionRef.current?.offsetHeight
    } as SectionDimensions
  }, [model.sectionRef])
  

  const [ dimensions, setDimensions ] = useState<SectionDimensions>(
    getSectionDimensions()
    )
    
    useLayoutEffect(() => {
      function onResize() {}
      
      window.addEventListener('resize', onResize)
      
      return () => window.removeEventListener('resize', onResize)
    }, [])
    
    const { scrollY } = useWrapperScroll()

    const sectionScrollProgress = useTransform(
      scrollY, y => 
      (y - dimensions.offsetTop) / (dimensions.offsetHeight)
    )

    const opacity = useTransform(
      sectionScrollProgress,
      [-0.42, -0.05, 0.05, 0.42],
      [0, 1, 1, 0]  
    )

    const pointerEvents = useTransform(opacity, value => 
      value > 0 ? 'auto' : 'none'  
    )

      useEffect(() => console.log({opacity}, pointerEvents), [])

  return (
    <motion.div className={styles.container} style={{ opacity, pointerEvents }}>
      {children}
    </motion.div>
  );
};

export default ModelOverlay;
