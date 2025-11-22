import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { addItem } from "../../store/slices/cartSlice";

const PRODUCTS = [
  { id: 1, name: "Lápis", price: 2.0 },
  { id: 2, name: "Caderno", price: 15.5 },
  { id: 3, name: "Mochila", price: 99.99 },
];

export default function HomeScreen() {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  const renderProduct = ({ item }: { item: (typeof PRODUCTS)[0] }) => (
    <View style={styles.productRow}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>R$ {item.price.toFixed(2)}</Text>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => dispatch(addItem(item))}
      >
        <Text style={styles.addButtonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Boutique Virtual</Text>

      <Text style={styles.sectionTitle}>Nossos Clássicos</Text>
      <FlatList
        data={PRODUCTS}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.productList}
      />
      <Text style={styles.totalItems}>
        Total de itens no baú: {items.reduce((sum, i) => sum + i.quantity, 0)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F7E7CE",
  },
  title: {
    fontSize: 32,
    fontFamily: "Georgia",
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 10,
    color: "#8B4513",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  sectionTitle: {
    fontSize: 22,
    fontFamily: "Georgia",
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 25,
    color: "#A0522D",
    borderBottomWidth: 1,
    borderBottomColor: "#D2B48C",
    paddingBottom: 5,
  },
  productList: {
    paddingBottom: 20,
  },
  productRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    padding: 15,
    backgroundColor: "#FFF8DC",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#D2B48C",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 3,
  },
  productName: {
    fontSize: 18,
    fontFamily: "Palatino",
    flex: 2,
    color: "#5C4033",
  },
  productPrice: {
    fontSize: 17,
    fontFamily: "Palatino",
    fontWeight: "bold",
    marginRight: 10,
    color: "#8B4513",
  },
  addButton: {
    backgroundColor: "#CD853F",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  addButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14,
    fontFamily: "Verdana",
  },
  totalItems: {
    fontSize: 18,
    fontFamily: "Palatino",
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "right",
    color: "#5C4033",
    borderTopWidth: 1,
    borderTopColor: "#D2B48C",
    paddingTop: 15,
  },
});
