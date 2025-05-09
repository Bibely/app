import { useTheme } from '@/hooks/useTheme';
import { Tabs } from 'expo-router';
import React from 'react';

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
