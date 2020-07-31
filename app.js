const express = require('express');
//express app
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

const blogRoutes = require('./routes/blogRoutes.js');



//connect to mongodb cloud server
const dbURI = 'mongodb+srv://agkosd:test1234@cluster0.arwzt.mongodb.net/sample?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
	.then((result)=>
		app.listen(8888))
	.catch((err)=>console.log(err));

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

//mongoose and mongo sandbox routes
/*app.get('/add-blog', (req,res)=>{
	const blog = new Blog({
		title:'new Blog 2',
		snippet:'hi there',
		body:'eifiehfiehfiehfeihfeif'
	});

	blog.save()
		.then((result)=>{
			res.send(result);
		})
		.catch((err)=>{
			console.log(err);
		})
});

app.get('/all-blogs',(req,res)=>{
	Blog.find()
	.then((result)=>{
		res.send(result);
	})
	.catch((err)=>{
		console.log(err);
	})
});

app.get('/single-blog',(req,res)=>{
	Blog.findById('5f1c65fa18dc7c28bd3e8617')
	.then((result)=>{
		res.send(result);
	})
	.catch((err)=>
	{
		console.log(err);
	});
});
*/

//basic routes
app.get('/', (req,res) =>{
	/*const blogs = [
	{title:'blog 1', snippet: 'fekhwfouehwfiuheiwhfeiuwhfiuewhfiuewfh'},
	{title:'blog 1', snippet: 'fekhwfouehwfiuheiwhfeiuwhfiuewhfiuewfh'},
	{title:'blog 1', snippet: 'fekhwfouehwfiuheiwhfeiuwhfiuewhfiuewfh'}
	];

	res.render('index',{title:'Home', blogs});*/
	res.redirect('/blogs');
});
 app.use(express.static('public'));
app.get('/about-us',(req,res)=>
{
	res.render('about',{title:'about'});
});

//blog Routes
app.use('/blogs',blogRoutes);


app.use((req,res)=>{
	res.status(404).render('404',{title:'404'});
});
