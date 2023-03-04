import React, { useEffect, useState } from 'react'
import { getAllCoupons,DeleteCouponById } from '../../../modules/actions/coupons/coupons'
import {connect} from 'react-redux'
import Moment  from "react-moment";
import { FormattedMessage } from 'react-intl';
import Pagination from '../../Home/Pagination/Pagination';
function CouponList({getAllCoupons,DeleteCouponById, coupons:{coupons}}) {
    useEffect(()=>{
        getAllCoupons()
        // eslint-disable-next-line
    },[getAllCoupons])
    const [currentPage , setCurrentPage] = useState(1)
  const [CouponsPerPage ] = useState(10)
const indexOfLastCoup = currentPage * CouponsPerPage
const indexOfFirstPage = indexOfLastCoup - CouponsPerPage
const currentCoupons = coupons.slice(indexOfFirstPage , indexOfLastCoup)
const paginate =(pageNumber)=> setCurrentPage(pageNumber)
    return (
        <div>
        <table className="table table-hover align-middle gs-0 gy-4">
      <thead>
        <tr className="text-center border-3 fw-bolder text-muted bg-light">
          <th className="ps-4 min-w-100px"><FormattedMessage id="COUPONS.CODE" /></th>
          <th className="ps-4 min-w-100px"><FormattedMessage id="COUPONS.AMOUNT" /></th>
          <th className="ps-4 min-w-100px"><FormattedMessage id="COUPONS.START" /></th>
          <th className="ps-4 min-w-100px"><FormattedMessage id="COUPONS.END" /></th>
          <th className="ps-4 min-w-100px"><FormattedMessage id="BLOG.ACITONS" /></th>
         </tr>
      </thead>
      <tbody>
      {currentCoupons && currentCoupons.map((coupon ) => (
            <tr className="text-center border-3 m-auto" key={coupon._id}> 
              <td className="border text-center">
                <div className="d-flex flex-column">
                  {coupon.code}
                </div>
              </td>          
              <td className="border text-center">
                <div className="d-flex flex-column">
                  {coupon.amount}
                </div>
              </td>
              <td className="border text-center">
                <div className="d-flex flex-column">
                <Moment format="YYYY/MM/DD">{coupon.startDate}</Moment>
                </div>
              </td>
              <td className="border text-center">
                <div className="d-flex flex-column">
                    <Moment format="YYYY/MM/DD">{coupon.endDate}</Moment>
                </div>
              </td> 
              <td className="border text-center">
               <span> <i key={coupon._id} className="far fa-trash-alt ml-auto text-danger" onClick={e => DeleteCouponById(coupon._id)} /></span>
               <span></span>
              </td>
            </tr>
          )
         )}
          </tbody>
    </table>
    <Pagination
          totalData={coupons.length}
          dataPerPage={CouponsPerPage}
          paginate={paginate}
        />
        </div>
    )
}

const mapStateToProps = state => ({
    coupons : state.coupons
})


export default connect(mapStateToProps, {getAllCoupons,DeleteCouponById})(CouponList)

