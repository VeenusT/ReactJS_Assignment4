import React from "react";

const Content = ({ styles }) => {
  const dummyPost = {
    title: `Here's a blog post title`,
    summary:
      "Lorems Poem: Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure."
  };

  const posts = Array(8).fill(dummyPost);

  const contentStyle = {
    paddingTop: styles.topBarHeight + 20,
    paddingRight: 20,
    paddingBottom: styles.footerMenuHeight + 20,
    paddingLeft: 20
  };

  return (
    <div style={contentStyle}>
      {posts.map((post, i) => {
        return (
          <div key={i} style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 0 }}>{post.title}</h2>
            <p>{post.summary}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
