import './index.css'

const ImageItem = props => {
  const {imageDetails, onChangeImageUrl} = props
  const {id, thumbnailUrl} = imageDetails

  const onClickThumbnail = () => {
    onChangeImageUrl(id)
  }

  return (
    <li className="image-list-item">
      <button type="button" className="image-button" onClick={onClickThumbnail}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
      </button>
    </li>
  )
}

export default ImageItem
