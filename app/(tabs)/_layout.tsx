import { Tabs } from "expo-router"
import { Dumbbell, House } from "lucide-react-native"
import { colors } from "../../src/theme/colors"

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,

                tabBarStyle: {
                    backgroundColor: colors.card,
                    borderTopWidth: 1,
                    borderTopColor: colors.border,
                    height: 72,
                    paddingTop: 8
                },

                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.textSecundary
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <House
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="workout"
                options={{
                    title: "Academia",
                    tabBarIcon: ({ color, size }) => (
                        <Dumbbell
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="studies"
                options={{
                    title: "Estudos",
                    tabBarIcon: ({ color, size }) => (
                        <House
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="devotional"
                options={{
                    title: "Devocional",
                    tabBarIcon: ({ color, size }) => (
                        <House
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: "Perfil",
                    tabBarIcon: ({ color, size }) => (
                        <House
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
        </Tabs>
    )
}