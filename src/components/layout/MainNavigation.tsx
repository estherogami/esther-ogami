import Image from "next/image";
import LanguageSwitch from "./LanguageSwitch";
import NavItem from "./NavItem";

import styles from "./MainNavigation.module.scss";



const MainNavigation = (props: any) => {
    const menuItems : string[][] = [
        ["Works", "#works"],
        ["About","#about"],
        ["Skills", "#service"],
        ["Contact", "#contact"]
    ];

    return (
        <nav className={styles.MainNavigation}>
            {/* Logo */}
            <a href="#top">
            {/* <Image 
                src="/assets/img/logo.svg"
                height={90} 
                width={90} 
                alt="Logo Esther Ogami Web Developer" 
                loading="lazy"
                className={styles.logo} /> */}
                 <Image 
                src="/assets/img/logov3.svg"
                height={100} 
                width={130} 
                alt="Logo Esther Ogami Web Developer" 
                loading="lazy"
                className={styles.logo} />
            </a>

            {/* Menu items */}
            <ul>
                {menuItems.map( (item, key) => <NavItem item={item} key={key} /> )}
            </ul>

            {/* Language Switch */}
            <LanguageSwitch />
        </nav>
    );
}

export default MainNavigation;