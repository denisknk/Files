import React from 'react';
import { format } from 'date-fns';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardContainer } from './components/Card';

interface IFileItem {
  title: string;
  size: number;
  createdAt: string;
}

export const FileItem: React.FC<IFileItem> = ({ title, size, createdAt }) => {
  const date = format(new Date(createdAt), 'PPPP');

  return (
    <CardContainer>
      <CardActionArea>
        <CardHeader
          title={title}
          subheader={date}
        />
        <CardContent>
          <Typography color="textSecondary" component="p">Size: {size}Kb</Typography>
        </CardContent>
      </CardActionArea>
    </CardContainer>
  );
};
