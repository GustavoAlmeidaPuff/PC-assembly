import React, { useState, useEffect } from 'react';
import {
  Box,
  VStack,
  Heading,
  Grid,
  GridItem,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Progress,
} from '@chakra-ui/react';
import ComponentSelector from './ComponentSelector';
import CompatibilityChecker from './CompatibilityChecker';
import PriceCalculator from './PriceCalculator';

const PCBuilder = () => {
  const [selectedComponents, setSelectedComponents] = useState({
    cpu: null,
    motherboard: null,
    ram: null,
    gpu: null,
    storage: null,
    psu: null,
    case: null,
  });

  const [compatibility, setCompatibility] = useState({
    isCompatible: true,
    issues: [],
  });

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Check compatibility whenever components change
    checkCompatibility();
    calculateTotalPrice();
  }, [selectedComponents]);

  const checkCompatibility = () => {
    const issues = [];
    
    // CPU and Motherboard socket compatibility
    if (selectedComponents.cpu && selectedComponents.motherboard) {
      if (selectedComponents.cpu.socket !== selectedComponents.motherboard.socket) {
        issues.push('CPU socket is not compatible with motherboard');
      }
    }

    // RAM compatibility
    if (selectedComponents.ram && selectedComponents.motherboard) {
      if (selectedComponents.ram.type !== selectedComponents.motherboard.ramType) {
        issues.push('RAM type is not compatible with motherboard');
      }
    }

    // PSU wattage check
    if (selectedComponents.psu && selectedComponents.gpu) {
      const estimatedWattage = calculateEstimatedWattage();
      if (selectedComponents.psu.wattage < estimatedWattage) {
        issues.push('Power supply wattage may be insufficient');
      }
    }

    setCompatibility({
      isCompatible: issues.length === 0,
      issues,
    });
  };

  const calculateEstimatedWattage = () => {
    let total = 0;
    if (selectedComponents.cpu) total += selectedComponents.cpu.tdp || 0;
    if (selectedComponents.gpu) total += selectedComponents.gpu.tdp || 0;
    // Add base system consumption
    total += 100;
    return total;
  };

  const calculateTotalPrice = () => {
    const total = Object.values(selectedComponents).reduce((sum, component) => {
      return sum + (component?.price || 0);
    }, 0);
    setTotalPrice(total);
  };

  const handleComponentSelect = (type, component) => {
    setSelectedComponents(prev => ({
      ...prev,
      [type]: component,
    }));
  };

  return (
    <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={8}>
      <GridItem>
        <VStack spacing={6} align="stretch">
          <Heading size="lg" mb={4}>Monte seu PC</Heading>
          
          <ComponentSelector
            type="cpu"
            label="Processador"
            selected={selectedComponents.cpu}
            onSelect={(component) => handleComponentSelect('cpu', component)}
          />
          
          <ComponentSelector
            type="motherboard"
            label="Placa-mãe"
            selected={selectedComponents.motherboard}
            onSelect={(component) => handleComponentSelect('motherboard', component)}
          />
          
          <ComponentSelector
            type="ram"
            label="Memória RAM"
            selected={selectedComponents.ram}
            onSelect={(component) => handleComponentSelect('ram', component)}
          />
          
          <ComponentSelector
            type="gpu"
            label="Placa de Vídeo"
            selected={selectedComponents.gpu}
            onSelect={(component) => handleComponentSelect('gpu', component)}
          />
          
          <ComponentSelector
            type="storage"
            label="Armazenamento"
            selected={selectedComponents.storage}
            onSelect={(component) => handleComponentSelect('storage', component)}
          />
          
          <ComponentSelector
            type="psu"
            label="Fonte de Alimentação"
            selected={selectedComponents.psu}
            onSelect={(component) => handleComponentSelect('psu', component)}
          />
          
          <ComponentSelector
            type="case"
            label="Gabinete"
            selected={selectedComponents.case}
            onSelect={(component) => handleComponentSelect('case', component)}
          />
        </VStack>
      </GridItem>

      <GridItem>
        <VStack spacing={6} position="sticky" top={4}>
          <Box w="100%" p={4} borderRadius="lg" borderWidth={1}>
            <Heading size="md" mb={4}>Resumo do Build</Heading>
            <PriceCalculator total={totalPrice} />
            
            {!compatibility.isCompatible && (
              <Alert status="warning" mt={4}>
                <AlertIcon />
                <Box>
                  <AlertTitle>Problemas de Compatibilidade</AlertTitle>
                  <AlertDescription>
                    <VStack align="start" spacing={2}>
                      {compatibility.issues.map((issue, index) => (
                        <Text key={index}>{issue}</Text>
                      ))}
                    </VStack>
                  </AlertDescription>
                </Box>
              </Alert>
            )}
          </Box>
          
          <CompatibilityChecker
            components={selectedComponents}
            compatibility={compatibility}
          />
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default PCBuilder; 