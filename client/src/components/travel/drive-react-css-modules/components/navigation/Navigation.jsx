import styles from './navigation.module.css';
import logo from '../../images/logo.png';
import { useState } from 'react';

export function Navigation() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const navClass = isNavOpen ? [styles.menu, styles.active].join(' ') : [styles.menu];
    const menuButtonIconClass = isNavOpen ? "fa fa-times" : "fa fa-bars";

    return (
        <header className={styles.navbar}>
            <img src={logo} alt='Logo' />
            <nav>
                <ul className={navClass} >
                    <li>
                        <a href='/#'>Learn More</a>
                    </li>
                    <li>
                        <a href='/#'>Log in</a>
                    </li>
                    <li>
                        <a href='/#'>Sign up</a>
                    </li>
                    <li>
                        <i className="fa fa-search"></i>
                    </li>
                    <li>
                        <i className="fa fa-user-o"></i>
                    </li>
                </ul>
            </nav>
            <div onClick={() => setIsNavOpen(!isNavOpen)} className={styles.mobile_btn}>
                <i className={menuButtonIconClass}></i>
            </div>
        </header>
    );
}