import { GoodItem } from "./GoodItem"

const GoodsList = (props) => {
    const {goods = [], addToBasker = Function.prototype } = props
    console.log(goods)
    if (!goods.length){
        return <h3>Nothing here</h3>
    }
    return <div className="goods">
        {
            goods.map((item) => (
                <GoodItem key = {item.mainId} {...item} addToBasker={addToBasker} />
            ))
        }
            
    </div>

}
export {GoodsList}