import { useState } from "react";
import { Button, Badge } from "@mui/material/";
import { ThumbUp, ThumbDown } from "@mui/icons-material";
import axios from "axios";

const initialJoke = null;

const Joke = () => {
  const [joke, setJoke] = useState(initialJoke);
  const [like, setLike] = useState(0);
  const [notLike, setNotLike] = useState(0);

  const getJoke = async () => {
    try {
      const { data } = await axios("https://api.chucknorris.io/jokes/random");
      setJoke(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "50%",
      }}
    >
      <h2 style={{ fontStyle: "italic" }}>
        {joke ? `" ${joke.value} "` : "Click the search button"}
      </h2>
      <Button
        variant="contained"
        onClick={getJoke}
        style={{ justifySelf: "end", width: "30%", marginBottom: "20px" }}
      >
        Search Joke
      </Button>
      <div style={{ width: "50%" }}>
        <p>Rate this joke</p>
        <Button onClick={() => setLike(like + 1)}>
          <Badge badgeContent={like} color="primary">
            <ThumbUp style={{ marginTop: "5px" }} />
          </Badge>
        </Button>
        <Button onClick={() => setNotLike(notLike + 1)}>
          <Badge badgeContent={notLike} color="primary">
            <ThumbDown style={{ marginTop: "5px" }} />
          </Badge>
        </Button>
      </div>
    </div>
  );
};

export default Joke;
