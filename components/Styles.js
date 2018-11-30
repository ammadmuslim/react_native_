import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 0.2,
        backgroundColor: "green"
    },
    footer: {
        flex: 3,
        backgroundColor: "blue",
        justifyContent: "center",
    },
    footerText: {
        alignSelf: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20
    }
});