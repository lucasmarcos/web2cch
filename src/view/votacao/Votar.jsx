export const Votar = ({ votos, id }) => {
  return (
    <div>
      <p>{votos}</p>
      <a href={`/votar/novo/${id}`}>VOTO</a>
    </div>
  );
};
