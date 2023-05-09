import { Link } from "react-router-dom";
import { FC } from "react";
interface Props{
    path: string;
    location: string;
    name: string;
}

export const MenuElement: FC<Props> = ({path, location, name}): JSX.Element =>{
    console.log(path, location);
    return (<Link 
        to={path}  
        className={(location == path ? "active" : "inactive")}
        >
            {name}
        </Link>)
}

