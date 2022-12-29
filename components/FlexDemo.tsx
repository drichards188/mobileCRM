import { SafeAreaView, ScrollView, View, Text, Button, TouchableOpacity } from 'react-native'

export default function LayoutStart() {
    return (
        <SafeAreaView>
            <View style={{width: '100%', height: '100%'}}>
            <ScrollView>

                <View>
                    <View style={{alignSelf: 'center', height: 100, width: 100, border: '1px solid grey'}}>
                        <Text>I'm a header box</Text>
                    </View>

                    <View style={{flexDirection: 'column', justifyContent: 'space-around', padding: 20}}>
                        <View><Text>1/3 sub header</Text></View>
                        <View style={{flex: 2}}><Text>2/3 sub header</Text></View>
                        <View><Text>3/3 sub header</Text></View>
                    </View>

                    <View style={{ padding: 30 }}>
                        <View><Text>I'm section 1/2 of main content</Text></View>
                        <View><Text>I'm section 2/2 of main content</Text></View>
                    </View>

                    <View style={{marginTop: 30}}>
                        <TouchableOpacity
                            style={{
                                width: 150,
                                height: 50,
                                alignSelf: 'flex-end',
                                backgroundColor: '#60e116',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Text>Right button</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1, backgroundColor: 'red' }} />
                        <View style={{ flex: 2, backgroundColor: 'green' }} />
                        <View style={{ flex: 3, backgroundColor: 'blue' }} />
                    </View>
                </View>

            </ScrollView>
            </View>
        </SafeAreaView>
    )
}