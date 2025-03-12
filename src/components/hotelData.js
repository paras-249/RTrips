import "./hotels.css"


function HotelData(props) {
    return (
        <div className="h-card">
            <div className="h-image">
                <img alt="imgs" src={props.imgs}></img>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
            <p>{props.price}</p>
            <b>{props.contact}</b>
            <button className='btn'>  <a href={props.loc}> LOCATION</a>  </button>
        </div>
    )
}

export default HotelData;