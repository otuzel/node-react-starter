import { useQuery } from 'react-query';

const { API_URL } = process.env;

const getPosts = async () => {
  if (API_URL) {
    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    } catch (error) {
      throw new Error(error);
    }
  } else {
    throw new Error('No api url is set');
  }
};

export default function useGetPosts() {
  return useQuery('posts', getPosts);
}
