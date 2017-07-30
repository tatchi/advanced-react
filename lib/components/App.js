import React, { Component } from 'react';
import axios from 'axios';
import DataApi from 'state-api';
import ArticleList from './ArticleList';

// import { data } from '../testData.json';

// const api = new DataApi(data);

class App extends Component {
  state = {
    articles: this.props.initialData.articles,
    authors: this.props.initialData.authors,
  };
  async componentDidMount() {
    const resp = await axios.get('/data');
    const api = new DataApi(resp.data);

    this.setState(() => ({
      articles: api.getArticles(),
      authors: api.getAuthors(),
    }));
  }

  // We give the responsiblity to lookup the author related to the article to the App. And not anymore to the articleList => component responsibility.
  articleActions = {
    lookupAuthor: (authorId) => this.state.authors[authorId],
  };

  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        articleActions={this.articleActions}
        // authors={this.state.authors} we don't pass anymore the author, but a way (function) to lookup for the author
      />
    );
  }
}

export default App;
