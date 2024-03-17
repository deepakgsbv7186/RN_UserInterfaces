import {StatusBar} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import RootNavigation from './navigations/RootNavigation';
import {COLOR} from './utils/theme/colors';
import {FONT} from './assets/fonts';
import {textScale} from './utils/theme/responsive';

export default function App() {
  return (
    <>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={COLOR.transparent}
      />
      <RootNavigation />
      <FlashMessage
        position="top"
        statusBarHeight={StatusBar.currentHeight}
        titleStyle={{
          fontFamily: FONT.Poppins500,
          fontSize: textScale(16),
          color: COLOR.white,
        }}
        textStyle={{
          fontFamily: FONT.Poppins400,
          fontSize: textScale(14),
          color: COLOR.white,
        }}
      />
    </>
  );
}
