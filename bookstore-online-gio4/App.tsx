
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { HomeScreen } from './screens/HomeScreen';
import { BookDetailScreen } from './screens/BookDetailScreen';
import { BOOKS } from './data';

const BAI_TAP = 2 as 1 | 2;

export default function App() {
  return (
    <>
      {BAI_TAP === 1 ? <HomeScreen /> : <BookDetailScreen book={BOOKS[0]} />}
      <StatusBar style="auto" />
    </>
  );
}
