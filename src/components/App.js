import React from 'react';
import Comment from './CommentAuthor';

export default class SampleComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <h1>Comments</h1>
          <Comment author="hogehoge" children="piyopiyo"/>
      </div>
    );
  }
}
