// app/(tabs)/redux.tsx
import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { Stack } from 'expo-router';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { addItem, removeItem, clearCart, CartItem } from '../../store/slices/cartSlice';

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

  // Calcula o preço total (poderia ser um selector no futuro)
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const renderCartItem = ({ item }: { item: CartItem }) => (
    <View style={styles.cartItem}>
      <Text style={styles.cartItemName}>{item.name} (x{item.quantity})</Text>
      <Text style={styles.cartItemPrice}>R$ {item.price.toFixed(2)}</Text>
      <Button title="-" onPress={() => handleRemoveItem(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Carrinho Redux' }} />
      <Text style={styles.title}>Produtos Disponíveis</Text>
      <View style={styles.productRow}>
        <Text style={styles.productName}>Camiseta</Text>
        <Text style={styles.productPrice}>R$ 50.00</Text>
        <Button title="Adicionar" onPress={() => handleAddItem({ id: 1, name: 'Camiseta', price: 50.00 })} />
      </View>
      <View style={styles.productRow}>
        <Text style={styles.productName}>Calça Jeans</Text>
        <Text style={styles.productPrice}>R$ 120.00</Text>
        <Button title="Adicionar" onPress={() => handleAddItem({ id: 2, name: 'Calça Jeans', price: 120.00 })} />
      </View>
      <View style={styles.productRow}>
        <Text style={styles.productName}>Tênis</Text>
        <Text style={styles.productPrice}>R$ 200.00</Text>
        <Button title="Adicionar" onPress={() => handleAddItem({ id: 3, name: 'Tênis', price: 200.00 })} />
      </View>

      <Text style={styles.title}>Seu Carrinho</Text>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyCartText}>Carrinho vazio</Text>
      ) : (
        <FlatList
          data={cartItems}
          renderItem={renderCartItem}
          keyExtractor={(item) => item.id.toString()}
          style={styles.cartList}
        />
      )}
      <Text style={styles.totalPrice}>Total: R$ {totalPrice.toFixed(2)}</Text>
      <Button title="Limpar Carrinho" onPress={handleClearCart} disabled={cartItems.length === 0} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 20,
    color: '#333',
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  productName: {
    fontSize: 18,
    flex: 2,
    color: '#555',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#444',
  },
  cartList: {
    flexGrow: 0,
    maxHeight: 200, // Limita a altura para que o botão de limpar não suma
    marginBottom: 15,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  cartItemName: {
    fontSize: 16,
    flex: 3,
    color: '#666',
  },
  cartItemPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#555',
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 15,
    textAlign: 'right',
    color: '#222',
  },
  emptyCartText: {
    fontStyle: 'italic',
    color: '#888',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  }
});