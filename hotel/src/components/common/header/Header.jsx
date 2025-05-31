import React from 'react'
import styles from './Header.module.scss'
import { FcLike } from 'react-icons/fc'
import { FaBarsStaggered } from 'react-icons/fa6'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => setIsOpen(prev => !prev)

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="./images/logo/hotel.png" alt="Logo" />
        </div>

        <nav className={styles.nav}>
          <ul>
            <li><a onClick={() => navigate('/')}>Home</a></li>
            <li><a onClick={() => navigate('/admin')}>Admin</a></li>
            <li><a onClick={() => navigate('/contact')}>Contact</a></li>
            <li><a onClick={() => navigate('/meal')}>Meal</a></li>
          </ul>
        </nav>

        <div className={styles.icons}>
          <div className={styles["icon-wrapper"]}>
            <FcLike onClick={()=>navigate('/whislist')}/>
            <span className={`${styles.heart} ${styles.heart1}`}>♡</span>
            <span className={`${styles.heart} ${styles.heart2}`}>♡</span>
            <span className={`${styles.heart} ${styles.heart3}`}>♡</span>
          </div>
        </div>

        <button className={styles.signin}>Sign in</button>

        <div className={styles.bar}>
          <FaBarsStaggered onClick={toggleDrawer} />
        </div>
      </div>

      <Drawer open={isOpen} onClose={toggleDrawer} direction='left' className={styles.menu}>
        <div className={styles.drawerContent}>
          <nav>
            <ul>
              <li><a onClick={() => {navigate('/'); toggleDrawer()}}>Home</a></li>
              <li><a onClick={() => {navigate('/admin'); toggleDrawer()}}>Admin</a></li>
              <li><a onClick={() => {navigate('/contact'); toggleDrawer()}}>Contact</a></li>
              <li><a onClick={() => {navigate('/meal'); toggleDrawer()}}>Meal</a></li>
            </ul>
          </nav>
          <div className={styles.drawerIcons}>
            <FcLike />
          </div>
          <button className={styles.drawerButton}>Sign in</button>
        </div>
      </Drawer>
    </div>
  )
}

export default Header
