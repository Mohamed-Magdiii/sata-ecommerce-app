
// //function to Search
// const SearchByProductAndCategory = (queryCat, queryProd , querySub ,queryBrand, queyrFrom , queryTo) => {
//     let query = [];
//     if (queryCat !== "" ) {
//       query.categoryId = queryCat;
//     } else if (queryCat == "" && queryProd !== "" && querySub == "" && queryBrand == "" && queyrFrom == "" && queryTo == "") {
//       query.$or = [
//         { "title.en": { $regex: queryProd, $options: "i" } },
//         { "description.en": { $regex: queryProd, $options: "i" } },
//       ];
//     } else if (queryCat == "" && queryProd == "" && querySub !== "" && queryBrand == "" && queyrFrom == "" && queryTo == "") {
//         query.subCategory = querySub
//       } else if (queryCat == "" && queryProd == "" && querySub == "" && queryBrand !== "" && queyrFrom == "" && queryTo == "") {
//         query.brand =queryBrand
//     } else if (queryCat == "" && queryProd == "" && querySub == "" && queryBrand == "" && queyrFrom !== "" && queryTo !== "") {
//         query.price = { $gte: queyrFrom, $lte: queryTo }
//       } 
//     else if (queryCat !== "" && queryProd !== "") {
//       query.$and = [
//         { title_en: new RegExp(queryProd, "i") },
//         { categoryId: queryCat },
//       ];
//     }
//     return query;
//   };


  const filterInProductModel = (queryReq)=>{
     let query = {}
     
    //  query.title ={}
    //  query.description= {}
    //  let regex = new RegExp(queryReq.product , "i")
    //  query.title.en = regex
    //  query.title.ar =regex
    //   query.description.en = regex 
    //   query.description.ar = regex
      query.category = queryReq.category
      query.subCategory = queryReq.subCategory
      query.brand = queryReq.brand
      let orQuery = {$or: [
        { "title.en": { $regex: queryReq.product, $options: "i" } },
        { "title.ar": { $regex: queryReq.product, $options: "i" } },
        { "description.en": { $regex: queryReq.product, $options: "i" } },
        { "description.ar": { $regex: queryReq.product, $options: "i" } },
      ]}
      let queryFind = {
        $and: [
           orQuery,
          { categoryId: query.category },
          { subCategory: query.subCategory },
          { brand: query.brand },
        ],
      };     
      console.log(queryReq);
      return queryFind
  }

  //function to Search
const SearchByProductAndCategory = (queryReq) => {
    let query = {};
    query.$and = []
    let orQuery =   [
        { "title.en": { $regex: queryReq.product, $options: "i" } },
        { "description.en": { $regex: queryReq.product, $options: "i" } },
      ]
      if (queryReq.product !== "") {
        query.$and.push({$or :orQuery }  )
    }
    if (queryReq.category !== "" ) {
      query.$and.push({categoryId:queryReq.category})
    } 
    if ( queryReq.subCategory !== "" ) {
        query.$and.push({subCategory: queryReq.subCategory})
      } 
       if (queryReq.brand !== "" ) {
        query.$and.push({brand :queryReq.brand})
    } 
    if (queryReq.from !== ""  && queryReq.to !== "") {
        query.$and.push({price: { $gte: queryReq.from, $lte: queryReq.to},})
    } 
    return query;
  };


module.exports = {SearchByProductAndCategory , filterInProductModel}