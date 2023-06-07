import { FC, ImgHTMLAttributes } from 'react';
import classNames from 'classnames';
import { ImageBase } from './ImageBase';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  sources?: { src: string; media?: string }[];
  alt: string;
  fallbackSrc?: string[];
}

export const Image: FC<ImageProps> = ({ src, sources, className, ...rest }) => {
  if (!src && !sources?.length) return null;

  const defaultSrc = src || (sources && sources[sources.length - 1].src);

  return (
    <picture>
      {sources?.map(({ src, media }) =>
        src && src !== defaultSrc ? <source media={media} srcSet={src} /> : null
      )}
      <ImageBase
        className={classNames(`mkt-image`, className)}
        src={defaultSrc}
        {...rest}
      />
    </picture>
  );
};
