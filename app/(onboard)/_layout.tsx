import { Tabs } from 'expo-router';

export default function OnboardLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          display: 'none',
        },
      }}
    >
      <Tabs.Screen name="index" />
    </Tabs>
  );
}
