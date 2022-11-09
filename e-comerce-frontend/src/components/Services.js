import "./Services.css";
import { Link } from "react-router-dom";
import {motion} from "framer-motion/dist/framer-motion"
import 'boxicons'

const Product = ({ imageUrl, description, price, name, productId }) => {
  return (
    <motion.div 
    whileHover={{scale: 1.05}}
    className="product">
      <img src={imageUrl} alt={name} />

      <div className="product__info">
        <p className="info__name">{name}</p>

        <p className="info__description">{description.substring(0, 100)}...</p>

        <p className="info__price">${price}</p>

        <Link to={`/product/${productId}`} className="info__button">
            <box-icon name='cart-alt' type='solid' color='#ffffff' ></box-icon> 
        </Link>
      </div>
    </motion.div>
  );
};

export default Product;
