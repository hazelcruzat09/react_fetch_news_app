import React, {Component, useState, useEffect} from 'react';

const News = () => {
  //state
	const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('react')
	//fetch data
	const fetchNews = () => {
	  fetch(`https://hn.algolia.com/api/v1/search?query=${searchQuery}`)
		.then(result => result.json())
		.then(data => setNews(data.hits))
		.catch(error => console.log(error))
	};
	//effect
	useEffect(() => {
		fetchNews()
	});

  const handleChange = e => {
    setSearchQuery(e.target.value);
  }
	//return jsx	
	return(
	<div>
		<h2>News: </h2>
    <form>
      <input type="text" value={searchQuery} onChange={handleChange} />
      <button>Search</button>
    </form>
		{news.map((n, i) => (<p key={i}>{n.title}</p>))}
	</div>
	);
};

export default News;
