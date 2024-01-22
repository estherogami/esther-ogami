// Declaring type of props 
type NavProps = {
    item: string[];
}


const NavItem = ({item}: NavProps) => {
    return (
        <li><a href={item[1]}>{item[0]}</a></li>
    );
}

export default NavItem;