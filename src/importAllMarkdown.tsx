import matter from 'gray-matter';
import { DocumentFrontMatter, Data } from './shared.types';

function removeExtension(filePath: string): string {
  return filePath
    .replace(/^.*[\\]/, '')
    .split('.')
    .slice(0, -1)
    .join('.');
}

function importAllMarkdown<T>(webpackContext: __WebpackModuleApi.RequireContext): Data<T>[] {
  return webpackContext.keys().map(
    (fileUrl): Data<T> => {
      const body = webpackContext(fileUrl);

      const slug: string = removeExtension(fileUrl);
      const document = matter(body.default) as DocumentFrontMatter<T>;

      return {
        slug,
        document,
      };
    },
  );
}

export default importAllMarkdown;
