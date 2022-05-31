import React, { FC } from 'react'
import styles from './AppWrapper.module.scss'

interface IContainerProps {
    children: React.ReactNode
  }

const AppWrapper: FC<IContainerProps> = ({children}) => {
  return (
    <div className={styles.container}>{children}</div>
  )
}

export default AppWrapper;