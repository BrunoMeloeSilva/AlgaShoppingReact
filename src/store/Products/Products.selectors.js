export const selectAllProducts = state => state.products
export const selectSelectedProducts = state => state.products.filter(product => product.checked)
export const selectSelectedProductsTotalPrice = 
                state => selectSelectedProducts(state).reduce((total, product) => total + product.price, 0)