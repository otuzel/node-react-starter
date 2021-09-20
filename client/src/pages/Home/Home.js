import { useState } from 'react';

import useGetPosts from 'src/hooks/useGetPosts';

const Home = () => {
  const { data, error, isFetching } = useGetPosts();

  return (
    <>
      <section>Cards</section>
      <section>Signals </section>
    </>
  );
};

export default Home;
