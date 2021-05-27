import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pagination = ({ perPage, totalResults, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalResults / perPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div class="pagination-container">
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <a onClick={() => paginate(number)} href='!#' className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pagination;