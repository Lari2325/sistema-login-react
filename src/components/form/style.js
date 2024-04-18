import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    boxForm : {
        backgroundColor: '#000044',
        paddingVertical: 30,
        paddingHorizontal: 20, 
        paddingTop: 100, 
        width: '100%',
        height: '100%',
        borderRadius: 30, 
        borderBottomRightRadius: 0,
        borderTopRightRadius: 50, 
        borderBottomLeftRadius: 0, 
        borderTopLeftRadius: 50, 
    },
    Form: {
        marginBottom: 30,
    },
    textForm: {
        color: '#FFFFFF',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    formInput : {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20, 
        borderRadius: 30, 
        borderRadius: 50,
        color: '#000044',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
    },
    button: {
        width: "100%",
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        textTransform: 'uppercase',
        color: '#000044',
        textAlign: "center",
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default styles;