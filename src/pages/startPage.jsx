import MenuButton from "../components/menuButton"

const hello = (text) => {
    console.log(text)
}

// Start Page Component
const StartPage = () => {
    return (
      <div className="menuButtons">
        <MenuButton text="Grundämne-Quiz" onClick={() => hello("Grundämne")} />
        <MenuButton text="Sten-Quiz" onClick={() => hello("Sten")} />
        <MenuButton text="Rolig Fakta" onClick={() => hello("Fakta")} />
      </div>
    )
  }
  
  export default StartPage