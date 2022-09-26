import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { Grid } from "@mui/material";

function preventDefault(event) {
  event.preventDefault();
}

var updateDate = new Date();
var updateTime = updateDate.getTime;

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Balance</Title>
      <Typography component="p" variant="h4">
        3,024 €
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        <div>
          <Link color="primary" href="#transactions" onClick={preventDefault}>
            Transactions
          </Link>
        </div>
      </Typography>
      <div>
        <Link color="secondary" href="#wallet" onClick={preventDefault}>
          Wallet
        </Link>
      </div>
    </React.Fragment>
  );
}