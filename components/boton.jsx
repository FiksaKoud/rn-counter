import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export default function Boton({ label, onPress }) {
    return (
        <Pressable
            accessibilityRole="button"
            onPress={onPress}
            style={({ pressed }) => [styles.boton, pressed && styles.botonPresionado]}
        >
            <Text style={styles.texto}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    boton: {
        alignItems: 'center',
        backgroundColor: '#28724b',
        borderRadius: 8,
        minWidth: 160,
        paddingHorizontal: 24,
        paddingVertical: 14,
    },
    botonPresionado: {
        backgroundColor: '#1d5939',
    },
    texto: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
});