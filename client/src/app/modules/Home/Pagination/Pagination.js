import React from 'react';

const Pagination = ({dataPerPage , totalData , paginate}) => {
    const pageNumbers = []
    for(let i=1 ; i<= Math.ceil(totalData / dataPerPage); i++){
        pageNumbers.push(i)
    }
  return (
    <nav aria-label="... " className='mt-5 '>
      <ul className="pagination pagination-lg">
        {pageNumbers.map((number ) => (
          <li className="page-item" key={number}>
            <span className="page-link text-primary"  onClick={()=>{paginate(number)}} >
              {number}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};



export default Pagination;
