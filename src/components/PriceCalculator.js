import React from 'react';
import {
  Box,
  VStack,
  Text,
  Divider,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from '@chakra-ui/react';

const PriceCalculator = ({ total }) => {
  return (
    <Box w="100%">
      <VStack align="stretch" spacing={4}>
        <Stat>
          <StatLabel color="gray.600">Custo Total Estimado</StatLabel>
          <StatNumber color="green.500" fontSize="2xl">
            R$ {total.toFixed(2)}
          </StatNumber>
          <StatHelpText>
            Preços sujeitos a alteração
          </StatHelpText>
        </Stat>

        <Divider />

        <Box>
          <Text fontSize="sm" color="gray.600">
            * Os preços são atualizados regularmente com base nos principais varejistas do mercado.
          </Text>
          <Text fontSize="sm" color="gray.600">
            * Impostos e frete não inclusos.
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default PriceCalculator; 