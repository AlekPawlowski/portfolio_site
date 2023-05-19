import { Link } from "react-router-dom";
import { FC } from "react";
interface Props{
    path: string;
    location: string;
    name: string;
    onClick: any;
}

export const MenuElement: FC<Props> = ({onClick, path, location, name}): JSX.Element =>{
    // console.log(path, location);
    return (<Link
        onClick={onClick} 
        to={path}  
        className={(location == path ? "active" : "inactive")}
        >
            {name}
        </Link>)
}

