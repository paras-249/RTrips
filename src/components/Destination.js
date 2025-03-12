import gadmandir1 from "../assets/gadmandir 1.jpg";
import gadmandir2 from "../assets/gadmandir 8.jpg";
import jainmandir2 from "../assets/jaintemple 2.jpg";
import jainmandir1 from "../assets/jaintemple 3.jpg";
import khindsi1 from "../assets/khindsilake 3.jpg";
import waterpark1 from "../assets/LighthouseWaterpark 3.jpg";
import waterpark2 from "../assets/LighthouseWaterpark 4.jpg";
import khindsi2 from "../assets/khindsi2.webp";
import ambala1 from "../assets/ambalaalake1.jpeg"
import DestinationData from "./DestinationData"
import "./DestinationStyles.css"


const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame</p>
            
            <DestinationData
            className="first-des"
heading = "Ram Mandir, Ramtek"
text = "Ramtek temple is popularly known as Gadh Mandir or the fort temple. It is indeed built like a fort on top of a hill  from where you can see all around. The main temple complex at the top of the hill has many big and small temples. The main temple is dedicated to Lord Ram and has a huge idol of the deity. The temple is built in the 18th century by Raghuji Bhonsle, the Maratha ruler of Nagpur. The temple is built in the Nagara style of architecture and has a huge Shikhar. Festivals at Gadh Mandir Ramtek ,Ram Navami is obviously a big festival at this temple. Another important festival happens on the Kartik Chaturdashi, a day before Kartik Purnima when Kartik Utsav is going on here. On this day Tulsi is offered to Shiva and Bilva leaves are offered to Sri Ram, in a unique exchange that brings out the oneness between the temples."
img1 = {gadmandir1}
img2 = {gadmandir2}
            />

            <DestinationData
className="first-des-reverse"
heading = "Jain Teample , Ramtek"
text = "Ramtek is also known for its ancient Jain temple with various ancient statues of Jain Tirthankara. The main idol of Shantinatha, the sixteenth Tirthankara has a legend associated with it. It became more popular when one of the leading Digambar Jain Acharyas, Acharya Vidyasagar visited and stayed with his sangh in Ramtek in 1993, 94, 2008, 2013 and 2017 for the four months of chaturmas during the rainy season. With his inspiration, a big Jain temple has been constructed. The place was ruled by Gond rulers before being captured by the Bhonsale rulers of Nagpur in the eighteenth century and the Jain temple was built by the Gond Rulers. The temple is built in the Hemadpanthi style of architecture and has a huge Shikhar. The temple has a huge idol of Lord Shantinath in the Padmasana posture. The temple has a huge courtyard and a big hall with many small temples inside."
img1 = {jainmandir1}
img2 = {jainmandir2}
            />

        
<DestinationData
            className="first-des"
heading = "Khindsi Lake, Ramtek"
text = " Khindsi Lake is a lake near the city of Ramtek in the Nagpur district of India. The lake offers boating activities, watersports, restaurants, and resorts, which are operated by Rajkamal Tourism and Olive Resorts at Khindsi Lake. Nearby the lake, there is an adventure park for the children.  The lake is surrounded by hills and forests. The lake is a popular picnic spot for the people of Nagpur. The lake is also a popular destination for bird watchers. The lake is home to many species of birds. The lake is also a popular destination for water sports. The lake offers paddle boating, row boating, and motor boating.For the adventure seekers, jungle trekking is also available. Entry Fee: ₹25 per person ,Paddle Boat: ₹75 per person ,Row Boat: ₹100 per person , Motor Boat: ₹100 per person ,Timings: 10:00 AM – 6:30 PM (Open Daily)"


img1 = {khindsi1}
img2 = {khindsi2}
            />

           

            <DestinationData
className="first-des-reverse"
heading = "Ambala Lake, Ramtek"
text = "Located in the town of Ramtek, Maharashtra, Ambala Lake is a beautiful and serene lake that is a popular spot for nature lovers and outdoor enthusiasts. The lake is surrounded by lush green forests and is a perfect place to relax and unwind amidst nature. Ambala Lake was built during the 18th century by the Nagardhan dynasty, who ruled the region at that time. The lake was built to provide water to the local population and was an essential source of water during the dry seasons.Over the years, the lake has become a popular tourist attraction and is a must-visit for anyone looking for a peaceful and serene spot to relax and unwind. Ambala Lake is a picturesque spot that is surrounded by lush green forests and hills. The lake is a natural habitat for several species of birds and is a popular spot for birdwatching. Visitors can enjoy the beautiful natural beauty of the area and go for a picnic.The lake is also a popular spot for boating and fishing.  "
img1 = {ambala1}
img2 = {gadmandir2}
            />

           
            <DestinationData
            className="first-des"   
heading = "Lighthouse Waterpark, Ramtek"
text = "Lighthouse Waterpark Spread over more than 10 acres -Stay, splash , play and have a fantastic getaway with your dear ones on high energy slides , thrill pool, family pool, water play station, lazy pool, and rainbow dance for a whole new ‘Aqua Venture’ filled with thrill and joy.  The park is open all days of the week and is a perfect place to spend a fun-filled day with your family and friends. The park is equipped with all modern amenities and is a perfect place to relax and unwind. This  is a perfect place to beat the heat and enjoy a day of fun and frolic. The park is a perfect place to spend a day with your family and friends and create memories that will last a lifetime. It is a perfect place to enjoy a day of fun and frolic and create memories that will last a lifetime."
img1 = {waterpark1}
img2 = {waterpark2}
link=''
            />
           
         
            
        </div>

    )
}

export default Destination