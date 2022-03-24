import * as React from "react"
import { Box, VStack, Center, Image, Text, Spacer, Heading, Button, HStack} from "native-base"
import { StatusBar } from "react-native"
const baseUrl = "http://192.168.1.6:4000/api/v1"
import axios from "axios";
import { useNavigation } from "@react-navigation/native";



export default function ConctactDetail ({ route }) {

    console.log(route.params);
    const navigation = useNavigation()

    const { id, name, email, phone, image} = route.params

    const handleEdit = () => {
        navigation.navigate("Update Contact", id)
    }


    const deleteContact =  () => {
        
        axios.delete(`${baseUrl}/contact/${id}`)
        .then((res) => {
         alert("delete berhasil")
         navigation.goBack()
         
        })
        .catch(() => {
        //   alert("Error Fetch Data")
          
        })
    
      }
    return (
        <Box  safeArea  bg="black" flex={1} p="3"  space="5">
            <StatusBar style="auto" />

            <VStack>
                <Box bg="black" p="5" justifyContent="center">
                    <Center>
                        {/* <Image size={150}  borderRadius={200} source={{
                        uri: image
                        }} alt="Alternate Text" /> */}
                        
                        <Heading color ="muted.100" size="xl" p="3">{name}</Heading>
                    </Center>
                </Box>
                
            </VStack>
            <VStack>
                <Box p="3"  my="3" bg="muted.900" rounded={10}>
                    <Heading color ="muted.400" size="xs">Phone</Heading>
                    
                    <Text my="2" color ="muted.100" fontSize={18}>{phone}</Text>
                </Box>
                <Box p="3"  my="3" bg="muted.900" rounded={10}>
                    <Heading color ="muted.400" size="xs">Email</Heading>
                    
                    <Text my="2" color ="muted.100" fontSize={18}>{email}</Text>
                </Box>
                
                    <HStack justifyContent="space-evenly" mt={5}>
                        <Button size="md" colorScheme="tertiary" py="3" px="10" onPress={handleEdit}>
                            <Text>Edit</Text>
                        </Button>
                        <Button size="md" colorScheme="red" py="3" px="10" onPress={deleteContact}>
                            <Text>Delete</Text>
                        </Button>
                    </HStack>
            
            </VStack>
        </Box>
    )
}