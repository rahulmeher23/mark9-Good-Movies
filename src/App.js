import React, { useState } from "react";
import "./styles.css";

const movieList = {
  Action: [
    {
      name: "Lone Suvivor",
      rating: "4/5",
      description:
        "A movie based on the real story of Operation Red Wings which took place in Afghanistan by US Navy SEALS."
    },
    {
      name: "Saving Private Ryan",
      rating: "5/5",
      description:
        "A movie based on true events during WW2 where a mother had her 4 sons serving in the army, only one son was remaining alive and it was a captain's mission to bring the only son left back to home safely."
    },
    {
      name: "13 Hours: The Secret Soldiers of Benghazi",
      rating: "4.5/5",
      description:
        "A movie based on the real story where a CIA base in Benghazi, Libya was attacked by local militants after the death of the dictator Gadaffi."
    }
  ],

  Fictional: [
    {
      name: "Interstellar",
      rating: "4/5",
      description:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans."
    },
    {
      name: "The Avengers",
      rating: "4/5",
      description:
        "Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task."
    },
    {
      name: "The Midnight Sky",
      rating: "4.5/5",
      description:
        "A lone scientist in the Arctic races to contact a crew of astronauts returning home to a mysterious global catastrophe"
    }
  ],

  Horror: [
    {
      name: "The Conjuring",
      rating: "4/5",
      description:
        "The Perron family moves into a farmhouse where they experience paranormal phenomena. They consult demonologists, Ed and Lorraine Warren, to help them get rid of the evil entity haunting them."
    },
    {
      name: "The Exorcist",
      rating: "5/5",
      description:
        "Regan, a young girl, displays bizarre behaviour after playing with an Ouija board. Chris, her mother and an actress, consults two priests who conclude that Regan is possessed by a demonic entity."
    },
    {
      name: "Annabelle",
      rating: "4.5/5",
      description:
        "John and Mia Form are attacked by members of a satanic cult that uses their old doll as a conduit to make their life miserable. This unleashes a string of paranormal events in the Forms' residence."
    }
  ]
};

export default function App() {
  const [movieGenres, setMovies] = useState("Action");
  // console.log("movieGenre is ", movieGenres);

  const favGenre = Object.keys(movieList);
  // console.log("fav Genre is ", favGenre);

  var genre;
  function genreClickHandler(currGenre) {
    genre = currGenre;
    // console.log("Current genre is ", genre);
    return setMovies(genre);
  }

  return (
    <div className="App">
      <h1>▶️ Great Movies</h1>
      <p>
        Check out my favourite movies. Select the genre you like to get started.
      </p>

      {/* Creating buttons based on genre */}
      <div>
        {favGenre.map((genre) => (
          <button key={genre} onClick={() => genreClickHandler(genre)}>
            {" "}
            {genre}{" "}
          </button>
        ))}
      </div>

      <hr />

      <div className="movie-card">
        {movieList[movieGenres].map((movieGenre) => (
          <li className="list" key={movieGenre}>
            <div className="nonBullet name">
              <span>{movieGenre.name}</span>
            </div>

            <div className="nonBullet">{movieGenre.description}</div>

            <div className="nonBullet">
              <span>Rating: {movieGenre.rating}</span>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}
