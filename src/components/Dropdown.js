// import React from 'react'
// import { useMemo, useState } from "react";  

// function Dropdown() {
//   return (
//     // Dropdown categories  
//     const categories = ["sports", "concerts"];  
      
      
//     // Results data filtered using categories  
   
      
//     export const RecipeDropDownList = () => {  
     
//       const [category, setCategory] = useState("");  
      
//       // Memoized results. Will re-evaluate any time selected  
//       // category changes  
//       const filteredData = useMemo(() => {  
//         if (!category) return data;  
      
//         return data.filter(item => item.type === category);  
//     }, [category]);  
      
    
//       return (
//         <section className="k-my-8">
//           <form className="k-form k-mb-4">
//             <DropDownList data={categories} onChange={e => setCategory(e.value)} />
//           </form>
    
//           <section className="k-listgroup">
//             <ul>
//               {filteredData.map(item => {
//                 return (
//                   <li key={item.id} className="k-listgroup-item">
//                     {item.label}
//                   </li>
//                 );
//               })}
//             </ul>
//           </section>
//         </section>
//       );
//     };

//     <div>
      
//     </div>
//   )
// }

// export default Dropdown
