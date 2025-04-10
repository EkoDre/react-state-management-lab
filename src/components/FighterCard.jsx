// src/components/FighterCard.jsx

const FighterCard = ({ fighter, onClick, buttonText }) => {
  return (
    <li>
      <img src={fighter.img} alt={fighter.name} width="150" height="150" />
      <h3>{fighter.name}</h3>
      <p>💰 Price: ${fighter.price}</p>
      <p>💪 Strength: {fighter.strength}</p>
      <p>⚡ Agility: {fighter.agility}</p>
      <button onClick={() => onClick(fighter)}>{buttonText}</button>
    </li>
  );
};

export default FighterCard;
