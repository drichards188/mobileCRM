import {Image, SafeAreaView, ScrollView, Text, View} from "react-native";
import stylesFn from "../styles/finallyStyles";

const Finally = () => {

    const styles = stylesFn({fontSize: 12})

    return (
        <SafeAreaView>
            <View style={{width: '1000px'}}>
                <Image source={require('../assets/splash.png')}/>
                <Text style={styles.warnTitle}>Hi David</Text>
                <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                    <View style={{backgroundColor: 'red'}}>one</View>
                    <View style={{backgroundColor: 'blue'}}>one</View>
                    <View style={{backgroundColor: 'white'}}>one</View>
                </View>
                <ScrollView>
                    <View style={{justifyContent: 'space-between', flexDirection: 'column'}}>
                        <View style={{backgroundColor: 'red'}}>one</View>
                        <View style={{backgroundColor: 'blue'}}>one</View>
                        <View style={{backgroundColor: 'white'}}>one</View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Finally;