import Profile from "./Profile";

function App() {
    return (
      <div style={{padding: "20px"}}>
        <h1>Profile Showcase</h1>

        <Profile
         name = "Bad Bunny"
         occupation= "Puerto Rican singer, and rapper"
         bio= "Bad Bunny, also known as Benito Antonio Martínez Ocasio, is a Puerto Rican singer and rapper."
         funFact= "He recently performed at the Super Bowl halftime show in 2026, making the first time he ever solo headline the event."
        />

        <Profile
          name = "Banksy"
          occupation= "British street artist"
          bio= "Banksy is known for his satirical street art and political activism."
          funFact= "His identity is unknown, and he remains a mysterious figure in the art world."
        />

        <Profile
          name = "MC Magic"
          occupation= "American rapper and songwriter"
          bio= "MC Magic, whose real name is Marco Cardenas, is an American rapper and songwriter known for his contributions to the hip-hop genre."
          funFact= "MC Magic is known for his unique style and has collaborated with several notable artists in the hip-hop scene."
        />
      </div>
    );
  }

export default App;