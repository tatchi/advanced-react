import React from 'react';
import ArticleList from '../ArticleList';

import renderer from 'react-test-renderer';

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: { id: 'a' },
      b: { id: 'b' },
    },
    store: {
      lookupAuthor: jest.fn(() => ({})),
    },
  };

  it('renders correctly', () => {
    const tree = renderer.create(<ArticleList {...testProps} />).toJSON();

    expect(tree.children.length).toBe(2); // we check that the component has 2 children (since we pass it 2 children)

    expect(tree).toMatchSnapshot(); // check that the component is the same than the previous rendered one
  });
});
