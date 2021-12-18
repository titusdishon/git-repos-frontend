import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
import { NavBar } from "../components/NavBar";
import { RootState } from "../store/rootReducer";
import useFetch from "../utils/fetch";
import { ReadMe } from "./ReadMe";

function ReposView() {
  const { repo } = useSelector((state: RootState) => state.ripos);
  const { data, isLoading } = useFetch(
    `/repo?user=${repo?.owner.login}&&repo=${repo?.name}&&branch=${repo?.default_branch}`,
    ["readme"],
    { enabled: Boolean(repo) }
  );

  console.log(data);
  return (
    <>
      {isLoading && <LoadingSpinner />}
      <NavBar username={repo?.name} avatar={repo?.owner.avatar_url}/>
      <Box
        sx={{
          width: { sm: "100%", lg: "90%" },
          marginLeft: { lg: "5%", sm: "10px" },
          minHeight: "98vh",
          padding: "20px",
          bgcolor: "background.paper",
        }}
      >
        <Typography variant="h2">
          Welcome To {repo?.name}'s Readme file
        </Typography>
        <Typography variant="h4">By {repo?.owner.login}</Typography>
        <Typography variant="h4">
          Description: {repo?.description || "No description for this project"}
        </Typography>
        <ReadMe readme={data} />
      </Box>
    </>
  );
}

export default ReposView;
