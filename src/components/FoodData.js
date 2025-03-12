import "./hotels.css"

function FoodData(props) {
    return (
        <div className="h-card">
            <div className="h-image">
                <img alt="imgs" src={props.imgs}></img>
            </div>
            <h5>{props.heading}</h5>
            <p>{props.food}</p>
            <li> {props.f1}</li>
            <li> {props.f2}</li>
            <li> {props.f3}</li> 
            <p>{props.time}</p>
         <button className='btn'>  <a href={props.loc}> Visit 🌍</a>  </button>
         
        </div>
    )
}
export default FoodData;