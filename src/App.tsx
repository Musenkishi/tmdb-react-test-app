import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import DetailsCard from "./components/DetailsCard";
import TMDBCard from "./components/TMDBCard";
import { MovieListContext } from "./context/MovieContext";
import tmdbTheme from "./theme/tmdbTheme";

const queryClient = new QueryClient();

function App() {
  const [movieId, setMovieId] = useState<number>(0);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={tmdbTheme}>
        <MovieListContext.Provider value={{ movieId, setMovieId }}>
          <Box
            sx={{
              overflow: "hidden",
              backgroundColor: "background.default",
              color: "text.primary",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            gap={2}
          >
            <TMDBCard />
            <DetailsCard />
          </Box>
          <ReactQueryDevtools initialIsOpen={false} />
        </MovieListContext.Provider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
