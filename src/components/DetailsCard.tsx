import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  LinearProgress,
} from "@mui/material";
import { FC } from "react";
import { imgBaseUrl } from "../api/api";
import { useMovieListContext } from "../context/MovieContext";
import { useMovie } from "../hooks/queryHooks";
import CloseIcon from "@mui/icons-material/Close";

const DetailsCard: FC = () => {
  const { movieId, setMovieId } = useMovieListContext();
  const { isLoading, error, data } = useMovie(movieId || 0, !!movieId);

  if (!movieId) {
    return <></>;
  }

  if (isLoading) {
    return (
      <Card sx={{ width: 345, height: 500 }}>
        <CardContent>
          <LinearProgress />
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return <Card sx={{ width: 345, height: 500 }}>{"Error: " + error}</Card>;
  }

  return data ? (
    <Card
      sx={{
        height: "100%",
        width: "100%",
        flexGrow: 0,
        overflowY: "auto",
      }}
    >
      <CardHeader
        title={data.title}
        subheader={data.release_date + ""}
        action={
          <IconButton onClick={() => setMovieId(0)}>
            <CloseIcon />
          </IconButton>
        }
      />
      <img
        height="250"
        width="100%"
        src={imgBaseUrl + data.poster_path}
        alt={"Poster for " + data.title}
        style={{
          objectFit: "contain",
        }}
      />
      <CardContent>{data.overview}</CardContent>
    </Card>
  ) : (
    <Card sx={{ width: 345, height: 500 }}></Card>
  );
};

export default DetailsCard;
