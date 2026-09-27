// GIỜ 5 — Bài tập 2: Màn hình Giỏ hàng (Cart Screen)
// Toàn màn hình xử lý đủ 3 vùng, không vùng nào chồng lấp vùng nào:
//   SafeAreaView (flex:1)
//   ├── ScrollView (flex:1)  -> danh sách sản phẩm, CUỘN được, ở giữa
//   ├── Thanh tổng tiền      -> Tổng tiền + nút Thanh toán, KHÔNG cuộn, ngay trên Tab Bar
//   └── TabBar (Bài tập 1)   -> cố định đáy màn hình
// Cả thanh tổng tiền và TabBar đều nằm NGOÀI ScrollView, trong luồng flex bình
// thường -> ScrollView flex:1 tự co lại phần còn lại, không cần absolute.
import React from "react";
import { SafeAreaView, View, ScrollView, Text, StyleSheet } from "react-native";
import { CartLineItem } from "../components/CartLineItem";
import { TabBar } from "../components/TabBar";
import { CartItem } from "../data";

export function CartScreen({ items }: { items: CartItem[] }) {
  const total = items.reduce((sum, item) => sum + item.book.price * item.quantity, 0);

  return (
    <SafeAreaView style={styles.safe}>
      {/* Vùng 1: danh sách sản phẩm cuộn được */}
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        {items.map((item) => (
          <CartLineItem key={item.book.id} item={item} />
        ))}
      </ScrollView>

      {/* Vùng 2: tổng tiền + nút Thanh toán, cố định ngay trên Tab Bar */}
      <View style={styles.totalBar}>
        <Text style={styles.totalText}>
          Tổng tiền: <Text style={styles.totalValue}>{total.toLocaleString()} đ</Text>
        </Text>
        <View style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Thanh toán</Text>
        </View>
      </View>

      {/* Vùng 3: Tab Bar của Bài tập 1, cố định đáy màn hình */}
      <TabBar active="cart" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scroll: {
    flex: 1, // chiếm hết phần chiều cao còn lại phía trên 2 vùng cố định
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  totalBar: {
    flexDirection: "row", // tổng tiền bên trái, nút thanh toán bên phải
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    backgroundColor: "#FFFFFF",
  },
  totalText: {
    fontSize: 14,
    color: "#5B6B7F",
  },
  totalValue: {
    fontSize: 18,
    fontWeight: "800",
    color: "#1E1B4B",
  },
  checkoutButton: {
    backgroundColor: "#4338CA",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
  },
  checkoutText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
});
