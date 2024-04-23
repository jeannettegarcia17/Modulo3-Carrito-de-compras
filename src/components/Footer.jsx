import { useCart } from '../hooks/useCart';
import { useFilters } from '../hooks/useFilters';
import './Footer.css';


export function Footer () {
    const {filters} = useFilters();
    const {cart} = useCart();
    return (
        <footer className="footer">
            <h4><span>Josseline Llanes</span></h4>
            <h5>Tienda Online</h5>
        </footer>
    )
}