import React from 'react'
import ReactPaginate from 'react-paginate';

interface IPageProps {
	onPageChange: (page: number) => void
}

const Pagination: React.FC<IPageProps> = ({onPageChange}) => {
	return (
		<ReactPaginate
			className="container paginate"
			breakLabel="..."
			nextLabel=">"
			onPageChange={(event: any) => onPageChange(event.selected + 1)}
			pageRangeDisplayed={4}
			pageCount={3}
			previousLabel="<"
		// renderOnZeroPageCount={null}
		/>
	)
}

export default Pagination