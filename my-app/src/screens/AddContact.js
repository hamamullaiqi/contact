import * as React from "react"
import { Box, VStack,Input, Text, Button, Center, Image, FormControl} from "native-base"
import { StatusBar } from "react-native"
import * as ImagePicker from 'expo-image-picker';
import axios from "axios";
const baseUrl = "http://192.168.1.6:4000/api/v1"


export default function AddContact ({ navigation }) {

    const [preview, setPreview] = React.useState(null)
    console.log(preview);

    const [input, setInput] = React.useState("")

    const [form, setForm] = React.useState({})


    
    const  handleSubmit = async (e) => {
        try {
            e.preventDefault()
 
             const config = {
                 headers : {
                    "Content-type": "application/json"
                 }
            }

            

            let data = {
                name : form.name,
                email: form.email,
                phone : form.phone
            }
            
            // const body = JSON.stringify(preview)
            // const uriSplit = preview.uri.split(".")
            // console.log(uriSplit);

            // console.log(body)
            const formData = new FormData();
            
            formData.append("name", form.name)
            formData.append("email", form.email)
            formData.append("image", {
                name: form.image,
                uri: preview,
                type: 'image/jpg',
                
                })
            
                console.log(formData);

            

            
 
            axios.post( `${baseUrl}/contact`,data, config).then((res) => {
                console.log(res);

                navigation.navigate("Contact")
        }).catch(err => {
                console.log(err);
        });
            
            
 
         
            
            
            
        } catch (error) {
            console.log(error);
     }

    }

    



    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
          
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setPreview(result.uri);
          setForm({...form, image:result.uri})
          console.log(result.uri);
        }
      };
    return (
        <Box  safeArea  bg="black" flex={1} p="3" space="5">
            
            <StatusBar style="auto" />

            <VStack mx="3" space={3}  >
            {preview && <Center>
                <Image name="image"  source={{ uri: preview }} alt="Image-profile" style={{ width: 200, height: 200 }} />
                </Center>}

            {/* {preview === null ? (<Text></Text>) : (
                    <Center>
                        <Image  source={{
                        uri: {preview}
                        }} alt="Alternate Text" size="xl" />
                    </Center>
                )} */}
                <FormControl>
                    <Text color="white">Name</Text>
                    <Input  placeholder="Name"  color="white" 
                            onChangeText={value => setForm({ ...form,
                            name: value
                        })} />
                </FormControl>
                <FormControl name="email" >
                    <Text color="white">Email</Text>
                    <Input placeholder="Email" color="white"   
                            onChangeText={value => setForm({ ...form,
                            email: value
                    })} />
                    
                    
                </FormControl>
                <FormControl name="email" >
                    <Text color="white">phone</Text>
                    <Input placeholder="phone" color="white"   
                            onChangeText={value => setForm({ ...form,
                            phone: value
                    })} />
                    
                    
                </FormControl>
                
                
                {/* <Button size="md" colorScheme="tertiary" py="3"  my="5"  onPress={pickImage}>
                    <Text>Upload Foto</Text>
                </Button> */}

                <Button size="md" colorScheme="primary" py="3" px="10" my="5" onPress={handleSubmit}>
                    <Text>Save</Text>

                </Button>
            </VStack>
        </Box>
    )
}