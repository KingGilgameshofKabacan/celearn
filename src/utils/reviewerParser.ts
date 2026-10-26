import { CEQuestion, CEArea } from '../types';
import { SUBTOPICS_BY_AREA } from '../data/questions';

/**
 * Standard Template with:
 * A. Tags: [PSAD], [HPGE] / [HGPE], [MSTE]
 * B. Term: <term>
 * C. Definition: <definition> (with optional bullet points)
 */
export const STANDARD_TXT_TEMPLATE = `[PSAD]
Term: DEVELOPMENT LENGTH
Definition: The minimum embedment length of a reinforcing bar required to develop its design yield strength without pullout failure in concrete.
- Governed by NSCP 2015 Section 425 and ACI 318.
- Dependent on bar diameter, clear cover, and concrete compressive strength f'c.

Term: PLASTIC HINGE
Definition: A localized yielding zone in a structural flexural member where large inelastic rotations take place under a constant plastic moment Mp.

Term: LATERAL-TORSIONAL BUCKLING
Definition: An out-of-plane instability failure mode of unbraced beams in flexure where the compression flange buckles sideways while the cross-section twists.

Term: MODULUS OF RUPTURE
Definition: The theoretical flexural tensile stress at which an unreinforced concrete beam experiences first cracking: fr = 0.62 · λ · √f'c (in MPa for normal-weight concrete).

Term: PUNCHING SHEAR
Definition: Critical two-way shear failure occurring around column perimeters in footings and flat slabs, evaluated at distance d/2 from the column face.

[HPGE]
Term: WATER HAMMER
Definition: A destructive hydraulic acoustic shock wave created in closed pipes when fluid flow velocity changes abruptly due to rapid valve closure.
- Pressure surge is calculated by the Joukowsky equation: ΔP = ρ · c · Δv.
- Prevented using surge tanks, air chambers, and slow-closing motorized valves.

Term: HYDRAULIC JUMP
Definition: A rapid transition in open channel flow where high-velocity supercritical flow abruptly changes into low-velocity subcritical flow with large energy dissipation.

Term: VOID RATIO
Definition: The fundamental soil phase ratio of the volume of void spaces (Vv) to the volume of solid soil particles (Vs): e = Vv / Vs.

Term: QUICK CONDITION
Definition: A boiling condition in saturated cohesionless soils where upward seepage drag forces equal the submerged soil unit weight, causing effective stress to drop to zero.

Term: METACENTRIC HEIGHT
Definition: The distance between the center of gravity (G) and metacenter (M) of a floating vessel, serving as the primary index of initial static stability.

[MSTE]
Term: STOPPING SIGHT DISTANCE
Definition: The minimum roadway distance required by a motor vehicle driver traveling at design speed to perceive an unexpected stationary road hazard and bring the vehicle to a complete safe stop.
- Formulated as SSD = 0.278 · V · t + V² / [254 · (f ± G)].
- Accounts for a standard 2.5-second perception-reaction time and braking friction.

Term: FREE FLOAT
Definition: In a CPM schedule network, the amount of time an activity can be delayed without delaying the early start date of any immediately succeeding activity.

Term: GREENSHIELDS MODEL
Definition: The classic macroscopic traffic stream model postulating a linear relationship between vehicle speed and traffic density: v = vf · (1 - k/kj).

Term: ECONOMIC LIMIT OF HAUL
Definition: The total haul distance where the financial cost of hauling excavated cut equals the cost of borrowing fill from a nearby borrow pit plus excavation waste.

Term: CAPITALIZED COST
Definition: The present worth of an engineering asset or public works infrastructure project that is assumed to provide service perpetually, including initial construction and perpetual replacements.
`;

/**
 * Normalizes Area tags: handles PSAD, HPGE, MSTE, and HGPE typo
 */
