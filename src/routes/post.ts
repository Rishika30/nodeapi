import * as express from "express";
const router= express.Router();
import {getPosts, createPost, protectedapi, login, ensureToken} from "../controller/post";
import * as validator from "../validator/index";

router.get('/', getPosts);
router.get('/protected', ensureToken, protectedapi);
router.post('/login', login);
router.post('/post', validator.createPostValidator, createPost);
export= router;



