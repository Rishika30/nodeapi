import express from "express";
const router= express.Router();
import {getPosts, createPost, protectedapi, login, ensureToken} from "../controller/post";
import {createPostValidator} from "../validator/index";

router.get('/', getPosts);
router.get('/protected', ensureToken, protectedapi);
router.post('/login', login);
router.post('/post', createPostValidator, createPost);
export= router;



