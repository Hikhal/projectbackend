//import the router fucntion
const router = require("express").Router();

// Already mounted on /api/
router.use("/students", require("./students"));
router.use("/campuses", require("./campuses"));

// 404 Handling
//This function will run for any route that does not match the first two urls (/shoppers OR /shoes)
router.use((req, res, next) => {
  const error = new Error("404 Not Found");
  error.status = 404;
  next(error);
});

module.exports = router;
