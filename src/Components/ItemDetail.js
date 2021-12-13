import { ClipLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ItemCount from "./ItemCount";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";

const override = css`
  display: block;
  margin: 5rem auto;
  border-color: #006B2B;
`;


const ItemDetail = ({item}) => {

    const [itemCount, setItemCount] = useState(0);
    const context = useContext(CartContext);

    const onAdd = (cantAgregada) => {
        toast("Agregaste " + item.name + " al carrito!"); 
        setItemCount(cantAgregada);
        context.addToCart(item, cantAgregada);
    }
    let color = ("#006B2B");

    return (
        <> {
            item.image
            ? 
            <div className="mx-auto row w-75-xl w-90-mob my-5">
                <div className="col-lg">
                    <img src={item.image} alt='productos' width="400" className="mw-100 mb-5 mb-lg-0" />                    
                </div>
                <div className="col-lg">
                    <h2>{item.name}</h2>
                    <p>$ {item.price}</p> 
                    <p>{item.description} </p>
                    <p>Stock: {item.stock}</p>
                    <p className="fst-italic">{item.category}</p>
                    <div className="w-90-mob w-50-xl mx-auto mx-lg-0">
                        {
                            itemCount === 0
                            ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                            : <Link to='/cart'><button className="btn btn-success mb-3">CHECKOUT</button></Link>
                        }
                        
                    </div>
                    <div className="text-end">
                        <Link to='/'> <button className="btn btn-secondary">VOLVER</button></Link>
                    </div>
                    <ToastContainer />
                </div>
            </div>
            
            : <ClipLoader color={color} css={override} size={150} />
            }
        </>
    );
}

export default ItemDetail;