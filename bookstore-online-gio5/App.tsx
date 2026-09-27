
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { CartScreen } from './screens/CartScreen';
import { CART_ITEMS } from './data';

export default function App() {
  return (
    <>
      <CartScreen items={CART_ITEMS} />
      <StatusBar style="auto" />
    </>
  );
}
