const express = require('express');
const Blog =require('../models/blog.js');

const router = express.Router();

const blogController = require('../controller/blogController.js');

router.get('/', blogController.blog_index);


router.get('/create',blogController.blog_create_get);
//blog routes
router.get('/',(req,res)=>{
	Blog.find().sort({createdAt: -1})
		.then((result)=>{
			res.render('index',{title:'All blogs', blogs:result})
		})
		.catch((err)=>
		{
			console.log(err);
		})
});

router.post('/', blogController.blog_create_post);

router.get('/:id', blogController.blog_details);


router.delete('/:id',blogController.blog_delete);

module.exports = router;