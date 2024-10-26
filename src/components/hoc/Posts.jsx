import React from 'react';
import HigherOrder from './HigherOrder';

function Posts({ data }) {
  return (
    <>
     
      {data.slice(0, 10).map((item, index) => {
        return <div key={index}>{item.title}</div>;
      })}
    </>
  );
}

const PostComp = HigherOrder("Posts", Posts, "posts");

export default PostComp;
