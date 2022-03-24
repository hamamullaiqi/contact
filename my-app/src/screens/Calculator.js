import * as React from "react";
import { TouchableOpacity, StatusBar } from "react-native";
import { Text, Box, VStack, Heading, Stack, Button } from "native-base";


export default function Calculator({ navigation }) {
    //initial state 
    const [numb, setNumb] = React.useState(0)
    const [oldNumb, setOldNumb] = React.useState(0)
    const [opr, setOpr] = React.useState()


   

    const inputNumb = (value) => {
        
        const input = String(value)
        
        // if(input === ".") {
        //     setNumb(numb + ".")
        // }
        

        setNumb(parseFloat (numb + input))
        
        
    }

    

    const handleC = () => {

        const stringNumb = String(numb)

        const numbLength = stringNumb.length-1
        
        if(numbLength > 0){
            const lastNumb = stringNumb.slice(" ", numbLength)
            setNumb(parseInt(lastNumb))
        } else {
            setNumb(0)
        }
       
    }


    const handleAC = () => {
        // console.log("handleAC");
        setNumb(0)
    }

    const handleSign = () => {
        

        if (numb > 0) {
            setNumb(-numb)
        } else {
            setNumb(Math.abs(numb))
        }
    }


    const handlePercentage = () => {
        setNumb(numb / 100)
    }


    const handleOpr = (value) => {
        setOpr(value)
        setOldNumb(numb)
        setNumb(0)
    }

    const calculate = () => {
        if(opr === "/") {
            setNumb(oldNumb / numb)
        } else  if(opr === "x") {
            setNumb(oldNumb * numb)
        } else if(opr === "-") {
            setNumb(oldNumb - numb)
        } else if(opr === "+") {
            setNumb(oldNumb + numb)
    
    
        }    
    }


  return (
      
          <Box bg="black" flex={1} p="3" space="5">
               <StatusBar style="auto" />
              
                <VStack   flex={1} >
                    

                    <Text fontSize="4xl" textAlign="right" color="muted.500" mt={5}>{numb}</Text>
                    
                </VStack>
                
                    
                
                    
                <Stack >
                    <Stack className="container-button" space={1} mb="1" direction="row" justifyContent="space-between" >

                        <Button bg="muted.900" w="24%" h="16" _pressed={{ backgroundColor: "tertiary.900" }} onPress={handleAC} >
                            <Text fontSize="2xl" color="danger.900">AC</Text>
                        </Button> 
                        <Button bg="muted.900" w="24%" h="16"  _pressed={{ backgroundColor: "tertiary.900" }} onPress={handleSign}>
                            <Text fontSize="2xl" color="tertiary.900">+/-</Text>
                        </Button> 
                        <Button bg="muted.900" w="24%" h="16"  _pressed={{ backgroundColor: "tertiary.900" }} onPress={handlePercentage}>
                            <Text fontSize="2xl" color="tertiary.900">%</Text>
                        </Button> 
                        <Button bg="muted.900" w="24%" h="16"  _pressed={{ backgroundColor: "tertiary.900"}} onPress={handleC}  >
                            <Text fontSize="2xl" color="danger.900">C</Text>
                        </Button> 
                       
 
                    </Stack>
                    
                    <Stack className="container-button" space={1} mb="1" direction="row" justifyContent="space-between" >
                        <Button  
                            bg="trueGray.800" w="24%" h="16" 
                            _pressed={{ backgroundColor: "tertiary.900" }} 
                            onPress={() => inputNumb(7)}  
                        >
                            <Text fontSize="3xl" color="muted.500">7</Text>
                        </Button> 
                        <Button  
                            bg="trueGray.800" w="24%" h="16" 
                            _pressed={{ backgroundColor: "tertiary.900" }} 
                            onPress={() => inputNumb(8)}  
                            
                        >
                            <Text fontSize="3xl" color="muted.500">8</Text>
                        </Button>
                        <Button  bg="trueGray.800" w="24%" h="16" 
                                _pressed={{ backgroundColor: "tertiary.900" }} 
                                onPress={() => inputNumb(9)}
                        >
                                    
                            <Text fontSize="3xl" color="muted.500">9</Text>
                        </Button>
                        <Button  
                            bg="muted.900" w="24%" h="16" 
                            _pressed={{ backgroundColor: "tertiary.900" }} 
                            onPress={() => handleOpr("/")}
                        >
                        
                            <Text fontSize="2xl" color="tertiary.900" bold>/</Text>
                        </Button>

                    </Stack>
                    <Stack className="container-button" space={1} mb="1" direction="row" justifyContent="space-between" >
                        <Button  bg="trueGray.800" w="24%" h="16" 
                                _pressed={{ backgroundColor: "tertiary.900" }} 
                                onPress={() => inputNumb(4)}  
                            >
                            <Text fontSize="3xl" color="muted.500">4</Text>
                        </Button> 
                        <Button   bg="trueGray.800" w="24%" h="16" 
                                _pressed={{ backgroundColor: "tertiary.900" }} 
                                onPress={() => inputNumb(5)}  
                            >
                            <Text fontSize="3xl" color="muted.500">5</Text>
                        </Button>
                        <Button   bg="trueGray.800" w="24%" h="16" 
                                _pressed={{ backgroundColor: "tertiary.900" }} 
                                onPress={() => inputNumb(6)}  
                            >
                            <Text fontSize="3xl" color="muted.500">6</Text>
                        </Button>
                        <Button  bg="muted.900" w="24%" h="16" _pressed={{ backgroundColor: "tertiary.900" }} onPress={() => handleOpr("x")} >
                            <Text fontSize="2xl" color="tertiary.900" bold>x</Text>
                        </Button>

                    </Stack>
                    <Stack className="container-button" space={1} mb="1" direction="row" justifyContent="space-between"   >
                        <Button   bg="trueGray.800" w="24%" h="16" 
                                _pressed={{ backgroundColor: "tertiary.900" }} 
                                onPress={() => inputNumb(1)}  
                            >
                            <Text fontSize="3xl" color="muted.500">1</Text>
                        </Button> 
                        <Button  bg="trueGray.800" w="24%" h="16" 
                                _pressed={{ backgroundColor: "tertiary.900" }} 
                                onPress={() => inputNumb(2)}  
                            >
                            <Text fontSize="3xl" color="muted.500">2</Text>
                        </Button>
                        <Button  bg="trueGray.800" w="24%" h="16" 
                                _pressed={{ backgroundColor: "tertiary.900" }} 
                                onPress={() => inputNumb(3)}  
                            >
                            <Text fontSize="3xl" color="muted.500">3</Text>
                        </Button>
                        <Button  bg="muted.900" w="24%" h="16" _pressed={{ backgroundColor: "tertiary.900" }} onPress={() => handleOpr("-")} >
                        
                            <Text fontSize="2xl" color="tertiary.900" bold>-</Text>
                        </Button>

                    </Stack>
                    <Stack className="container-button" space={1} mb="1" direction="row" justifyContent="space-between" >
                        <Button   bg="trueGray.800" w="24%" h="16" 
                                _pressed={{ backgroundColor: "tertiary.900" }} 
                                onPress={() => inputNumb(".")}  
                            >
                            <Text fontSize="3xl" color="muted.500">.</Text>
                        </Button> 
                        <Button   bg="trueGray.800" w="24%" h="16" 
                                _pressed={{ backgroundColor: "tertiary.900" }} 
                                onPress={() => inputNumb(0)}  
                            >
                            <Text fontSize="3xl" color="muted.500">0</Text>
                        </Button>
                        <Button  bg="tertiary.900" w="24%" h="16" _pressed={{ backgroundColor: "trueGray.900" }} onPress={calculate} >
                            <Text fontSize="3xl" color="muted.500">=</Text>
                        </Button>
                        <Button  bg="muted.900" w="24%" h="16" _pressed={{ backgroundColor: "tertiary.900" }} onPress={() => handleOpr("+")} >
                        
                            <Text fontSize="2xl" color="tertiary.900" bold>+</Text>
                        </Button>

                    </Stack>
                     
                    
                    
                   
                </Stack>
                
                
            
            </Box>

      
      


    
  );
}