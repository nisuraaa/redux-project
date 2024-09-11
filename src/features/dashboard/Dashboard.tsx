import {useTranslation} from 'react-i18next';
import Items from '../cart/Items';
import Cart from '../cart/CartItems';
import {Divider} from '@mui/material';

export default function Dashboard() {
  const {t, i18n} = useTranslation();

  return (
    <div>
      <div
        style={{display: 'flex', gap: '10px', justifyContent: 'space-between', flexWrap: 'wrap'}}
      >
        <Items />
        <Divider orientation="vertical" flexItem />
        <Cart />
      </div>
    </div>
  );
}
