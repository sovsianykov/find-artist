import React, { FunctionComponent } from "react";
import { createStyles, makeStyles } from "@mui/styles";
import {Box, Theme, Typography} from "@mui/material";

interface PageProps {
  children: JSX.Element | JSX.Element[];
  filterButton?: JSX.Element;
  sideBar?: JSX.Element;
  title: string;
}
const useStyles = makeStyles((theme: Theme) => createStyles({}));

const Page: FunctionComponent<PageProps> = ({
  children,
  filterButton,
  sideBar,
  title,
}) => {
  return (
      <Box>
        <Typography variant='h4'>
          {title}
        </Typography>
        <div>
          {children}
        </div>
  </Box>
  )
};

export default Page;
