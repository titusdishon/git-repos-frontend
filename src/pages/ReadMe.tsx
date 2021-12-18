import React from "react";
import ReactMarkdown from "react-markdown/index";
import remarkGfm from "remark-gfm";
import {
  Box,
} from "@mui/material";
type Props = {
  readme: any;
};
export const ReadMe: React.FC<Props> = ({ readme }: Props) => {
  return (
    <>
      <Box
        sx={{
          width: { sm: "100%", lg: "90%" },
          marginLeft: { lg: "5%", sm: "10px" },
          minHeight: "98vh",
          padding: "20px",
          bgcolor: "background.paper",
        }}
      >
        <ReactMarkdown children={readme} remarkPlugins={[remarkGfm]} />
      </Box>
    </>
  );
};
