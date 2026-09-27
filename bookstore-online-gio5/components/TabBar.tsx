// GIỜ 5 — Bài tập 1: Thanh Tab Bar dưới cùng (giao diện tĩnh)
// 4 mục: Trang chủ, Danh mục, Giỏ hàng, Tài khoản — icon phía trên, chữ phía
// dưới, mục đang chọn có màu nổi bật. Không dùng thư viện navigation, chỉ dựng
// LAYOUT tĩnh bằng View + flexbox.
//
// ==== SO SÁNH 2 CÁCH ĐẶT TAB BAR Ở ĐÁY MÀN HÌNH ====
// Cách 1 — position: 'absolute' (bottom: 0, left: 0, right: 0):
//   + Tab bar thoát khỏi luồng layout, nổi ĐÈ lên nội dung phía trên.
//   + Phải tự chừa paddingBottom (= chiều cao tab bar) cho ScrollView, và mọi
//     phần tử cố định khác ở đáy (vd: thanh tổng tiền) cũng phải tự cộng thêm
//     khoảng cách, nếu không sẽ bị tab bar che mất.
//   -> Dùng khi muốn tab bar nổi trên nội dung (nền trong suốt/mờ, bo góc nổi,
//      nội dung cuộn "chui" xuống dưới tab bar), màn hình chỉ có 1 vùng cuộn.
// Cách 2 — đặt cố định NGOÀI ScrollView (phần tử cuối trong cột flex):
//   + Tab bar nằm trong luồng layout; ScrollView phía trên có flex: 1 nên
//     flexbox tự chia: ScrollView chiếm phần còn lại, tab bar giữ chiều cao riêng.
//   + Không cần tính paddingBottom, các vùng không bao giờ chồng lấp nhau.
//   -> Dùng khi màn hình có nhiều vùng cố định xếp chồng ở đáy (như màn Giỏ
//      hàng: danh sách cuộn + thanh tổng tiền + tab bar).
// Ở bài này dùng CÁCH 2, vì Bài tập 2 (Cart Screen) yêu cầu 3 vùng không được
// chồng lấp nhau.
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export type TabKey = "home" | "category" | "cart" | "account";

const TABS: { key: TabKey; label: string; icon: string }[] = [
  { key: "home", label: "Trang chủ", icon: "🏠" },
  { key: "category", label: "Danh mục", icon: "📂" },
  { key: "cart", label: "Giỏ hàng", icon: "🛒" },
  { key: "account", label: "Tài khoản", icon: "👤" },
];

export function TabBar({ active }: { active: TabKey }) {
  return (
    <View style={styles.bar}>
      {TABS.map((tab) => {
        const isActive = tab.key === active;
        return (
          <View key={tab.key} style={styles.tabItem}>
            <Text style={[styles.icon, isActive && styles.iconActive]}>{tab.icon}</Text>
            <Text style={[styles.label, isActive && styles.labelActive]}>{tab.label}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: "row", // 4 mục xếp ngang
    height: 64,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },
  tabItem: {
    flex: 1, // mỗi mục flex:1 -> chia đều 4 phần bằng nhau
    flexDirection: "column", // icon trên, chữ dưới
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 18,
    opacity: 0.5,
  },
  iconActive: {
    opacity: 1,
  },
  label: {
    marginTop: 2,
    fontSize: 11,
    color: "#9CA3AF",
  },
  labelActive: {
    color: "#4338CA", // màu nổi bật cho mục đang chọn
    fontWeight: "700",
  },
});
