import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <>
            <footer className="bg-primary p-5">
                <div className="row row-cols-1 row-cols-lg-3 justify-content-center mx-auto text-center">
                    <Link to={'/category/EYCl5yuuUB7Y2Jgu66rS'} className="col text-decoration-none text-white links-footer">Cuidado personal</Link>
                    <Link to={'/category/f4CcHKoFPPZ7BfU05Tgs'} className="col text-decoration-none text-white links-footer">Hogar</Link>
                    <Link to={'/category/VyenJUlaapdUyNilvilW'} className="col text-decoration-none text-white links-footer">Aire libre</Link>
                </div>
                
            </footer>
        </>
    );
}

export default Footer;