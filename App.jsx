import Parse from 'parse/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-gesture-handler';
import Routes from './src/routes';


Parse.setAsyncStorage(AsyncStorage);
Parse.initialize('sSMkcKsHdQhweSrUkvYNCDQazT9wmIxyAHmLMIhH', 'ZzP3KgYiYrqljgZABJ2JjvX7up8wlGep1O1MHk10'); // replace with your App Id and Javascript Key
Parse.serverURL = 'https://parseapi.back4app.com/';

export default function App({}) {
  return(
    <Routes />
);
}
