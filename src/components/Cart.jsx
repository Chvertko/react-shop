export const Cart = (props) => {
    const {quantity,handleBusketShow = Function.prototype} = props
    return <div className="cart white-text" onClick={handleBusketShow}>
        <i className="material-icons ">shopping_cart</i>
        {
            quantity ? (<span className="cart-quantity">{quantity}</span>) : null 
        }
    </div>
}