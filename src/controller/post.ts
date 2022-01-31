import { Request, Response, NextFunction } from 'express';
import postModel from "../models/post";
import jwt from 'jsonwebtoken';

interface customRequest extends Request{
   token?:string;
} 

export const login = (req:Request,res:Response)=>{
    const user = {id:3};
    const token = jwt.sign({user}, 'my_secret_key');
    res.json({
        token: token
    });
}

export const protectedapi =(req:customRequest,res:Response):void=>{
    jwt.verify(req.token as string, 'my_secret_key', function(err:any,data:any):any{
        if(err){
            res.sendStatus(403);
        }else{
            res.json({
                text: "this is protected",
                data:data
            });
        }
    });
};

export const ensureToken =(req:customRequest,res:Response,next:NextFunction)=>{
    const bearerHeader:any = req.headers["authorization"];
    if(typeof bearerHeader !=='undefined'){
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }else{
        res.sendStatus(403);
    }
}

export const getPosts = (req:Request,res:Response)=>{
    const posts = postModel.find().then((posts:any)=>{
        res.json({posts});
    })
    .catch((err:any) => console.log(err));
};

export const createPost = (req:Request,res:Response)=>{
    const post= new postModel(req.body);
    //console.log("Creating post: ", req.body);
    post.save().then((result:any) =>{
        res.json({ post: result});
    });
};
