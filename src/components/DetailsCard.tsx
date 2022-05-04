import {
  Box,
  CardContent,
  CardHeader,
  Chip,
  CircularProgress,
  LinearProgress,
  Paper, Stack,
  Typography
} from "@mui/material";
import { FC } from "react";
import { imgBaseUrl } from "../api/api";
import { useMovieListContext } from "../context/MovieContext";
import { useMovie } from "../hooks/queryHooks";

const DetailsCard: FC = () => {
  const { movieId } = useMovieListContext();
  const { isLoading, error, data } = useMovie(movieId || 0, !!movieId);

  if (!movieId) {
    return <></>;
  }

  if (isLoading) {
    return (
      <CardContent>
        <LinearProgress />
      </CardContent>
    );
  }

  if (error) {
    return <>{"Error: " + error}</>;
  }

  return data ? (
    <>
      <img
        width="100%"
        src={imgBaseUrl + data.poster_path}
        alt={"Poster for " + data.title}
        style={{
          maxHeight: "50%",
          objectFit: "contain",
          background: "url(" + imgBaseUrl + data.backdrop_path + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "2rem 0rem 2rem 0rem",
        }}
      />
      <CardHeader
        title={data.title}
        subheader={data.tagline}
        sx={{
          // backgroundColor: "#222222aa",
          backgroundColor: "background.default",
        }}
        action={
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
            {data.genres?.map((genre) => (
              <Chip label={genre.name} size="small" />
            ))}
          </Stack>
        }
      />
      <CardContent>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Box
            sx={{
              flexGrow: 1,
            }}
          >
            <Typography variant="body1">{data.overview}</Typography>
          </Box>
          <Paper
            sx={{
              flexDirection: "row",
              flexGrow: 0,
              minWidth: "25%",
              // width: "50%",
              padding: 2,
            }}
          >
            <Typography variant="subtitle1">Release date</Typography>
            <Typography variant="subtitle2">
              {data.release_date + ""}
            </Typography>
            <br />
            <Typography variant="subtitle1">Runtime</Typography>
            <Typography variant="subtitle2">
              {data.runtime + " minutes"}
            </Typography>
            <br />
            <Typography variant="subtitle1">Vote average</Typography>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                alignItems: "center",
              }}
            >
              <CircularProgress
                variant="determinate"
                value={data.vote_average * 10}
              />
              <Typography variant="subtitle2">
                {data.vote_average * 10 + "%"}
              </Typography>
            </Stack>
          </Paper>
        </Stack>
      </CardContent>
    </>
  ) : (
    <></>
  );
};

export default DetailsCard;
