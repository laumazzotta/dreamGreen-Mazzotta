import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from "@firebase/firestore";
import { useContext, useState } from "react";
import db from "../utils/firebaseConfig";
import { CartContext } from "./CartContext";
import { Button, Form, Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';

const Checkout = () => {
    const context = useContext(CartContext);

    const [orderData, setOrderData] = useState({
        name: "",
        email: "",
        emailConf: "",
        phone: ""
    });

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const createOrder = (e) => {
        e.preventDefault();

        const orderItems = context.cartList.map(item => ({
            id: item.idItem,
            title: item.nameItem,
            price: item.priceItem
        }));

        context.cartList.forEach(async (item) => {
            const itemRef = doc(db, "products", item.idItem);
            await updateDoc(itemRef, {
                stock: increment(-item.cantItem)
            });
        });

        const order = {
            buyer: orderData,
            total: context.total(),
            items: orderItems,
            date: serverTimestamp()
        };

        console.log(order.buyer);

        if (orderData.email === orderData.emailConf) {
            const createOrderInFirestore = async () => {
                const newOrderRef = doc(collection(db, "orders"));
                await setDoc(newOrderRef, order);
                return newOrderRef;
            }

            createOrderInFirestore()
                .then(result => Swal.fire(
                    'Muchas gracias por tu compra!', 
                    'Tu número de order es: ' + result.id,
                    'success'  
                ))
                .catch(err => console.log(err))
                .finally(() => {
                context.removeList();
                }) 
                
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Los mails ingresados deben coincidir',
                })
            }
    }

    function handleOnChange(e) {
        setOrderData({
            ...orderData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <button onClick={handleShow} type="button" className="btn btn-light mt-2 boton-light w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">FINALIZAR COMPRA</button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Finalizar compra</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5 className="mb-4">Dejanos tus datos para procesar tu pedido</h5>
                    <Form onChange={handleOnChange}>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Control required type="text" placeholder="Nombre y apellido" value={orderData.name} name="name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control required type="email" placeholder="Email" value={orderData.email} name="email"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control required type="email" placeholder="Confirmá tu email" value={orderData.emailConf} name="emailConf" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Control required type="text" placeholder="Teléfono" value={orderData.phone} name="phone"/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={createOrder}>
                        Listo!
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    );

}

export default Checkout;