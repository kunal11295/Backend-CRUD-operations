import encrypt from "encryptjs";
import Userfields from "../modals/UserModals.js";

export const register = async (req,res) =>
{
    try{

        const {name,email,password,pin,role} = req.body

        var secretkey ='kunal'; 
        var plaintext = password;
        var plaintextforpin = pin;
        var ciphertext = encrypt.encrypt(plaintext,secretkey,256);
        var ciphertextforpin = encrypt.encrypt(plaintextforpin,secretkey,256);
        const userfield = new Userfields
        ({
            name,
            email,
            password:ciphertext,
            pin:ciphertextforpin,
            role
        })
        await userfield.save();
        return res.send("Registration succesfull");
    }
    catch(err)
    {
        return res.send(err);
    }
}