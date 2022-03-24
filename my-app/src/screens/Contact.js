import * as React from "react"
import { Avatar, Box, HStack, VStack, Heading ,Text, Spacer, Pressable, Fab, Icon } from "native-base"
import {   StatusBar, FlatList } from "react-native"
import { AntDesign } from '@expo/vector-icons'; 
import axios from "axios";
const baseUrl = "http://192.168.1.6:4000/api/v1"


export default function Contact ({ navigation }) {



    const [contactItem, setContactItem ] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)
    // console.log(contactItem);


    const getContacts =  () => {
        setIsLoading(true)
        axios.get(`${baseUrl}/contacts`)
        .then((res) => {
          setContactItem(res.data.data.dataContacts)
          setIsLoading(false)
        })
        .catch(() => {
          alert("Error Fetch Data")
          setIsLoading(false)
        })
    
      }

    // const getContacts = async () => {
    //     try {
    //         const configurationObject = {
    //             method: 'get',
    //             url: `${baseUrl}/contacts`,
    //           };
    //           const response = await axios(configurationObject);
    //           setContactItem(response.data.data.dataContacts);
            
    //     } catch (error) {
    //         console.log(error);
    //     }
        
    //   };

    const onRefresh = () => {
        setContactItem([])
        getContacts()
    }


      React.useEffect(() => {
        getContacts()
        return () => {
            getContacts()
        }
      },[])


      //component List
      const _renderItem = ({item}) => {
          return (
            <Box mb={3}> 
                <Pressable onPress={() => navigation.navigate("Contact Detail", item ) }>
                    {({
                        isHovered,
                        isFocused,
                        isPressed
                    }) =>  {
                        return <Box  bg={isPressed? "muted.800" : isHovered? "muted.800" : "muted.900"}
                                        p={3} rounded={10} shadow={10}
                                        style={{
                                            transform: [{
                                              scale: isPressed ? 0.86 : 1
                                            }]
                                          }}
                                >
                        
                        <HStack>
                            <Avatar
                                bg="green.500" source={{
                                uri: item.image
                            }}
                            >
    
                            </Avatar>
                            <VStack paddingLeft={5}>
                                <Heading color ="white" size="md">{item.name}</Heading>
                                <Spacer />
                                <Text color ="muted.400" fontSize={12}>{item.phone}</Text>
                                
                            </VStack>
                            
                            
                        </HStack>
                    </Box>
                    }
                    
                    }
                
                </Pressable>
            </Box>
          )
      }



    
    return (
        <Box safeArea  bg="black" flex={1} p="3" space="5">
            <StatusBar style="auto" />

            <VStack>


            <FlatList 
                data={contactItem.map(contact => contact)}
                renderItem={_renderItem}
                keyExtractor={(item) => item.id}
                refreshing={isLoading}
                onRefresh={getContacts}        
            />
                
                {/* <Pressable onPress={ handlePress}>
                    {({
                        isHovered,
                        isFocused,
                        isPressed
                    }) =>  {
                        return <Box  bg={isPressed? "muted.800" : isHovered? "muted.800" : "muted.900"}
                                        p={3} rounded={10} shadow={10}
                                        style={{
                                            transform: [{
                                              scale: isPressed ? 0.86 : 1
                                            }]
                                          }}
                                >
                        
                        <HStack>
                            <Avatar
                                bg="green.500" source={{
                                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            }}
                            >
    
                            </Avatar>
                            <VStack paddingLeft={5}>
                                <Heading color ="white" size="md">SAMSON</Heading>
                                <Spacer />
                                <Text color ="muted.400" fontSize={12}>082232892177</Text>
                                
                            </VStack>
                            
                            
                        </HStack>
                    </Box>
                    }
                    
                    }
                
                </Pressable> */}

                
                
                
            </VStack>
            
            <Fab onPress={() =>  navigation.navigate("Add Contact")}   renderInPortal={false} colorScheme="tertiary" shadow={2} size="sm" bottom={50} icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />} />

        </Box>
    )
}