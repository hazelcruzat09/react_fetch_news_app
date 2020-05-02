import React, {Component, useState, useEffect} from 'react';

const News = () => {
  //state
	const[news, setNews] = useState([]);
	//fetch data
	const fetchNews = () => {
		fetch(`http://hn.algolia.com/api/v1/search?query={react}`)
		.then(response => response.json())
		.then(data => setNews(data.hits))
		.catch(error => console.log(error))
	};
	//effect
	useEffect(() => {
		fetchNews();
	});
	//return jsx	
	return(
	<div>
		<h2>News: </h2>
    <form>
      <input type="text" value ={} onChange={handleChange}>
        <button>Search</button>
      </input>
    </form>
		{news.map((n,i) => (<p key={i}>{n.title}</p>))}
	</div>
	);
}

export default News;
