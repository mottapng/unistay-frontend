import React from 'react'
import styles from './styles.module.scss'
import { Login } from './Login'
import { Register } from './Register'

export const Modal = ({ modal, setModal }) => {
  const renderModal = () => {
    if (modal === 'login')
      return <Login setModal={setModal} />
    if (modal === 'register')
      return <Register setModal={setModal} />
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalInner}>
        {renderModal()}
      </div>
      <div className={styles.overlay} onClick={() => setModal(null)} />
    </div>
  )
}