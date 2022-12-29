import {Alert, Button, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import stylesFn from "../styles/finallyStyles";
import {useNavigation, useRoute} from "@react-navigation/native";

const Finally = () => {
    const {navigate} = useNavigation();
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
                    <View>
                        <Button
                            title="Go to styles"
                            onPress={() => navigate('Styles')}
                        />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Finally;