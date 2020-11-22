import * as Font from 'expo-font';

const fonts = async () => {
    try {
        await Font.loadAsync({
            'roboto light': require('../assets/fonts/Roboto-Light.ttf'),
            'roboto bold': require('../assets/fonts/Roboto-Bold.ttf'),
            'roboto regular': require('../assets/fonts/Roboto-Regular.ttf')
        })
    } catch (e) {console.log(e);}
}

export default fonts;