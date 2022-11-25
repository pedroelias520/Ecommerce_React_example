import "./Product.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion"
import 'boxicons'

const Product = ({ imageUrl, description, mark, price, discount, name, productId, priceDiscount }) => {


  priceDiscount = (parseFloat(price) - (parseFloat(price) * parseFloat(discount))).toFixed(2)

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="product">
      <img src={imageUrl} alt={name} />

      <div className="product__info">
        <p className="info__name">{name}</p>

        <p className="info__description"><p className="mark_span">{mark}</p>{description.substring(0, 100)}...</p>

        {
          discount > 0.0 ?
            <div className="price_interface">

              <p>
                <span className="info__price"><s>${price}</s></span>
              </p>

              <motion.p className="info__price" animate={{ scale: [1, 1, 1] }}
                transition={{
                  ease: "easeOut", repeat: Infinity,
                  repeatDelay: 0.5
                }}>${priceDiscount} </motion.p>

            </div> : <p className="info__price">${price}</p>
        }



        <Link to={`/product/${productId}`} className="info__button">
          <box-icon name='cart-alt' type='solid' color='#ffffff' ></box-icon>
        </Link>
      </div>
    </motion.div>
  );
};

export default Product;
