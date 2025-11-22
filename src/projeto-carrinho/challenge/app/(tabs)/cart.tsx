import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { useCart } from "../../context/CartContext";

export default function CartScreen() {
  const { items, totalPrice, removeItem, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text>Seu carrinho está vazio.</Text>
      </View>
    );
  }

  const renderItem = ({ item }: { item: (typeof items)[0] }) => (
    <View style={styles.item}>
      <Text>
        {item.name} (x{item.quantity})
      </Text>
      <Text>R$ {(item.price * item.quantity).toFixed(2)}</Text>
      <Button title="Remover" onPress={() => removeItem(item.id)} color="red" />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Seu Carrinho</Text>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.summary}>
        <Text style={styles.total}>Total: R$ {totalPrice.toFixed(2)}</Text>
        <Button title="Finalizar Compra" onPress={() => {}} />
        <Button title="Limpar Carrinho" onPress={clearCart} color="gray" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  summary: {
    marginTop: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  total: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
    marginBottom: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
