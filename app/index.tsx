import { Text, View } from "react-native"

import { Button } from "../src/shared/components/Button"
import { Screen } from "../src/shared/components/Screen"

export default function App() {
    return (
        <Screen>
            <View className="flex-1 items-center justify-center gap-6">
                <Text className="text-4xl font-bold text-white">
                    Vertex
                </Text>

                <Button
                    title="Entrar"
                    onPress={() => console.log("Entrar")}
                />
            </View>
        </Screen>
    )
}