import type { LucideIcon } from 'lucide-react';
import { FlaskConical, HeartPulse, Stethoscope } from 'lucide-react';

export interface Subject {
  id: string;
  name: string;
  description: string;
  area: string;
  semester?: string;
  semesterTone?: 'green' | 'blue';
  actionLabel?: string;
}

export interface AcademicYear {
  id: string;
  name: string;
  badge?: string;
  subjects: Subject[];
}

export interface CareerProgram {
  id: string;
  name: string;
  description: string;
  duration: string;
  icon: LucideIcon;
  tone: 'green' | 'blue';
  years: AcademicYear[];
}

export const careerPrograms: CareerProgram[] = [
  {
    id: 'medicina',
    name: 'Medicina',
    description: 'Formación médica integral, clínico-quirúrgica y comunitaria',
    duration: '6 años de estudio',
    icon: Stethoscope,
    tone: 'green',
    years: [
      {
        id: 'medicina-primer',
        name: 'Primer Año',
        subjects: [
          {
            id: 'morfofisiologia-i',
            name: 'Morfofisiología I',
            description: 'Bases biomédicas celulares y tejidos fundamentales',
            area: 'Médica Básica',
            semester: 'Semestre I',
            semesterTone: 'green'
          },
          {
            id: 'introduccion-salud-publica',
            name: 'Introducción a la Salud Pública',
            description: 'Determinantes sociales y atención comunitaria',
            area: 'Salud Pública',
            semester: 'Semestre I',
            semesterTone: 'green'
          },
          {
            id: 'morfofisiologia-ii',
            name: 'Morfofisiología II',
            description: 'Sistemas cardiovascular, respiratorio y digestivo',
            area: 'Médica Básica',
            semester: 'Semestre II',
            semesterTone: 'blue'
          }
        ]
      },
      {
        id: 'medicina-segundo',
        name: 'Segundo Año',
        subjects: [
          {
            id: 'microbiologia-parasitologia',
            name: 'Microbiología y Parasitología',
            description: 'Patógenos de interés clínico y bioseguridad',
            area: 'Preclínica'
          },
          {
            id: 'farmacologia-general',
            name: 'Farmacología General',
            description: 'Principios terapéuticos y farmacocinética',
            area: 'Preclínica'
          },
          {
            id: 'inmunologia-basica',
            name: 'Inmunología Básica',
            description: 'Respuesta inmunológica y patologías autoinmunes',
            area: 'Preclínica'
          }
        ]
      },
      {
        id: 'medicina-tercero',
        name: 'Tercer Año',
        subjects: [
          {
            id: 'propedeutica-clinica',
            name: 'Propedéutica Clínica y Semiología',
            description: 'Examen físico, síntomas y signos de enfermedad',
            area: 'Clínica'
          },
          {
            id: 'medicina-interna',
            name: 'Medicina Interna',
            description: 'Diagnóstico y manejo integral del paciente adulto',
            area: 'Hospitalario'
          },
          {
            id: 'cirugia-general',
            name: 'Cirugía General',
            description: 'Patología quirúrgica fundamental y urgencias',
            area: 'Quirúrgico'
          }
        ]
      },
      {
        id: 'medicina-cuarto',
        name: 'Cuarto Año',
        subjects: [
          {
            id: 'pediatria',
            name: 'Pediatría',
            description: 'Atención clínica y desarrollo de la infancia y adolescencia',
            area: 'Especialidad'
          },
          {
            id: 'ginecologia-obstetricia',
            name: 'Ginecología y Obstetricia',
            description: 'Salud reproductiva materna, parto y patología ginecológica',
            area: 'Especialidad'
          },
          {
            id: 'psiquiatria-clinica',
            name: 'Psiquiatría Clínica',
            description: 'Salud mental, psicopatología y terapias psiquiátricas',
            area: 'Especialidad'
          }
        ]
      },
      {
        id: 'medicina-quinto',
        name: 'Quinto Año',
        subjects: [
          {
            id: 'medicina-general-integral',
            name: 'Medicina General Integral (MGI)',
            description: 'Atención primaria, dispensarización y salud familiar',
            area: 'APS'
          },
          {
            id: 'medicina-legal-etica',
            name: 'Medicina Legal y Ética Médica',
            description: 'Aspectos periciales, deontología y legislación médica',
            area: 'Forense'
          },
          {
            id: 'dermatologia-oftalmologia',
            name: 'Dermatología y Oftalmología',
            description: 'Diagnóstico y manejo en consulta de especialidades ambulatorias',
            area: 'Especialidad'
          }
        ]
      },
      {
        id: 'medicina-sexto',
        name: 'Sexto Año',
        badge: 'Práctica Profesional',
        subjects: [
          {
            id: 'rotacion-medicina-interna',
            name: 'Rotación Medicina Interna',
            description: 'Guardias médicas y salas de hospitalización',
            area: 'Hospitalario',
            actionLabel: 'Ver rotación'
          },
          {
            id: 'rotacion-cirugia-general',
            name: 'Rotación Cirugía General',
            description: 'Quirófano, urgencias y manejo postoperatorio',
            area: 'Quirúrgico',
            actionLabel: 'Ver rotación'
          },
          {
            id: 'rotacion-pediatria',
            name: 'Rotación Pediatría',
            description: 'Atención pediátrica y neonatología hospitalaria',
            area: 'Pediatría',
            actionLabel: 'Ver rotación'
          },
          {
            id: 'rotacion-ginecobstetricia-mgi',
            name: 'Rotación Ginecobstetricia y MGI',
            description: 'Sala de partos y policlínico universitario',
            area: 'APS / Obst.',
            actionLabel: 'Ver rotación'
          }
        ]
      }
    ]
  },
  {
    id: 'enfermeria',
    name: 'Enfermería',
    description: 'Cuidados enfermeros integrales, gestión hospitalaria y atención comunitaria',
    duration: '5 años de estudio',
    icon: HeartPulse,
    tone: 'blue',
    years: [
      {
        id: 'enfermeria-primer',
        name: 'Primer Año',
        subjects: [
          {
            id: 'fundamentos-enfermeria-i',
            name: 'Fundamentos de Enfermería I',
            description: 'Principios bioéticos, técnicas y procedimientos de enfermería',
            area: 'Básica'
          },
          {
            id: 'morfofisiologia-enfermeria',
            name: 'Morfofisiología Humana para Enfermería',
            description: 'Estructura funcional anatómica y fisiológica del organismo',
            area: 'Biomédica'
          },
          {
            id: 'enfermeria-comunitaria-i',
            name: 'Enfermería Comunitaria I',
            description: 'Promoción de la salud en la familia y la comunidad',
            area: 'Comunitaria'
          }
        ]
      },
      {
        id: 'enfermeria-segundo',
        name: 'Segundo Año',
        subjects: [
          {
            id: 'farmacologia-enfermeria',
            name: 'Farmacología en Enfermería',
            description: 'Administración segura de medicamentos y dosificación',
            area: 'Clínica'
          },
          {
            id: 'proceso-atencion-enfermeria',
            name: 'Proceso de Atención de Enfermería (PAE)',
            description: 'Metodología científica, valoración diagnóstica y plan de cuidados',
            area: 'Metodológica'
          },
          {
            id: 'microbiologia-bioseguridad',
            name: 'Microbiología y Bioseguridad',
            description: 'Control de infecciones nosocomiales y esterilización',
            area: 'Hospitalaria'
          }
        ]
      },
      {
        id: 'enfermeria-tercero',
        name: 'Tercer Año',
        subjects: [
          {
            id: 'enfermeria-clinico-quirurgica-i',
            name: 'Enfermería Clínico-Quirúrgica I',
            description: 'Cuidados pre, trans y postoperatorios del paciente adulto',
            area: 'Hospitalario'
          },
          {
            id: 'enfermeria-clinico-quirurgica-ii',
            name: 'Enfermería Clínico-Quirúrgica II',
            description: 'Cuidados en enfermedades cardiovasculares y respiratorias',
            area: 'Hospitalario'
          },
          {
            id: 'nutricion-dietoterapia',
            name: 'Nutrición y Dietoterapia',
            description: 'Soporte nutricional enteral y parenteral en hospitalización',
            area: 'Nutrición'
          }
        ]
      },
      {
        id: 'enfermeria-cuarto',
        name: 'Cuarto Año',
        subjects: [
          {
            id: 'enfermeria-ginecoobstetrica',
            name: 'Enfermería Ginecoobstétrica',
            description: 'Cuidados en el embarazo, trabajo de parto y puerperio',
            area: 'Materno'
          },
          {
            id: 'enfermeria-pediatrica',
            name: 'Enfermería Pediátrica',
            description: 'Atención de neonatos y paciente pediátrico en estado crítico',
            area: 'Pediatría'
          },
          {
            id: 'urgencias-terapia-intensiva',
            name: 'Urgencias y Terapia Intensiva',
            description: 'Soporte vital y monitorización de pacientes críticos',
            area: 'Críticos'
          }
        ]
      },
      {
        id: 'enfermeria-quinto',
        name: 'Quinto Año',
        badge: 'Práctica Profesional',
        subjects: [
          {
            id: 'gestion-administracion-servicios',
            name: 'Gestión y Administración de Servicios',
            description: 'Liderazgo, calidad hospitalaria y dirección de salas',
            area: 'Gestión'
          },
          {
            id: 'investigacion-enfermeria',
            name: 'Investigación en Enfermería',
            description: 'Metodología científica y trabajo de terminación de carrera',
            area: 'Investigación'
          },
          {
            id: 'practica-integrada-preprofesional',
            name: 'Práctica Integrada Preprofesional',
            description: 'Rotaciones integrales en servicios asistenciales de alta complejidad',
            area: 'Asistencial'
          }
        ]
      }
    ]
  },
  {
    id: 'tecnologia',
    name: 'Tecnología de la Salud',
    description:
      'Bioanálisis clínico, imagenología, rehabilitación y servicios técnicos biomédicos',
    duration: '5 años de estudio',
    icon: FlaskConical,
    tone: 'green',
    years: [
      {
        id: 'tecnologia-primer',
        name: 'Primer Año',
        subjects: [
          {
            id: 'introduccion-tecnologia-salud',
            name: 'Introducción a la Tecnología de la Salud',
            description: 'Campos profesionales y normas de seguridad en laboratorios',
            area: 'Tecnología'
          },
          {
            id: 'morfofisiologia-biomedica',
            name: 'Morfofisiología Biomédica',
            description: 'Estructura de órganos y sistemas orientada a diagnósticos técnicos',
            area: 'Biomédica'
          },
          {
            id: 'quimica-bioquimica-clinica',
            name: 'Química y Bioquímica Clínica',
            description: 'Reacciones químicas, soluciones y fundamentos moleculares',
            area: 'Laboratorio'
          }
        ]
      },
      {
        id: 'tecnologia-segundo',
        name: 'Segundo Año',
        subjects: [
          {
            id: 'tecnicas-laboratorio-clinico',
            name: 'Técnicas de Laboratorio Clínico',
            description: 'Muestreo biológico, centrifugación y automatización',
            area: 'Bioanálisis'
          },
          {
            id: 'fundamentos-imagenologia',
            name: 'Fundamentos de Imagenología',
            description: 'Física de las radiaciones ionizantes y protección radiológica',
            area: 'Imagen'
          },
          {
            id: 'instrumentacion-biomedica',
            name: 'Instrumentación Biomédica',
            description: 'Mantenimiento operativo y calibración de equipos médicos',
            area: 'Equipamiento'
          }
        ]
      },
      {
        id: 'tecnologia-tercero',
        name: 'Tercer Año',
        subjects: [
          {
            id: 'microbiologia-diagnostica',
            name: 'Microbiología Diagnóstica',
            description: 'Cultivos bacterianos, antibiogramas e inmunodiagnóstico',
            area: 'Diagnóstico'
          },
          {
            id: 'imagenologia-radiologia-clinica',
            name: 'Imagenología y Radiología Clínica',
            description: 'Tomografía axial computarizada y ecografía diagnóstica',
            area: 'Radiología'
          },
          {
            id: 'terapia-fisica-rehabilitacion',
            name: 'Terapia Física y Rehabilitación',
            description: 'Electroterapia, cinesiterapia y recuperación neuromotora',
            area: 'Rehabilitación'
          }
        ]
      },
      {
        id: 'tecnologia-cuarto',
        name: 'Cuarto Año',
        subjects: [
          {
            id: 'control-garantia-calidad',
            name: 'Control y Garantía de Calidad en Salud',
            description: 'Estándares ISO, control de calibración y validación de ensayos',
            area: 'Calidad'
          },
          {
            id: 'resonancia-medicina-nuclear',
            name: 'Resonancia Magnética y Medicina Nuclear',
            description: 'Técnicas de vanguardia y procesamiento digital de imágenes',
            area: 'Alta Complejidad'
          },
          {
            id: 'informatica-medica-bioestadistica',
            name: 'Informática Médica y Bioestadística Aplicada',
            description: 'Sistemas de información hospitalaria y análisis de datos clínicos',
            area: 'Informática'
          }
        ]
      },
      {
        id: 'tecnologia-quinto',
        name: 'Quinto Año',
        badge: 'Práctica Profesional',
        subjects: [
          {
            id: 'practica-bioanalisis-imagen',
            name: 'Práctica Profesional de Bioanálisis e Imagen',
            description: 'Inserción asistencial directa en centros de alta tecnología',
            area: 'Asistencial'
          },
          {
            id: 'gestion-tecnologias-sanitarias',
            name: 'Gestión de Tecnologías Sanitarias',
            description: 'Evaluación tecnológica, renovación y bioética tecnológica',
            area: 'Gestión'
          },
          {
            id: 'trabajo-terminacion-carrera',
            name: 'Trabajo de Terminación de Carrera (TTC)',
            description: 'Investigación técnica aplicada al sistema de salud',
            area: 'Investigación'
          }
        ]
      }
    ]
  }
];
