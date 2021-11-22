import Item from "./Item";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 5rem auto;
  border-color: #006B2B;
`;

const ItemList = ({items}) => {

    let color = ("#006B2B");

    return (
        items.length > 0
        ? items.map(item => <Item key={item.id} id={item.id} name={item.name} price={item.price} image={item.image} category={item.category} />)
        : <ClipLoader color={color} css={override} size={150} />
    );
}

export default ItemList;