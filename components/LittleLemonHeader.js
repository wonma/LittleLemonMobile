import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Welcome to Wooju House
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.12,
        backgroundColor: '#F4CE14',
        width: '100%',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        padding: 60
    }
})