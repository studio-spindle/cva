import { useState, useEffect } from 'react';
import importAllMarkdown from '../importAllMarkdown';
import { Data, PostEvent } from '../shared.types';

function useEvents(): Data<PostEvent>[] {
  const [posts, setPosts] = useState<Data<PostEvent>[] | null>(null);

  useEffect(() => {
    const importedEvents: Data<PostEvent>[] = importAllMarkdown(require.context('../events', true, /\.md$/));
    setPosts(importedEvents);
  }, [setPosts]);

  return posts;
}

export default useEvents;
