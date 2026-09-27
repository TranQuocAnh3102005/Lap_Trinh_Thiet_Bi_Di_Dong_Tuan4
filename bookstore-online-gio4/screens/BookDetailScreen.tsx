// GIỜ 4 — Bài tập 2: Màn hình Chi tiết sách (Book Detail)
// Ảnh bìa lớn phía trên (căn giữa), tên sách + tác giả + giá + mô tả dài phía
// dưới (cuộn được), thanh "Thêm vào giỏ" cố định dưới cùng màn hình.
//
// Cấu trúc tương tự Bài tập 1: phần cố định (đầu/cuối) nằm NGOÀI ScrollView,
// phần nội dung dài nằm TRONG ScrollView ở giữa:
//   SafeAreaView (flex:1)
//   ├── Image ảnh bìa lớn     -> alignSelf 'center', width %, aspectRatio
//   ├── ScrollView (flex:1)   -> tên sách · tác giả, giá, mô tả dài
//   └── Thanh "Thêm vào giỏ"  -> row + space-between, cố định, ngoài ScrollView
import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, StyleSheet } from "react-native";
import { Book } from "../data";

export function BookDetailScreen({ book }: { book: Book }) {
  return (
    <SafeAreaView style={styles.safe}>
      {/* Ảnh bìa lớn phía trên, căn giữa bằng alignSelf */}
      <Image source={{ uri: book.cover }} style={styles.cover} />

      {/* ScrollView riêng (flex:1) cho phần mô tả dài -> mô tả dài bao nhiêu
          cũng chỉ cuộn bên trong, không đẩy tràn thanh "Thêm vào giỏ" bên dưới. */}
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>{book.author}</Text>
        <Text style={styles.price}>{book.price.toLocaleString()} đ</Text>
        <Text style={styles.description}>{book.description}</Text>
      </ScrollView>

      {/* Thanh dưới cùng: row + space-between, KHÔNG nằm trong ScrollView
          -> luôn đứng yên ở đáy màn hình. */}
      <View style={styles.bottomBar}>
        <Text style={styles.bottomPrice}>{book.price.toLocaleString()} đ</Text>
        <View style={styles.addButton}>
          <Text style={styles.addButtonText}>Thêm vào giỏ</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  cover: {
    alignSelf: "center", // căn giữa riêng ảnh theo chiều ngang
    width: "45%", // width theo %
    aspectRatio: 3 / 4, // giữ tỉ lệ ảnh, không cần set height cố định
    marginTop: 16,
    borderRadius: 12,
    backgroundColor: "#EEF2F7",
  },
  scroll: {
    flex: 1, // chiếm phần chiều cao còn lại giữa ảnh bìa và thanh dưới cùng
  },
  scrollContent: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
    color: "#111827",
  },
  author: {
    marginTop: 4,
    fontSize: 14,
    color: "#5B6B7F",
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "700",
    color: "#1E1B4B",
  },
  description: {
    marginTop: 16,
    fontSize: 14,
    lineHeight: 21,
    color: "#374151",
  },
  bottomBar: {
    flexDirection: "row", // giá bên trái, nút bên phải
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    backgroundColor: "#FFFFFF",
  },
  bottomPrice: {
    fontSize: 17,
    fontWeight: "800",
    color: "#1E1B4B",
  },
  addButton: {
    backgroundColor: "#4338CA",
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 10,
  },
  addButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
});
