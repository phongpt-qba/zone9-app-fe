import memoize from 'lodash/memoize';
import { PageMeta } from './types';

export const DEFAULT_META: PageMeta = {
  title: 'Zone9 Survival',
};

interface PathList {
  paths: {
    [path: string]: {
      title: string;
      basePath?: boolean;
      description?: string;
      image?: string;
    };
  };
  defaultTitleSuffix: string;
}

const getPathList = (): PathList => {
  return {
    paths: {
      '/': { title: 'Home' },
    },
    defaultTitleSuffix: 'Zone9 Survival',
  };
};

export const getCustomMeta = memoize(
  (path: string): PageMeta | null => {
    const pathList = getPathList();
    const pathMetadata =
      pathList.paths[path] ??
      pathList.paths[
        Object.entries(pathList.paths).find(
          ([url, data]) => data.basePath && path.startsWith(url)
        )?.[0] ?? '/'
      ];

    if (pathMetadata) {
      return {
        title: `${pathMetadata.title}`,
        ...(pathMetadata.description && {
          description: pathMetadata.description,
        }),
        image: pathMetadata.image,
      };
    }

    return null;
  },
  (path) => `${path}`
);
