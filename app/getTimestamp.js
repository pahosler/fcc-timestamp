module.exports = (time)=> {
  let apitime
  let utc
  let unix
  
  if (time.match(/[-/]/g)){
    apitime = new Date(time)
    utc = apitime.toUTCString()
    unix = utc !="Invalid Date" ? new Date(time)/1 : null
  } else {
    utc = new Date(parseInt(time)).toUTCString()
    unix = utc !="Invalid Date" ? time : null
  }
  
  return {unix,utc}
}
