const router = require('express').Router();
const orderController = require('../controllers/orderController');
const {verifyTokenAndAuthorization} = require('../middlewares/verifyToken')

router.post("/", orderController.placeOrder);
router.get("/",  orderController.getUserOrder);
router.get("/user-order",  orderController.getAllUserOrders);
router.get("/user-order-history",  orderController.getDeliveredAndCancelledOrders);

router.get("/status-and-payment",  orderController.getOrdersByStatusAndPayment);

router.get("/:restaurantId/:orderStatus/:paymentStatus", orderController.getOrdersByRestaurantId);


router.get("/:restaurantId", orderController.getAllOrdersByRestaurantId);

router.get("/get-all-order/by/:orderStatus/:paymentStatus", orderController.getAllOrdersByOrderStatus);

// router.get("/:restaurantId/:orderStatus/:paymentStatus",  orderController.getOrdersByRestaurantId);
router.get('/fetch-order/:orderId',  orderController.getOrderByOrderId);



router.patch('/updateOrderStatus/:orderId/:orderStatus/:restaurantFcm', orderController.updateOrderStatus);
// router.patch('/updateOrderStatus/:orderId',  orderController.updateOrderStatus);

// router.get("/status-and-payment",  orderController.getOrdersByStatusAndPayment);


module.exports = router;