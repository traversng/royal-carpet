export default ({
  altText,
  classes,
  fileName,
}: {
  altText: string;
  classes: string;
  fileName: string;
}) => {
  const oneSize = require(`../assets/images/${fileName}?resize&size=300`);
  const multipleSizes = require(`../assets/images/${fileName}?resize&sizes[]=300&sizes[]=600&sizes[]=1000`)
  return (
    <img
      className={`lazyload ${classes}`}
      alt={altText}
      src={oneSize.src}
      srcSet={multipleSizes.srcSet}
    />
  )
}
