import "./hotels.css"
import PropTypes from 'prop-types';


function HotelData(props) {
    return (
        <div className="h-card">
            <div className="h-image">
                <img alt="imgs" src={props.imgs}></img>
            </div>
            <h3>{props.heading}</h3>
            <p className="text"> {props.text}</p>
            <li>{props.li1}</li>
            <li>{props.li2}</li>    
            <li>{props.li3}</li>
            <li>{props.li4}</li>
            <li>{props.li5}</li>
            <p>{props.price}</p>
            <b> Contact:- {props.contact }</b>
            <button className='btn'>  <a href={props.loc}> Location 🌍</a>  </button>
        </div>
    )
}
HotelData.propTypes = {
    imgs: PropTypes.string,
    heading: PropTypes.string,
    text: PropTypes.string,
    li1: PropTypes.string,
    li2: PropTypes.string,
    li3: PropTypes.string,
    li4: PropTypes.string,
    li5: PropTypes.string,
    price: PropTypes.string,
    contact: PropTypes.number,
    loc: PropTypes.string,
}
export default HotelData;