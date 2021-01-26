import Icon from 'components/templates/icon'

interface P {
  blog: BlogItem
}

export default ({ blog }: P) => {
  const selfLink = `https://blog.becaz.com/blog/${blog.key}`
  return (
    <div className="share">
      <span>Share:</span>
      <span>
        <a href={`https://twitter.com/share?text=${blog.title}&url=${selfLink}`} target="_blank" rel="noreferrer">
          <Icon title="twitter" size={26} color="#1DA1F2" />
        </a>
      </span>
      <span>
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${selfLink}`} target="_blank" rel="noreferrer">
          <Icon title="facebook" size={26} color="#3b5998" />
        </a>
      </span>
      <span>
        <a href={`mailto:?subject=${blog.title}&body=${selfLink}`}>
          <Icon title="gmail" size={26} color="#C1150F" />
        </a>
      </span>
      <span>
        <a href={`whatsapp://send?text=${selfLink}`} target="_blank" rel="noreferrer">
          <Icon title="whatsapp" size={26} color="#128C7E" />
        </a>
      </span>
      <span>
        <a href={`https://t.me/share/url?url=${selfLink}`} target="_blank" rel="noreferrer">
          <Icon title="telegram" size={26} color="#0088cc" />
        </a>
      </span>
      <span>
        <a href={`http://vk.com/share.php?url=${selfLink}`} target="_blank" rel="noreferrer">
          <Icon title="vk" size={26} color="#4c75a3" />
        </a>
      </span>
    </div>
  )
}
