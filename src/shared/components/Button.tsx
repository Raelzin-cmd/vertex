import { Text, TouchableOpacity } from "react-native"

type Props = {
    title: string
    onPress: () => void
}

export function Button({ title, onPress }: Props) {
    return (
        <TouchableOpacity
            onPress={onPress}
            className="h-14 w-full items-center jutify-center rounded-2xl bg-blue-500"
            activeOpacity={0.8}
        >
            <Text className="text-base font-semibold text-white">
                {title}
            </Text>
        </TouchableOpacity>
    )
}