import { Ionicons } from '@expo/vector-icons';
import { colorTokens } from '@tamagui/themes';
import Drawer from 'expo-router/drawer';

const Layout = () => {
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        drawerHideStatusBarOnOpen: false,
        drawerActiveBackgroundColor: colorTokens.dark.blue.blue7,
        drawerActiveTintColor: '#fff',
      }}>
      <Drawer.Screen
        name="home"
        options={{
          title: 'MovieApp',
          headerShown: false,
          drawerIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="favorites"
        options={{
          title: 'Favorites',
          headerShown: false,
          drawerIcon: ({ color, size }) => <Ionicons name="heart" size={size} color={color} />,
        }}
      />
    </Drawer>
  );
};

export default Layout;
