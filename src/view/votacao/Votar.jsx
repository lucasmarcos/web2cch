export const Votar = ({ votos, id }) => {
  return (
    <div>
      {votos}
      <a href={`/votar/novo/${id}`}>VOTO</a>
    </div>
  );
};
