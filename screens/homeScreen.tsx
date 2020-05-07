import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const HomeScreen = (props: any) => {
    return (
        <View testID="home-wrapper" style={styles.screen}>
            <Text>
                Home Component
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})