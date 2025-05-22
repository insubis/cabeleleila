import { Service } from '../types';

export const services: Service[] = [
  {
    id: '1',
    name: 'Corte de cabelo feminino',
    description: 'Corte de cabelo profissional com lavagem e modelagem.',
    duration: 60,
    price: 65,
    image: 'https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'haircut'
  },
  {
    id: '2',
    name: 'Corte de cabelo masculino',
    description: 'Corte clássico ou moderno com estilo.',
    duration: 45,
    price: 45,
    image: 'https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'haircut'
  },
  {
    id: '3',
    name: 'Coloração de cabelo',
    description: 'Serviço completo de coloração com produtos profissionais.',
    duration: 120,
    price: 95,
    image: 'https://images.pexels.com/photos/3993329/pexels-photo-3993329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'color'
  },
  {
    id: '4',
    name: 'luzes',
    description: 'Luzes parciais ou totais para realçar sua cor natural.',
    duration: 90,
    price: 120,
    image: 'https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'color'
  },
  {
    id: '5',
    name: 'Balayage',
    description: 'Destaques pintados à mão para um visual natural e bronzeado.',
    duration: 150,
    price: 175,
    image: 'https://images.pexels.com/photos/3993310/pexels-photo-3993310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'color'
  },
  {
    id: '6',
    name: 'Tratamento Capilar',
    description: 'Tratamento de condicionamento profundo para cabelos danificados.',
    duration: 45,
    price: 55,
    image: 'https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'treatment'
  },
  {
    id: '7',
    name: 'Escova e modelagem',
    description: 'Selagem profissional com estilo para qualquer ocasião.',
    duration: 45,
    price: 50,
    image: 'https://images.pexels.com/photos/3993402/pexels-photo-3993402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'styling'
  },
  {
    id: '8',
    name: 'Extensões de cabelo',
    description: 'Aplicação profissional de extensões capilares premium.',
    duration: 180,
    price: 250,
    image: 'https://images.pexels.com/photos/3993398/pexels-photo-3993398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'extensions'
  }
];