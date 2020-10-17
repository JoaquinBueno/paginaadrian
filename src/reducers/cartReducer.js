import {
  ADD_PRODUCT_CART,
  GET_NUMBERS_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CLEAR_PRODUCT,
  GET_DETAIL,
} from "../actions/types";

const initialState = {
  itemNumbers: 0,
  cartCost: 0,
  onDetail:'',
  products: {
    joggingKievGris: {
      title: 'Jogging Kiev Gris',
      tagName: 'joggingKievGris',
      id: "5f8a336972f3e31b18d861ee",
      price: 1100,
      ammount: 0,
      inCart: false,
      imgSrc: '/assets/joggings/gris.png',
      imgSrc2: '/assets/joggings/gris.png',
      colorElegido: null,
      talleElegido: null,
    },
    joggingKievNegro: {
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
    },
    joggerPripiat: {
      title: 'Jogger Pripiat',
      tagName: 'joggerPripiat',
      id: "5f8a349572f3e31b18d861f0",
      price: 1190,
      ammount: 0,
      inCart: false,
      imgSrc: '/assets/joggers/camel.png',
      imgSrc2: '/assets/joggers/camel2.png',
      imgSrc3: '/assets/joggers/militar.png',
      imgSrc4: '/assets/joggers/militar2.png',
      colorElegido: null,
      talleElegido: null,
    },
    joggerCargo: {
      title: 'Jogger Cargo',
      tagName: 'joggerCargo',
      id: "5f8a34f072f3e31b18d861f1",
      price: 1280,
      ammount: 0,
      inCart: false,
      imgSrc: '/assets/joggers/cargo-camel.png',
      imgSrc2: '/assets/joggers/cargo-camel-2.png',
      imgSrc3: '/assets/joggers/cargo-camel-3.png',
      colorElegido: null,
      talleElegido: null,
    },
    sumy1: {
      title: 'Sumy Negro | Gris',
      tagName: 'sumy1',
      id: "5f8a35f872f3e31b18d861f2",
      price: 990,
      ammount: 0,
      inCart: false,
      imgSrc: '/assets/buzos/buzo-negro.png',
      imgSrc2: '/assets/buzos/buzo-negro-2.png',
      imgSrc3: '/assets/buzos/buzo-gris-claro.png',
      imgSrc4: '/assets/buzos/buzo-gris-claro-2.png',
      colorElegido: null,
      talleElegido: null,
    },
    sumy2: {
      title: 'Sumy Melange | Topo',
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
    },
    sumy3: {
      title: 'Sumy Rojo | Tostado',
      tagName: 'sumy3',
      id: "5f8a370f72f3e31b18d861f4",
      price: 990,
      ammount: 0,
      inCart: false,
      imgSrc: '/assets/buzos/rojo.png',
      imgSrc2: '/assets/buzos/rojo-2.png',
      imgSrc3: '/assets/buzos/tostado.png',
      imgSrc4: '/assets/buzos/tostado-2.png',
      colorElegido: null,
      talleElegido: null,
    },
    korosten1: {
      title: 'Canguros Korosten Verdes',
      tagName: 'korosten1',
      id: "5f8a381072f3e31b18d861f5",
      price: 1180,
      ammount: 0,
      inCart: false,
      imgSrc: '/assets/canguros/canguro-militar-1.png',
      imgSrc2: '/assets/canguros/canguro-militar-2.png',
      imgSrc3: '/assets/canguros/canguro-vPastel-1.png',
      imgSrc4: '/assets/canguros/canguro-vPastel-2.png',
      colorElegido: null,
      talleElegido: null,
    },
    korosten2: {
      title: 'Canguro Korosten Negro',
      tagName: 'korosten2',
      id: "5f8a385072f3e31b18d861f6",
      price: 1180,
      ammount: 0,
      inCart: false,
      imgSrc: '/assets/canguros/canguro-negro-1.png',
      imgSrc2: '/assets/canguros/canguro-negro-2.png',
      imgSrc3: null,
      colorElegido: null,
      talleElegido: null,
    },
    korosten3: {
      title: 'Canguro Korosten Rosa',
      tagName: 'korosten3',
      id: "5f8a387372f3e31b18d861f7",
      price: 1180,
      ammount: 0,
      inCart: false,
      imgSrc: '/assets/canguros/canguro-rosa-1.png',
      imgSrc2: '/assets/canguros/canguro-rosa-2.png',
      imgSrc3: null,
      colorElegido: null,
      talleElegido: null,
    },
    poltava1: {
      title: 'Poltava Azul | Gris',
      tagName: 'poltava1',
      id: "5f8a38f372f3e31b18d861f8",
      price: 1300,
      ammount: 0,
      inCart: false,
      imgSrc: '/assets/canguros/poltava-azul.png',
      imgSrc2: '/assets/canguros/poltava-azul-2.png',
      imgSrc3: '/assets/canguros/poltava-gris.png',
      imgSrc4: '/assets/canguros/poltava-gris-2.png',
      colorElegido: null,
      talleElegido: null,
    },
    poltava2: {
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
    },
    poltava3: {
      title: 'Poltava Rojo',
      tagName: 'poltava3',
      id: "5f8a39cf72f3e31b18d861fa",
      price: 1300,
      ammount: 0,
      inCart: false,
      imgSrc: '/assets/canguros/poltava-rojo.png',
      imgSrc2: '/assets/canguros/poltava-rojo-2.png',
      colorElegido: null,
      talleElegido: null,
    },
    rivneNegra: {
      title: 'Jogger Cargo',
      tagName: 'rivneNegra',
      id: "5f8b473272f3e31b18d861fb",
      price: 1390,
      ammount: 0,
      inCart: false,
      imgSrc: '/assets/camperas/campera-1-negra.png',
      imgSrc2: '/assets/camperas/campera-1-negra-2.png',
      colorElegido: null,
      talleElegido: null,
    },
    rivneAzul: {
      title: 'Campera Rivne Azul',
      tagName: 'rivneAzul',
      id: "5f8b476772f3e31b18d861fc",
      price: 1390,
      ammount: 0,
      inCart: false,
      imgSrc: '/assets/camperas/campera-2-azul.png',
      imgSrc2: '/assets/camperas/campera-2-azul2.png',
      colorElegido: null,
      talleElegido: null,
    },
    rivneGris: {
      title: 'Campera Rivne Gris',
      tagName: 'rivneGris',
      id: "5f8b47a772f3e31b18d861fd",
      price: 1390,
      ammount: 0,
      inCart: false,
      imgSrc: '/assets/camperas/campera-1-gris.png',
      colorElegido: null,
      talleElegido: null,
    },
    rivneTostado: {
      title: 'Campera Rivne Tostado',
      tagName: 'rivneTostado',
      id: "5f8b47c772f3e31b18d861fe",
      price: 1390,
      ammount: 0,
      inCart: false,
      imgSrc: '/assets/camperas/campera-3-tostado.png',
      colorElegido: null,
      talleElegido: null,
    },
    lisas1: {
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
    },
    lisas2: {
      title: 'Remera Crudo | Verde',
      tagName: 'lisas2',
      id: "5f8b48c572f3e31b18d86200",
      price: 430,
      ammount: 0,
      inCart: false,
      imgSrc: '/assets/remeras/lisa-1-5.png',
      imgSrc2: '/assets/remeras/lisa-1-6.png',
      imgSrc3: '/assets/remeras/lisa-2-1.png',
      imgSrc4: '/assets/remeras/lisa-2-2.png',
      colorElegido: null,
      talleElegido: null,
    },
    lisas3: {
      title: 'Remera Bordo | Azul',
      tagName: 'lisas3',
      id: "5f8b490c72f3e31b18d86201",
      price: 430,
      ammount: 0,
      inCart: false,
      imgSrc: '/assets/remeras/lisa-2-3.png',
      imgSrc2: '/assets/remeras/lisa-2-4.png',
      imgSrc3: '/assets/remeras/lisa-3-1.png',
      imgSrc4: '/assets/remeras/lisa-3-2.png',
      colorElegido: null,
      talleElegido: null,
    },
    lisas4: {
      title: 'Campera Rivne Azul',
      tagName: 'lisas4',
      id: "5f8b493372f3e31b18d86202",
      price: 430,
      ammount: 0,
      inCart: false,
      imgSrc: '/assets/remeras/lisa-2-5.png',
      imgSrc2: '/assets/remeras/lisa-2-6.png',
      colorElegido: null,
      talleElegido: null,
    },

  },
};

