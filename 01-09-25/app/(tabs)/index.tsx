import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { addItem } from "../../store/slices/cartSlice";
import CartIcon from "@/components/CartIcon";

const PRODUCTS = [
  { id: 1, name: "Lápis", price: 2.0 },
  { id: 2, name: "Caderno", price: 15.5 },
  { id: 3, name: "Mochila", price: 99.99 },
];

export default function HomeScreen() {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  const renderProduct = ({ item }: { item: (typeof PRODUCTS)[0] }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
      <Button title="Adicionar" onPress={() => dispatch(addItem(item))} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Produtos</Text>
      <FlatList
        data={PRODUCTS}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
      />
      <CartIcon />
      <Text style={styles.totalItems}>
        Total de itens no carrinho:{" "}
        {items.reduce((sum, i) => sum + i.quantity, 0)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  name: { fontSize: 18 },
  price: { fontSize: 16, color: "green" },
  totalItems: { marginTop: 10, fontSize: 16, fontWeight: "bold" },
});
