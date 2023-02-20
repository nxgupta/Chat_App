import User from '../models/userModel.js'
import bcrypt from 'bcrypt'
export let register = async (req, res, next) => {
    const { username, email, password } = req.body
    const userCheck = await User.findOne({ username })
    if (userCheck) res.status(201).json({ message: 'Username already used', status: false })
    const emailCheck = await User.findOne({ email })
    if (emailCheck) res.status(201).json({ message: 'Email already used', status: false })
    const hashedPassword=await bcrypt.hash(password,10);
    const user=await User.create({
        username,email,password:hashedPassword
    });
    delete user.password;
    res.status(200).json({status:true, user});
}
