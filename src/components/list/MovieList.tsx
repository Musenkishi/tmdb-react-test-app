import InfoIcon from "@mui/icons-material/Info";
import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  LinearProgress,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { imgBaseUrl } from "../../api/api";
import { useMovieListContext } from "../../context/MovieContext";
import { useSearchOrDiscover } from "../../hooks/queryHooks";
import { Movie } from "../../types/types";

type Props = {
  query: string;
};

const MovieList: FC<Props> = ({ query }) => {
  const { setMovieId } = useMovieListContext();
  const { isLoading, error, data } = useSearchOrDiscover(query);

  if (isLoading) {
    return <LinearProgress />;
  }

  if (error) {
    console.error(error);
    return <Typography>Something went wrong</Typography>;
  }

  return data ? (
    <ImageList cols={6} rowHeight={250} gap={8}>
      {data.results.map((movie: Movie) => (
        <ImageListItem key={movie.id}>
          <img
            src={imgBaseUrl + movie.poster_path}
            alt={movie.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={movie.title}
            subtitle={movie.release_date + ""}
            actionIcon={
              <IconButton onClick={() => setMovieId(movie.id)}>
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  ) : null;
};

export default MovieList;
