import React, { ReactNode, useEffect, useState } from 'react'
import styles from './Curve.module.scss'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
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
interface IRoutes {
  [key: string]: string
}

const routes: IRoutes = {
  '/': 'Home',
  '/about': 'About',
  '/contact': 'Contact',
}
export default function Curve({ children }: { children: ReactNode }) {
  const router = useRouter()
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 })

  useEffect(() => {
    const resize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
      /*사이즈재조정*/
    }
    resize()

    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])
  const text = {
    initial: {
      opacity: 1,
    },
    enter: {
      opacity: 0,
      top: -100,
      transition: {
        duration: 0.75,
        delay: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
      transitionEnd: {
        top: '47.5%',
      },
    },
    exit: {
      opacity: 1,
      top: '40%',
      transition: {
        duration: 0.5,
        delay: 0.4,
        ease: [0.33, 1, 0.24, 1],
      },
    },
  }
  return (
    <div className={[styles.page, styles.curve].join(' ')}>
      <motion.p {...anim(text)} className={styles.route}>
        {routes[router.route]}
      </motion.p>
      <div
        style={{ opacity: dimensions.width > 0 ? 0 : 1 }}
        className={styles.background}
      />
      {dimensions.width > 0 && <SVG {...dimensions} />}
      {children}
    </div>
  )
}
const SVG = ({ height, width }: { height: number; width: number }) => {
  const initialPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 300
    `
  const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 300
  `
  const slide = {
    initial: {
      top: '-300px',
    },
    enter: {
      top: '-100vh',
      transition: {
        duration: 0.75,
        delay: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
      transitionEnd: {
        top: '100vh',
      },
    },
    exit: {
      top: '-300px',
      transition: {
        duration: 0.75,
        delay: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  }
  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: {
        duration: 0.75,
        delay: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      d: initialPath,
      transition: {
        duration: 0.75,
        delay: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  }
  return (
    <motion.svg {...anim(slide)}>
      <motion.path {...anim(curve)}></motion.path>
    </motion.svg>
  )
}
