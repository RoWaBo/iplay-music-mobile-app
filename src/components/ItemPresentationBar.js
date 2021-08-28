import ShadowBox from "./ShadowBox";
import { IoIosPlay } from 'react-icons/io';
import SubHeading from "./SubHeading";

const ItemPresentationBar = ({ imgUrl, heading, description, additionalInfo }) => {
    return (
        <article>
            {imgUrl ? <ShadowBox small><img src={imgUrl} /></ShadowBox> : <div><IoIosPlay /></div>}
            <div>
                <SubHeading>{heading}</SubHeading>
                <p>{description}</p>
            </div>
            <div>
                {additionalInfo}
            </div>
        </article>
    );
}

export default ItemPresentationBar;