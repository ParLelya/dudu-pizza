import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination: React.FC = () => {
	return (
		<div className="container">
			<ReactPaginate
				className="paginate"
				breakLabel="..."
				nextLabel=">"
				onPageChange={(event: any) => console.log(event)}
				pageRangeDisplayed={4}
				pageCount={3}
				previousLabel="<"
				// renderOnZeroPageCount={null}
			/>
		</div>
	)
}

export default Pagination