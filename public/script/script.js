const del = document.querySelector('a.delete');

del.addEventListener('click',(e)=>
{
	const endpoint = `/blogs/${del.dataset.doc}`;

	fetch(endpoint,{
		method:'DELETE'
	})
	.then((response)=>response.json())
	.then((data)=> window.location.href = data.redirect)
	.catch((err)=> console.log(err));
});