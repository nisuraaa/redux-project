import React from 'react';
import Todo from "../todo/Todo";
import Counter from "../counter/Counter";
import { useTranslation } from "react-i18next";
import Items from '../cart/Items';

export default function Dashboard() {
  const {t, i18n} = useTranslation();


  return (
    <div >
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
      <Items/>
      </div>
    </div>
  );
}
