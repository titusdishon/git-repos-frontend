import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { setRipo } from "../store/riposSlice";
import { RootState } from "../store/rootReducer";

function Repos() {
  const { repositories } = useSelector((state: RootState) => state.ripos);
  const { username } = useParams<{ username: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onArtistSelect = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    repo: any
  ) => {
    e.preventDefault();
    dispatch(setRipo(repo));
    navigate(`/project-details/${username}/${repo.name}`);
  };
  console.log(repositories);

  return (
    <div>
      <NavBar username={`${username}'s projects`} avatar={repositories&&repositories[0]?.owner.avatar_url} />
      <List
        sx={{
          width: { sm: "100%", lg: "90%" },
          marginLeft: { lg: "5%", sm: "10px" },
          minHeight: "98vh",
          padding: "20px",
          bgcolor: "background.paper",
        }}
      >
        {repositories?.map((repo: any) => (
          <ListItem
            alignItems="flex-start"
            sx={{ cursor: "pointer" }}
            onClick={(e) => {
              onArtistSelect(e, repo);
            }}
            key={repo.id}
          >
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={repo?.owner.avatar_url} />
            </ListItemAvatar>
            <ListItemText
              primary={repo.name.split("-").join(" ")}
              secondary={
                <React.Fragment>
                  {" "}
                  {repo?.description || "No description for this project"}
                </React.Fragment>
              }
            />
          </ListItem>
        ))}
        <Box
          sx={{
            marginTop: "10px",
            backgroundColor: "#edebeb",
            padding: "10px",
          }}
        >
          {repositories?.length} repositories
        </Box>
      </List>
    </div>
  );
}

export default Repos;
