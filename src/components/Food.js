import FoodData from "./FoodData";
import aarav1 from "../assets/aarav.jpeg";
import shre from "../assets/Shre sai.webp";
import marbate from "../assets/marbate.webp";
import maratha from "../assets/maratha.jpeg";
import uts from "../assets/uts.webp";
import choudhary from "../assets/choudhary.jpg";
import village from "../assets/village.jpg";
import saiDarbar from "../assets/saiDarbar.jpg";
import jk from "../assets/jk.jpg";
import greenland from "../assets/greenland.jpg";
import momos from "../assets/momos.jpg";
import garib from "../assets/garib.jpg";
import "./hotels.css"

function Food() {
    return (
        <div className="hotel">
            <h1>🥪🍹Food 🍔🥘</h1>
            <p> Savor the Flavor: Explore Ramtek's Hidden Gems for Foodies! 🥙         </p>
            <div className="hotelcard">

                <FoodData
                imgs={aarav1}
                heading=" Aarav Family Restaurent "
                food=" Pure vegetarian food  "
                f1=" Family-friendly"
                f2='Free parking'
                f3='Good for kids.' 
                time='Time: 10:00 AM - 10:00 PM'
                loc="https://maps.app.goo.gl/uMPK3bMDyGhuCijW6"
                />
                 <FoodData
                imgs={shre}
                heading=" Shri Sai Malik Bhojanalaya"
                food=" Famous for vegan dishes  like"
                f1=" Vegan Raita"
                f2='Aloo Matar Samosas'
                f3='Tofu Tikka Masala' 
                time='Time: 10:00 AM - 10:30 PM'
                loc="https://maps.app.goo.gl/UHLt5ds8kSxw7jXf9"
                />
                 <FoodData
                imgs={marbate}
                heading=" Marbate Restaurant 🥙 "
                food=" Both Veg and Non-Veg  "
                f1=" unique and tasty dishes"
                f2='small party room'
                f3='Budget -friendly' 
                time='Time: 10:00 AM - 9:00 PM'
                loc="https://maps.app.goo.gl/QfxQABfw3hHD1H7S9"
                />
                 <FoodData
                imgs={maratha}
                heading=" Maratha Restaurant 🥗"
                food=" Average village style local Hotel"
                f1=" Prices are little high"
                f2='Fast Service'
                f3='south indian food' 
                time='Time: 7:00 AM - 10:00 PM'
                loc="https://maps.app.goo.gl/uozppMrAZeYGLBdt6"
                />
                </div>
                <div className="hotelcard">

                <FoodData
                imgs={uts}
                heading=" UTS - UNDER THE SKY RESTAURANT"
                f1=" fireplace "
                f2='live music '
                f3='Good for watching sports' 
                time='Time: Open 24 hours'
                loc="https://maps.app.goo.gl/wjkqPQMEkxQ7jC776"
                />
                 <FoodData
                imgs={village}
                heading=" The Village Table Family Garden Restaurant"
                f1=" outdoor seating ·"
                f2='Serves vegan dishes'
                f3='Free parking'
                time='Time: 11:00 AM - 11:30 PM' 
                loc="https://maps.app.goo.gl/munP2WEauzsEnc7H6"
                />
                 <FoodData
                imgs={choudhary}
                heading="Choudhari restaurant  and Dhaba"
                f1=" Free parking"
                f2='non-veg food'
                f3='budget-friendly' 
                time='Time: 11:00 AM - 10:30 PM'
                loc="https://maps.app.goo.gl/NwXAnfBhWLvxLYGw7"
                />
                
                 <FoodData
                imgs={saiDarbar}
                heading=" Sai Darbar Family Restaurant 🥗"
                f1=" Kadhai Paneer"
                f2='chicken biryani'
                f3='egg curry'
                time='Time: 12:00 AM - 1:00 AM' 
                loc="https://maps.app.goo.gl/BDCcE1qZqMqrqKnv9"
                />
                </div>
                <div className="hotelcard">

                <FoodData
                imgs={jk}
                heading=" J K Bar and Restaurant 🥂"
                food=" Famous for -"
                f1=" Drinks"
                f2='veg and non-veg food'
                f3='small function room'
                time='Time: 11:00 AM - 10:00 PM' 
                loc="https://maps.app.goo.gl/qfqkha2xUKem1bDk7"
                />
                 <FoodData
                imgs={greenland}
                heading=" THE GREENLAND RESORT (MTDC)"
                f1=" free wi-fi"
                f2='outdoor pool'
                f3='air conditioned' 
                time='Time: Open 24 hours'
                loc="https://maps.app.goo.gl/fBY1SmR4JSoW2GKSA"
                />
                 <FoodData
                imgs={momos}
                heading="A1 Ramtek Momos 🥟"
                food=" Street Food "
                f1=" Tandoori Vegetable Momos"
                f2='Creamy Veg Momos'
                f3=' chaines bhel' 
                time='Time: 4:00 PM - 10:00 PM'
                loc="https://maps.app.goo.gl/99kUCKYhMkDZ5KZo9"
                />
                 <FoodData
                imgs={garib}
                heading=" Garib Nawaz Biryani And Egg Roll"
                f1=" Biryani"
                f2='Egg Roll'
                f3='pay (cash only)' 
                time='Time: 3:00 PM - 9:00 PM'
                loc="https://maps.app.goo.gl/WmxVCaXxD7riNutu6"
                />
                </div>
            </div>
    )
}

export default Food;