const GoodItem = (props) => {
  const {
    mainId,
    displayName,
    displayDescription,
    displayAssets:[{
      background
    }],
    price:{regularPrice},
    addToBasker = Function.prototype
  } = props;
  return(
    <div className="card" >
        <div className="card-image">
          <img src={background} alt={displayName} />
        </div>
        <div className="card-content">
          <span className="card-title">{displayName }</span>
          <p>{displayDescription !== "" ? displayDescription : "Описание отсутсвует" }</p>
        </div>
        <div className="card-action">
          <button onClick={() => addToBasker({
            mainId,
            displayName,
            regularPrice
          })} className="btn" >Купить</button>
          <span className="right" style={{fontSize: "1.5rem"}}>Цена: {regularPrice}</span>
        </div>
      </div>
  )
};

export { GoodItem };
