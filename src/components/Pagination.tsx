import React from 'react'
import ReactPaginate from 'react-paginate';

interface IPageProps {
	value: number
	onPageChange: (page: number) => void
}

const Pagination: React.FC<IPageProps> = ({value, onPageChange}) => {
	return (
		<ReactPaginate
			className="container paginate"
			breakLabel="..."
			nextLabel=">"
			onPageChange={(event: any) => onPageChange(event.selected + 1)}
			pageRangeDisplayed={4}
			pageCount={3}
			previousLabel="<"
			forcePage={value - 1}
		// renderOnZeroPageCount={null}
		/>
	)
}

export default Pagination