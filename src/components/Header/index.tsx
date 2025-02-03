import "./Header.css";
import smallLeft from "../../assets/icons/small-left.png";
import smallRight from "../../assets/icons/small-right.png";
import searchImg from "../../assets/icons/search.png";
import { useState } from "react";

export default function Header({
  onSearch,
}: {
  onSearch: (searchTerm: string) => void;
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    onSearch(value);
  };
  return (
    <nav className="header__navigation">
      <div className="navigation">
        <button className="arrow-left">
          <img src={smallLeft} alt="Seta esquerda" />
        </button>
        <button className="arrow-right">
          <img src={smallRight} alt="Seta direita" />
        </button>
      </div>
      <div className="header__search">
        <img src={searchImg} alt="" />
        <input
          type="text"
          name=""
          id="search-input"
          maxLength={800}
          placeholder="O que você quer ouvir?"
          value={searchTerm}
          onChange={handleInput}
        />
      </div>

      <div className="header__login">
        <button className="subscribe">Inscreva-se</button>
        <button className="login">Entrar</button>
      </div>
    </nav>
  );
}
