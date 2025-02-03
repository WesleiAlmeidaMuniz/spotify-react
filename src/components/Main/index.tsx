import "./Main.css";
import { useEffect, useState } from "react";

import Playlist1 from "../../assets/playlist/1.jpeg";
import Playlist2 from "../../assets/playlist/2.png";
import Playlist3 from "../../assets/playlist/3.jpeg";
import Playlist4 from "../../assets/playlist/4.jpeg";
import Playlist5 from "../../assets/playlist/5.jpeg";
import Playlist6 from "../../assets/playlist/6.jpeg";
import Playlist7 from "../../assets/playlist/7.jpeg";
import Playlist8 from "../../assets/playlist/8.jpeg";
import Playlist9 from "../../assets/playlist/9.jpeg";
import Playlist10 from "../../assets/playlist/10.jpeg";
import Playlist11 from "../../assets/playlist/11.jpeg";
import Playlist12 from "../../assets/playlist/12.jpeg";
import Playlist13 from "../../assets/playlist/13.jpeg";
import Playlist14 from "../../assets/playlist/14.jpeg";
import Playlist15 from "../../assets/playlist/15.jpeg";

interface Artist {
  id: number;
  name: string;
  urlImg: string;
}

export default function Main({ searchTerm }: { searchTerm: string }) {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [showArtists, setShowArtists] = useState(false); // Estado para controlar a exibição

  useEffect(() => {
    if (searchTerm === "") {
      setShowArtists(false); // Se o campo de busca estiver vazio, mostra as playlists
      return;
    }

    const fetchArtists = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/artists?name_like=${searchTerm}`
        );
        const data = await response.json();

        const filteredResults = data.filter((artist: Artist) =>
          artist.name.toLowerCase().startsWith(searchTerm)
        );

        setArtists(filteredResults);
        setShowArtists(filteredResults.length > 0); // Se houver artistas, exibe a seção
      } catch (error) {
        console.error("Erro ao buscar artistas:", error);
      }
    };

    fetchArtists();
  }, [searchTerm]);

  return (
    <div className="playlist-container">
      {/* Se showArtists for false, mostra as playlists */}
      <div id="result-playlists" className={!showArtists ? "" : "hidden"}>
        <div className="playlist">
          <h1 id="greeting">Boas vindas</h1>
          <h2 className="session">Navegar por todas as seções</h2>
        </div>
        <div className="offer__scroll-container">
          <div className="offer__list">
            <section className="offer__list-item">
              {[
                Playlist1,
                Playlist2,
                Playlist3,
                Playlist4,
                Playlist5,
                Playlist6,
                Playlist7,
                Playlist8,
                Playlist9,
                Playlist10,
                Playlist11,
                Playlist12,
                Playlist13,
                Playlist14,
                Playlist15,
              ].map((playlist, index) => (
                <a href="#" key={index} className="cards">
                  <div className={`cards card${index + 1}`}>
                    <img src={playlist} alt={`Playlist ${index + 1}`} />
                    <span>Playlist {index + 1}</span>
                  </div>
                </a>
              ))}
            </section>
          </div>
        </div>
      </div>

      {/* Se showArtists for true, mostra os artistas */}
      <div id="result-artist" className={showArtists ? "" : "hidden"}>
        <div id="grid-container" className="grid-container">
          {artists.length === 0 ? <p>Nenhum artista encontrado</p> : null}
          {artists.map((artist) => (
            <div key={artist.id} className="artist-card">
              <div className="card-img">
                <img
                  className="artist-img"
                  src={artist.urlImg}
                  alt={artist.name}
                />
                <div className="play">
                  <span className="fa fa-solid fa-play"></span>
                </div>
              </div>
              <div className="card-text">
                <span className="artist-name">{artist.name}</span>
                <span className="artist-categorie">Artista</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
