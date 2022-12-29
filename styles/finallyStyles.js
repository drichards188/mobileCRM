import { StyleSheet } from 'react-native'

const stylesFn = ({fontSize = 12}) => {
    const warnColor = {
        color: 'yellow'
    }
    return StyleSheet.create({
        title: {
            fontWeight: '800',
            fontSize: 18
        },
        warnTitle: {
            fontWeight: '800',
            fontSize: 18,
            ...warnColor
        },
        fontSize: {
            fontSize
        }
    });
}

export default stylesFn