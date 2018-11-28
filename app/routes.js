const getTimestamp = require('./getTimestamp')
module.exports = (app)=>{
    
  app.route('/')
    .get((req, res) => {
      res.sendFile(process.cwd() + '/views/index.html');
  });

  // your first API endpoint... 
  app.get("/api/hello", function (req, res) {
    res.json({greeting: 'hello API'});
  });
  
  app.get("/api/timestamp/:date_string?", (req,res,next)=>{
    req.unixtime = getTimestamp(req.params.date_string)
    next()
  }, (req,res)=>{
    let unix = req.unixtime.unix
    let utc = `${req.unixtime.utc}`
    res.json({unix,utc})
  })

}