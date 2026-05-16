import { ScrollView, StyleSheet, Text, View } from "react-native";
import { colors } from "../../../theme/colors";
import { DashboardCard } from "../components/DashboardCard";
import { WeekCalendar } from "../components/WeekCalendar";

export function HomeScreen() {
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
        >
            <Text style={styles.greeting}>
                Bem-vindo ao Vertex
            </Text>

            <Text style={styles.subtitle}>
                Sua evolução começa hoje.
            </Text>

            <WeekCalendar />

            <DashboardCard title="Resumo do dia">
                <View style={styles.row}>
                    <Text style={styles.label}>
                        Estudos
                    </Text>

                    <Text style={styles.value}>
                        2h 15m
                    </Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>
                        Treino
                    </Text>

                    <Text style={styles.value}>
                        Concluído
                    </Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>
                        Humor
                    </Text>

                    <Text style={styles.value}>
                        Bom
                    </Text>
                </View>
            </DashboardCard>

            <DashboardCard title="XP semanal">
                <Text style={styles.bigNumber}>
                    1.250 XP
                </Text>
            </DashboardCard>

            <DashboardCard title="Frase do dia">
                <Text style={styles.quote}>
                    "Consistência constrói resultados."
                </Text>
            </DashboardCard>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },

    content: {
        padding: 24,
        paddingTop: 72,
        paddingBottom: 120
    },

    greeting: {
        color: colors.text,
        fontSize: 32,
        fontWeight: "bold"
    },

    subtitle: {
        color: colors.textSecundary,
        marginTop: 8,
        marginBottom: 8,
        fontSize: 16
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 12
    },

    label: {
        color: colors.textSecundary,
        fontSize: 15
    },

    value: {
        color: colors.text,
        fontWeight: "600"
    },

    bigNumber: {
        color: colors.primary,
        fontSize: 36,
        fontWeight: "bold"
    },

    quote: {
        color: colors.text,
        fontSize: 16,
        lineHeight: 24
    }
});