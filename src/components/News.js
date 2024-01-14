import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

class News extends Component {
  static defaultProps = {
    country: 'in',
    pagesize: 8,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    await this.fetchData();
  }

  fetchData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ffb40947946348feab24ea032e615556&page=1&pagesize=${this.props.pagesize}`;
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  };

  fetchMoreData = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)) {
      return;
    }

    const nextPage = this.state.page + 1;
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ffb40947946348feab24ea032e615556&page=${nextPage}&pagesize=${this.props.pagesize}`;

    this.setState({ loading: true });

    const data = await fetch(url);
    const parsedData = await data.json();

    this.setState(prevState => ({
      page: prevState.page + 1,
      
      articles: [...prevState.articles, ...parsedData.articles]
    }));
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{ color: "white" }}>Deshduniya - Top Headlines</h2>
        {this.state.loading&&<Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
          <div className="row">
            {this.state.articles.map((element) => (
              <div className="col-md-4 mt-3" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 40) : " "}
                  description={element.description ? element.description.slice(0, 88) : ""}
                  imageUrl={element.urlToImage ? element.urlToImage : "https://imgs.search.brave.com/POePnUYNR4IVbndp76eFBCdg1SrabLUoOZg3ej8Ygqg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzU0LzA0LzM3/LzM2MF9GXzI1NDA0/MzczNl9uQ0FNTFNY/Y3Iya2VYc2JiclQ2/NHoxVndlcUV2YWZC/RC5qcGc"}
                  newsUrl={element.url}
                  author={element.author ? element.author : "not available"}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
            </div>
          </div>
        </InfiniteScroll>
       
      </div>
    );
  }
}

export default News;
