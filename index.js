const express = require('express');
const app = express();
const dotenv = require('dotenv')
const port = process.env.PORT || 4000;
const mongoose = require('mongoose');
const AuthRoute = require("./routes/authRoute.js");
const UserRoute = require("./routes/userRoute.js");
const CategoryRoute = require("./routes/categoryRoute.js");
const RestaurantRoute = require("./routes/restaurantRoutes.js");
const FoodRoute = require("./routes/foodRoute.js");
const RatingRoute = require("./routes/ratingRoute.js");
const AddressRoute = require("./routes/addressRoute.js");
const CartRoute = require("./routes/cartRoute.js");
const OrderRoute = require("./routes/orderRoute.js");
const AdditiveRoute = require("./routes/additiveRoute.js");
const PackRoute = require("./routes/packRoute.js");
const RiderRoute = require("./routes/riderRoutes.js");
const RiderRatingRoute = require("./routes/riderRatingRoutes.js");
const PriceRoute = require("./routes/priceRoute.js");

const OtherRoute = require("./routes/othersRoute.js");

require("./services/firebaseConfig.js")

dotenv.config();

mongoose.connect(process.env.MONGOURL).then(() => {
    console.log("chopnow backend connected to mongoDb database!")
}).catch((err) =>{console.log(err)})


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req,res) => res.send("Hello world"));
app.use('/', AuthRoute);
app.use('/api/users', UserRoute);
app.use('/api/category', CategoryRoute);
app.use('/api/restaurant', RestaurantRoute);
app.use('/api/food', FoodRoute);
app.use('/api/rating', RatingRoute);
app.use('/api/address', AddressRoute);
app.use('/api/cart', CartRoute);
app.use('/api/order', OrderRoute);
app.use('/api/additive', AdditiveRoute);
app.use('/api/pack', PackRoute);
app.use('/api/rider', RiderRoute);
app.use('/api/rider_rating', RiderRatingRoute);
app.use('/api/price', PriceRoute);
app.use('/api/others', OtherRoute);


app.listen(port, () => console.log(`chopnow backend services is running on port: ${port}`))