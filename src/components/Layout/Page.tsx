import { DEFAULT_META, getCustomMeta } from '@/config/constants/meta';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

export const PageMeta: React.FC<React.PropsWithChildren> = () => {
  const { pathname } = useRouter();

  const pageMeta = getCustomMeta(pathname);

  if (!pageMeta) {
    return null;
  }

  const { description, image } = { ...DEFAULT_META, ...pageMeta };

  return (
    <NextSeo
      title={pageMeta.title}
      description={description}
      openGraph={
        image
          ? {
              images: [
                { url: image, alt: pageMeta?.title, type: 'image/jpeg' },
              ],
            }
          : undefined
      }
    />
  );
};
