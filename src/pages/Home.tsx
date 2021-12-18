import { useState } from "react";
import useFetch from "../utils/fetch";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { List, ListItem, Alert, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRipos } from "../store/riposSlice";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const [query, setQuery] = useState<string>("");
  const [enabled, setEnabled] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, isSuccess, isLoading, error, isError } = useFetch(
    `/repos?username=${query}`,
    ["repos", query],
    {
      enabled,
    }
  );

  if (isSuccess && data.length > 0) {
    dispatch(setRipos(data));
    navigate(`/repos/${query}`);
  }

  return (
    <Box
      sx={{
        width: { sm: "100%", lg: "40%" },
        marginLeft: { lg: "30%", sm: "10px" },
        marginTop: { lg: "10%", sm: "50%" },
        height: "400px",
      }}
    >
      <Paper
        component="form"
        sx={{
          marginTop: "10px",
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          value={query || ""}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter username"
          inputProps={{
            "aria-label": "enter username",
            "data-testid": "search-user-input",
          }}
        />
        <IconButton
          type="submit"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={(e) => {
            e.preventDefault();
            setEnabled(true);
          }}
        >
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      </Paper>
      {isLoading && <LoadingSpinner />}
      <List>
        {data?.length === 0 && (
          <ListItem>
            <Alert sx={{ padding: "2px", width: "100%" }} severity="warning">
              No record found
            </Alert>
          </ListItem>
        )}
      </List>
      {isError && error && (
        <Alert severity="error">
          {error.message || "something went wrong"}
        </Alert>
      )}
    </Box>
  );
};
export default Home;
