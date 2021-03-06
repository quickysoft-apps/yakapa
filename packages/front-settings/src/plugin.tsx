import React, { StatelessComponent } from 'react';
import Button from '@material-ui/core/Button';

interface Props {
  text: string;
}

export const name = 'Settings';

export const Root: StatelessComponent<Props> = props => (
  <Button variant="contained" color="primary">
    Hello World {props.text}
  </Button>
);
