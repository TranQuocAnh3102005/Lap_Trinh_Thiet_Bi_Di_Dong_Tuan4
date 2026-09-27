// GIỜ 4 — Bài tập 1: Màn hình Trang chủ BookStore hoàn chỉnh
// Ghép Header (Giờ 1) + Category Chips (Giờ 2) + Book Grid (Giờ 3)
// + Floating Cart Button thành 1 màn hình Home có thể cuộn được.
//
// Cấu trúc đúng yêu cầu:
//   SafeAreaView (flex:1)
//   ├── Header              -> cố định, KHÔNG nằm trong ScrollView
//   ├── ScrollView (flex:1) -> chứa Chips + Grid, cuộn được
//   └── FloatingCartButton  -> absolute, nằm NGOÀI ScrollView, cùng cấp với nó
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Header } from "../components/Header";
import { CategoryChips } from "../components/CategoryChips";
import { BookGrid } from "../components/BookGrid";
import { FloatingCartButton } from "../components/FloatingCartButton";
import { BOOKS, CART_ITEMS } from "../data";

export function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      {/* Header cố định: đặt TRƯỚC ScrollView, không cuộn theo nội dung */}
      <Header />

      {/* ScrollView flex:1 -> chiếm hết phần chiều cao còn lại dưới Header */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <CategoryChips />
        <BookGrid books={BOOKS} />
      </ScrollView>

      {/* Nút nổi là con của View ngoài cùng (SafeAreaView), song song với
          ScrollView -> không bị cuộn theo nội dung. */}
      <FloatingCartButton count={CART_ITEMS.length} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    gap: 16, // khoảng cách giữa Chips và Grid
    // paddingBottom đủ lớn: nút giỏ hàng cao 56 + cách đáy 24 = 80
    // -> chừa 100 để phần tử cuối của Grid không bị nút che mất.
    paddingBottom: 100,
  },
});
