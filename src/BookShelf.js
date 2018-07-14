import React from 'react';
import BooksGrid from './BooksGrid';
import './App.css';

const BookShelf = ({ shelf, updateBook }) => {
	const { title, books } = shelf;

	return (
		<div className="list-books-content">
			<div>
				<div className="bookshelf">
					<h2 className="bookshelf-title">{title}</h2>
					<div className="bookshelf-books">
						<BooksGrid books={books} updateBook={updateBook} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default BookShelf;
