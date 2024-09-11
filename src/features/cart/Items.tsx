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
import {useDispatch} from 'react-redux';
import {addItem} from './cartSlice';

const Items = () => {
  const [triggerGetItemsQuery, {data, error, isLoading}] = useLazyGetItemsQuery();

  useEffect(() => {
    triggerGetItemsQuery().unwrap();
  }, []);

  const dispatch = useDispatch();

  const handleAddToCart = (product: any) => {
    dispatch(addItem(product));
  };

  return (
    <div>
      <List sx={{width: '100%', minWidth: '500PX', bgcolor: 'background.paper'}}>
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
              <Button variant="contained" color="primary" onClick={() => handleAddToCart(item)}>
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
