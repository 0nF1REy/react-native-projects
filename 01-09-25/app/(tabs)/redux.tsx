import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { Stack } from "expo-router";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import {
  addItem,
  removeItem,
  clearCart,
  CartItem,
} from "../../store/slices/cartSlice";

export default function ReduxScreen() {
  const dispatch: AppDispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleAddItem = (item: { id: number; name: string; price: number }) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (id: number) => {
    dispatch(removeItem(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const renderCartItem = ({ item }: { item: CartItem }) => (
    <View style={styles.cartItem}>
      <Text style={styles.cartItemName}>
        {item.name} (x{item.quantity})
      </Text>
      <Text style={styles.cartItemPrice}>R$ {item.price.toFixed(2)}</Text>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => handleRemoveItem(item.id)}
      >
        <Text style={styles.removeButtonText}>-</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Carrinho" }} />
      <Text style={styles.title}>Boutique Virtual</Text>

      <Text style={styles.sectionTitle}>Nossos Clássicos</Text>
      <View style={styles.productRow}>
        <Text style={styles.productName}>Camiseta Retrô</Text>
        <Text style={styles.productPrice}>R$ 50.00</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() =>
            handleAddItem({ id: 1, name: "Camiseta Retrô", price: 50.0 })
          }
        >
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.productRow}>
        <Text style={styles.productName}>Calça Flare</Text>
        <Text style={styles.productPrice}>R$ 120.00</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() =>
            handleAddItem({ id: 2, name: "Calça Flare", price: 120.0 })
          }
        >
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.productRow}>
        <Text style={styles.productName}>Óculos Aviador</Text>
        <Text style={styles.productPrice}>R$ 200.00</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() =>
            handleAddItem({ id: 3, name: "Óculos Aviador", price: 200.0 })
          }
        >
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Seu Baú de Compras</Text>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyCartText}>Seu baú está vazio!</Text>
      ) : (
        <FlatList
          data={cartItems}
          renderItem={renderCartItem}
          keyExtractor={(item) => item.id.toString()}
          style={styles.cartList}
        />
      )}
      <Text style={styles.totalPrice}>
        Total da Encomenda: R$ {totalPrice.toFixed(2)}
      </Text>
      <TouchableOpacity
        style={[
          styles.clearCartButton,
          cartItems.length === 0 && styles.disabledButton,
        ]}
        onPress={handleClearCart}
        disabled={cartItems.length === 0}
      >
        <Text style={styles.clearCartButtonText}>Esvaziar Baú</Text>
      </TouchableOpacity>
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
  cartList: {
    flexGrow: 0,
    maxHeight: 250,
    marginBottom: 15,
    backgroundColor: "#FFF8DC",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#D2B48C",
    paddingHorizontal: 10,
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#D2B48C",
  },
  cartItemName: {
    fontSize: 16,
    fontFamily: "Palatino",
    flex: 3,
    color: "#696969",
  },
  cartItemPrice: {
    fontSize: 15,
    fontFamily: "Palatino",
    fontWeight: "bold",
    marginRight: 10,
    color: "#8B4513",
  },
  removeButton: {
    backgroundColor: "#A0522D",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 3,
  },
  removeButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14,
  },
  totalPrice: {
    fontSize: 24,
    fontFamily: "Georgia",
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 20,
    textAlign: "right",
    color: "#5C4033",
    borderTopWidth: 1,
    borderTopColor: "#D2B48C",
    paddingTop: 15,
  },
  clearCartButton: {
    backgroundColor: "#A0522D",
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  clearCartButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "Verdana",
  },
  disabledButton: {
    backgroundColor: "#C0C0C0",
  },
  emptyCartText: {
    fontFamily: "Palatino",
    fontStyle: "italic",
    color: "#8B4513",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    fontSize: 16,
  },
});
