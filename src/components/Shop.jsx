import { useState,useEffect } from "react"
import {API_KEY,API_URL} from '../config'
import { BusketList } from "./BusketList"
import { Cart } from "./Cart"
import { GoodsList } from "./GoodsList"
import { Preloader } from "./Preloader"
import { Alert } from "./Alert"
const Shop = () => {
    const [goods,setGoods] = useState([])
    const [loading,setLoading] = useState(true)
    const [order,setOrder] = useState([])
    const [busketShow,setBusketShow] = useState(false)
    const [alertName,setAlertName] = useState('')
    const addToBasker = (item) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.mainId === item.mainId)
        if(itemIndex < 0){
            const newItem = {
                ...item,
                quantity: 1,
            }
            setOrder([...order, newItem])
        }else {
            const newOrder = order.map((orderItem,index) => {
                if(index === itemIndex){
                    return{
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    }
                }else {
                    return orderItem
                }
            })
            setOrder(newOrder)
        }
        setAlertName(item.displayName)
    }
    const removeFromBusket = (itemMainId) => {
        const newOrder = order.filter((el) => el.mainId !== itemMainId)
        setOrder(newOrder)
    }
    const handleBusketShow = () => {
        setBusketShow(!busketShow)
    }
    const busketItemIncrement = (itemId) => {
        const newItemQuantity = order.map((orderItem) => {
            console.log(orderItem)
            if(orderItem.mainId === itemId){
                return{
                    ...orderItem,
                    quantity:orderItem.quantity + 1
                } 
            }else return orderItem
        })
        setOrder(newItemQuantity)
    }
    const busketItemDecrement = (itemId) => {
        const newItemQuantity = order.map((orderItem) => {
            console.log(orderItem)
            if(orderItem.mainId === itemId){
                return{
                    ...orderItem,
                    quantity:orderItem.quantity >= 0 ? orderItem.quantity - 1 : 0,
                } 
            }else return orderItem
        })
        setOrder(newItemQuantity)
    }
    const closeAlert = () => {
        setAlertName('')
    }
    useEffect( function getGoods (){
        fetch(API_URL,{
            headers:{
                'Authorization':API_KEY
            }
        })
        .then(response => response.json())
        .then((data) => {
            data.shop && setGoods(data.shop)
            setLoading(false)
            }
        )
    },[] )
    return(
        <main className="content container">
            <Cart quantity={order.length} handleBusketShow={handleBusketShow}/>
            {
                loading ? <Preloader/> : <GoodsList goods={goods} addToBasker={addToBasker}  /> 
            }
            {
                busketShow && <BusketList
                order={order}
                handleBusketShow={handleBusketShow}
                busketItemIncrement={busketItemIncrement}
                removeFromBusket={removeFromBusket}
                busketItemDecrement={busketItemDecrement}
                />
            }
            {
                alertName && <Alert displayName={alertName} closeAlert={closeAlert}/>
            }
        </main>
    )
}

export{Shop}





