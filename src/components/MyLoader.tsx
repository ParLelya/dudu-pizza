import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props: any) => (
	<ContentLoader
		className="pizza-block"
		speed={2}
		width={280}
		height={500}
		viewBox="0 0 280 500"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}
	>
		<circle cx="137" cy="135" r="125" />
		<rect x="0" y="279" rx="8" ry="8" width="280" height="25" />
		<rect x="0" y="326" rx="14" ry="14" width="280" height="88" />
		<rect x="0" y="436" rx="8" ry="8" width="95" height="30" />
		<rect x="125" y="427" rx="30" ry="30" width="152" height="45" />
	</ContentLoader>
)

export default MyLoader

