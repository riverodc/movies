
import Form from "./Form";
const movies = [
{
  name: "Avengers",
  available:5, 
},
{
  name: "TopGun",
  available:3, 
},
{
  name: "Guardianes",
  available:10, 
},
];

export default function App() {
  return (
   <div>
      <h2>Películas</h2>
       {movies.map((movie) => (
        <Form movie={movie} />
    ))}

   </div>

  );
}
