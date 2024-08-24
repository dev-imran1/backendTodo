

const secureApi= (req,res,next)=>{
    console.log(req.headers.authorization === "usman");
    if (req.headers.authorization) {
        next()
    }else{
        res.send("not valid auth")
    }
}

module.exports = secureApi;