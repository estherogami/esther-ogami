import { useRouter } from "next/router";
import Cross from "../Cross/Cross";
import styles from "./Modal.module.scss";

interface IModal {
    children: React.ReactNode;
}

const Modal = ({children}: IModal) => {
    const router = useRouter();

    const CrossHandler = () => {
        router.push("/");
    }

    return (
        <div className={styles.Modal}>
            <Cross />
           {children}
        </div>
    );
}

export default Modal;