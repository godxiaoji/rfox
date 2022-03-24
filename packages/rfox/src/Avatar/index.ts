import _Avatar from './Avatar'
import AvatarGroup from './AvatarGroup'

const Avatar = Object.assign(_Avatar, {
  Group: AvatarGroup
})

export { Avatar, AvatarGroup }

export default Avatar
