const router = require('./router');
const jwt = require("jsonwebtoken");
const adminAuth = require("../middleware/admin_auth");
const sellerAuth = require("../middleware/seller_auth");

// importing user context
const User = require("../model/user");
const Product = require("../model/product");

// Add new Product
router.post("/new-product", sellerAuth , async (req, res) => {

    // new product 
    try {
      // Get seller input
      const { title, description, price } = req.body;
  
      // Validate seller input
      if (!(title && price )) {
        res.status(400).send("Title and price are required");
      }else{
        // Create product in database
        const product =  await Product.create({
            seller_id:req.user.user_id,
            title,
            description,
            price,
        });
        // return new product
        res.status(201).json(product);
      }
    } catch (err) {
      console.log(err);
    }
  });
  
 // products
 router.get("/products", async (req, res) => {
    try{
        const products = Product.find({}, function(err, products) {
            res.status(200).send(products);
        });
    } catch(err){
        console.log(err);
    }
  });
  


// // Login
// router.post("/login", async (req, res) => {

//     //  login logic starts here
//     try {
//       // Get user input
//       const { email, password } = req.body;
  
//       // Validate user input
//       if (!(email && password)) {
//         res.status(400).send("All input is required");
//       }
//       // Validate if user exist in  database
//       const user = await User.findOne({ email });
  
//       if (user && (await bcrypt.compare(password, user.password))) {
//         // Create token
//         const token = jwt.sign(
//           { user_id: user._id, email, role: user.role },
//           process.env.TOKEN_KEY,
//           {
//             expiresIn: "2h",
//           }
//         );
  
//         // save user token
//         user.token = token;
//         // delete user.password;
//         user.password = "password placeholder XD :)";
//         delete user.password;
//         // user
//         res.status(200).json(user);
//       }else{
//       res.status(400).send("Invalid Credentials");
//         }
//     } catch (err) {
//       console.log(err);
//     }
//     //  login logic ends here
//   });

//   // Users
//   router.post("/users", adminAuth, (req, res) => {
//     const users = User.find({}, function(err, users) {
//         res.status(200).send(users);
//     });
//   });
  



module.exports = router;

  