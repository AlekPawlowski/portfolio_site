import { FC } from "react"
interface Props{
    file: string;
    children: string;
}
export const DownloadElement: FC<Props> = ({file, children}): JSX.Element => {
    return <a href={`src/data/download/${file}`} download>{children}</a>
}