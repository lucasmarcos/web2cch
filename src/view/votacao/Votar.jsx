export const Votar = ({ votos, id }) => {
  return (
    <div>
      <h3>{votos}</h3>
      <a href={`/votar/novo/${id}`}>VOTO</a>
    </div>
  );
};
