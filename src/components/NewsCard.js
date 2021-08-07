function NewsCard({ article }) {
    const {title, description, url, urlToImage} = article

    function onArticleClicked() {
        window.open(url, '_blank')
    }

    return (
        <div onClick={onArticleClicked} className="card">
            <img src={urlToImage} alt="news" />
            <div className="card-content">
                <h1 className="title">{title}</h1>
                <p className="description">
                    {description.length > 20 ? `${description.slice(0, 149)}...` : description}
                </p>
            </div>
        </div>
    )
}

export default NewsCard
