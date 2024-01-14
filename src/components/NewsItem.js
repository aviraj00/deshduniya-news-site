import React, { Component } from "react";

export class NewsItem extends Component {
    
  render() {
    let {title, description,imageUrl,newsUrl,date,author,source} = this.props;
    return (
      <div>
        <div className="card shadow-lg p-3 mb-5 " style={{backgroundColor:"#75C8F2"}}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}<span class="position-absolute top-0    translate-middle badge rounded-pill bg-danger z-1" style={{width:"28%",fontSize:"small",left:"90%"}}>
    {source}
    <span class="visually-hidden">unread messages</span>
  </span></h5>
            <p className="card-text">
              {description}
            </p>
            <a href={newsUrl} target="blank" className="btn btn-sm btn-primary">
              Read More
            </a>
            <p className="card-text"><small class="text-body-secondary">by {author} on {new Date(date).toGMTString()} ago</small></p>

          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem
