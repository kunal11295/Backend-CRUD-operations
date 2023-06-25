import encrypt from "encryptjs";
import Userfields from "../modals/UserModals.js";

export const registration = async (req,res,next) => {
    try{
        const {name,email,password,pin,role} = req.body
        if(!name) return res.send("Name is Required");
        if(!email) return res.send("email is Required");
        if(!password) return res.send("password is Required");
        if(!pin) return res.send("pin is Required");
        if(!role) return res.send("role is Required");

        if(password.length < 8)
        {
            return res.send("password should be atleast 8 character")
        }
       const response = await Userfields.find({email:email}).exec();
       if(response.length)
       {
        return res.send("email is registered");
       }
       next();
    }
    catch(err)
    {
        return res.send(err);
    }
}


export const addmiddleware = async (req,res,next) =>
{
    try{
        const{ id, pin} = req.body;
        if(!id) return res.send("id is Required");
        if(!pin) return res.send("pin is Required");

        var secretkey ='kunal'

        const response = await Userfields.find({_id:id}).exec();
        console.log(response);

        var decipher = encrypt.decrypt(response[0].pin,secretkey,256); 
        console.log(decipher);

        if(decipher == pin){

        if(response[0].role == "Seller")
        {
        next();
        }
        else
        {
            return res.send("Admin and Buyer is not add Products");
        }
    }
    else
    {
        return res.send("Incorrect Pin");
    }
    }
    catch(err)
    {
        return res.send(err)
    }
} 


export const deletemiddleware = async (req,res,next) =>
{
    try{
        const{ user_id, pin} = req.body;
        if(!user_id) return res.send("id is Required");
        if(!pin) return res.send("pin is Required");

        var secretkey ='kunal'

        const response = await Userfields.find({_id: user_id}).exec();
        console.log(response);

        var decipher = encrypt.decrypt(response[0].pin,secretkey,256); 
        console.log(decipher);

        if(decipher == pin){

        if(response[0].role =="Admin")
        {
        next();
        }
        else
        {
            return res.send("Seller and Buyer is cannot  delete");
        }
    }
    else
    {
        return res.send("Incorrect Pin");
    }
    }
    catch(err)
    {
        return res.send(err)
    }
} 

export const getproductmiddleware = async (req,res,next) =>
{
    try{
        const{ user_id, pin} = req.body;
        if(!user_id) return res.send("id is Required");
        if(!pin) return res.send("pin is Required");

        var secretkey ='kunal'

        const response = await Userfields.find({_id:user_id}).exec();
        console.log(response);

        var decipher = encrypt.decrypt(response[0].pin,secretkey,256); 
        console.log(decipher);

        if(decipher == pin){

        if(response[0].role == "Buyer")
        {
        next();
        }
        else
        {
            return res.send("Admin and Seller is cannot getProducts");
        }
    }
    else
    {
        return res.send("Incorrect Pin");
    }
    }
    catch(err)
    {
        return res.send(err)
    }
}

export const updatemiddleware = async (req,res,next) =>
{
    try{
        const{ user_id, pin} = req.body;
        if(!user_id) return res.send("id is Required");
        if(!pin) return res.send("pin is Required");

        var secretkey ='kunal'

        const response = await Userfields.find({_id:user_id}).exec();
        console.log(response);

        var decipher = encrypt.decrypt(response[0].pin,secretkey,256); 
        console.log(decipher);

        if(decipher == pin){

        if(response[0].role == "Seller"||response[0].role == "Admin")
        {
        next();
        }
        else
        {
            return res.send("you cannot update products");
        }
    }
    else
    {
        return res.send("Incorrect Pin");
    }
    }
    catch(err)
    {
        return res.send(err)
    }
}