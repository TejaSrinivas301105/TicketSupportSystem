import  Users from '../models/UserSchema.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function Signup(req, res){
    const { name, email, password } = req.body;
    try {
        const existingUser = await Users.findOne({ email });
        if (existingUser) return res.status(400).json({ error: 'Email already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new Users({ name, email, password: hashedPassword });
        await user.save();

        res.json({ message: 'User registered successfully' });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Registration failed' });
    }
}

export async function Login(req, res){
    const { email, password } = req.body;
    try {
        const user = await Users.findOne({ email });
        if (!user) return res.status(404).json({ error: 'User not found' });

        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(401).json({ error: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
            expiresIn: '1d'
        });

        res.json({
            token,
            user: { id: user._id, name: user.name, email: user.email },
        });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Login failed' });
    }
}