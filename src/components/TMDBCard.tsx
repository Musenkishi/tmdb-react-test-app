import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  CardContent,
  CardHeader,
  InputAdornment,
  TextField,
} from "@mui/material";
import { FC, useState } from "react";
import MovieList from "./list/MovieList";

const TMDBCard: FC = () => {
  const svgImg =
    "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg";

  const [query, setQuery] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value?.trim());
  };

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        flexGrow: 0,
      }}
    >
      <CardHeader
        title={<img src={svgImg} height="30rem" alt="TMDB logo" />}
        subheader="Test app for TMDB"
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <TextField
          label="Search"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          onChange={handleChange}
        />
        <MovieList query={query} />
      </CardContent>
    </Box>
  );
};

export default TMDBCard;
