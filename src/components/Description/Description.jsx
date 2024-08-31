import "./Description.scss"
const Description = ({data}) => {
	return (
			<h1 className='Description'>
				{data?.alt_description}
			</h1>
	)
}

export default Description
