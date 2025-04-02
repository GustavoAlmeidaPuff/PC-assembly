import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Heading,
  Text,
  Grid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
  HStack,
  Badge,
  Image,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const ComponentSelector = ({ type, label, selected, onSelect }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [components, setComponents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchComponents();
  }, [type]);

  const fetchComponents = async () => {
    setLoading(true);
    try {
      // Simulated API call - replace with actual API endpoint
      const response = await fetch(`https://api.example.com/components/${type}`);
      const data = await response.json();
      setComponents(data);
    } catch (error) {
      console.error('Error fetching components:', error);
      // Using mock data for demonstration
      setComponents(getMockComponents(type));
    }
    setLoading(false);
  };

  const getMockComponents = (type) => {
    const mockData = {
      cpu: [
        {
          id: 1,
          name: 'AMD Ryzen 7 5800X',
          price: 2799.90,
          specs: {
            cores: 8,
            threads: 16,
            baseSpeed: '3.8GHz',
            boostSpeed: '4.7GHz',
            socket: 'AM4',
            tdp: 105,
            cache: '36MB',
            technology: '7nm',
            maxTemp: '90°C',
          },
          image: 'https://example.com/ryzen-7-5800x.jpg',
        },
        {
          id: 2,
          name: 'Intel Core i7-12700K',
          price: 2999.90,
          specs: {
            cores: 12,
            threads: 20,
            baseSpeed: '3.6GHz',
            boostSpeed: '5.0GHz',
            socket: 'LGA1700',
            tdp: 125,
            cache: '25MB',
            technology: '10nm',
            maxTemp: '100°C',
          },
          image: 'https://example.com/core-i7-12700k.jpg',
        },
        {
          id: 3,
          name: 'AMD Ryzen 9 5950X',
          price: 4299.90,
          specs: {
            cores: 16,
            threads: 32,
            baseSpeed: '3.4GHz',
            boostSpeed: '4.9GHz',
            socket: 'AM4',
            tdp: 105,
            cache: '72MB',
            technology: '7nm',
            maxTemp: '90°C',
          },
          image: 'https://example.com/ryzen-9-5950x.jpg',
        },
        {
          id: 4,
          name: 'Intel Core i5-12600K',
          price: 1899.90,
          specs: {
            cores: 10,
            threads: 16,
            baseSpeed: '3.7GHz',
            boostSpeed: '4.9GHz',
            socket: 'LGA1700',
            tdp: 125,
            cache: '20MB',
            technology: '10nm',
            maxTemp: '100°C',
          },
          image: 'https://example.com/core-i5-12600k.jpg',
        },
        {
          id: 5,
          name: 'AMD Ryzen 5 5600X',
          price: 1599.90,
          specs: {
            cores: 6,
            threads: 12,
            baseSpeed: '3.7GHz',
            boostSpeed: '4.6GHz',
            socket: 'AM4',
            tdp: 65,
            cache: '35MB',
            technology: '7nm',
            maxTemp: '95°C',
          },
          image: 'https://example.com/ryzen-5-5600x.jpg',
        },
        {
          id: 6,
          name: 'Intel Core i9-12900K',
          price: 4499.90,
          specs: {
            cores: 16,
            threads: 24,
            baseSpeed: '3.2GHz',
            boostSpeed: '5.2GHz',
            socket: 'LGA1700',
            tdp: 125,
            cache: '30MB',
            technology: '10nm',
            maxTemp: '100°C',
          },
          image: 'https://example.com/core-i9-12900k.jpg',
        },
        {
          id: 7,
          name: 'AMD Ryzen 7 7800X3D',
          price: 3499.90,
          specs: {
            cores: 8,
            threads: 16,
            baseSpeed: '4.2GHz',
            boostSpeed: '5.0GHz',
            socket: 'AM5',
            tdp: 120,
            cache: '104MB',
            technology: '5nm',
            maxTemp: '95°C',
          },
          image: 'https://example.com/ryzen-7-7800x3d.jpg',
        },
        {
          id: 8,
          name: 'Intel Core i5-13600K',
          price: 2299.90,
          specs: {
            cores: 14,
            threads: 20,
            baseSpeed: '3.5GHz',
            boostSpeed: '5.1GHz',
            socket: 'LGA1700',
            tdp: 125,
            cache: '24MB',
            technology: '10nm',
            maxTemp: '100°C',
          },
          image: 'https://example.com/core-i5-13600k.jpg',
        },
        {
          id: 9,
          name: 'AMD Ryzen 5 7600',
          price: 1799.90,
          specs: {
            cores: 6,
            threads: 12,
            baseSpeed: '3.8GHz',
            boostSpeed: '5.1GHz',
            socket: 'AM5',
            tdp: 65,
            cache: '38MB',
            technology: '5nm',
            maxTemp: '95°C',
          },
          image: 'https://example.com/ryzen-5-7600.jpg',
        },
        {
          id: 10,
          name: 'Intel Core i9-13900KS',
          price: 5999.90,
          specs: {
            cores: 24,
            threads: 32,
            baseSpeed: '3.2GHz',
            boostSpeed: '6.0GHz',
            socket: 'LGA1700',
            tdp: 150,
            cache: '36MB',
            technology: '10nm',
            maxTemp: '100°C',
          },
          image: 'https://example.com/core-i9-13900ks.jpg',
        },
        {
          id: 11,
          name: 'AMD Ryzen 9 7950X3D',
          price: 6499.90,
          specs: {
            cores: 16,
            threads: 32,
            baseSpeed: '4.2GHz',
            boostSpeed: '5.7GHz',
            socket: 'AM5',
            tdp: 120,
            cache: '144MB',
            technology: '5nm',
            maxTemp: '95°C',
          },
          image: 'https://example.com/ryzen-9-7950x3d.jpg',
        },
        {
          id: 12,
          name: 'Intel Core i7-14700K',
          price: 3299.90,
          specs: {
            cores: 20,
            threads: 28,
            baseSpeed: '3.4GHz',
            boostSpeed: '5.6GHz',
            socket: 'LGA1700',
            tdp: 125,
            cache: '33MB',
            technology: '10nm',
            maxTemp: '100°C',
          },
          image: 'https://example.com/core-i7-14700k.jpg',
        },
        {
          id: 13,
          name: 'AMD Ryzen 7 7700X',
          price: 2799.90,
          specs: {
            cores: 8,
            threads: 16,
            baseSpeed: '4.5GHz',
            boostSpeed: '5.4GHz',
            socket: 'AM5',
            tdp: 105,
            cache: '40MB',
            technology: '5nm',
            maxTemp: '95°C',
          },
          image: 'https://example.com/ryzen-7-7700x.jpg',
        },
        {
          id: 14,
          name: 'Intel Core i5-14600KF',
          price: 2199.90,
          specs: {
            cores: 14,
            threads: 20,
            baseSpeed: '3.5GHz',
            boostSpeed: '5.3GHz',
            socket: 'LGA1700',
            tdp: 125,
            cache: '24MB',
            technology: '10nm',
            maxTemp: '100°C',
          },
          image: 'https://example.com/core-i5-14600kf.jpg',
        },
        {
          id: 15,
          name: 'AMD Ryzen 5 5500',
          price: 899.90,
          specs: {
            cores: 6,
            threads: 12,
            baseSpeed: '3.6GHz',
            boostSpeed: '4.2GHz',
            socket: 'AM4',
            tdp: 65,
            cache: '19MB',
            technology: '7nm',
            maxTemp: '95°C',
          },
          image: 'https://example.com/ryzen-5-5500.jpg',
        },
        {
          id: 16,
          name: 'Intel Core i3-12100F',
          price: 699.90,
          specs: {
            cores: 4,
            threads: 8,
            baseSpeed: '3.3GHz',
            boostSpeed: '4.3GHz',
            socket: 'LGA1700',
            tdp: 58,
            cache: '12MB',
            technology: '10nm',
            maxTemp: '100°C',
          },
          image: 'https://example.com/core-i3-12100f.jpg',
        },
        {
          id: 17,
          name: 'AMD Ryzen 9 7900',
          price: 3999.90,
          specs: {
            cores: 12,
            threads: 24,
            baseSpeed: '3.7GHz',
            boostSpeed: '5.4GHz',
            socket: 'AM5',
            tdp: 65,
            cache: '76MB',
            technology: '5nm',
            maxTemp: '95°C',
          },
          image: 'https://example.com/ryzen-9-7900.jpg',
        },
        {
          id: 18,
          name: 'Intel Core i9-14900KF',
          price: 4999.90,
          specs: {
            cores: 24,
            threads: 32,
            baseSpeed: '3.2GHz',
            boostSpeed: '6.0GHz',
            socket: 'LGA1700',
            tdp: 125,
            cache: '36MB',
            technology: '10nm',
            maxTemp: '100°C',
          },
          image: 'https://example.com/core-i9-14900kf.jpg',
        },
        {
          id: 19,
          name: 'AMD Ryzen 7 5700G',
          price: 1799.90,
          specs: {
            cores: 8,
            threads: 16,
            baseSpeed: '3.8GHz',
            boostSpeed: '4.6GHz',
            socket: 'AM4',
            tdp: 65,
            cache: '20MB',
            technology: '7nm',
            maxTemp: '95°C',
            integratedGraphics: 'Radeon Vega 8',
          },
          image: 'https://example.com/ryzen-7-5700g.jpg',
        },
        {
          id: 20,
          name: 'Intel Core i7-13700',
          price: 2799.90,
          specs: {
            cores: 16,
            threads: 24,
            baseSpeed: '2.1GHz',
            boostSpeed: '5.2GHz',
            socket: 'LGA1700',
            tdp: 65,
            cache: '30MB',
            technology: '10nm',
            maxTemp: '100°C',
            integratedGraphics: 'Intel UHD 770',
          },
          image: 'https://example.com/core-i7-13700.jpg',
        },
        {
          id: 21,
          name: 'AMD Ryzen Threadripper 7980X',
          price: 39999.90,
          specs: {
            cores: 64,
            threads: 128,
            baseSpeed: '3.2GHz',
            boostSpeed: '5.1GHz',
            socket: 'sTR5',
            tdp: 350,
            cache: '384MB',
            technology: '5nm',
            maxTemp: '95°C',
          },
          image: 'https://example.com/threadripper-7980x.jpg',
        },
        {
          id: 22,
          name: 'Intel Core i9-14900KS',
          price: 5999.90,
          specs: {
            cores: 24,
            threads: 32,
            baseSpeed: '3.2GHz',
            boostSpeed: '6.2GHz',
            socket: 'LGA1700',
            tdp: 150,
            cache: '36MB',
            technology: '10nm',
            maxTemp: '100°C',
          },
          image: 'https://example.com/core-i9-14900ks.jpg',
        },
        {
          id: 23,
          name: 'AMD Ryzen 5 7600X',
          price: 1999.90,
          specs: {
            cores: 6,
            threads: 12,
            baseSpeed: '4.7GHz',
            boostSpeed: '5.3GHz',
            socket: 'AM5',
            tdp: 105,
            cache: '38MB',
            technology: '5nm',
            maxTemp: '95°C',
          },
          image: 'https://example.com/ryzen-5-7600x.jpg',
        },
        {
          id: 24,
          name: 'Intel Core i5-13400F',
          price: 1499.90,
          specs: {
            cores: 10,
            threads: 16,
            baseSpeed: '2.5GHz',
            boostSpeed: '4.6GHz',
            socket: 'LGA1700',
            tdp: 65,
            cache: '20MB',
            technology: '10nm',
            maxTemp: '100°C',
          },
          image: 'https://example.com/core-i5-13400f.jpg',
        },
        {
          id: 25,
          name: 'AMD Ryzen 9 5950X',
          price: 3999.90,
          specs: {
            cores: 16,
            threads: 32,
            baseSpeed: '3.4GHz',
            boostSpeed: '4.9GHz',
            socket: 'AM4',
            tdp: 105,
            cache: '72MB',
            technology: '7nm',
            maxTemp: '90°C',
          },
          image: 'https://example.com/ryzen-9-5950x.jpg',
        }
      ],
      motherboard: [
        {
          id: 1,
          name: 'ASUS ROG STRIX B550-F GAMING',
          price: 1599.90,
          specs: {
            socket: 'AM4',
            chipset: 'B550',
            ramType: 'DDR4',
            maxRam: '128GB',
            pciSlots: 2,
            m2Slots: 2,
            formFactor: 'ATX',
            wifi: true,
            bluetooth: '5.2',
            usbPorts: '8x USB 3.2',
          },
          image: 'https://example.com/asus-b550f.jpg',
        },
        {
          id: 2,
          name: 'MSI MPG Z690 GAMING EDGE',
          price: 2299.90,
          specs: {
            socket: 'LGA1700',
            chipset: 'Z690',
            ramType: 'DDR5',
            maxRam: '128GB',
            pciSlots: 3,
            m2Slots: 4,
            formFactor: 'ATX',
            wifi: true,
            bluetooth: '5.2',
            usbPorts: '6x USB 3.2, 2x USB-C',
          },
          image: 'https://example.com/msi-z690.jpg',
        },
        {
          id: 3,
          name: 'GIGABYTE B550M AORUS PRO-P',
          price: 999.90,
          specs: {
            socket: 'AM4',
            chipset: 'B550',
            ramType: 'DDR4',
            maxRam: '128GB',
            pciSlots: 2,
            m2Slots: 2,
            formFactor: 'mATX',
            wifi: false,
            bluetooth: 'N/A',
            usbPorts: '6x USB 3.2',
          },
          image: 'https://example.com/gigabyte-b550m.jpg',
        },
        {
          id: 4,
          name: 'ASUS ROG MAXIMUS Z690 HERO',
          price: 4299.90,
          specs: {
            socket: 'LGA1700',
            chipset: 'Z690',
            ramType: 'DDR5',
            maxRam: '128GB',
            pciSlots: 3,
            m2Slots: 5,
            formFactor: 'ATX',
            wifi: true,
            bluetooth: '5.2',
            usbPorts: '8x USB 3.2, 2x USB-C',
          },
          image: 'https://example.com/asus-z690-hero.jpg',
        },
        {
          id: 5,
          name: 'MSI MAG B550 TOMAHAWK',
          price: 1299.90,
          specs: {
            socket: 'AM4',
            chipset: 'B550',
            ramType: 'DDR4',
            maxRam: '128GB',
            pciSlots: 2,
            m2Slots: 2,
            formFactor: 'ATX',
            wifi: false,
            bluetooth: 'N/A',
            usbPorts: '6x USB 3.2',
          },
          image: 'https://example.com/msi-b550-tomahawk.jpg',
        },
        {
          id: 6,
          name: 'ASRock X670E Steel Legend',
          price: 2799.90,
          specs: {
            socket: 'AM5',
            chipset: 'X670E',
            ramType: 'DDR5',
            maxRam: '128GB',
            pciSlots: 3,
            m2Slots: 4,
            formFactor: 'ATX',
            wifi: true,
            bluetooth: '5.3',
            usbPorts: '8x USB 3.2, 2x USB-C',
          },
          image: 'https://example.com/asrock-x670e.jpg',
        },
        {
          id: 7,
          name: 'ASUS ProArt X670E-CREATOR',
          price: 3999.90,
          specs: {
            socket: 'AM5',
            chipset: 'X670E',
            ramType: 'DDR5',
            maxRam: '128GB',
            pciSlots: 3,
            m2Slots: 5,
            formFactor: 'ATX',
            wifi: true,
            bluetooth: '5.3',
            usbPorts: '10x USB 3.2, 2x Thunderbolt 4',
          },
          image: 'https://example.com/asus-proart.jpg',
        },
        {
          id: 8,
          name: 'Gigabyte Z790 AORUS MASTER',
          price: 3599.90,
          specs: {
            socket: 'LGA1700',
            chipset: 'Z790',
            ramType: 'DDR5',
            maxRam: '128GB',
            pciSlots: 3,
            m2Slots: 4,
            formFactor: 'E-ATX',
            wifi: true,
            bluetooth: '5.3',
            usbPorts: '8x USB 3.2, 2x USB-C',
          },
          image: 'https://example.com/z790-master.jpg',
        },
      ],
      ram: [
        {
          id: 1,
          name: 'Corsair Vengeance LPX 32GB (2x16GB)',
          price: 899.90,
          specs: {
            type: 'DDR4',
            speed: '3200MHz',
            capacity: '32GB',
            modules: '2x16GB',
            timing: 'CL16',
            voltage: '1.35V',
            height: '34mm',
            rgb: false,
          },
          image: 'https://example.com/corsair-vengeance.jpg',
        },
        {
          id: 2,
          name: 'G.Skill Trident Z5 RGB 32GB (2x16GB)',
          price: 1499.90,
          specs: {
            type: 'DDR5',
            speed: '6000MHz',
            capacity: '32GB',
            modules: '2x16GB',
            timing: 'CL36',
            voltage: '1.35V',
            height: '44mm',
            rgb: true,
          },
          image: 'https://example.com/gskill-trident.jpg',
        },
        {
          id: 3,
          name: 'Kingston FURY Beast 16GB (2x8GB)',
          price: 499.90,
          specs: {
            type: 'DDR4',
            speed: '3600MHz',
            capacity: '16GB',
            modules: '2x8GB',
            timing: 'CL17',
            voltage: '1.35V',
            height: '34mm',
            rgb: false,
          },
          image: 'https://example.com/kingston-fury.jpg',
        },
        {
          id: 4,
          name: 'Corsair Dominator Platinum RGB 32GB (2x16GB)',
          price: 1299.90,
          specs: {
            type: 'DDR4',
            speed: '3600MHz',
            capacity: '32GB',
            modules: '2x16GB',
            timing: 'CL18',
            voltage: '1.35V',
            height: '51mm',
            rgb: true,
          },
          image: 'https://example.com/corsair-dominator.jpg',
        },
        {
          id: 5,
          name: 'G.Skill Ripjaws V 64GB (2x32GB)',
          price: 1899.90,
          specs: {
            type: 'DDR4',
            speed: '3600MHz',
            capacity: '64GB',
            modules: '2x32GB',
            timing: 'CL18',
            voltage: '1.35V',
            height: '42mm',
            rgb: false,
          },
          image: 'https://example.com/gskill-ripjaws.jpg',
        },
        {
          id: 6,
          name: 'Corsair Dominator Platinum RGB DDR5 32GB (2x16GB)',
          price: 1899.90,
          specs: {
            type: 'DDR5',
            speed: '6200MHz',
            capacity: '32GB',
            modules: '2x16GB',
            timing: 'CL36',
            voltage: '1.35V',
            height: '51mm',
            rgb: true,
          },
          image: 'https://example.com/dominator-ddr5.jpg',
        },
        {
          id: 7,
          name: 'G.Skill Trident Z5 RGB 64GB (2x32GB)',
          price: 2499.90,
          specs: {
            type: 'DDR5',
            speed: '6400MHz',
            capacity: '64GB',
            modules: '2x32GB',
            timing: 'CL32',
            voltage: '1.40V',
            height: '44mm',
            rgb: true,
          },
          image: 'https://example.com/trident-z5-64.jpg',
        },
        {
          id: 8,
          name: 'Kingston FURY Beast DDR5 RGB 32GB (2x16GB)',
          price: 1699.90,
          specs: {
            type: 'DDR5',
            speed: '6000MHz',
            capacity: '32GB',
            modules: '2x16GB',
            timing: 'CL36',
            voltage: '1.35V',
            height: '34mm',
            rgb: true,
          },
          image: 'https://example.com/fury-ddr5.jpg',
        },
      ],
      gpu: [
        {
          id: 1,
          name: 'NVIDIA GeForce RTX 4070 Ti',
          price: 5999.90,
          specs: {
            memory: '12GB GDDR6X',
            coreClock: '2610MHz',
            tdp: 285,
            powerConnector: '8-pin + 8-pin',
            length: '300mm',
            rayTracing: true,
            dlss: '3.0',
            ports: '3x DP 1.4, 1x HDMI 2.1',
            maxResolution: '8K',
          },
          image: 'https://example.com/rtx-4070ti.jpg',
        },
        {
          id: 2,
          name: 'AMD Radeon RX 6800 XT',
          price: 4799.90,
          specs: {
            memory: '16GB GDDR6',
            coreClock: '2250MHz',
            tdp: 300,
            powerConnector: '8-pin + 8-pin',
            length: '267mm',
            rayTracing: true,
            fsr: '2.0',
            ports: '2x DP 1.4, 1x HDMI 2.1',
            maxResolution: '8K',
          },
          image: 'https://example.com/rx-6800xt.jpg',
        },
        {
          id: 3,
          name: 'NVIDIA GeForce RTX 4060',
          price: 2999.90,
          specs: {
            memory: '8GB GDDR6',
            coreClock: '2460MHz',
            tdp: 115,
            powerConnector: '8-pin',
            length: '242mm',
            rayTracing: true,
            dlss: '3.0',
            ports: '3x DP 1.4, 1x HDMI 2.1',
            maxResolution: '4K',
          },
          image: 'https://example.com/rtx-4060.jpg',
        },
        {
          id: 4,
          name: 'NVIDIA GeForce RTX 4090',
          price: 12999.90,
          specs: {
            memory: '24GB GDDR6X',
            coreClock: '2520MHz',
            tdp: 450,
            powerConnector: '4x 8-pin',
            length: '336mm',
            rayTracing: true,
            dlss: '3.0',
            ports: '3x DP 1.4, 1x HDMI 2.1',
            maxResolution: '8K',
          },
          image: 'https://example.com/rtx-4090.jpg',
        },
        {
          id: 5,
          name: 'AMD Radeon RX 7900 XTX',
          price: 9999.90,
          specs: {
            memory: '24GB GDDR6',
            coreClock: '2300MHz',
            tdp: 355,
            powerConnector: '2x 8-pin',
            length: '287mm',
            rayTracing: true,
            fsr: '3.0',
            ports: '2x DP 2.1, 1x HDMI 2.1',
            maxResolution: '8K',
          },
          image: 'https://example.com/rx-7900xtx.jpg',
        },
        {
          id: 6,
          name: 'NVIDIA GeForce RTX 4080',
          price: 8999.90,
          specs: {
            memory: '16GB GDDR6X',
            coreClock: '2505MHz',
            tdp: 320,
            powerConnector: '3x 8-pin',
            length: '304mm',
            rayTracing: true,
            dlss: '3.0',
            ports: '3x DP 1.4, 1x HDMI 2.1',
            maxResolution: '8K',
          },
          image: 'https://example.com/rtx-4080.jpg',
        },
        {
          id: 7,
          name: 'AMD Radeon RX 7800 XT',
          price: 4299.90,
          specs: {
            memory: '16GB GDDR6',
            coreClock: '2430MHz',
            tdp: 263,
            powerConnector: '2x 8-pin',
            length: '276mm',
            rayTracing: true,
            fsr: '3.0',
            ports: '2x DP 2.1, 1x HDMI 2.1',
            maxResolution: '8K',
          },
          image: 'https://example.com/rx-7800xt.jpg',
        },
        {
          id: 8,
          name: 'NVIDIA GeForce RTX 4070 SUPER',
          price: 4499.90,
          specs: {
            memory: '12GB GDDR6X',
            coreClock: '2475MHz',
            tdp: 220,
            powerConnector: '2x 8-pin',
            length: '285mm',
            rayTracing: true,
            dlss: '3.0',
            ports: '3x DP 1.4, 1x HDMI 2.1',
            maxResolution: '8K',
          },
          image: 'https://example.com/rtx-4070-super.jpg',
        },
      ],
      storage: [
        {
          id: 1,
          name: 'Samsung 970 EVO Plus 1TB',
          price: 799.90,
          specs: {
            type: 'NVMe SSD',
            capacity: '1TB',
            readSpeed: '3500MB/s',
            writeSpeed: '3300MB/s',
            formFactor: 'M.2',
            interface: 'PCIe 3.0 x4',
            tbw: '600TB',
            warranty: '5 anos',
          },
          image: 'https://example.com/samsung-970.jpg',
        },
        {
          id: 2,
          name: 'WD Black SN850X 2TB',
          price: 1599.90,
          specs: {
            type: 'NVMe SSD',
            capacity: '2TB',
            readSpeed: '7300MB/s',
            writeSpeed: '6600MB/s',
            formFactor: 'M.2',
            interface: 'PCIe 4.0 x4',
            tbw: '1200TB',
            warranty: '5 anos',
          },
          image: 'https://example.com/wd-black.jpg',
        },
        {
          id: 3,
          name: 'Seagate Barracuda 2TB',
          price: 299.90,
          specs: {
            type: 'HDD',
            capacity: '2TB',
            readSpeed: '190MB/s',
            rpm: '7200',
            formFactor: '3.5"',
            cache: '256MB',
            warranty: '2 anos',
            interface: 'SATA 6Gb/s',
          },
          image: 'https://example.com/seagate-barracuda.jpg',
        },
        {
          id: 4,
          name: 'Corsair Force MP600 2TB',
          price: 1799.90,
          specs: {
            type: 'NVMe SSD',
            capacity: '2TB',
            readSpeed: '7000MB/s',
            writeSpeed: '6850MB/s',
            formFactor: 'M.2',
            interface: 'PCIe 4.0 x4',
            tbw: '1400TB',
            warranty: '5 anos',
          },
          image: 'https://example.com/corsair-mp600.jpg',
        },
        {
          id: 5,
          name: 'Samsung 870 EVO 1TB',
          price: 599.90,
          specs: {
            type: 'SATA SSD',
            capacity: '1TB',
            readSpeed: '560MB/s',
            writeSpeed: '530MB/s',
            formFactor: '2.5"',
            interface: 'SATA 6Gb/s',
            tbw: '600TB',
            warranty: '5 anos',
          },
          image: 'https://example.com/samsung-870.jpg',
        },
        {
          id: 6,
          name: 'Crucial P5 Plus 2TB',
          price: 1399.90,
          specs: {
            type: 'NVMe SSD',
            capacity: '2TB',
            readSpeed: '6600MB/s',
            writeSpeed: '5000MB/s',
            formFactor: 'M.2',
            interface: 'PCIe 4.0 x4',
            tbw: '1200TB',
            warranty: '5 anos',
          },
          image: 'https://example.com/crucial-p5.jpg',
        },
        {
          id: 7,
          name: 'WD Red Pro 4TB',
          price: 899.90,
          specs: {
            type: 'HDD',
            capacity: '4TB',
            readSpeed: '240MB/s',
            rpm: '7200',
            formFactor: '3.5"',
            cache: '256MB',
            warranty: '5 anos',
            interface: 'SATA 6Gb/s',
          },
          image: 'https://example.com/wd-red-pro.jpg',
        },
        {
          id: 8,
          name: 'Samsung 990 PRO 2TB',
          price: 1899.90,
          specs: {
            type: 'NVMe SSD',
            capacity: '2TB',
            readSpeed: '7450MB/s',
            writeSpeed: '6900MB/s',
            formFactor: 'M.2',
            interface: 'PCIe 4.0 x4',
            tbw: '1200TB',
            warranty: '5 anos',
          },
          image: 'https://example.com/samsung-990.jpg',
        },
      ],
      psu: [
        {
          id: 1,
          name: 'Corsair RM850x',
          price: 899.90,
          specs: {
            wattage: 850,
            efficiency: '80+ Gold',
            modular: 'Full',
            fanSize: '135mm',
            warranty: '10 anos',
            protection: 'OVP, UVP, OCP, OTP',
            rails: 'Single +12V',
            connectors: '2x EPS, 4x PCIe, 8x SATA',
          },
          image: 'https://example.com/corsair-rm850x.jpg',
        },
        {
          id: 2,
          name: 'EVGA SuperNOVA 750 G5',
          price: 799.90,
          specs: {
            wattage: 750,
            efficiency: '80+ Gold',
            modular: 'Full',
            fanSize: '135mm',
            warranty: '10 anos',
            protection: 'OVP, UVP, OCP, OTP',
            rails: 'Single +12V',
            connectors: '2x EPS, 4x PCIe, 8x SATA',
          },
          image: 'https://example.com/evga-750.jpg',
        },
        {
          id: 3,
          name: 'be quiet! Straight Power 11 1000W',
          price: 1299.90,
          specs: {
            wattage: 1000,
            efficiency: '80+ Platinum',
            modular: 'Full',
            fanSize: '135mm',
            warranty: '10 anos',
            protection: 'OVP, UVP, OCP, OTP, SCP',
            rails: 'Multi +12V',
            connectors: '2x EPS, 6x PCIe, 12x SATA',
          },
          image: 'https://example.com/bequiet-1000w.jpg',
        },
        {
          id: 4,
          name: 'Seasonic PRIME TX-1000',
          price: 1699.90,
          specs: {
            wattage: 1000,
            efficiency: '80+ Titanium',
            modular: 'Full',
            fanSize: '135mm',
            warranty: '12 anos',
            protection: 'OVP, UVP, OCP, OTP, SCP',
            rails: 'Single +12V',
            connectors: '2x EPS, 8x PCIe, 12x SATA',
          },
          image: 'https://example.com/seasonic-prime.jpg',
        },
        {
          id: 5,
          name: 'Corsair HX1200',
          price: 1599.90,
          specs: {
            wattage: 1200,
            efficiency: '80+ Platinum',
            modular: 'Full',
            fanSize: '140mm',
            warranty: '10 anos',
            protection: 'OVP, UVP, OCP, OTP, SCP',
            rails: 'Single/Multi +12V switchable',
            connectors: '2x EPS, 8x PCIe, 14x SATA',
          },
          image: 'https://example.com/corsair-hx1200.jpg',
        },
        {
          id: 6,
          name: 'be quiet! Dark Power Pro 12 1500W',
          price: 2499.90,
          specs: {
            wattage: 1500,
            efficiency: '80+ Titanium',
            modular: 'Full',
            fanSize: '135mm',
            warranty: '10 anos',
            protection: 'OVP, UVP, OCP, OTP, SCP, OPP',
            rails: 'Multi +12V',
            connectors: '3x EPS, 8x PCIe, 16x SATA',
          },
          image: 'https://example.com/dark-power-pro.jpg',
        },
        {
          id: 7,
          name: 'Corsair AX1600i',
          price: 2999.90,
          specs: {
            wattage: 1600,
            efficiency: '80+ Titanium',
            modular: 'Full',
            fanSize: '140mm',
            warranty: '10 anos',
            protection: 'OVP, UVP, OCP, OTP, SCP',
            rails: 'Single +12V',
            connectors: '2x EPS, 12x PCIe, 16x SATA',
          },
          image: 'https://example.com/corsair-ax1600i.jpg',
        },
        {
          id: 8,
          name: 'ASUS ROG THOR 1200P',
          price: 1999.90,
          specs: {
            wattage: 1200,
            efficiency: '80+ Platinum',
            modular: 'Full',
            fanSize: '135mm',
            warranty: '10 anos',
            protection: 'OVP, UVP, OCP, OTP, SCP',
            rails: 'Single +12V',
            connectors: '2x EPS, 8x PCIe, 12x SATA',
            display: 'OLED Power Display',
          },
          image: 'https://example.com/rog-thor.jpg',
        },
      ],
      case: [
        {
          id: 1,
          name: 'Lian Li O11 Dynamic EVO',
          price: 999.90,
          specs: {
            formFactor: 'ATX, E-ATX',
            maxGPULength: '420mm',
            maxCPUHeight: '167mm',
            fans: '10x 120mm',
            usbPorts: '1x USB-C, 2x USB 3.0',
            dimensions: '465 x 285 x 459mm',
            radiatorSupport: '360mm Top, 360mm Side, 360mm Bottom',
            material: 'Alumínio, Vidro Temperado',
          },
          image: 'https://example.com/lianli-o11.jpg',
        },
        {
          id: 2,
          name: 'Corsair 4000D Airflow',
          price: 599.90,
          specs: {
            formFactor: 'ATX',
            maxGPULength: '360mm',
            maxCPUHeight: '170mm',
            fans: '6x 120mm',
            usbPorts: '1x USB-C, 1x USB 3.0',
            dimensions: '453 x 230 x 466mm',
            radiatorSupport: '360mm Front, 280mm Top',
            material: 'Aço, Vidro Temperado',
          },
          image: 'https://example.com/corsair-4000d.jpg',
        },
        {
          id: 3,
          name: 'NZXT H510 Flow',
          price: 499.90,
          specs: {
            formFactor: 'ATX',
            maxGPULength: '360mm',
            maxCPUHeight: '165mm',
            fans: '4x 120mm',
            usbPorts: '1x USB-C, 1x USB 3.0',
            dimensions: '428 x 210 x 460mm',
            radiatorSupport: '280mm Front, 140mm Top',
            material: 'Aço, Vidro Temperado',
          },
          image: 'https://example.com/nzxt-h510.jpg',
        },
        {
          id: 4,
          name: 'Phanteks Evolv X',
          price: 1299.90,
          specs: {
            formFactor: 'ATX, E-ATX',
            maxGPULength: '435mm',
            maxCPUHeight: '190mm',
            fans: '10x 120mm',
            usbPorts: '1x USB-C, 2x USB 3.0',
            dimensions: '520 x 240 x 510mm',
            radiatorSupport: '420mm Front, 360mm Top, 360mm Bottom',
            material: 'Alumínio, Vidro Temperado',
          },
          image: 'https://example.com/phanteks-evolv.jpg',
        },
        {
          id: 5,
          name: 'Fractal Design Meshify 2',
          price: 899.90,
          specs: {
            formFactor: 'ATX, E-ATX',
            maxGPULength: '467mm',
            maxCPUHeight: '185mm',
            fans: '9x 120mm',
            usbPorts: '1x USB-C, 2x USB 3.0',
            dimensions: '542 x 240 x 474mm',
            radiatorSupport: '360mm Front, 360mm Top, 240mm Bottom',
            material: 'Aço, Vidro Temperado',
          },
          image: 'https://example.com/fractal-meshify.jpg',
        },
        {
          id: 6,
          name: 'be quiet! Dark Base Pro 900',
          price: 1599.90,
          specs: {
            formFactor: 'ATX, E-ATX, XL-ATX',
            maxGPULength: '472mm',
            maxCPUHeight: '185mm',
            fans: '12x 120mm ou 7x 140mm',
            usbPorts: '1x USB-C, 2x USB 3.0, 2x USB 2.0',
            dimensions: '577 x 243 x 586mm',
            radiatorSupport: '420mm Front, 420mm Top, 140mm Rear',
            material: 'Aço, Alumínio, Vidro Temperado',
            features: 'Qi Wireless Charging, Inversível',
          },
          image: 'https://example.com/dark-base-pro.jpg',
        },
        {
          id: 7,
          name: 'Cooler Master HAF 700 EVO',
          price: 1899.90,
          specs: {
            formFactor: 'ATX, E-ATX, SSI-EEB',
            maxGPULength: '490mm',
            maxCPUHeight: '198mm',
            fans: '14x 120mm ou 7x 200mm',
            usbPorts: '2x USB-C, 4x USB 3.0',
            dimensions: '592 x 282 x 626mm',
            radiatorSupport: '480mm Front, 420mm Top, 360mm Side',
            material: 'Aço, Alumínio, Vidro Temperado',
            features: '7" LCD Display, Tool-free Design',
          },
          image: 'https://example.com/haf-700-evo.jpg',
        },
        {
          id: 8,
          name: 'Thermaltake Tower 500',
          price: 1299.90,
          specs: {
            formFactor: 'ATX, E-ATX',
            maxGPULength: '438mm',
            maxCPUHeight: '270mm',
            fans: '9x 120mm',
            usbPorts: '1x USB-C, 4x USB 3.0',
            dimensions: '398 x 351 x 568mm',
            radiatorSupport: '360mm Top, 360mm Side, 360mm Bottom',
            material: 'Aço, Vidro Temperado (3 lados)',
            features: 'Vertical Design, Rotatable I/O Panel',
          },
          image: 'https://example.com/tower-500.jpg',
        },
      ],
      cooler: [
        {
          id: 1,
          name: 'NZXT Kraken Z73',
          price: 1799.90,
          specs: {
            type: 'Liquid',
            radiatorSize: '360mm',
            fans: '3x 120mm',
            rpm: '500-2000',
            noise: '21-36 dBA',
            socket: 'Intel LGA1700/1200/115x, AMD AM5/AM4',
            display: 'LCD 2.36"',
            rgb: true,
          },
          image: 'https://example.com/kraken-z73.jpg',
        },
        {
          id: 2,
          name: 'Noctua NH-D15 chromax.black',
          price: 899.90,
          specs: {
            type: 'Air',
            height: '165mm',
            fans: '2x 140mm',
            rpm: '300-1500',
            noise: '19.2-24.6 dBA',
            socket: 'Intel LGA1700/1200/115x, AMD AM5/AM4',
            material: 'Copper, Aluminum',
            rgb: false,
          },
          image: 'https://example.com/nh-d15.jpg',
        },
        {
          id: 3,
          name: 'Corsair iCUE H150i ELITE LCD',
          price: 1999.90,
          specs: {
            type: 'Liquid',
            radiatorSize: '360mm',
            fans: '3x 120mm ML RGB',
            rpm: '450-2400',
            noise: '10-31 dBA',
            socket: 'Intel LGA1700/1200/115x, AMD AM5/AM4',
            display: 'IPS LCD 2.1"',
            rgb: true,
          },
          image: 'https://example.com/h150i-elite.jpg',
        },
        {
          id: 4,
          name: 'be quiet! Dark Rock Pro 4',
          price: 699.90,
          specs: {
            type: 'Air',
            height: '163mm',
            fans: '1x 120mm + 1x 135mm',
            rpm: '1200-1500',
            noise: '12.8-24.3 dBA',
            socket: 'Intel LGA1700/1200/115x, AMD AM5/AM4',
            material: 'Copper, Aluminum',
            rgb: false,
          },
          image: 'https://example.com/dark-rock-pro.jpg',
        },
      ],
    };

    return mockData[type] || [];
  };

  const filteredComponents = components.filter(component =>
    component.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderSpecifications = (specs) => {
    return Object.entries(specs).map(([key, value]) => (
      <Badge key={key} colorScheme="blue" variant="subtle">
        {key}: {value}
      </Badge>
    ));
  };

  return (
    <>
      <Box p={4} borderWidth={1} borderRadius="lg" onClick={onOpen} cursor="pointer"
        _hover={{ borderColor: 'brand.500' }}>
        <Grid templateColumns="1fr auto" gap={4} alignItems="center">
          <Box>
            <Heading size="sm" mb={2}>{label}</Heading>
            {selected ? (
              <VStack align="start" spacing={2}>
                <Text>{selected.name}</Text>
                <HStack wrap="wrap" spacing={2}>
                  {renderSpecifications(selected.specs)}
                </HStack>
                <Text color="green.500" fontWeight="bold">
                  R$ {selected.price.toFixed(2)}
                </Text>
              </VStack>
            ) : (
              <Text color="gray.500">Clique para selecionar</Text>
            )}
          </Box>
          <Button size="sm" colorScheme="brand">
            {selected ? 'Alterar' : 'Selecionar'}
          </Button>
        </Grid>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{label}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <InputGroup mb={4}>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" />
              </InputLeftElement>
              <Input
                placeholder="Buscar componentes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </InputGroup>

            <VStack spacing={4} align="stretch">
              {filteredComponents.map((component) => (
                <Box
                  key={component.id}
                  p={4}
                  borderWidth={1}
                  borderRadius="md"
                  cursor="pointer"
                  onClick={() => {
                    onSelect(component);
                    onClose();
                  }}
                  _hover={{ borderColor: 'brand.500', bg: 'gray.50' }}
                >
                  <Grid templateColumns="auto 1fr" gap={4}>
                    {component.image && (
                      <Image
                        src={component.image}
                        alt={component.name}
                        boxSize="100px"
                        objectFit="contain"
                      />
                    )}
                    <Box>
                      <Heading size="sm" mb={2}>{component.name}</Heading>
                      <HStack wrap="wrap" spacing={2} mb={2}>
                        {renderSpecifications(component.specs)}
                      </HStack>
                      <Text color="green.500" fontWeight="bold">
                        R$ {component.price.toFixed(2)}
                      </Text>
                    </Box>
                  </Grid>
                </Box>
              ))}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ComponentSelector; 