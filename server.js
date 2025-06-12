const cookieParser = require("cookie-parser");
const connectDB = require("./database/db");
const express = require('express');
const cors = require('cors');
const authRouter = require("./routes/auth-routes");
const adminProductsRouter = require("./routes/admin/productRoutes");
const shopProductsRouter = require("./routes/shop/products-routes");
const shopCartRouter = require("./routes/shop/cart-routes");
const shopAddressRouter = require("./routes/shop/address-routes");
const adminOrderRouter = require("./routes/admin/order-routes");
const shopOrderRouter = require("./routes/shop/order-routes");
const shopSearchRouter = require("./routes/shop/search-routes");
const shopReviewRouter = require("./routes/shop/review-routes");
const commonFeatureRouter = require("./routes/common/feature-routes");


require("dotenv").config(); 


const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

app.use(
    cors({
        origin: 'http://localhost:5173',  
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials: true  
    })
);


app.use(cookieParser());
app.use(express.json());
app.use('/api/auth', authRouter );
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/admin/orders", adminOrderRouter);

app.use("/api/shop/products", shopProductsRouter);
app.use("/api/shop/cart", shopCartRouter);
app.use("/api/shop/address", shopAddressRouter);
app.use("/api/shop/order", shopOrderRouter);
app.use("/api/shop/search", shopSearchRouter);
app.use("/api/shop/review", shopReviewRouter);
app.use("/api/common/feature", commonFeatureRouter);

app.listen(PORT, ()=> {
    console.log(`Server is listening PORT=${PORT}`);
})
