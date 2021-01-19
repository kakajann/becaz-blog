// @ts-nocheck
import icons from 'lib/constants/iconPaths.json'

interface P {
  title: string
  size: number
  color?: string
}

const Icon = ({ title, size, color }: P) => {
  const { [title]: icon } = icons
  const { d, viewBox } = icon

  return (
    <svg height={size} width={size} viewBox={viewBox}>
      <path fill={color} d={d} />
    </svg>
  )
}

Icon.defaultProps = {
  color: '#000',
}

export default Icon
