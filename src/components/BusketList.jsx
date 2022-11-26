import { BusketItem } from "./BusketItem"

export const BusketList = (props) => {
    const {
        order = [],
        handleBusketShow = Function.prototype,
        removeFromBusket = Function.prototype,
        busketItemIncrement = Function.prototype,
        busketItemDecrement = Function.prototype,
    } = props
    const totalPrice = order.reduce((sum,el) => {
        return sum + el.regularPrice * el.quantity
    },0)
    return <ul className="collection busket-list">
    <li  className="collection-item active">Корзина</li>
    {
        order.length ? order.map( (item) => {
            return <BusketItem
            key={item.mainId} 
            {...item}
            removeFromBusket={removeFromBusket} 
            busketItemIncrement={busketItemIncrement}
            busketItemDecrement = {busketItemDecrement}
            />
        }) : <li  className="collection-item">Корзина пуста</li> 
    }
    <li  className="collection-item active">Общая стоимость:{totalPrice}</li>
    <li className="material-icons busket-close" onClick={handleBusketShow}>close</li>
    </ul>
}