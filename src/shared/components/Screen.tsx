import { ReactNode } from "react"
import { SafeAreaView } from "react-native-safe-area-context"

type Props = {
    children: ReactNode
}

export function Screen({ children }: Props) {
    return (
        <SafeAreaView className="flex-1 bg-[#09090B] px-4">
            {children}
        </SafeAreaView>
    )
}