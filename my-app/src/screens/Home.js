import * as React from "react"
import { Box } from "native-base"
import { Text, StatusBar } from "react-native"


export default function Home ({ navigation }) {
    return (
        <Box>
            <StatusBar style="auto" />

            <Text>ini Home</Text>
        </Box>
    )
}