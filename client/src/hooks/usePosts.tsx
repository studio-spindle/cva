import { useState, useEffect } from 'react';
import importAllMarkdown from '../importAllMarkdown';
import { Data, PostBlog } from '../shared.types';

type countryCode = 'nl';

function usePosts(countryCode: countryCode): Data<PostBlog>[] | null {
  const [posts, setPosts] = useState<Data<PostBlog>[] | null>(null);

  useEffect(() => {
    if (countryCode === 'nl') {
      // Note: require.context is not in runtime, so can't use argument as path
      const importedPosts: Data<PostBlog>[] = importAllMarkdown(require.context('../posts/nl', true, /\.md$/));
      setPosts(importedPosts);
    }
  }, [setPosts]);

  return posts;
}

export default usePosts;
