import React from 'react';

export default class CommentBox extends React.Component  {
    render() {
        return (
            <div className="Comment">
                <h2 className="CommentAuthor">
                    <this.props.author>
                </h2>
                <this.props.children>
            </div>
        )
    }
}
