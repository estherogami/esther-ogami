import { FaLinkedin } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

import styles from "./NavInfo.module.scss"

const NavInfo = () => {
    return (
        <div className={styles.NavInfo}>
            <a  href="mailto:estherogami@gmail.com">estherogami@gmail.com</a>
            <a  href="mailto:estherogami@gmail.com"><FaLinkedin /></a>
            <a  href="mailto:estherogami@gmail.com"><BsGithub /></a>
        </div>
    );
}

export default NavInfo;