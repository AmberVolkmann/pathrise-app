import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import { jobBoards } from '../../jobBoards.json'

import CompanyCard from '../CompanyCard/CompanyCard';

let jobBoards = require('../../jobBoards.json')

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AllCompanies() {
  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              {jobBoards.map((data, key) => {
                return (
                  <CompanyCard 
                    key={key}
                    name={data.name}
                    rating={data.rating}
                    logo_file={data.logo_file}
                    description={data.description}
                  />
                )
              })}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Router>

  );
}
