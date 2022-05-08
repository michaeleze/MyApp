import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Examples } from '@shoutem/ui';
import { TailwindProvider, useTailwind } from 'tailwind-rn';
import utilities from './tailwind.json';

const { Screen, Navigator } = createBottomTabNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

const Flex1: () => JSX.Element = () => {
  const tailwind = useTailwind();

  return (
    <SafeAreaView style={tailwind('h-full')}>
      <View style={tailwind('pt-12 items-center')}>
        <View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
          <Text style={tailwind('text-blue-800 font-semibold')}>
            Hello Tailwind
          </Text>
          <Text style={tailwind('text-blue-600')}>Hello world</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const Flex = () => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
          backgroundColor: '#ffffe7',
        },
      ]}>
      <View
        style={{
          paddingVertical: 10,
          marginTop: 45,
          borderWidth: 1,
          width: 170,
          height: 80,
        }}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('./assets/images/shapes.png')}
            style={{ width: 40, height: 40, resizeMode: 'contain', bottom: 5 }}
          />
          <Text style={{ fontFamily: 'IBMPlexMono-Regular', fontSize: 25 }}>
            EXPENSE.
          </Text>
        </View>
        <Text
          style={{
            fontFamily: 'IBMPlexMono-Light',
            fontSize: 10,
            paddingHorizontal: 5,
          }}>
          Track your spending.
        </Text>
      </View>
      <View style={{ flex: 3, top: 10 }}>
        <Text
          style={{
            fontFamily: 'IBMPlexMono-Regular',
            fontSize: 16,
            paddingVertical: 10,
          }}>
          <Icon name="direction" size={22} /> Money available in account.
        </Text>
      </View>
    </View>
  );
};

function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <Navigator
          screenOptions={{
            tabBarStyle: {
              backgroundColor: '#7E44B2',
              borderRadius: 100,
              bottom: 30,
              width: '90%',
              left: '5%',
              right: '5%',
            },
            tabBarShowLabel: false,
            headerShown: false,
          }}>
          <Screen
            name="Home"
            component={Flex}
            options={{
              tabBarIcon: () => (
                <Icon
                  name="direction"
                  size={22}
                  style={{
                    color: 'white',
                    top: 15,
                  }}
                />
              ),
            }}
          />
          <Screen
            name="Settings"
            options={{
              tabBarIcon: () => (
                <Icon
                  name="direction"
                  size={22}
                  style={{
                    color: 'white',
                    top: 15,
                  }}
                />
              ),
            }}
            component={Flex1}
          />
        </Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}

export default App;
