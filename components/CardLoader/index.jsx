import ContentLoader from "react-content-loader";

const CardLoader = (props) => (
	<ContentLoader
		speed={2}
		width={300}
		height={410}
		viewBox="0 0 300 410"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}
	>
		<rect x="0" y="0" rx="0" ry="0" width="300" height="200" />
		<rect x="0" y="222" rx="0" ry="0" width="184" height="10" />
		<rect x="0" y="247" rx="0" ry="0" width="260" height="10" />
		<rect x="0" y="282" rx="0" ry="0" width="59" height="10" />
		<rect x="0" y="314" rx="0" ry="0" width="291" height="24" />
	</ContentLoader>
);

export default CardLoader;
