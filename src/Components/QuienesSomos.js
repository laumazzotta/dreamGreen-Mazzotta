import logo from './logo_green.svg';

const QuienesSomos = () => {
    return (
        <>
            <h1 className="text-center fs-3 bg-secondary text-primary m-0 py-3 mw-100">somos dream GREEN</h1>
            <section className="bg-light bg-gradient w-100 m-0">
                <div className="p-0 m-0 row row-cols-1 row-cols-lg-2 w-100 align-items-center bg-white shadow-lg">
                    <img src="/Images/istockphoto-1301265167-170667a.jpeg" alt="img" height="100%" className="col p-0"/>
                    <div className="col p-5">
                        <h3 className="text-center text-primary fw-light about-tittle mb-lg-5">ABOUT</h3>
                        <p className="text-center">Somos un emprendimiento dedicado a la venta de productos realizados a partir de materiales reciclados. Cuando comezamos a idear este proyecto, nos encontramos con una infinidad de productos y marcas alrededor del planeta que se dedican a darle una segunda oportunidad a miles y miles de artículos que lamentablemente denominamos "basura".</p>
                    </div>
                </div>
                <div className="p-0 m-0 row row-cols-1 row-cols-lg-2 w-100 align-items-center bg-white shadow-lg"> 
                    <img src="/Images/istockphoto-1193095410-170667a.jpeg" alt="img" height="100%" className="col p-0 order-lg-2"/>
                    <div className="col p-5">
                        <h3 className="text-center text-primary fw-light about-tittle mb-lg-5">MISIÓN</h3>
                        <p className="text-center">Nuestra misíon es acercarte esos productos, disminuír el consumo de plásticos de un sólo uso y mostrarle a la sociedad que se puede tener un negocio ZERO WASTE, que cumpla con las necesidades del cliente y al mismo tiempo sea amigable con el medio ambiente.</p>
                    </div>
                </div>
                <div className="p-0 m-0 row row-cols-1 row-cols-lg-2 w-100 align-items-center bg-white shadow-lg"> 
                    <img src="/Images/gatis-marcinkevics-a5uptAdUmjE-unsplash.jpeg" alt="img" height="100%" className="col p-0"/>
                    <p className="col text-center p-5">Soñamos con un mundo de océanos libres de plásticos, donde los animales no queden atrapados en basura, con un consumo responsable y eco-friendly.</p>
                </div>
                <div className="p-0 m-0 row row-cols-1 row-cols-lg-2 w-100 align-items-center bg-white shadow-lg"> 
                    <img src="/Images/74.jpg" alt="img" height="100%" className="col p-0 order-lg-2"/>
                    <p className="col text-center p-5">Te invitamos a sumarte a este "sueño verde", y sorprenderte con todo lo que podemos hacer para darle un respiro al planeta.</p>
                </div>
                <img src={logo} alt="img" className="logo-img d-block py-5 mx-auto"/>
            </section>
        </>
    );
}

export default QuienesSomos;