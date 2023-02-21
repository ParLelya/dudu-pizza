import React from 'react'

const NotFound: React.FC = () => {
	return (
		<div style={{ textAlign: 'center' }}>
			<h1 style={{ margin: '20px 0' }}>
				<span style={{ fontSize: '4rem' }}>☹️</span>
				<br />
				К сожалению, ничего не найдено.
			</h1>
			<p style={{ fontSize: '1.5rem' }}>Проверьте правильность введенной ссылки.</p>
		</div>
	)
}

export default NotFound