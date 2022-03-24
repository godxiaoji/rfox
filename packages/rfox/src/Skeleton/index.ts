import _Skeleton from './Skeleton'
import SkeletonAvatar from './SkeletonAvatar'
import SkeletonTitle from './SkeletonTitle'
import SkeletonParagraph from './SkeletonParagraph'
import SkeletonButton from './SkeletonButton'
import SkeletonImage from './SkeletonImage'

const Skeleton = Object.assign(_Skeleton, {
  Avatar: SkeletonAvatar,
  Title: SkeletonTitle,
  Paragraph: SkeletonParagraph,
  Button: SkeletonButton,
  Image: SkeletonImage
})

export {
  Skeleton,
  SkeletonAvatar,
  SkeletonTitle,
  SkeletonParagraph,
  SkeletonButton,
  SkeletonImage
}
export default Skeleton
