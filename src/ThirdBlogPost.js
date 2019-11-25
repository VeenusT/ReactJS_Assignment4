import React from 'react';

function ThirdBlogPost() {
  return (

    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
    

  )
}
setInterval(ThirdBlogPost, 1000);
export default ThirdBlogPost
