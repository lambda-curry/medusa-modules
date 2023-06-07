interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string[];
}

export const ImageBase = ({
  src,
  alt,
  className,
  fallbackSrc,
  ...props
}: ImageProps) => {
  return <img {...props} src={src} alt={alt} className={className} />;
};
