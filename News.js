import React, {Component, useState, useEffect} from 'react';

const News = () => {
  //state
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('react');
  const [url, setUrl] = useState(`https://hn.algolia.com/api/v1/search?query=${searchQuery}`);
  const [loading, setLoading] = useState(false);
  //fetch data
  const fetchNews = () => {
    setLoading(true)
    fetch(url)
    .then(result => result.json())
    .then(data => (setNews(data.hits),setLoading(false)))
    .catch(error => console.log(error.message))
  };
  //effect
  useEffect(() => {
    fetchNews();
  }, [url]);

  const handleChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    setUrl(`https://hn.algolia.com/api/v1/search?query=${searchQuery}`);
  };

  const showLoading = () => loading ? <h2>Loading...</h2> : "";

  const showSearchForm = () => 
    <form onSubmit={handleOnSubmit}>
      <input type="text" value={searchQuery} onChange={handleChange} />
      <button>Search</button>
    </form>
  ;

  const showNewsContent = () => news.map((n, i) => (<p key={i}>{n.title}</p>));
  //return jsx  
  return(
  <div>
    <h2>News: </h2>
    {showLoading()}
    {showSearchForm()}
    {showNewsContent()}
  </div>
  );
};

export default News;
