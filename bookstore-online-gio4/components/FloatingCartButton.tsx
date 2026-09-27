// GIỜ 3 — Bài tập 2: Nút giỏ hàng nổi (Floating Cart Button)
// Kỹ thuật: containing block LỒNG NHAU — số lượng neo theo nút tròn,
// còn nút tròn neo theo toàn màn hình (2 tầng position:'absolute' khác nhau).
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SIZE = 56;

export function FloatingCartButton({ count }: { count: number }) {
  return (
    // Nút chính: absolute, neo theo containing block là View ngoài cùng của
    // màn hình (SafeAreaView), nằm song song với ScrollView.
    <View style={styles.button}>
      <Text style={styles.buttonIcon}>🛒</Text>

      {/* Số lượng: absolute LẦN 2, nhưng lần này containing block là chính
          View nút tròn ở trên (trong React Native mọi View mặc định
          position:'relative', nên nó tự là containing block cho con absolute). */}
      {count > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{count}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 24,
    right: 20, // neo góc dưới-phải MÀN HÌNH
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2, // width = height + bo tròn 1 nửa -> hình tròn tuyệt đối
    backgroundColor: "#4338CA",
    alignItems: "center",
    justifyContent: "center",
    elevation: 4, // đổ bóng nhẹ trên Android
    shadowColor: "#000", // đổ bóng nhẹ trên iOS/web
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  buttonIcon: {
    fontSize: 22,
  },
  badge: {
    position: "absolute",
    top: -4,
    right: -4, // neo góc trên-phải của CHÍNH nút tròn, không phải màn hình
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#DC2626",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "700",
  },
});
