import axios from 'axios';
import { useState, useEffect } from 'react';
import NewsCard from './NewsCard';

function SectionNews({ searchLocation }) {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        axios.get("https://newsapi.org/v2/everything", {
          params: {
            q: searchLocation,
            pageSize: 9,
            apiKey: process.env.REACT_APP_NEWS_API_KEY
          }
        }).then(res => {
          setArticles(res.data.articles)
        })
        .catch(err => console.log(err))
      }, [searchLocation])

    return (
        <section className="section-news">
            <div className="container">
                { articles.map(article => <NewsCard key={article.url} article={article}/>) }
            </div>
        </section>
    )
}

export default SectionNews
