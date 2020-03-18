import { FC } from 'react';
import Tags from './Tags';
import Tag from './Tag';
import PromoList from './PromoList';
import PromoListItem from './PromoListItem';
import { Data, PostBlog } from '../shared.types';
import Card from './Card';

interface BlogListProps {
  posts: Data<PostBlog>[];
}

const BlogList: FC<BlogListProps> = ({ posts }) => (
  <PromoList>
    {posts.map(({ document: { data }, slug }) => (
      <PromoListItem key={slug}>
        <Card showIntro slug={`/nl/${slug}`} {...data}>
          {data.categories && (
            <Tags>
              {data.categories.map((category) => (
                <Tag key={category}>{category}</Tag>
              ))}
            </Tags>
          )}
        </Card>
      </PromoListItem>
    ))}
  </PromoList>
);

export default BlogList;
