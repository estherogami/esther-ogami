import styles from "./Button.module.scss";

type Props = {
    children: React.ReactNode;
    link: String;
}

const Button = ({children, link}: Props) => {
    return (
        <a href={link.toString()} target="_blank" className={styles.Button} rel="noreferrer">
            {children}
        </a>
    );
}

export default Button;