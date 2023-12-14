"use client";

import { contactData } from "@/app/_data/data";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  List,
  ListSubheader,
  Typography,
} from "@mui/material";

const GridPage = () => {
  return (
    <Grid container spacing={2} sx={{ width: 700 }}>
      {contactData.map((contact) => (
        <Grid item key={contact.id} sx={{ width: 300 }}>
          <Card>
            <CardHeader
              title={contact.name}
              subheader={contact.role}
              avatar={
                <Avatar>
                  {contact.name?.substring(0, 1).toUpperCase() || "A"}
                </Avatar>
              }
            />
            <CardContent>
              <Typography>
                <b>Start Date: </b>
                {typeof contact.startDate !== "string"
                  ? contact.startDate?.format("YYYY-MM-DD")
                  : contact.startDate}
              </Typography>
              <Typography>
                <b>Work Preference: </b>
                {contact.preference}
              </Typography>
              <List
                subheader={
                  <ListSubheader
                    sx={{
                      right: 16,
                      position: "inherit",
                      fontSize: "1.25rem",
                      color: "black",
                      paddingLeft: 2,
                    }}
                  >
                    Skills:
                  </ListSubheader>
                }
                sx={{
                  listStyle: "list-item",
                  listStyleType: "circle",
                  paddingLeft: 2,
                }}
              >
                {contact.skills.map((skill) => (
                  <li
                    key={skill}
                    style={{
                      paddingBottom: "2px",
                    }}
                  >
                    {skill}
                  </li>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default GridPage;
