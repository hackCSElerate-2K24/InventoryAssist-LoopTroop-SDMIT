import { Hono } from "hono";
import {User} from '../models/user'
const userRoute = new Hono();

userRoute.post('/create', async (c)=>{
  try {

    const { username, email, password, role = 'customer' } = await c.req.json();
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      throw new Error('Username or email already in use');
    }

    const newUser = new User({
      username,
      email,
      password,  
      role
    });

    const savedUser = await newUser.save();

    return {
      success: true,
      message: 'User created successfully',
      user: savedUser
    };
  } catch (error) {
    return {
      success: false,
      message: error.message || 'An error occurred while creating the user'
    };
  }
})


const createUser = async (username, email, password, role = 'customer') => {
};

createUser('john_doe', 'john@example.com', 'securepassword123', 'admin')
  .then(response => {
    if (response.success) {
      console.log(response.message);
    } else {
      console.log(response.message);
    }
  });


export default userRoute;