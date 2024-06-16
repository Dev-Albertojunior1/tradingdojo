
import { Box, Flex, Link, Text, Stack, Icon, VStack } from '@chakra-ui/react';
import { FaInstagram,FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="black" color="white" py={6} borderTop="1px" borderColor="white">
      <VStack spacing={10}>
        <Flex

          align="center"
          justify="center"
          direction={{ base: 'column', sm: 'row' }}
          wrap="wrap">
          <Text mb={{ base: 2, sm: 0 }}>Contact Us:</Text>
          <Stack direction="row" spacing={10}>
            <Link href="https://www.instagram.com/ict_dojo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" isExternal>
              <Icon as={FaInstagram} w={14} h={6} />
            </Link>
            <Link href="https://t.me/ictdojo" isExternal>
              <Icon as={FaTelegram} w={10} h={6} />
            </Link>
          </Stack>
        </Flex>
        <Text textAlign="center">© {new Date().getFullYear()} All rights reserved</Text>
      </VStack>
    </Box>
  );
};

export default Footer;
