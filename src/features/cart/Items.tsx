import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
  Button,
} from '@mui/material';
import React, {useEffect} from 'react';
import {useLazyGetItemsQuery} from '../../api/cartApiSlice';

const Items = () => {
  const [triggerGetItemsQuery, {data, error, isLoading}] = useLazyGetItemsQuery();

  useEffect(() => {
    triggerGetItemsQuery().unwrap();
  }, []);

  return (
    <div>
      <List sx={{width: '100%', minWidth: '800px', bgcolor: 'background.paper'}}>
        {data?.map((item: any) => (
          <div key={item.id}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={item.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{display: 'inline'}}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {item.price}
                    </Typography>
                  </React.Fragment>
                }
              />
              <Button variant="contained" color="primary">
                Add to Cart
              </Button>
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        ))}
      </List>
    </div>
  );
};

export default Items;
