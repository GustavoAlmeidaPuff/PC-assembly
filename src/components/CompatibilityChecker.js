import React from 'react';
import {
  Box,
  VStack,
  Heading,
  Progress,
  Text,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons';

const CompatibilityChecker = ({ components, compatibility }) => {
  const calculateCompleteness = () => {
    const totalComponents = Object.keys(components).length;
    const selectedComponents = Object.values(components).filter(Boolean).length;
    return (selectedComponents / totalComponents) * 100;
  };

  const completeness = calculateCompleteness();

  return (
    <Box w="100%" p={4} borderRadius="lg" borderWidth={1}>
      <VStack align="stretch" spacing={4}>
        <Heading size="md">Status da Montagem</Heading>
        
        <Box>
          <Text mb={2}>Progresso da Seleção</Text>
          <Progress
            value={completeness}
            colorScheme={completeness === 100 ? 'green' : 'blue'}
            size="sm"
            borderRadius="full"
          />
          <Text mt={2} fontSize="sm" color="gray.600">
            {Math.round(completeness)}% completo
          </Text>
        </Box>

        <Box>
          <Text mb={2} fontWeight="medium">Verificações de Compatibilidade</Text>
          <List spacing={2}>
            <ListItem>
              <ListIcon
                as={compatibility.isCompatible ? CheckCircleIcon : WarningIcon}
                color={compatibility.isCompatible ? 'green.500' : 'orange.500'}
              />
              Socket CPU/Placa-mãe
            </ListItem>
            <ListItem>
              <ListIcon
                as={!compatibility.issues.some(i => i.includes('RAM')) ? CheckCircleIcon : WarningIcon}
                color={!compatibility.issues.some(i => i.includes('RAM')) ? 'green.500' : 'orange.500'}
              />
              Compatibilidade RAM
            </ListItem>
            <ListItem>
              <ListIcon
                as={!compatibility.issues.some(i => i.includes('wattage')) ? CheckCircleIcon : WarningIcon}
                color={!compatibility.issues.some(i => i.includes('wattage')) ? 'green.500' : 'orange.500'}
              />
              Potência da Fonte
            </ListItem>
          </List>
        </Box>

        {completeness === 100 && compatibility.isCompatible && (
          <Text color="green.500" fontWeight="bold">
            ✓ Configuração compatível!
          </Text>
        )}
      </VStack>
    </Box>
  );
};

export default CompatibilityChecker; 