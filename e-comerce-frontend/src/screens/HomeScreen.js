import './HomeScreen.css'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import '../components/Header'

// Components
import Product from '../components/Product'
import Service from '../components/Services'

//Actions
import {getProducts as listProducts} from '../redux/actions/productActions'
import {getServices as listServices} from '../redux/actions/serviceActions'
import {setUserDeatils} from '../redux/actions/userAction'
import Header from '../components/Header'

const HomeScreen = () => {
  const dispatch = useDispatch()

  const getProducts = useSelector(state => state.getProducts)
  const getServices = useSelector(state => state.getServices)
  
  const {products, loading, error} = getProducts  
  const {services, loading_services, error_services} = getServices


  useEffect(() => {
    dispatch(listProducts())
    dispatch(listServices())
  }, [dispatch])

  useEffect(() => {
    dispatch(setUserDeatils())
  }, [dispatch])

  return (
    <div className="homescreen">]
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
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}
      </div>

      <h2 className="homescreen__title">Nossos Serviços</h2>      
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          services.map(service => (
            <Service
              key={service._id}
              name={service.name}
              description={service.description}
              price={service.price}
              imageUrl={service.imageUrl}
              productId={service._id}
            />
          ))
        )}
      </div>
      
      
      
      

    </div>
  )
}

export default HomeScreen
