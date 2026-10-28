import type { LucideIcon } from 'lucide-react';
import { Microscope, Stethoscope, Syringe } from 'lucide-react';

export interface Career {
  id: string;
  category: string;
  title: string;
  description: string;
  duration: string;
  badge: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
}

export const careers: Career[] = [
  {
    id: 'medicina',
    category: 'Ciencias Médicas',
    title: 'Medicina',
    description:
      'Formación de médicos generales con alta preparación humanista y científica, comprometidos con la salud comunitaria y el método clínico.',
    duration: '6 años',
    badge: 'Pregrado',
    icon: Stethoscope,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBEKKK0zB2571f9cJzeyAgKfWVl_pXi1kN048vXnl0ZBrzqQBRqWFHRz4RCa5R9_2PRvmhD4mNAvsKXi0M3UfnKo3UYlzEZP7yVxcpj_dHQqrqZrRD2tlogdYg8rT6dospDHGGsLsRiA8lXJ5Z2Jf8DJ12vJU3VIPdJk93GqHAXyhvmGSWHG46TdGfBJcDu2IWb1PSEeulZ9jhW8TQ3Cx_Af3zVOJ3p_9yJ1P4PQeaSr_8Qpkjn2GDcvcuu0NcLjlbpxLE',
    imageAlt: 'Carrera de Medicina - Prácticas clínicas hospitalarias'
  },
  {
    id: 'enfermeria',
    category: 'Licenciatura',
    title: 'Enfermería',
    description:
      'Profesionales dedicados al cuidado integral del paciente y la comunidad, capacitados en técnicas asistenciales avanzadas y gestión del cuidado.',
    duration: '5 años',
    badge: 'Pregrado',
    icon: Syringe,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA3MeQ9hEixjUDczIAg6RoDGxmTv4Qj1f_tyIt-6Q91p6qjSNpjx9IQFSuRcoGc3XmqKqqGYAE_IMGq7AbZntYhvsvQjPIPs_TXSTI-rkDMUBTXnZgQ0GtcAb-DI4BQ0iULSD7U9NDoQcK9cNN-PRqCrFDWfQCNR1Tj2cYPBkgJkLPMfhkVRNLDypMCnO703bElPV6JNe3ONsKwotAgY06rY4DrltsAQ26C3e9T7VJBhBC327GLPZ3HJ_xgZZA98Jgg-Bg',
    imageAlt: 'Licenciatura en Enfermería - Cuidado intensivo y atención al paciente'
  },
  {
    id: 'tecnologia',
    category: 'Tecnología',
    title: 'Tecnología de la Salud',
    description:
      'Especialidades técnicas y tecnológicas en el ámbito clínico y hospitalario, cubriendo bioanálisis, imagenología y electromedicina.',
    duration: '4-5 años',
    badge: 'Técnico Superior',
    icon: Microscope,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD4chL2XqK52XfcLFqitrebBSJgeAWPOcs5_P5sedljMkMUGHfgpk8pN2ioFDSnn0BUik-6PuKLmQH0InWcrF_JkjzYzDvcqNsCwRGFEETWBFHwUPb8RzRWzQoHWLO-KhIzZjoiU33p-ETLcGIoOC_0R7EyhT1tf1wSa9XMjj1J7qQcN4Y_sgc-cxtjGJmnwlgQaguiJbZFGvSR6ed3M1g0ngU-7eWpDMvzzU6nTZuwRmHmKisH4JH3uenuy7r10RHbmV8',
    imageAlt: 'Tecnología de la Salud - Diagnóstico e instrumentación médica'
  }
];

export const heroImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDmERSEssLDo9dv5DRSCJ_CQEmlae-fRA5iIybOuLdOjMPWmVSjAFLtm_kK-O64rD4RxJY6pfzpzcfQumYgdawiT_GaT6CfHdSBGpSHFi-aZGs0e4L6kJA2YGRiG0X-037lZuqNpm7lOy-Tu0l0LnwRFkbmBDTAf7G3ppPN7UwrxRdZ3qUtCnyhRUD1LV0g-ypkq757yK1moCmF4s-R4QMMRbivsUUoXI-rk2jYFPMGDT4fVZTT9DIFny6fAbeTCms61Gs';

export const heroBadgeIcon =
  'https://lh3.googleusercontent.com/aida/AEtjO1UDUBFon_3DfIY0WgfboZMR9PkReS9XD1CsVCGuE3i8jS6MCknIXTrRrd6h3lM-VeXw1sRH4V2HzAWuOAvfIX2AP-caweRCC3EzO305ygMxtOvxmK3woDtDDXMHpFhUFOVdR_Vy8SG_1NJkblrx4TDrk9TX-ygUWh2qSkozr2ed8Cm4TldohEMC4oTbAyoW7kzc6D3wbqkuPNG425O8A9h1ZJc6nETyVBMliXulN0J5xQuAdmv7dP-HMmqq';
