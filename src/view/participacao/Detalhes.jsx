export const Detalhes = ({ participacao }) => {
  return (
    <div>
      <p>Votos</p>
      <h1>0</h1>
      <a href={`/votos/${participacao.id}`}>Votar</a>
    </div>
  );
};
