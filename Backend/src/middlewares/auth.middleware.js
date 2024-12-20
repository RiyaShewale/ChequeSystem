import jwt from 'jsonwebtoken'
import { ApiResponse } from '../../utils/ApiResponse';

export function authenticateToken(req, res, next) 
{
    const token = req.headers["x-access-token"];
    if (token == null) return res.status(401).json(new ApiResponse(401,null,"Unauthorized Request"));

    jwt.verify(token, process.env.ACCESS_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

export function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_KEY, { expiresIn: "1h" });
}

