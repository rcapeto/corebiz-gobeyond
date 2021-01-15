export default function Title({ title, link }) {
   return(
      <>
         <h1>{title}</h1>
         <a href={link} target="_blank" rel="noreferrer">Google</a>
      </>
   );
}