import axios from 'axios'
import product from '~/static/product'

export const state = () => ({
  productList: {}
})

export const actions = {

	async fetchProductList ({ commit }) {
		try {
      const { data } = await axios.get('https://next.json-generator.com/api/json/get/EJplRmgNS')
    	commit('setProductList', data)
   	} catch (e) {
      const staticData = product.productList
      commit('setProductList', staticData)
   	}

  }

}

export const mutations = {
  setProductList: (state, productData) => {
    state.productList = productData
  }
}