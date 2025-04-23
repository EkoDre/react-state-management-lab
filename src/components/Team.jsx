// src/components/Team.jsx

const Team = ({ team, removeFighter }) => {
    return (
      <div className="team-section">
        {team.length === 0 ? (
          <p>Pick some team members</p>
        ) : (
          <div className="fighter-grid">
            {team.map((fighter, index) => (
              <div className="fighter-card" key={index}>
                <img src={fighter.img} alt={fighter.name} width="150" height="150" />
                <h3>{fighter.name}</h3>
                <p>Price: {fighter.price}</p>
                <p>Strength: {fighter.strength}</p>
                <p>Agility: {fighter.agility}</p>
                <button onClick={() => removeFighter(index)}>Remove</button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  // ✅ This must be at the bottom
  export default Team;
  
 