import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
import styles from './Inner.module.scss'
import Link from 'next/link'
export default function Inner({ children }: { children: ReactNode }) {
  interface IAnim {
    [key: string]: {
      [key: string]: any
    }
  }
  const anim = (variants: IAnim) => {
    return {
      initial: 'initial',
      animate: 'enter',
      exit: 'exit',
      variants,
    }
  }
  const opacity = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  }
  const slide = {
    initial: {
      top: '100vh',
    },
    enter: {
      top: '100vh',
    },
    exit: {
      top: '0',
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  }
  const perspective = {
    initial: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
    enter: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
    exit: {
      y: -100,
      opacity: 0.5,
      scale: 0.9,
      transition: {
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  }
  return (
    <div className={styles.inner}>
      {/* 페이진 전환  */}
      <motion.div {...anim(slide)} className={styles.slide} />
      {/* scale & y축  */}
      <motion.div {...anim(perspective)} className={styles.page}>
        {/* opacity */}
        {/* <motion.div {...anim(opacity)}> */}

        {children}
        {/* </motion.div> */}
      </motion.div>
    </div>
  )
}
