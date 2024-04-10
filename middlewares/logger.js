const logger = (req, res, next) => {
    console.log("Method:", req.method);
    console.log("Path:  ", req.path);
    console.log("Body:  ", req.body);
    console.log("---");
    // console.log("Hello V2!");
    next();
  };

module.exports = logger;