export const normalizeAreaTag = (tag: string): CEArea | null => {
  const clean = tag.trim().toUpperCase().replace(/[^A-Z]/g, '');
  if (clean === 'PSAD') return 'PSAD';
  if (clean === 'HPGE' || clean === 'HGPE') return 'HPGE';
  if (clean === 'MSTE') return 'MSTE';
  return null;
};

/**
 * Keyword heuristic to classify subtopic based on area and terminology content
 */
export const detectAreaAndSubtopic = (
  text: string,
  preferredArea?: CEArea
): { area: CEArea; subtopic: string } => {
  const lower = text.toLowerCase();

  const psadMatches = (
    lower.match(/concrete|reinforc|beam|column|slab|truss|moment|shear|steel|rebar|nscp|bending|stress|strain|aisc|timber|wood|weld|bolt|elastic|deflection|stiffness|frame|prestress|tendon|ductility|seismic/g) || []
  ).length;

  const hpgeMatches = (
    lower.match(/fluid|water|hydraulic|pipe|soil|clay|sand|permeab|flow|consolidation|bernoulli|pressure|buoyan|dam|seepage|froude|weir|channel|viscosity|friction|bearing|retaining|slope|pore|terzaghi/g) || []
  ).length;

  const msteMatches = (
    lower.match(/survey|traverse|azimuth|bearing|interest|cost|cpm|pert|float|traffic|highway|curve|gradient|leveling|pavement|station|earthwork|haul|probability|math|derivative|integral|depreciation|annuity|sight/g) || []
  ).length;

  const area: CEArea = preferredArea || (
    hpgeMatches > psadMatches && hpgeMatches > msteMatches
      ? 'HPGE'
      : msteMatches > psadMatches && msteMatches > hpgeMatches
      ? 'MSTE'
      : 'PSAD'
  );

  let subtopic = SUBTOPICS_BY_AREA[area][0] || 'General';

  if (area === 'PSAD') {
    subtopic =
      lower.includes('steel') || lower.includes('timber') || lower.includes('bolt') || lower.includes('weld')
        ? 'Structural Steel & Timber Design'
        : lower.includes('seismic') || lower.includes('nscp') || lower.includes('earthquake') || lower.includes('base isolation')
        ? 'Seismic Engineering & NSCP Provisions'
        : lower.includes('slump') || lower.includes('abrasion') || lower.includes('cement') || lower.includes('testing')
        ? 'Construction Materials & Testing'
        : lower.includes('concrete') || lower.includes('prestress') || lower.includes('rebar') || lower.includes('cover')
        ? 'Reinforced Concrete & Prestressed Design'
        : lower.includes('stress') || lower.includes('strain') || lower.includes('mohr') || lower.includes('poisson') || lower.includes('rigidity')
        ? 'Strength of Materials & Mechanics of Deformable Bodies'
        : 'Structural Mechanics & Statics';
  } else if (area === 'HPGE') {
    subtopic =
      lower.includes('soil') || lower.includes('clay') || lower.includes('sand') || lower.includes('phase')
        ? 'Soil Physical Properties & Phase Relationships'
        : lower.includes('consolidation') || lower.includes('shear strength') || lower.includes('bearing')
        ? 'Consolidation, Shear Strength & Bearing Capacity'
        : lower.includes('foundation') || lower.includes('retaining') || lower.includes('slope')
        ? 'Foundations, Retaining Walls & Slope Stability'
        : lower.includes('weir') || lower.includes('channel') || lower.includes('pipe') || lower.includes('hammer')
        ? 'Open Channels, Weirs & Pipe Flow'
        : lower.includes('hydro') || lower.includes('rain') || lower.includes('runoff')
        ? 'Hydrology, Coastal & Harbor Engineering'
        : 'Fluid Statics & Buoyancy';
  } else if (area === 'MSTE') {
    subtopic =
      lower.includes('survey') || lower.includes('traverse') || lower.includes('level') || lower.includes('tape')
        ? 'Surveying, Leveling & Errors'
        : lower.includes('traffic') || lower.includes('greenshield') || lower.includes('los') || lower.includes('signal')
        ? 'Traffic Engineering, Markings & Signs'
        : lower.includes('highway') || lower.includes('sight') || lower.includes('curve') || lower.includes('earthwork') || lower.includes('haul')
        ? 'Highway Geometric Design & Sight Distances'
        : lower.includes('pavement') || lower.includes('asphalt') || lower.includes('alligator') || lower.includes('dowel')
        ? 'Pavement Distress, Asphalt & Concrete Paving'
        : lower.includes('dole') || lower.includes('osh') || lower.includes('safety') || lower.includes('bac') || lower.includes('9184')
        ? 'Construction Safety, OSH Standards (RA 11058 / DOLE DO 13)'
        : lower.includes('cpm') || lower.includes('pert') || lower.includes('float') || lower.includes('cost') || lower.includes('annuity') || lower.includes('interest')
        ? 'Project Management, CPM/PERT & Equipment Economics'
        : 'Engineering Mathematics & Geometry';
  }

  return { area, subtopic };
};

