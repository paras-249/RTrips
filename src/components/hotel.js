import "./hotels.css"
import HotelData from "./hotelData";
import Trip1 from "../assets/germany.jpg";
import ramgiri from "../assets/ramgiri.avif";
import ubuntu from "../assets/ubuntu.jpg";

import Trip3 from "../assets/norway.jpg";

function Hotel() {
    return (
        <div className="hotel">
            <h1>Hotels</h1>
            <p>You can discover unique destinations For Stay</p>
            <div className="hotelcard">
            <HotelData
                imgs = {ramgiri}
                heading = "SPOT ON Hotel Ramgiri"
                text = "Hotel Ramgiri is a cosy and affordable property that is situated on Ram Mandir Road, in Nagpur. It is near Ramtek bus stand, Ramtek station platforms 1 and 2, Ramtalai Dharmik Ground, Poet Kalidas Memorial, Sindoor Baoli, Ambala Lake and Deer Zoo Ramtek. "
                li1="Room service "
                li2="Free parking "
                li3=" Free WiFi"
                li4="Breakfast "
                li5="Shared kitchen "
                price = "Price: 2000 per night(1 room)"
                contact = {8149675216}
                loc = "https://maps.app.goo.gl/GzPNTkKv1AXUiE6RA"
                />
                  <HotelData
                imgs = {ubuntu}
                heading = "House Of Ubuntu"
                text = "House Of Ubuntu offers accommodation with an outdoor swimming pool, free private parking, a garden and a terrace. Featuring a restaurant, this 3-star hotel has air-conditioned rooms with a private bathroom. The accommodation provides room service and a 24-hour front desk for guests. "
                li1="Outdoor swimming pool"
                li2="Non-smoking rooms "
                li3=" Free Parking"
                li4="Breakfast "
                li5="Electric kettle "
                price = "Price:2200 per night(1 room)"
                contact = {8078642023}
                loc = "https://maps.app.goo.gl/3gt6JJzyk1G5MuYo8"
                />

                

                <HotelData
                imgs = {Trip3}
                heading = "Trip in Norway"
                text = "With sparkling fjords lacing its coastline and soaring mountains dotting its interior, Norway"
                />
                
            </div>
            <div className="hotelcard">
            <HotelData
                imgs = {Trip1}
                heading = "Trip in Germany"
                text = "No holiday in Germany is complete without a visit to the capital, Berlin.  "
                price = "Price: $1000"
                contact = "Contact: 1234567890 "
                loc = "https://www.google.com/maps"
                />
                <HotelData
                imgs = {Trip1}
                heading = "Trip in Germany"
                text = "No holiday in Germany is complete without a visit to the capital, Berlin. The iconic city offers a wide range of museums on German history: Learn more about the former East and West Berlin (e.g. in the DDR Museum), stroll along the River Spree on a sunny afternoon in spring or fall. "
                price = "Price: $1000"
                contact = "Contact: 1234567890 "
                loc = "https://www.google.com/maps"
                />

                

                <HotelData
                imgs = {Trip3}
                heading = "Trip in Norway"
                text = "With sparkling fjords lacing its coastline and soaring mountains dotting its interior, Norway could rightfully claim to be one of the world's most beautiful countries. A progressive society, thriving cultural scene, and free camping in most areas make Norway a great place to visit."
                /></div>
        </div>
        
    )
}

export default Hotel;