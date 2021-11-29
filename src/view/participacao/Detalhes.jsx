export const DetalhesParticipacao = ({ participacao }) => {
  return (
    <div>
      <h1>{participacao.nome}</h1>
      <p>Votos</p>
      <h1>{participacao.votos}</h1>
      <a href={`/votar/novo/${participacao.id}`}>Votar</a>
    </div>
  );
};
