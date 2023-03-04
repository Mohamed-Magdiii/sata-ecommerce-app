import React, { useEffect } from 'react'
import { DeleteCouponById, getAllCouponsAboutExpire } from '../../../modules/actions/coupons/coupons'
import {connect} from 'react-redux'
import Moment  from "react-moment";
import { FormattedMessage } from 'react-intl';
function CouponsAboutToExpire({getAllCouponsAboutExpire,DeleteCouponById, coupons:{expire}}) {
    useEffect(()=>{
        getAllCouponsAboutExpire()
        // eslint-disable-next-line
    },[getAllCouponsAboutExpire])
   console.log(expire);
    return (
        <div>
        <table className="table table-hover align-middle gs-0 gy-4">
      <thead>
        <tr className="text-center border-3 fw-bolder text-muted bg-light">
          <th className="ps-4 min-w-100px"><FormattedMessage id="COUPONS.CODE" /></th>
          <th className="ps-4 min-w-100px"><FormattedMessage id="COUPONS.AMOUNT" /></th>
          <th className="ps-4 min-w-100px"><FormattedMessage id="COUPONS.END" /></th>
          <th className="ps-4 min-w-100px"><FormattedMessage id="BLOG.ACITONS" /></th>
         </tr>
      </thead>
      <tbody>
      {expire &&
      expire.map((exp ) => (
            <tr className="text-center border-3 m-auto" key={exp._id}> 
              <td className="border text-center">
                <div className="d-flex flex-column">
                  {exp.code}
                </div>
              </td>          
              <td className="border text-center">
                <div className="d-flex flex-column">
                  {exp.amount}
                </div>
              </td>
              <td className="border text-center">
                <div className="d-flex flex-column">
                    <Moment format="YYYY/MM/DD">{exp.endDate}</Moment>
                </div>
              </td>
              <td className="border text-center">
               <span> <i key={exp._id} className="far fa-trash-alt ml-auto text-danger" onClick={e => DeleteCouponById(exp._id)} /></span>
               <span></span>
              </td>
            </tr>
          )
         )}
          </tbody>
    </table>
        </div>
    )
}

const mapStateToProps = state => ({
    coupons : state.coupons
})


export default connect(mapStateToProps, {getAllCouponsAboutExpire,DeleteCouponById})(CouponsAboutToExpire)

