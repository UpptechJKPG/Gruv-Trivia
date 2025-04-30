import MenuButton from "../components/menuButton"

// Start Page Component
const StartPage = () => {
    return (
      <div className="menuButtons">
        <MenuButton text="Grundämne-Quiz" link="/grundamne" />
        <MenuButton text="Sten-Quiz" link="/sten" />
        <MenuButton text="Rolig Fakta" link="/fakta" />
      </div>
    )
}
  
export default StartPage