/**
 * Intelligent Distractor Generator for multiple-choice testing
 */
export const generateDistractors = (term: string, area: CEArea): string[] => {
  const pools: Record<CEArea, string[]> = {
    PSAD: [
      'POISSON RATIO',
      'SHEAR MODULUS',
      'PLASTIC HINGE',
      'DEVELOPMENT LENGTH',
      'BASE ISOLATION',
      'MODULUS OF RUPTURE',
      'WHITNEY STRESS BLOCK',
      'PUNCHING SHEAR',
      'LATERAL-TORSIONAL BUCKLING',
      'SHEAR LAG FACTOR',
      'BLOCK SHEAR RUPTURE',
      'RADIUS OF GYRATION',
      'FIBER SATURATION POINT',
      'SLUMP TEST',
      'HOOP STRESS',
      'FLEXURAL RIGIDITY'
    ],
    HPGE: [
      'HYDRAULIC JUMP',
      'CRITICAL DEPTH',
      'FLOW NET',
      'CAVITATION',
      'PLASTICITY INDEX',
      'PRECONSOLIDATION PRESSURE',
      'CENTER OF PRESSURE',
      'METACENTRIC HEIGHT',
      'ENERGY GRADE LINE',
      'WATER HAMMER',
      'SURGE TANK',
      'RATIONAL METHOD',
      'VOID RATIO',
      'QUICK CONDITION',
      'EFFECTIVE STRESS PRINCIPLE',
      'DARCY LAW'
    ],
    MSTE: [
      'CAPITALIZED COST',
      'SINKING FUND',
      'SUPERELEVATION',
      'COMPASS RULE',
      'PEAK HOUR FACTOR',
      'TOTAL FLOAT',
      'FREE FLOAT',
      'STOPPING SIGHT DISTANCE',
      'GREENSHIELDS MODEL',
      'ECONOMIC LIMIT OF HAUL',
      'STRUCTURAL NUMBER',
      'ALLIGATOR CRACKING',
      'DOWEL BARS',
      'ANNUAL AVERAGE DAILY TRAFFIC',
      'CRASH COST SLOPE',
      'SCHEDULE PERFORMANCE INDEX'
    ]
  };

  const pool = pools[area] || pools.PSAD;
  const filtered = pool.filter(p => p.toLowerCase() !== term.toLowerCase());
  return filtered.slice(0, 3);
};

/**
 * Creates a CEQuestion scanning ONLY the term and its definition/value
 */
