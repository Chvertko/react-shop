export const BusketItem = (props) => {
    const {
        mainId,
        displayName,
        regularPrice,
        quantity,
        removeFromBusket= Function.prototype,
        busketItemIncrement = Function.prototype,
        busketItemDecrement = Function.prototype
    } = props
    return <li  className="collection-item">{displayName} x {quantity} = 
        <button className="increment" onClick={() => busketItemIncrement(mainId)}>+</button>
        {regularPrice*quantity}
        <button className="decrement" onClick={() => busketItemDecrement(mainId)}>-</button>
        <span  className="secondary-content" onClick={() => removeFromBusket(mainId)}>
            <i className="material-icons busket-delete">close</i>
        </span>
    </li>
}