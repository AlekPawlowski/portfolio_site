import { Fragment } from "react";
interface TxtBlock {
    headTag: string,
    headContent: string,
    contentContainerClassName?: string
    content: string[],
}
/** 
 * render provided header content and tag
 * render array of strings within paragraph and with provided tag napme
*/
export default function RenderTxtBlockWithHeader({ ...props }: TxtBlock): JSX.Element {
    const { headTag, headContent, content, contentContainerClassName} = props;
 
    const HeadTagName = `${headTag}` as keyof JSX.IntrinsicElements;

    return <Fragment>
        <HeadTagName>{headContent}</HeadTagName>
        <ul className={`${contentContainerClassName}`}>
            {content.map((element, index) => {
                return <li key={element}>{element}</li>
            })}
        </ul>
    </Fragment>
}