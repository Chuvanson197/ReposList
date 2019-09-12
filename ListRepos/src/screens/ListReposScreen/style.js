import {StyleSheet,Dimensions} from 'react-native'
import {lightGray,darkBlue} from '../../styles/Colors'
import {fontSizeResponsive} from '../../utils/Metrics'
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#FFFFFF',
    },
    label: {
      fontSize: 16,
      marginBottom: 6,
    },
    input: {
      width: screenWidth - 20,
      height: 38,
      padding: 4,
      fontSize: 16,
      borderColor: '#3a3a3a',
      borderWidth: 1,
      borderRadius: 8,
    },
    button: {
      height: 45,
      flexDirection: 'row',
      backgroundColor:'#263238',
      borderColor: '#263238',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      marginTop: 10,
      alignSelf: 'stretch',
      justifyContent: 'center'
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 18,
      alignSelf: 'center',
    },
    ///
      loadingMore: {
      paddingTop: 20,
      paddingBottom: 50,
      justifyContent: 'center',
      alignItems: 'center'
    },
    loadingButton: {
      padding: 10,
      width: '50%',
      borderWidth: 1,
      borderRadius: 100,
      borderColor: lightGray
    },
    loadingText: {
      fontSize: fontSizeResponsive(2.1),
      color: darkBlue,
      textAlign: 'center'
    },
    itembutton: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc'
    },
    itemImage:{
      height: 50,
      width: 50,
      marginRight: 10
    },
    itemContainer:{
      flexDirection: 'row',
      padding: 15,
      alignItems: 'center'
    },
    itemName:{
      fontSize: 18,
      alignItems: 'center',
      color: '#65A7C5',
    },
    itemNumberStar:{
      fontSize: 18,
      alignItems: 'center',
      color: 'red',
    }
  });
export default styles;