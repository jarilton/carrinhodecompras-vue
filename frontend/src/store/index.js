import { createStore } from 'vuex'

function updateLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export default createStore({
  state: {
    cart: []
  },
  getters: { 
    productQuantity: state => product =>  {
      const item = state.cart.find(i => i.id === product.id);

      if(item) {
        return item.quantity
      } 
      else {
        return null
      }
    },
    cartItems: state => {
      return state.cart
    },
    cartTotal: state => {
      return state.cart.reduce((a, b) => a + (b.price * b.quantity), 0);
    }
  },
  mutations: {
    addToCart(state, product) {

      if(product.category !== 'Internet') {
        let filter =  state.cart.filter(i => i.category === "Internet")
        if(filter.length === 0) {
          alert('Você precisa adicionar pelo menos 1 plano de internet!')
          return 0;
        }
      }
      
      let item = state.cart.find(i => i.id === product.id)

      if(item) {
        item.quantity++
      }
      else {
        state.cart.push({...product, quantity: 1})
      }

      updateLocalStorage(state.cart)
    },
    removeFromCart(state, product) {
      let item = state.cart.find(i => i.id === product.id)

      if(item) {
        if(item.quantity > 1) {
          item.quantity--
        }
        else {
          state.cart = state.cart.filter(i => i.id !== product.id)
        }
      }

      updateLocalStorage(state.cart)
    },
    updateCartFromLocalStorage(state) {
      const cart = localStorage.getItem('cart')
      if(cart) {
        state.cart = JSON.parse(cart)
      }
    }
  },
  actions: {
    
  },
  modules: {

  }
})