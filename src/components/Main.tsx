 
import './Main.css'
import { Flex, Text, Image, Box } from '@chakra-ui/react';

const Main = () => {
  return (
    <Flex
      className="main-content"
      minHeight="calc(100vh - 120px)" // Ajuste conforme o tamanho do header e footer
      backgroundColor="rgb(57, 57, 57)"
      color="white"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      {/* Título com logo ao lado esquerdo */}
      <Flex alignItems="center"  mb={50} >
        <Text fontSize="xl" fontWeight="bold" className='title'>Welcomee to Our Website</Text>
      </Flex>
      
      <Flex alignItems="center"  mt={30} >
        <Image src="src\components\images\Logo.png" w={100} alt="Logo" className='img' boxSize="150px" mr={2} />
        <Text fontSize="20" fontWeight="bold">THE TRADING DOJO</Text>
      </Flex>

      {/* Espaço para introduzir texto */}
      
      <Box textAlign="center" maxWidth="600px" px={4} mb={300} >
        <Text fontSize="22" lineHeight="1.6" className='join'>
        <u>Join the Dojo</u>
        </Text>
        <p className='text1'>
        Unlock the secrets of 9 unique ICT trading models, gain exclusive access to our comprehensive e-book, 
        and let us empower you to excel with your funded accounts.
         Join a community driven by success and supported by <u>Marky and Chris</u> , where your financial growth is our priority.
        </p>

        <Box maxWidth="100%" mx="auto" >
          <div className='imagem'>
            <Image 
              src="src\components\images\ict.JPG" // Substitua pelo caminho da sua imagem
              alt="Descrição da imagem"
              boxSize="100%" // Tamanho da caixa da imagem
              objectFit="cover" // Ajuste do conteúdo da imagem dentro da caixa
            />
            
          </div>
          <a href="https://whop.com/thetradingdojo/" ><u>Click Here</u></a>
        </Box>
      </Box>
     
      

      <Flex
      direction="column" // Direção do layout flex (column, row, etc.)
      justifyContent="center" // Alinhamento vertical dos itens
      alignItems="center" // Alinhamento horizontal dos itens
     marginBottom={50}
     marginTop={-40}
    >
      <Text
        fontSize={['sm', 'md', 'lg', 'xl']} // Tamanhos de fonte responsivos para diferentes breakpoints
        fontWeight="bold" // Peso da fonte
        textAlign="center" // Alinhamento do texto
        color="teal.800" // Cor do texto
        bg="teal.200" // Cor de fundo do texto
        p={1} // Padding interno do texto
        borderRadius="md" // Borda arredondada do texto
        boxShadow="md" // Sombra ao redor do texto
        maxWidth="80%" // Largura máxima do texto
      >
        Sign up to learn about our programs and receive free weekly content
        ⬇️⬇️⬇️
      </Text>
    </Flex>
    </Flex>
  );
};

export default Main;
