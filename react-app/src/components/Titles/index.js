import { useState } from 'react';

export default function Titles() {
   const [titles, setTitles] = useState([
      "Go Beyond",
      "Omelete",
      "Bivareocara", 
      "React"
   ]);
   return(
      <>
         {titles.map(title => <h1 key={title}>{title}</h1>)}
      </>

   );
}