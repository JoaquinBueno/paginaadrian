import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addCart} from '../actions/addAction'

const ProductId = ({cartProps, addCart, match}) => {
  let [producto, setProducto] = useState(null);
  let productId = match.params.id
  const [another, setAnother] = useState([
    {
      title: 'Remera Negro | Blanco',
      tagName: 'lisas1',
      id: "5f8b487472f3e31b18d861ff",
      price: 430,
      ammount: 0,
      inCart: false,
      imgSrc: '/assets/remeras/lisa-1-3.png',
      imgSrc2: '/assets/remeras/lisa-1-4.png',
      imgSrc3: '/assets/remeras/lisa-1-1.png',
      imgSrc4: '/assets/remeras/lisa-1-2.png',
      colorElegido: null,
      talleElegido: null,
      sizes: "S a XXL",
    },
    {
      title: 'Jogging Kiev Negro',
      tagName: 'joggingKievGris',
      id: "5f8a33c072f3e31b18d861ef",
      price: 1100,
      ammount: 0,
      inCart: false,
      imgSrc: '/assets/joggings/negro.png',
      imgSrc2: '/assets/joggings/negro-2.png',
      imgSrc3: '/assets/joggings/negro-3.png',
      colorElegido: null,
      talleElegido: null,
      sizes: "S a XXL"
    },
    {
      title: 'Poltava Bordo',
      tagName: 'poltava2',
      id: "5f8a399772f3e31b18d861f9",
      price: 1300,
      ammount: 0,
      inCart: false,
      imgSrc: '/assets/canguros/poltava-bordo.png',
      imgSrc2: '/assets/canguros/poltava-bordo-2.png',
      colorElegido: null,
      talleElegido: null,
      sizes: "S a XXL"
    },
    {
      title: 'Sumy Grises',
      tagName: 'sumy2',
      id: "5f8a367072f3e31b18d861f3",
      price: 990,
      ammount: 0,
      inCart: false,
      imgSrc: '/assets/buzos/gris-topo.png',
      imgSrc2: '/assets/buzos/gris-topo-2.png',
      imgSrc3: '/assets/buzos/gris-melange.png',
      imgSrc4: '/assets/buzos/gris-melange-2.png',
      colorElegido: null,
      talleElegido: null,
      sizes: "S a XXL"
    },
  ])
  // let productId = "5f6a6cde485770000708e04e";
  // async function getProduct() {
  //   let product = await axios
  //     .get(`http://127.0.0.1:8000/api/products/${productId}`)
  //     .then((res) => {
  //       setProducto = res.data;
  //       console.log(producto);
  //     })
  //     .catch((err) => console.log(err));
  // }

  useEffect(() => {
    async function getProduct() {
      let product = await axios
        .get(`https://ecommerce-steel.vercel.app/api/products/${productId}`)
        .then((res) => {
          setProducto({
            
            ...res.data.data,
          }); 
        })
        .catch((err) => console.log(err));
    }
    getProduct()
  }, [])

  const changeTalle= (id) => {
    if (!producto.talleElegido) {
    document.getElementById(id).className = 'uk-label uk-label-success'
    } else {
      document.getElementById(`talle${producto.talles.indexOf(producto.talleElegido)}`).className = 'uk-label'
      document.getElementById(id).className = 'uk-label uk-label-success'
    }
  }

  const changeColor= (id) => {
    if (!producto.colorElegido) {
    document.getElementById(id).className = 'uk-label uk-label-success'
    } else {
      document.getElementById(`color${producto.colores.indexOf(producto.colorElegido)}`).className = 'uk-label'
      document.getElementById(id).className = 'uk-label uk-label-success'
    }
  }


  return (
  <>
    {
      (producto) ? 
      <div className='productId-container uk-container'>
        <div className="uk-position-relative" uk-slideshow="animation: fade">

          <ul className="uk-slideshow-items">
          {
              producto.img ?
              <li className='productId-li'>
                  <img src={producto.img} alt="" uk-cover className='product-img-principal'/>
              </li>
              : <></>
            }
            {
              producto.img2 ?
              <li className='productId-li'>
                  <img src={producto.img2} alt="" uk-cover className='product-img-principal'/>
              </li>
              : <></>
            }
            {
              producto.img3 ?
              <li className='productId-li'>
                  <img src={producto.img3} alt="" uk-cover className='product-img-principal'/>
              </li>
              : <></>
            }
            {
              producto.img4 ?
              <li className='productId-li'>
                  <img src={producto.img4} alt="" uk-cover className='product-img-principal'/>
              </li>
              : <></>
            }
          </ul>

          <div className="uk-position-bottom-center uk-position-small">
              <ul className="uk-thumbnav">
                  {
                    producto.img ? <li uk-slideshow-item="0"><a href="#"><img src={producto.img} width="50" alt=""/></a></li>
                    : <></>
                  }
                  {
                    producto.img2 ? <li uk-slideshow-item="1"><a href="#"><img src={producto.img2} width="50" alt=""/></a></li>
                    : <></>
                  }
                  {
                    producto.img3 ? <li uk-slideshow-item="2"><a href="#"><img src={producto.img3} width="50" alt=""/></a></li>
                    : <></>
                  }
                  {
                    producto.img4 ? <li uk-slideshow-item="3"><a href="#"><img src={producto.img4} width="50" alt=""/></a></li>
                    : <></>
                  }
              </ul>
          </div>

        </div>
        <div>
       
        <h3 className='title-styles-product'>{producto.nombre}</h3>

        <div className='products-talles'>
          <p>Elegir talle: </p>
          {
            producto.talles ? producto.talles.map((talle) => {return <li key={talle}  onClick={(e) => {
              changeTalle(`talle${producto.talles.indexOf(talle)}`)
              setProducto({
                ...producto,
                talleElegido: talle
              })
              
            }}><span className="uk-label" id={`talle${producto.talles.indexOf(talle)}`}>{talle}</span></li>})
            : <></>
          }
        </div>
        <div className='products-talles'>
          <p>Elegir color: </p>
          {
            producto.colores ? producto.colores.map((color) => {return <li key={color} onClick={(e) => {
              changeColor(`color${producto.colores.indexOf(color)}`)
              setProducto({
                ...producto,
                colorElegido: color
              })
            }}><span className="uk-label" id={`color${producto.colores.indexOf(color)}`}>{color}</span></li>})
            : <></>
          }
        </div>
        <div className='products-button-flex'>
          <Link to='/cart' className='AGreen' onClick={() => addCart(producto.tagName, producto.talleElegido, producto.colorElegido)}>Agregar al carro por ${producto.precio}</Link>
          <Link to='#' className='ABlue'>Agregar y seguir viendo</Link>
          <Link to='#' className='ARed'>Ver otros productos</Link>
        </div>

        </div>
      </div>
      :
      <div>
        <h3 className='uk-text-center uk-margin-remove title-styles-product'>Estamos cargando algo genial para vos</h3>
      </div>
    }
    <div>
      <h4 className='uk-text-center title-styles-product'>Otros productos que podrian interesarte</h4>
      <ul className="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center prod-all-grid" uk-grid>
                        {
                            another.map(item => 
                            <li data-gender={item.gender} className='all-data-li' key={item.id}>
                                <Link to={`/buzos/${item.id}`}><img src={item.imgSrc} alt={item.title} className='all-prod-img'/></Link>
                                <h3 className='all-prod-title'>{item.title}</h3>
                                <div className='all-prod-description-cont'>
                                    <p className='all-prod-price'>${item.price}</p>
                                    <p className='all-prod-description'>{item.sizes}</p>
                                </div>
                            
                            </li>)
                        }
                    </ul>
    </div>
  </>
 );
};

const mapStateToProps = state => ({
  cartProps: state.cartState
})

export default connect(mapStateToProps, {addCart})(ProductId)