export const createReviewerQuestion = (
  id: number,
  rawTerm: string,
  rawDefinition: string,
  bulletPoints: string[] = [],
  area: CEArea,
  subtopic: string
): CEQuestion => {
  // Extract strictly the term value
  const cleanedTerm = rawTerm
    .replace(/^[-*•–—▪▫►▸✓\d\.\)\s]+/, '')
    .replace(/[:–—\-]+$/, '')
    .trim()
    .toUpperCase();

  // Clean definition and bullet values
  let defText = rawDefinition
    .replace(/^[-*•–—▪▫►▸✓\d\.\)\s]+/, '')
    .trim();

  const cleanBullets = bulletPoints
    .map(b => b.replace(/^[-*•–—▪▫►▸✓\d\.\)\s]+/, '').trim())
    .filter(b => b.length > 0);

  if (cleanBullets.length > 0) {
    if (!defText) {
      defText = cleanBullets.join(' ');
    } else {
      const bulletJoined = cleanBullets.join(' ');
      defText = `${defText} ${bulletJoined}`;
    }
  }

  // Ensure sentence punctuation
  if (!defText.endsWith('.') && !defText.endsWith('?')) {
    defText += '.';
  }

  const distractors = generateDistractors(cleanedTerm, area);
  const choices = [cleanedTerm, ...distractors].sort(() => Math.random() - 0.5);

  let explanation = `${cleanedTerm}: ${defText}`;
  if (cleanBullets.length > 0) {
    explanation += '\n' + cleanBullets.map(b => `• ${b}`).join('\n');
  }

  return {
    id,
    area,
    subtopic,
    difficulty: 'Medium',
    question: defText,
    answer: cleanedTerm,
    choices,
    explanation,
    reference: 'Reviewer Bank'
  };
};

/**
 * Scans terms and definitions only, strictly ignoring unnecessary text.
 * Supports:
 * A. Tags: [PSAD], [HPGE], [HGPE], [MSTE]
 * B. Term: <term value>
 * C. Definition: <definition value> (plus bullet points under definition)
 *
 * Also gracefully handles shorthand lines:
 *   • TERM: Definition
 *   • TERM - Definition
 */
