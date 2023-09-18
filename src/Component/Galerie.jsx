const Galerie = ({data, activeGallery}) => {
	return (
		<div className='gallery'>
			{data.map((item,index) => (
				<div dangerouslySetInnerHTML={{ __html: item.content.rendered }}></div>
			))}
		</div>
	);
};
export default Galerie;



