
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Link,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

// const NavLink = ({ children }: { children: React.ReactNode }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: 'gray.700',
//     }}
//     href={'#'}
//     color={'white'}>
//     {children}
//   </Link>
// );

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={'black'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            color={'white'}
            bg={'black'}
            _hover={{ bg: 'gray.700' }}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box color={'white'}>THE TRADING DOJO</Box>
          </HStack>
          <Flex alignItems={'center'}>
            <Link href="https://whop.com/thetradingdojo/"> {/* Define o href para o link desejado */}
              <Button
                variant={'solid'}
                colorScheme={'teal'}
                size={'sm'}
                mr={4}>
                Get Access
              </Button>
            </Link>
            
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {/* Se houver necessidade de adicionar mais links no menu responsivo, você pode adicionar aqui */}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