export const parseReviewerText = (
  fullText: string,
  initialArea: CEArea = 'PSAD'
): CEQuestion[] => {
  const lines = fullText.split(/\r?\n/);
  const extracted: CEQuestion[] = [];
  let termIdCounter = Date.now();
  let currentArea: CEArea = initialArea;

  interface OpenTerm {
    term: string;
    definition: string;
    bullets: string[];
    area: CEArea;
    subtopic: string;
  }

  let currentOpenTerm: OpenTerm | null = null;

  const finalizeOpenTerm = () => {
    if (!currentOpenTerm) return;
    const termClean = currentOpenTerm.term.trim();
    const hasDef = currentOpenTerm.definition.trim().length > 0 || currentOpenTerm.bullets.length > 0;

    if (termClean.length >= 2 && hasDef) {
      extracted.push(
        createReviewerQuestion(
          termIdCounter++,
          termClean,
          currentOpenTerm.definition,
          currentOpenTerm.bullets,
          currentOpenTerm.area,
          currentOpenTerm.subtopic
        )
      );
    }
    currentOpenTerm = null;
  };

  const bulletPrefixRegex = /^\s*([-*•–—▪▫►▸✓\+]|\d+[\.\)])\s+/;
  // Regex for Area Tags: [PSAD], [HPGE], [HGPE], [MSTE]
  const tagRegex = /^\s*\[(PSAD|HPGE|HGPE|MSTE)\]\s*$/i;

  // Regex for "Term: <value>" or "TERM: <value>"
  const termFieldRegex = /^\s*(?:Term|TERM)\s*[:–—\-]\s*(.+)$/i;

  // Regex for "Definition: <value>" or "DEFINITION: <value>"
  const defFieldRegex = /^\s*(?:Definition|DEFINITION|Def|DEF|Value|VALUE)\s*[:–—\-]\s*(.+)$/i;

  // Unnecessary text blacklist keywords (skip lines that are headers, footers, page markers, instructions)
  const isUnnecessaryText = (line: string): boolean => {
    const l = line.toLowerCase();
    return (
      l.startsWith('page ') ||
      l.startsWith('chapter ') ||
      l.startsWith('section ') ||
      l.startsWith('table of ') ||
      l.startsWith('table ') ||
      l.startsWith('figure ') ||
      l.startsWith('guideline') ||
      l.startsWith('instruction') ||
      l.startsWith('copyright') ||
      l.startsWith('author') ||
      l.startsWith('date:') ||
      l.startsWith('reviewer:') ||
      l.startsWith('prc civil') ||
      l.startsWith('civil engineering licensure') ||
      l.startsWith('format a:') ||
      l.startsWith('format b:') ||
      l.startsWith('---') ||
      l.startsWith('===')
    );
  };

  // Check if document uses standard "Term:" fields
  const hasStructuredTermFields = lines.some(l => termFieldRegex.test(l));

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    if (!trimmed) {
      continue;
    }

    // 1. Check for Tag: [MSTE], [PSAD], [HPGE], [HGPE]
    const tagMatch = trimmed.match(tagRegex);
    if (tagMatch) {
      finalizeOpenTerm();
      const norm = normalizeAreaTag(tagMatch[1]);
      if (norm) currentArea = norm;
      continue;
    }

    // 2. Check for "Term: <value>"
    const termMatch = trimmed.match(termFieldRegex);
    if (termMatch) {
      finalizeOpenTerm();
      const termVal = termMatch[1].trim();
      const { area, subtopic } = detectAreaAndSubtopic(termVal, currentArea);
      currentOpenTerm = {
        term: termVal,
        definition: '',
        bullets: [],
        area,
        subtopic
      };
      continue;
    }

    // 3. Check for "Definition: <value>"
    const defMatch = trimmed.match(defFieldRegex);
    if (defMatch) {
      if (currentOpenTerm) {
        currentOpenTerm.definition = defMatch[1].trim();
        const { subtopic } = detectAreaAndSubtopic(
          currentOpenTerm.term + ' ' + currentOpenTerm.definition,
          currentOpenTerm.area
        );
        currentOpenTerm.subtopic = subtopic;
      }
      continue;
    }

    // 4. Check for bullet points under an active Term & Definition
    const isBullet = bulletPrefixRegex.test(rawLine);
    if (isBullet && currentOpenTerm && currentOpenTerm.definition) {
      const cleanBullet = trimmed.replace(bulletPrefixRegex, '').trim();
      if (cleanBullet.length > 0) {
        currentOpenTerm.bullets.push(cleanBullet);
        continue;
      }
    }

    // If document is in structured "Term:" mode, ignore any other text completely!
    if (hasStructuredTermFields) {
      continue;
    }

    // Skip unnecessary text lines completely
    if (isUnnecessaryText(trimmed)) {
      continue;
    }

    // 5. Fallback for Shorthand Notes: "TERM: Definition" or "• TERM: Definition"
    const cleanNoBullet = trimmed.replace(bulletPrefixRegex, '').trim();
    const colonIdx = cleanNoBullet.indexOf(':');
    if (colonIdx > 1 && colonIdx < 45) {
      const candidateTerm = cleanNoBullet.slice(0, colonIdx).trim();
      const candidateDef = cleanNoBullet.slice(colonIdx + 1).trim();

      const isBadTerm = /^(note|comment|warning|notice|example|reference|figure|table|page|chapter|hint)\b/i.test(candidateTerm);

      if (
        !isBadTerm &&
        candidateTerm.length >= 2 &&
        candidateTerm.split(/\s+/).length <= 5 &&
        !candidateTerm.includes('.') &&
        candidateDef.length >= 10
      ) {
        finalizeOpenTerm();
        const { area, subtopic } = detectAreaAndSubtopic(
          candidateTerm + ' ' + candidateDef,
          currentArea
        );
        currentOpenTerm = {
          term: candidateTerm,
          definition: candidateDef,
          bullets: [],
          area,
          subtopic
        };
        continue;
      }
    }
  }

  // Finalize last open term
  finalizeOpenTerm();

  return extracted;
};

/**
 * Downloads standard template file
 */
export const downloadTemplate = (): void => {
  const blob = new Blob([STANDARD_TXT_TEMPLATE], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'ce_reviewer_template.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