export default (state = initialState, action) => {
  let productSelected = "";
  switch (action.type) {
    case ADD_PRODUCT_CART:
      productSelected = { ...state.products[action.payload] };
      productSelected.ammount += 1;
      productSelected.inCart = true;
      productSelected.talleElegido = action.size
      productSelected.colorElegido = action.color
      console.log(productSelected);
      return {
        ...state,
        itemNumbers: state.itemNumbers + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };
    case GET_NUMBERS_CART:
      return {
        ...state,
      };
    case INCREASE_QUANTITY:
      productSelected = { ...state.products[action.payload] };
      productSelected.ammount += 1;
      return {
        ...state,
        itemNumbers: state.itemNumbers + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };
    case DECREASE_QUANTITY:
      productSelected = { ...state.products[action.payload] };
      let newCartCost = 0;
      let newItemNumbers = 0;
      if (productSelected.ammount === 0) {
        productSelected.ammount = 0;
        newCartCost = state.cartCost;
        newItemNumbers = state.itemNumbers;
      } else {
        productSelected.ammount -= 1;
        newCartCost = state.cartCost - state.products[action.payload].price;
        newItemNumbers = state.itemNumbers - 1;
      }

      return {
        ...state,
        cartCost: newCartCost,
        itemNumbers: newItemNumbers,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };
    case CLEAR_PRODUCT:
      productSelected = { ...state.products[action.payload] };
      let numbersBackup = productSelected.ammount;
      productSelected.ammount = 0;
      productSelected.inCart = false;
      return {
        ...state,
        itemNumbers: state.itemNumbers - numbersBackup,
        cartCost: state.cartCost - numbersBackup * productSelected.price,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };
      case GET_DETAIL:
        productSelected = {...state.products[action.payload]}
        console.log('este es el onDetail', productSelected)
        return {
          ...state,
          onDetail: productSelected
        }
    default:
      return state;
  }
};
