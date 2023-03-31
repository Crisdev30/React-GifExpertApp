// import React, { useState } from "react";

// export const PruebaComponente = () => {
//   const [lista, setLista] = useState(["Millos", "Santa Fe", "Cali"]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//         if (lista.trim().length > 2) {
//           setLista((cats) => [...cats, lista]);
         
//         }
//   };

//   const handleInput = (e) => {
//     setLista(e.target.value);
//   };

//   return (
//     <>
//       <h1>Hola Prueba</h1>

//       <form onSubmit={handleSubmit}>
//         <input type="text" value="lol" onChange={handleInput} />
//       </form>

//       <ul>
//         {lista.map((list) => {
//           return <li key={list}>{list}</li>;
//         })}
//       </ul>
//     </>
//   );
// };
