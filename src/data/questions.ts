import { CEQuestion, CEArea } from '../types';
import { PSAD_QUESTIONS } from './questions_psad';
import { HPGE_QUESTIONS } from './questions_hpge';
import { MSTE_QUESTIONS } from './questions_mste';
import { ADDITIONAL_QUESTIONS } from './questions_additional';
import { SUPPLEMENT_QUESTIONS_1 } from './questions_supplement_1';
import { SUPPLEMENT_QUESTIONS_2 } from './questions_supplement_2';
import { SUPPLEMENT_QUESTIONS_3 } from './questions_supplement_3';
import { PSAD_TOS_QUESTIONS } from './questions_psad_tos';
import { HPGE_TOS_QUESTIONS } from './questions_hpge_tos';
import { MSTE_TOS_QUESTIONS } from './questions_mste_tos';
import { PDF_TOS_QUESTIONS } from './questions_pdf_tos';
import { SCANNED_PDF_QUESTIONS } from './questions_scanned_pdf';
import { HIGHWAY_PORTS_QUESTIONS } from './questions_highway_ports';

// Pool of authentic Table of Specifications (TOS) board exam questions
export const ALL_SOURCE_QUESTIONS: CEQuestion[] = [
  ...PSAD_TOS_QUESTIONS,
  ...HPGE_TOS_QUESTIONS,
  ...MSTE_TOS_QUESTIONS,
  ...PDF_TOS_QUESTIONS,
  ...SCANNED_PDF_QUESTIONS,
  ...HIGHWAY_PORTS_QUESTIONS,
  ...PSAD_QUESTIONS,
  ...HPGE_QUESTIONS,
  ...MSTE_QUESTIONS,
  ...ADDITIONAL_QUESTIONS,
  ...SUPPLEMENT_QUESTIONS_1,
  ...SUPPLEMENT_QUESTIONS_2,
  ...SUPPLEMENT_QUESTIONS_3,
];

// Strict full-content deduplication
const SEEN_PROMPTS = new Set<string>();
const SEEN_ANSWERS = new Set<string>();
const DEDUPED_QUESTIONS: CEQuestion[] = [];

for (const q of ALL_SOURCE_QUESTIONS) {
  const promptKey = q.question.toLowerCase().replace(/[^a-z0-9]/g, '');
  const answerKey = `${q.area}::${q.answer.toLowerCase().replace(/[^a-z0-9]/g, '')}`;

  if (!SEEN_PROMPTS.has(promptKey) && !SEEN_ANSWERS.has(answerKey)) {
    SEEN_PROMPTS.add(promptKey);
    SEEN_ANSWERS.add(answerKey);
    DEDUPED_QUESTIONS.push(q);
  }
}

// Master collection of authentic CELE questions, sequentially indexed
export const CE_QUESTIONS_MASTER: CEQuestion[] = DEDUPED_QUESTIONS.map((q, idx) => ({
  ...q,
  id: idx + 1
}));

// Area Lists
export const CE_AREAS: CEArea[] = ['PSAD', 'HPGE', 'MSTE'];

export const AREA_FULL_NAMES: Record<CEArea, string> = {
  PSAD: 'Principles of Structural Analysis & Design',
  HPGE: 'Hydraulics & Geotechnical Engineering',
  MSTE: 'Mathematics, Surveying & Transportation Engineering'
};

export const AREA_DESCRIPTIONS: Record<CEArea, string> = {
  PSAD: 'Mechanics, strength of materials, reinforced concrete, steel, timber, seismic codes (NSCP 2015), and testing.',
  HPGE: 'Fluid statics, hydraulics, open channels, wave mechanics, soil properties, consolidation, and foundations.',
  MSTE: 'Mathematics, plane surveying, highway geometry, traffic systems, pavement distress, OSH (RA 11058), and CPM/PERT.'
};

// Subtopics grouped by Area
export const SUBTOPICS_BY_AREA: Record<CEArea, string[]> = {
  PSAD: [
    'Structural Mechanics & Statics',
    'Strength of Materials & Mechanics of Deformable Bodies',
    'Reinforced Concrete & Prestressed Design',
    'Structural Steel & Timber Design',
    'Seismic Engineering & NSCP Provisions',
    'Construction Materials & Testing'
  ],
  HPGE: [
    'Fluid Statics & Buoyancy',
    'Fluid Dynamics & Energy/Continuity',
    'Open Channels, Weirs & Pipe Flow',
    'Hydrology, Coastal & Harbor Engineering',
    'Soil Physical Properties & Phase Relationships',
    'Soil Classification, Compaction & Permeability',
    'Consolidation, Shear Strength & Bearing Capacity',
    'Foundations, Retaining Walls & Slope Stability'
  ],
  MSTE: [
    'Engineering Mathematics & Geometry',
    'Surveying, Leveling & Errors',
    'Highway Geometric Design & Sight Distances',
    'Traffic Engineering, Markings & Signs',
    'Pavement Distress, Asphalt & Concrete Paving',
    'Construction Safety, OSH Standards (RA 11058 / DOLE DO 13)',
    'Project Management, CPM/PERT & Equipment Economics'
  ]
};

export const ALL_SUBTOPICS = Object.values(SUBTOPICS_BY_AREA).flat();
