const { ref } = require("@hapi/joi/lib/compile");
const { default: mongoose } = require("mongoose");
//product schema means =>{productID:148745f1gr474,count:4}
const ProductSchema = new mongoose.Schema({
    productID: {type: mongoose.Types.ObjectId, ref: "product"},
    count: {type: Number, default: 1}
})
//course schema means =>{courseID:148745f1gr474,count:1} *the course can have just count:1
const CourseSchema = new mongoose.Schema({
    courseID: {type: mongoose.Types.ObjectId, ref: "course"},
    count: {type: Number, default: 1}
})

const BasketSchema = new mongoose.Schema({
    courses: {type: [CourseSchema], default: []},
    products: {type: [ProductSchema], default: []},
})
const UserSchema = new mongoose.Schema({
    first_name : {type : String},
    last_name : {type : String},
    mobile : {type : String, required : true, unique: true},
    email : {type : String, lowercase : true},
    password : {type : String},
    otp : {type : Object, default : {
        code : 0,
        expiresIn : 0
    }},
    bills : {type : [], default : []},
    //discount for the user not for the products
    discount : {type : Number, default : 0},
    Role : {type : String, default : "USER"},
    //list of products that user bought
    Blogs : {type: [mongoose.Types.ObjectId], ref : "blog", default : []},
    refreshToken:{type:String}
}, {
    timestamps : true,
    toJSON : {
        virtuals : true
    }
});
UserSchema.index({first_name: "text", last_name: "text", mobile: "text"})
module.exports = {
    UserModel : mongoose.model("user", UserSchema)
}