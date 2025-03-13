import "./hotels.css"
import HotelData from "./hotelData";
import ramgiri from "../assets/ramgiri.avif";
import ubuntu from "../assets/ubuntu.jpg";
import olive from "../assets/olive.png";
import rajmahal from "../assets/rajmahal.jpeg";
import lighthouse from "../assets/lighthouse.jpg";
import tathastu from "../assets/tathashtu.jpg";


function Hotel() {
    return (
        <div className="hotel">
            <h1>Hotels</h1>
            <p>You can discover unique destinations For Stay</p>
            <div className="hotelcard">
            <HotelData
                imgs = {ramgiri}
                heading = "SPOT ON Hotel Ramgiri"
                text = "Hotel Ramgiri is a cosy and affordable property that is situated on Ram Mandir Road, in Nagpur.The amenities at this hotel are truly amazing! From the comfortable beds to the clean and spacious rooms, you will feel right at home. The hotel also offers free Wi-Fi, parking, and power backup. "
                li1="Room service "
                li2="Free parking "
                li3=" Free WiFi"
                li4="Breakfast "
                li5="Shared kitchen "
                price = "Price: 2000 per night(1 room , 2person)"
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
                price = "Price:2200 per night(1 room, 2 person)"
                contact = {8078642023}
                loc = "https://maps.app.goo.gl/3gt6JJzyk1G5MuYo8"
                />

                

            <HotelData
                imgs = {olive}
                heading = "Olive Resort - Sillari Pench"
                text = "Olive Resort - Sillari Pench has an outdoor swimming pool, garden, a terrace and restaurant in Silāri. The accommodation offers a 24-hour front desk and the area is popular for cycling. Couples particularly like the location — they rated it 8.8 for a two-person trip. "
                li1="Outdoor swimming pool"
                li2="Free WiFi "
                li3=" Free Parking"
                li4=" Superb Breakfast "
                li5="Family rooms"
                price = "Price:4500 per night(1 room,2 person)"
                contact = {9356853239 }
                loc = "https://g.co/kgs/rz76bwR"
                />
                
            </div>
            <div className="hotelcard">
            <HotelData
                imgs = {rajmahal}
                heading = "Rajmahal Khindsi Resort"
                text = "RAJMAHAL RESORT established in the year 2018. It  is the best resort in the region for Destination Weddings. It gives the highest priority to customer  satisfaction by providing its best services. Famous attraction near it is Khindsi Lake near Ramtake city . "
                li1="Indoor swimming pool"
                li2="Air Conditioning  "
                li3=" Free WiFi"
                li4="  Breakfast "
                li5="Child friendly"
                price = "Price:1140 per night(1 room ,2 person)"
                contact = {7498542506 }
                loc = "https://maps.app.goo.gl/qrTRU11H525AktYPA"
                />


            <HotelData
                imgs = {lighthouse}
                heading = "Lighthouse Waterpark and Resort"
                text = "Relax and unwind in elegantly furnished Cottages, stylishly designed Machans, rousing Tents and comfortable Deluxe Rooms equipped with state-of-the-  art  facilities and top-notch hospitality for an unforgettable experience in the lap of nature. "
                li1=" swimming pool"
                li2="24-hour front desk  "
                li3="  3-star hotel"
                li4="  Adventure activities "
                li5="Agro Zone"
                price = "Price:2806 per night(1 room ,2 person)"
                contact = {6262623303 }
                loc = "https://maps.app.goo.gl/7ojwmCEVnz15KLqN6"
                />

                

               <HotelData
                imgs = {tathastu}
                heading = "Hotel Tathastu"
                text = "Located in Rāmtek, Hotel Tathastu provides accommodation with a garden and a restaurant. This 3-star hotel offers room service and a 24-hour front desk. The accommodation offers an ATM, a concierge service and organising tours for guests"
                li1=" Activities for kids"
                li2="Free WiFi "
                li3=" Free Parking"
                li4="  Housekeeping(daily) "
                li5="Pet-friendly"
                price = "Price:671 per night(1 room ,3 person)"
                contact = {9370333160}
                loc = "https://maps.app.goo.gl/PfM9ZRSpKvZ3sgbG9"
                />
                </div>
        </div>
        
    )
}

export default Hotel;