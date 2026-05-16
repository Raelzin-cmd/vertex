import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { colors } from "../../../theme/colors"

const days = ["S", "T", "Q", "Q", "S", "S", "D"]

export function WeekCalendar() {
    return (
        <View style={styles.container}>
            {days.map((day, index) => (
                <TouchableOpacity
                    key={index}
                    style={[
                        styles.dayButton,
                        index === 1 && styles.activeDay
                    ]}
                >
                    <Text style={styles.dayText}>
                        {day}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginBottom: 24
    },

    dayButton: {
        width: 42,
        height: 42,
        borderRadius: 21,
        backgroundColor: colors.card,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: colors.border
    },

    activeDay: {
        backgroundColor: colors.primary
    },

    dayText: {
        color: colors.text,
        fontWeight: "600"
    }
})