import "./Image.scss"

const Image = ({data}) => {
	return (
		<div className="imageContainer" >
			<img src={data?.urls.regular}/>
		</div>
	)
}

export default Image
