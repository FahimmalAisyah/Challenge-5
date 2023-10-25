const createError  = require('http-errors')
const User = require('../../Models/User.model')
const {autSchema, authSchema} = require('../../helpers/validation_schema')
const {signAccessToken, signRefreshToken, verifyRefreshtoken} = require('../../helpers/jwt_helper');


module.exports = {
    register : async (req, res, next)=>{
        // console.log(req.body)
        try{
            // const {email, password} = req.body;
            // if (!email || !password) throw createError.BadRequest()
            const result =  await authSchema.validateAsync(req.body);
    
           const doesExist=  await User.findOne({email : result.email})
    
           if(doesExist) throw createError.Conflict(`${result.email} sudah terdaftar`)
    
           const user = new User(result)
           const savedUser = await user.save();
           const accessToken = await signAccessToken(savedUser.id)
           const refreshToken = await signRefreshToken(savedUser.id)
    
           res.send({accessToken , refreshToken})
    
        }catch(error){
            if(error.isJoi === true) error.status = 422
            next(error)
        }
    },

    login : async (req, res, next)=>{
        try {
            const result = await authSchema.validateAsync(req.body)
            const user = await User.findOne({email:result.email})
    
            if(!user) throw createError.NotFound("User tidak terdaftar")
    
            const isMatch = await user.isValidPassword(result.password)
            if (!isMatch) throw createError.Unauthorized('Username atau password tidak valid')
    
            const accessToken = await signAccessToken(user.id)
            const refreshToken = await signRefreshToken(user.id)
    
            res.send({accessToken, refreshToken})
        } catch (error) {
            if(error.isJoi === true) return next(createError.BadRequest('Invalid username atau password'))
            next(error)
        }
    },
    refresh : async (req, res, next)=>{
        try {
            const {refreshToken} = req.body
            if(!refreshToken) throw createError.BadRequest()
            const userId = await verifyRefreshtoken(refreshToken)
    
            const accessToken = await signAccessToken(userId)
            const rfreshToken = await signRefreshToken(userId )
    
            res.send({accessToken : accessToken, refreshToken : rfreshToken})
        } catch (error) {
            next(error)
        }
    },

    logout : async (req, res, next)=>{
        try {
         const { refreshToken } = req.body
         if(!refreshToken) throw createError.BadRequest()
         const userId = await verifyRefreshtoken(refreshToken)
     
        } catch (error) {
         next(error)
        }
     }
}