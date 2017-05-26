import React from 'react';
import Comment from './Markdown';

export default class SampleComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <h1>Comments</h1>
          <Comment author="hoge" children="***piyopiyo***"/>
      </div>
    );
  }
}
