import { useState } from 'react';

import useGetPosts from 'src/hooks/useGetPosts';

const Home = () => {
  const { data, error, isFetching } = useGetPosts();

  return (
    <>
      <h1>Hello World</h1>
      <section>
        <header>
          <h2>Posts</h2>
          {data
            ? data.map((post) => {
                return (
                  <div>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                  </div>
                );
              })
            : null}
        </header>
      </section>
    </>
  );
};

export default Home;
