import { useState, useEffect } from 'react';
import importAllMarkdown from '../importAllMarkdown';
import { Data, PostBlog } from '../shared.types';

function usePosts(): Data<PostBlog>[] | null {
  const [posts, setPosts] = useState<Data<PostBlog>[] | null>(null);

  useEffect(() => {
    const importedPosts: Data<PostBlog>[] = importAllMarkdown(require.context('../posts', true, /\.md$/));
    setPosts(importedPosts);
  }, [setPosts]);

  return posts;
}

export default usePosts;
