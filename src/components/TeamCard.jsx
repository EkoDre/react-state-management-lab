// TeamCard.jsx
const TeamCard = ({ fighter, onClick }) => {
    return (
      <li style={{ border: '1px solid #444', margin: '10px', padding: '10px', listStyle: 'none' }}>
        <img src={fighter.img} alt={fighter.name} width="150" height="150" />
        <h3>{fighter.name}</h3>
        <p> Price: ${fighter.price}</p>
        <p> Strength: {fighter.strength}</p>
        <p>⚡ Agility: {fighter.agility}</p>
        <button onClick={() => onClick(fighter)}>Remove</button>
      </li>
    );
  };
  
  export default TeamCard;
  