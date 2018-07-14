import React from 'react';
import { Link } from 'react-router-dom';
import BooksGrid from './BooksGrid';
import Loader from 'react-loader';
import './index.css';

// Search component
const Search = ({ searchBooks, searchResults = [], updateBook, clearResults, loaded }) => {
	const results = searchResults;

	return (
		// Used to perform search
		<div className="search-books">
			<div className="search-books-bar">
				<Link to="/" className="close-search" onClick={clearResults}>Close</Link>
				<div className="search-books-input-wrapper">
					<input autoFocus="true" type="text" placeholder="Search by title or author" onChange={searchBooks} />
				</div>
			</div>
		        // Results of a search
			<div className="search-books-results">
				<ol className="books-grid">
					<Loader loaded={loaded}></Loader>
					<BooksGrid books={results} updateBook={updateBook} />
					{/* {results.map(book => (
						<li key={book.id}>
							<Book
								infos={book}
								updateBook={updateBook}
							/>
						</li>
					))} */}
				</ol>
			</div>
		</div>
	);
}

export default Search;
