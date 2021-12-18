import { Avatar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

type Props = {
  username: any;
  avatar: string | undefined;
};

export const NavBar: React.FC<Props> = ({ username, avatar }: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }} role="navbar">
      <AppBar position="static" sx={{ padding: 1 }}>
        <Toolbar
          sx={{ width: { xs: "100%", lg: "90%", md: "90%" }, margin: " auto" }}
        >
          <Link to="/" role="home-link">
            <Avatar src={avatar} />
          </Link>
          <Typography
            variant="h6"
            noWrap
            component="div"
            role="app-title"
            sx={{
              display: { xs: "block", sm: "block" },
              textDecoration: "none",
              marginLeft: '15px',
            }}
          >
            {username}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
