import React from 'react';
import Remarkable from 'remarkable';

const md = new Remarkable();

export default class Comment extends React.Component  {
    rawMarkup() {
        const rawMarkup = md.render(this.props.children.toString(), {sanitize: true});
        return {__html: rawMarkup};
    }
    
    render() {
        return (
            <div className="Comment">
              <h2 className="CommentAuthor">
                {this.props.author}
              </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        )
    }
}
