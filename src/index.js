import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
      <div className="ui container comments">
          <ApprovalCard>
            <CommentDetail 
              author= "Sam" 
              timeAgo="Today at 4:00pm" 
              blogPost="steak much"
              avatar={faker.image.avatar()}
            />
          </ApprovalCard>

          <ApprovalCard>
            <CommentDetail  
              author= "Jane" 
              timeAgo="Today at 3:45am" 
              blogPost="im above stupid"
              avatar={faker.image.avatar()}
            />
          </ApprovalCard>

          <ApprovalCard>
            <CommentDetail 
              author= "Bob" 
              timeAgo="Yesterday at 8:00pm" 
              blogPost="durp"
              avatar={faker.image.avatar()}
            />
          </ApprovalCard>
      </div>
    );
};

ReactDom.render(<App />, document.querySelector('#root'))
