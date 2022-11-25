import './HomeScreen.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../components/Header'

// Components
import Product from '../components/Product'
import Service from '../components/Services'

//Actions
import { getProducts as listProducts } from '../redux/actions/productActions'
import { getServices as listServices } from '../redux/actions/serviceActions'
import { getProductsByMark as listProductsNike } from '../redux/actions/productActions'
import { getProductsByMark as listProductsAdidas } from '../redux/actions/productActions'
import { getProductsByMark as listProductsFila } from '../redux/actions/productActions'
import { setUserDeatils } from '../redux/actions/userAction'
import Header from '../components/Header'


const HomeScreen = () => {
  const dispatch = useDispatch()

  const getProducts = useSelector(state => state.getProducts)
  const getProductsNike = useSelector(state => state.getProductsByMark)
  const getProductsFila = useSelector(state => state.getProductsByMark)
  const getProductsAdidas = useSelector(state => state.getProductsByMark)
  
  
  const { products, loading, error } = getProducts  
  const { products: productsNike, loading: loadingNike, error: erroNike} = getProductsNike
  const { products: productsFila, loading: loadingFila, error: erroFila} = getProductsFila
  const { products: productsAdidas, loading: loadingAdidas, error: erroAdidas} = getProductsAdidas
    
  useEffect(() => {
    dispatch(listProducts())
    dispatch(listServices())
    dispatch(listProductsNike("Nike"))
    dispatch(listProductsFila("Fila"))
    dispatch(listProductsAdidas("Adidas"))
  }, [dispatch])

  useEffect(() => {
    dispatch(setUserDeatils())
  }, [dispatch])

  return (
    <div className="homescreen">
      <Header></Header>
      <h2 className="homescreen__title">Produtos em destaque</h2>
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map(product => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              mark={product.mark}
              price={product.price}
              discount={product.discount}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}
      </div>

      
      
      {                
        
        productsNike.length != 0 || productsNike != undefined ?          
          <div>
            <br></br>
            <h2 className="homescreen__title">Nike</h2>
            <div className="homescreen__products">
              {loadingNike ? (
                <h2>Loading...</h2>
              ) : error ? (
                <h2>{erroNike}</h2>
              ) : (
                productsNike.map(product => (
                  <Product
                    key={product._id}
                    name={product.name}
                    description={product.description}
                    mark={product.mark}
                    price={product.price}
                    discount={product.discount}
                    imageUrl={product.imageUrl}
                    productId={product._id}
                  />
                ))
              )}
            </div>
          </div>
          :
          <div>Deu ruim</div>
        
      }

{                
        
        productsNike.length != 0 || productsNike != undefined ?          
          <div>
            <br></br>
            <h2 className="homescreen__title">Adidas</h2>
            <div className="homescreen__products">
              {loadingAdidas ? (
                <h2>Loading...</h2>
              ) : error ? (
                <h2>{erroAdidas}</h2>
              ) : (
                productsAdidas.map(product => (
                  <Product
                    key={product._id}
                    name={product.name}
                    description={product.description}
                    mark={product.mark}
                    price={product.price}
                    discount={product.discount}
                    imageUrl={product.imageUrl}
                    productId={product._id}
                  />
                ))
              )}
            </div>
          </div>
          :
          <div>Deu ruim</div>
        
      }


{                
        
        productsNike.length != 0 || productsNike != undefined ?          
          <div>
            <br></br>
            <h2 className="homescreen__title">Fila</h2>
            <div className="homescreen__products">
              {loadingFila ? (
                <h2>Loading...</h2>
              ) : error ? (
                <h2>{erroFila}</h2>
              ) : (
                productsFila.map(product => (
                  <Product
                    key={product._id}
                    name={product.name}
                    description={product.description}
                    mark={product.mark}
                    price={product.price}
                    discount={product.discount}
                    imageUrl={product.imageUrl}
                    productId={product._id}
                  />
                ))
              )}
            </div>
          </div>
          :
          <div>Deu ruim</div>
        
      }




    </div>
  )
}

export default HomeScreen
