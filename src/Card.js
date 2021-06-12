import './App.css';

function Card(props) {
    return (
      <div className="bitcard" key={props.item.id}>
        <div><b><img alt='' src={props.item.icon}/> {props.item.name}</b></div>
        <div><b>Price:</b> ${props.item.price.toFixed(2)}</div>
        <div><b>Change (1h):</b> ${props.item.priceChange1h}</div>
        <div><b>Change (1d):</b> ${props.item.priceChange1d}</div>
        <div><b>Change (1w):</b> ${props.item.priceChange1w}</div>
      </div>
   )
}
export default Card;
