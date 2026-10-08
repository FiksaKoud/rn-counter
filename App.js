import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Boton from './components/boton';

export default function App() {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador((valorActual) => valorActual + 1);
  };

  const decrementarContador = () => {
    setContador((valorActual) => valorActual - 1);
  };

  const reiniciarContador = () => {
    setContador(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Mi contador</Text>
      <Text style={styles.contador}>{contador}</Text>
      <View style={styles.acciones}>
        <Boton label="Sumar uno" onPress={incrementarContador} />
        <Boton label="Restar uno" onPress={decrementarContador} />
        <Boton label="Reiniciar" onPress={reiniciarContador} />
      </View>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  titulo: {
    color: '#26352d',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 16,
  },
  contador: {
    color: '#173e2c',
    fontSize: 72,
    fontWeight: '700',
    marginBottom: 24,
  },
  acciones: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'center',
  },
});
