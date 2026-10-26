import { CEQuestion } from '../types';

export const PSAD_TOS_QUESTIONS: CEQuestion[] = [
  {
    id: 701,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    question: 'In NSCP 2015, the balanced reinforcement ratio ρb for a singly reinforced rectangular beam with concrete strength f\'c and rebar yield strength fy is given by:',
    answer: 'ρb = (0.85 · β1 · f\'c / fy) · [600 / (600 + fy)]',
    choices: [
      'ρb = (0.85 · f\'c / fy) · [600 / (600 + fy)]',
      'ρb = (0.85 · β1 · f\'c / fy) · [600 / (600 + fy)]',
      'ρb = (0.75 · β1 · f\'c / fy) · (600 / fy)',
      'ρb = 0.85 · β1 · (f\'c / fy)'
    ],
    explanation: 'Derived from strain compatibility where concrete reaches extreme fiber strain εcu = 0.003 simultaneously as steel yields at εy = fy/Es.'
  },
  {
    id: 702,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    question: 'According to NSCP 2015 Section 409.6.1.2, the minimum flexural tensile reinforcement ratio ρmin for beams is the larger of:',
    answer: '0.25 · √f\'c / fy AND 1.4 / fy',
    choices: [
      '0.25 · √f\'c / fy AND 1.4 / fy',
      '0.20 · √f\'c / fy AND 1.2 / fy',
      '0.30 · √f\'c / fy AND 1.5 / fy',
      '1.4 / fy AND 0.50 · ρb'
    ],
    explanation: 'Ensures that cracked section moment capacity exceeds the uncracked section cracking moment, preventing sudden brittle collapse.'
  },
  {
    id: 703,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Hard',
    question: 'Under NSCP 2015, a flexural member is classified as tension-controlled (ductile) when the net tensile strain εt in extreme tension rebar equals or exceeds:',
    answer: '0.005 (φ = 0.90)',
    choices: ['0.002 (φ = 0.65)', '0.004 (φ = 0.82)', '0.005 (φ = 0.90)', '0.008 (φ = 1.00)'],
    explanation: 'Net tensile strain εt ≥ 0.005 guarantees extensive rebar yielding with visible cracking and deflection before concrete crushing.'
  },
  {
    id: 704,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Hard',
    question: 'In a doubly reinforced rectangular beam, compression reinforcement A\'s yields at nominal strength if the neutral axis depth c satisfies:',
    answer: 'c ≥ [600 / (600 - fy)] · d\'',
    choices: [
      'c ≤ [600 / (600 - fy)] · d\'',
      'c ≥ [600 / (600 - fy)] · d\'',
      'c = 0.5 · d',
      'c ≥ d\' / 0.85'
    ],
    explanation: 'Obtained by setting strain in compression steel ε\'s = 0.003·(c - d\')/c ≥ fy/Es = fy/200000.'
  },
  {
    id: 705,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    question: 'For a symmetrical T-beam monolithic with a continuous slab, NSCP limits effective flange overhang width on each side to the smallest of:',
    answer: '8 TIMES SLAB THICKNESS, 1/2 CLEAR SPAN TO ADJACENT WEB, OR 1/8 BEAM SPAN',
    choices: [
      '8 TIMES SLAB THICKNESS, 1/2 CLEAR SPAN TO ADJACENT WEB, OR 1/8 BEAM SPAN',
      '16 times slab thickness, web width, or 1/4 span',
      '12 times slab thickness, clear distance, or 1/6 span',
      '6 times slab thickness, 1/4 clear span, or beam depth'
    ],
    explanation: 'NSCP Section 406.3.2.1 limits flange width to account for non-uniform flexural compressive stress distribution (shear lag).'
  },
  {
    id: 706,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    question: 'The critical section for two-way (punching) shear in reinforced concrete column footings is located at a distance of:',
    answer: 'd / 2 FROM THE FACE OF THE COLUMN',
    choices: [
      'd from the face of the column',
      'd / 2 FROM THE FACE OF THE COLUMN',
      'At the column face',
      '2d from the column perimeter'
    ],
    explanation: 'Punching shear failure cracks form a truncated pyramid inclined at 45 degrees, intercepting mid-depth at distance d/2.'
  },
  {
    id: 707,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    question: 'The critical section for one-way (beam) shear in a reinforced concrete isolated column footing is located at:',
    answer: 'DISTANCE d FROM THE FACE OF THE COLUMN',
    choices: [
      'DISTANCE d FROM THE FACE OF THE COLUMN',
      'Distance d / 2 from column face',
      'At the column face',
      'At the footing outer boundary'
    ],
    explanation: 'One-way wide beam shear is checked across the full footing width at a distance d from the column face.'
  },
  {
    id: 708,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Hard',
    question: 'The minimum volumetric spiral reinforcement ratio ρs required by NSCP 2015 Section 425.7.3 for spiral columns is:',
    answer: 'ρs = 0.45 · [(Ag / Ach) - 1] · (f\'c / fyt)',
    choices: [
      'ρs = 0.45 · [(Ag / Ach) - 1] · (f\'c / fyt)',
      'ρs = 0.85 · (Ag / Ach) · (f\'c / fyt)',
      'ρs = 0.12 · (f\'c / fyt)',
      'ρs = 0.50 · [(Ag / Ach) - 1]'
    ],
    explanation: 'Compensates for the loss of column load capacity when outer concrete shell spalls off during severe axial overloads.'
  },
  {
    id: 709,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    question: 'The clear spacing between spiral turns in a spirally reinforced concrete column must be between:',
    answer: '25 mm AND 75 mm',
    choices: ['10 mm and 50 mm', '25 mm AND 75 mm', '50 mm and 100 mm', '30 mm and 90 mm'],
    explanation: 'Clear spacing must be at least 25 mm (and 4/3 aggregate size) for aggregate passage, and not exceed 75 mm to ensure core confinement.'
  },
  {
    id: 710,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Easy',
    question: 'Minimum shrinkage and temperature reinforcement ratio for Grade 40 (275 MPa) deformed bars in structural concrete slabs is:',
    answer: '0.0020 OF GROSS AREA',
    choices: ['0.0014', '0.0018', '0.0020 OF GROSS AREA', '0.0025'],
    explanation: 'NSCP Section 424.4.3.2 specifies ρ_temp = 0.0020 for Grade 40 rebars and 0.0018 for Grade 60 (415 MPa) bars.'
  },
  {
    id: 711,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    question: 'The maximum permissible center-to-center spacing of temperature and shrinkage reinforcement in solid slabs is:',
    answer: '5 TIMES SLAB THICKNESS OR 450 mm',
    choices: ['3 times slab thickness or 300 mm', '5 TIMES SLAB THICKNESS OR 450 mm', '2 times slab thickness or 500 mm', '600 mm'],
    explanation: 'Limits crack widths caused by drying shrinkage and diurnal ambient temperature fluctuations.'
  },
  {
    id: 712,
    area: 'PSAD',
    subtopic: 'Structural Steel & Timber Design',
    difficulty: 'Medium',
    question: 'When reaming or drilling bolt holes in structural steel tension members, the nominal design hole diameter is taken as:',
    answer: 'BOLT DIAMETER + 2 mm (1/16 INCH) FOR STANDARD HOLE + 2 mm DAMAGE',
    choices: [
      'Bolt diameter exactly',
      'BOLT DIAMETER + 2 mm (1/16 INCH) FOR STANDARD HOLE + 2 mm DAMAGE',
      'Bolt diameter + 6 mm',
      '1.5 times bolt diameter'
    ],
    explanation: 'AISC specifies effective hole diameter = bolt diameter + 1/16" (nominal clearance) + 1/16" (damage allowance) = d + 1/8" (≈ d + 3.2 mm).'
  },
  {
    id: 713,
    area: 'PSAD',
    subtopic: 'Structural Steel & Timber Design',
    difficulty: 'Hard',
    question: 'For staggered bolt lines in structural steel tension members, Cochrane’s rule states that net width is adjusted along each diagonal pitch by:',
    answer: '+ s² / (4 · g)',
    choices: ['- s² / (4 · g)', '+ s² / (4 · g)', '+ s / (2 · g)', '+ s² / (2 · g)'],
    explanation: 's is longitudinal bolt pitch spacing, and g is transverse gage spacing between adjacent hole lines.'
  },
  {
    id: 714,
    area: 'PSAD',
    subtopic: 'Structural Steel & Timber Design',
    difficulty: 'Medium',
    question: 'The maximum allowable slenderness ratio (KL/r) for structural steel compression members according to AISC and NSCP is:',
    answer: '200',
    choices: ['120', '150', '200', '300'],
    explanation: 'AISC Section E2 recommends KL/r should not exceed 200 for compression members to prevent damage during handling and erection.'
  },
  {
    id: 715,
    area: 'PSAD',
    subtopic: 'Structural Steel & Timber Design',
    difficulty: 'Medium',
    question: 'The maximum allowable slenderness ratio (L/r) for structural steel tension members (excluding rods) is:',
    answer: '300',
    choices: ['200', '240', '300', '400'],
    explanation: 'Limits lateral flutter, vibration, and sag under self-weight during transport and wind excitation.'
  },
  {
    id: 716,
    area: 'PSAD',
    subtopic: 'Structural Steel & Timber Design',
    difficulty: 'Hard',
    question: 'Euler\'s critical elastic buckling stress Fcr for a long slender steel column is given by:',
    answer: 'Fcr = π² · E / (KL / r)²',
    choices: [
      'Fcr = π² · E · A / (KL / r)',
      'Fcr = π² · E / (KL / r)²',
      'Fcr = Fy · [1 - (KL/r)² / 2]',
      'Fcr = 0.877 · Fy / (KL/r)'
    ],
    explanation: 'When column slenderness exceeds critical transition slenderness Cc, elastic Euler instability governs failure.'
  },
  {
    id: 717,
    area: 'PSAD',
    subtopic: 'Structural Steel & Timber Design',
    difficulty: 'Medium',
    question: 'The effective throat thickness of a standard equal-leg fillet weld with leg size w is calculated as:',
    answer: '0.707 · w (w · sin 45°)',
    choices: ['0.500 · w', '0.707 · w (w · sin 45°)', 'w / 2', '0.866 · w'],
    explanation: 'The weakest failure plane in a fillet weld occurs across the 45-degree theoretical throat dimension.'
  },
  {
    id: 718,
    area: 'PSAD',
    subtopic: 'Structural Steel & Timber Design',
    difficulty: 'Medium',
    question: 'The nominal shear strength of fillet weld metal with electrode classification number FEXX (e.g. E70xx) is:',
    answer: '0.60 · FEXX',
    choices: ['0.40 · FEXX', '0.60 · FEXX', '0.75 · FEXX', 'FEXX'],
    explanation: 'According to AISC J2, nominal shear strength on the effective throat is 0.60 times weld tensile strength FEXX.'
  },
  {
    id: 719,
    area: 'PSAD',
    subtopic: 'Structural Steel & Timber Design',
    difficulty: 'Hard',
    question: 'In structural steel flexural members, Lateral-Torsional Buckling (LTB) does not occur if the unbraced length Lb satisfies:',
    answer: 'Lb ≤ Lp',
    choices: ['Lb ≥ Lr', 'Lb ≤ Lp', 'Lp < Lb < Lr', 'Lb ≤ 1.5 · Lp'],
    explanation: 'Lp is the limiting unbraced length for full plastic moment Mp development without lateral instability.'
  },
  {
    id: 720,
    area: 'PSAD',
    subtopic: 'Structural Steel & Timber Design',
    difficulty: 'Medium',
    question: 'In timber structural design, the horizontal longitudinal shear stress τ in a solid rectangular wooden beam of width b and depth d is:',
    answer: 'τ = 3V / (2 · b · d)',
    choices: ['τ = V / (b · d)', 'τ = 3V / (2 · b · d)', 'τ = 4V / (3 · b · d)', 'τ = 2V / (b · d)'],
    explanation: 'For rectangular sections, maximum horizontal shear stress at the neutral axis equals 1.5 times the average shear stress.'
  },
  {
    id: 721,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Medium',
    question: 'In a solid circular shaft of diameter D subjected to torque T, the polar moment of inertia J is:',
    answer: 'J = π · D⁴ / 32',
    choices: ['J = π · D⁴ / 64', 'J = π · D⁴ / 32', 'J = π · D³ / 16', 'J = π · D⁴ / 12'],
    explanation: 'J = Ix + Iy = (πD⁴/64) + (πD⁴/64) = πD⁴/32.'
  },
  {
    id: 722,
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Medium',
    question: 'The total angle of twist θ in radians of a circular elastic shaft of length L, diameter D, and shear modulus G under torque T is:',
    answer: 'θ = T · L / (J · G)',
    choices: ['θ = T · J / (L · G)', 'θ = T · L / (J · G)', 'θ = T · G / (J · L)', 'θ = 16T / (πD³G)'],
    explanation: 'Direct torsional equivalent of Hooke’s axial elongation formula (Δ = PL/AE).'
  },
  {
    id: 723,
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Medium',
    question: 'The circumferential (hoop) tensile stress in a thin-walled cylindrical pressure vessel of internal diameter D, wall thickness t, and pressure p is:',
    answer: 'σ_h = p · D / (2 · t)',
    choices: ['σ_h = p · D / (4 · t)', 'σ_h = p · D / (2 · t)', 'σ_h = 2p · D / t', 'σ_h = p · t / D'],
    explanation: 'Hoop stress is exactly twice the longitudinal axial stress (σ_L = pD/4t), governing thin cylinder wall design.'
  },
  {
    id: 724,
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Medium',
    question: 'The longitudinal axial tensile stress in a thin-walled cylindrical pressure vessel with closed ends is:',
    answer: 'σ_L = p · D / (4 · t)',
    choices: ['σ_L = p · D / (2 · t)', 'σ_L = p · D / (4 · t)', 'σ_L = p · D / t', 'σ_L = p · t / (2D)'],
    explanation: 'Equilibrium of longitudinal pressure force (p·πD²/4) against circular cross-section wall area (πD·t).'
  },
  {
    id: 725,
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Hard',
    question: 'Maximum center deflection of a simply supported beam with span L carrying a uniformly distributed load w throughout its length is:',
    answer: 'Δ_max = 5 · w · L⁴ / (384 · E · I)',
    choices: [
      'Δ_max = w · L⁴ / (8 · E · I)',
      'Δ_max = 5 · w · L⁴ / (384 · E · I)',
      'Δ_max = w · L³ / (48 · E · I)',
      'Δ_max = w · L⁴ / (192 · E · I)'
    ],
    explanation: 'Standard beam integration result: slope θ = wL³/(24EI) at ends, max deflection at center = 5wL⁴/(384EI).'
  },
  {
    id: 726,
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Medium',
    question: 'Maximum center deflection of a simply supported beam of span L carrying a concentrated point load P at midspan is:',
    answer: 'Δ_max = P · L³ / (48 · E · I)',
    choices: [
      'Δ_max = P · L³ / (3 · E · I)',
      'Δ_max = P · L³ / (48 · E · I)',
      'Δ_max = P · L² / (16 · E · I)',
      'Δ_max = P · L³ / (24 · E · I)'
    ],
    explanation: 'Derived from moment-area or virtual work: moment diagram is a triangle with peak M = PL/4.'
  },
  {
    id: 727,
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Medium',
    question: 'Maximum tip deflection of a cantilever beam of length L carrying a concentrated load P at its free tip is:',
    answer: 'Δ_max = P · L³ / (3 · E · I)',
    choices: [
      'Δ_max = P · L³ / (48 · E · I)',
      'Δ_max = P · L³ / (3 · E · I)',
      'Δ_max = P · L² / (2 · E · I)',
      'Δ_max = P · L³ / (8 · E · I)'
    ],
    explanation: 'Moment at fixed base is PL, producing tip rotation θ = PL²/(2EI) and tip deflection Δ = PL³/(3EI).'
  },
  {
    id: 728,
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Medium',
    question: 'Maximum tip deflection of a cantilever beam of length L carrying a uniformly distributed load w across its entire span is:',
    answer: 'Δ_max = w · L⁴ / (8 · E · I)',
    choices: [
      'Δ_max = w · L⁴ / (8 · E · I)',
      'Δ_max = 5w · L⁴ / (384 · E · I)',
      'Δ_max = w · L³ / (6 · E · I)',
      'Δ_max = w · L⁴ / (24 · E · I)'
    ],
    explanation: 'Bending moment varies quadratically, resulting in maximum tip slope wL³/(6EI) and deflection wL⁴/(8EI).'
  },
  {
    id: 729,
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Hard',
    question: 'Thermal stress developed in a member of length L and modulus E completely restrained against longitudinal expansion under temperature increase ΔT is:',
    answer: 'σ_th = E · α · ΔT',
    choices: ['σ_th = α · ΔT / E', 'σ_th = E · α · ΔT', 'σ_th = E · ΔT / L', 'σ_th = α · L · ΔT'],
    explanation: 'Thermal expansion δ = α·L·ΔT is prevented by support reactions, producing compressive strain ε = α·ΔT and stress σ = E·α·ΔT.'
  },
  {
    id: 730,
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Hard',
    question: 'In plane stress transformation, the radius R of Mohr’s Circle of Stress is mathematically calculated as:',
    answer: 'R = √[ ((σx - σy) / 2)² + τxy² ]',
    choices: [
      'R = (σx + σy) / 2',
      'R = √[ ((σx - σy) / 2)² + τxy² ]',
      'R = √(σx² + τxy²)',
      'R = (σx - σy) / 2'
    ],
    explanation: 'Radius R equals the maximum in-plane shear stress τmax, and the center is at ((σx + σy)/2, 0).'
  },
  {
    id: 731,
    area: 'PSAD',
    subtopic: 'Seismic Engineering & NSCP Provisions',
    difficulty: 'Hard',
    question: 'Under NSCP 2015 Section 208, the formula for Design Base Shear V in the Equivalent Lateral Force procedure is:',
    answer: 'V = [Cv · I / (R · T)] · W',
    choices: [
      'V = [Cv · I / (R · T)] · W',
      'V = [2.5 · Ca · R / I] · W',
      'V = Ca · I · W',
      'V = R · T · W / I'
    ],
    explanation: 'Cv is seismic velocity coefficient, I is importance factor, R is response modification factor, T is period, and W is seismic weight.'
  },
  {
    id: 732,
    area: 'PSAD',
    subtopic: 'Seismic Engineering & NSCP Provisions',
    difficulty: 'Hard',
    question: 'According to NSCP 2015 Section 208.5.2.1, the maximum base shear need not exceed which ceiling value?',
    answer: 'V_max = [2.5 · Ca · I / R] · W',
    choices: [
      'V_max = [2.5 · Ca · I / R] · W',
      'V_max = [Cv · I / R] · W',
      'V_max = 0.50 · W',
      'V_max = 0.11 · Ca · I · W'
    ],
    explanation: 'Prevents unrealistically high base shear on stiff short-period structures at the acceleration plateau.'
  },
  {
    id: 733,
    area: 'PSAD',
    subtopic: 'Seismic Engineering & NSCP Provisions',
    difficulty: 'Hard',
    question: 'A horizontal structural irregularity where maximum story drift at one end exceeds 1.2 times the average of story drifts is classified as:',
    answer: 'TORSIONAL IRREGULARITY',
    choices: [
      'TORSIONAL IRREGULARITY',
      'SOFT STOREY IRREGULARITY',
      'REENTRANT CORNER IRREGULARITY',
      'WEAK STOREY IRREGULARITY'
    ],
    explanation: 'NSCP Table 208-9 defines Torsional Irregularity Type 1 when Δmax / Δavg > 1.20.'
  },
  {
    id: 734,
    area: 'PSAD',
    subtopic: 'Seismic Engineering & NSCP Provisions',
    difficulty: 'Hard',
    question: 'A vertical irregularity where a story has lateral shear strength less than 80% of that of the story above is classified as:',
    answer: 'WEAK STOREY (DISCONTINUITY IN CAPACITY)',
    choices: [
      'SOFT STOREY',
      'WEAK STOREY (DISCONTINUITY IN CAPACITY)',
      'MASS IRREGULARITY',
      'GEOMETRIC IRREGULARITY'
    ],
    explanation: 'Stiffness reduction is a Soft Story (< 70%); lateral strength reduction is a Weak Story (< 80%).'
  },
  {
    id: 735,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Medium',
    question: 'In the Moment Distribution Method (Hardy Cross), the carry-over factor for a prismatic beam with far end fixed is:',
    answer: '+ 0.50 (+ 1/2)',
    choices: ['0', '+ 0.50 (+ 1/2)', '+ 1.0', '- 0.50'],
    explanation: 'Rotating one fixed-ended beam end by θ induces a moment at the opposite fixed support equal to half the applied moment.'
  },
  {
    id: 736,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Hard',
    question: 'The Three-Moment Equation for continuous beams expresses the relation between support moments across two adjacent spans L1 and L2 as:',
    answer: 'M1·L1 + 2·M2·(L1 + L2) + M3·L2 = - 6·(A1·a1/L1 + A2·b2/L2)',
    choices: [
      'M1·L1 + 2·M2·(L1 + L2) + M3·L2 = - 6·(A1·a1/L1 + A2·b2/L2)',
      'M1 + M2 + M3 = 0',
      'M1·L2 + M2·(L1 + L2) + M3·L1 = - 3·w·L²',
      'M1·L1 - 2·M2·L2 + M3·L1 = 0'
    ],
    explanation: 'Clapeyron’s classic Three-Moment Equation derived from compatibility of slopes at the continuous interior support.'
  },
  {
    id: 737,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    question: 'The minimum thickness h of a one-way solid reinforced concrete slab simply supported without deflections computed according to NSCP Table 407.3.1.1 is:',
    answer: 'L / 20',
    choices: ['L / 16', 'L / 20', 'L / 24', 'L / 28'],
    explanation: 'For normal-weight concrete with Grade 60 rebar: Simply supported (L/20), One end continuous (L/24), Both ends continuous (L/28), Cantilever (L/10).'
  },
  {
    id: 738,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    question: 'The minimum thickness h for a one-way solid reinforced concrete cantilever slab without calculating deflections is:',
    answer: 'L / 10',
    choices: ['L / 10', 'L / 16', 'L / 20', 'L / 8'],
    explanation: 'Cantilevers require significantly greater thickness (L/10) to control large tip deflections and creep sag.'
  },
  {
    id: 739,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    question: 'The minimum thickness h of a simply supported reinforced concrete non-prestressed beam without checking deflections is:',
    answer: 'L / 16',
    choices: ['L / 12', 'L / 16', 'L / 18.5', 'L / 21'],
    explanation: 'Beams require greater relative depth than slabs: Simply supported (L/16), One end continuous (L/18.5), Both ends continuous (L/21), Cantilever (L/8).'
  },
  {
    id: 740,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Hard',
    question: 'In a reinforced concrete column subject to axial force Pn and bending moment Mn, the "balanced failure" condition occurs when:',
    answer: 'CONCRETE CRUSHES AT εcu = 0.003 AT THE EXACT MOMENT TENSION STEEL YIELDS AT εy',
    choices: [
      'Axial load Pn equals zero',
      'CONCRETE CRUSHES AT εcu = 0.003 AT THE EXACT MOMENT TENSION STEEL YIELDS AT εy',
      'Tension steel strain reaches 0.005',
      'Compression steel carries 50% of the load'
    ],
    explanation: 'Balanced axial load Pb and balanced moment Mb mark the transition between compression-controlled and tension-controlled column failure.'
  },
  {
    id: 741,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    question: 'The nominal maximum axial load capacity Pn,max for a tied reinforced concrete column according to NSCP 2015 is:',
    answer: 'Pn,max = 0.80 · [ 0.85 · f\'c · (Ag - Ast) + fy · Ast ]',
    choices: [
      'Pn,max = 0.85 · [ 0.85 · f\'c · (Ag - Ast) + fy · Ast ]',
      'Pn,max = 0.80 · [ 0.85 · f\'c · (Ag - Ast) + fy · Ast ]',
      'Pn,max = 0.85 · f\'c · Ag + fy · Ast',
      'Pn,max = 0.65 · f\'c · Ag'
    ],
    explanation: 'The 0.80 reduction factor accounts for accidental loading eccentricity in tied columns (for spiral columns, the factor is 0.85).'
  },
  {
    id: 742,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Hard',
    question: 'The basic development length ld for deformed rebar in tension is proportional to rebar diameter db and yield strength fy, and inversely proportional to:',
    answer: 'SQUARE ROOT OF CONCRETE COMPRESSIVE STRENGTH (√f\'c)',
    choices: [
      'Concrete compressive strength (f\'c)',
      'SQUARE ROOT OF CONCRETE COMPRESSIVE STRENGTH (√f\'c)',
      'Modulus of elasticity of steel (Es)',
      'Concrete shear modulus (Gc)'
    ],
    explanation: 'Bond and development capacity rely on concrete tensile splitting resistance, which scales as √f\'c.'
  },
  {
    id: 743,
    area: 'PSAD',
    subtopic: 'Structural Steel & Timber Design',
    difficulty: 'Hard',
    question: 'In structural steel column base plate design, the minimum base plate thickness tp is governed by plate flexure over cantilever distance m or n using:',
    answer: 'tp = l · √[ (2 · Pu) / (0.90 · Fy · B · N) ]',
    choices: [
      'tp = l · √[ (2 · Pu) / (0.90 · Fy · B · N) ]',
      'tp = Pu / (Fy · B)',
      'tp = l · (Pu / Fy)',
      'tp = 0.50 · l · √(Pu / Fy)'
    ],
    explanation: 'Based on uniform bearing pressure q = Pu/(B·N) acting on base plate cantilever projections m and n.'
  },
  {
    id: 744,
    area: 'PSAD',
    subtopic: 'Structural Steel & Timber Design',
    difficulty: 'Medium',
    question: 'High-strength structural steel bolts classified under ASTM A325 have a nominal tensile strength of approximately:',
    answer: '825 MPa (120 ksi)',
    choices: ['400 MPa (58 ksi)', '550 MPa (80 ksi)', '825 MPa (120 ksi)', '1035 MPa (150 ksi)'],
    explanation: 'ASTM A325 (Grade A449) bolts have Fu = 120 ksi (825 MPa) for diameters up to 1 inch; A490 bolts have Fu = 150 ksi (1035 MPa).'
  },
  {
    id: 745,
    area: 'PSAD',
    subtopic: 'Structural Steel & Timber Design',
    difficulty: 'Medium',
    question: 'A structural steel connection where high-strength bolts are tightened to clamping tension so service loads are transferred by friction between plies is a:',
    answer: 'SLIP-CRITICAL CONNECTION',
    choices: [
      'BEARING-TYPE CONNECTION',
      'SLIP-CRITICAL CONNECTION',
      'PINNED CLEAT CONNECTION',
      'SNUG-TIGHTENED JOINT'
    ],
    explanation: 'Slip-critical joints prevent any slip under fatigue, cyclic load reversals, or oversized hole conditions.'
  },
  {
    id: 746,
    area: 'PSAD',
    subtopic: 'Construction Materials & Testing',
    difficulty: 'Easy',
    question: 'Standard ASTM test apparatus used to determine the initial and final setting times of hydraulic cement paste is the:',
    answer: 'VICAT NEEDLE APPARATUS (ASTM C191)',
    choices: [
      'SLUMP CONE',
      'VICAT NEEDLE APPARATUS (ASTM C191)',
      'PYCNOMETER BOTTLE',
      'LE CHATELIER FLASK'
    ],
    explanation: 'Initial set is reached when 1 mm needle penetrates to 25 mm depth; final set when needle ring leaves no indentation.'
  },
  {
    id: 747,
    area: 'PSAD',
    subtopic: 'Construction Materials & Testing',
    difficulty: 'Medium',
    question: 'Soundness of Portland cement (freedom from delayed expansive cracking caused by excess free lime or magnesia) is evaluated by the:',
    answer: 'AUTOCLAVE EXPANSION TEST (ASTM C151)',
    choices: [
      'BLAINE AIR PERMEABILITY TEST',
      'AUTOCLAVE EXPANSION TEST (ASTM C151)',
      'LOS ANGELES TEST',
      'TENSILE BRIQUETTE TEST'
    ],
    explanation: 'Accelerates hydration of hard-burned free lime (CaO) and periclase (MgO) under high steam pressure.'
  },
  {
    id: 748,
    area: 'PSAD',
    subtopic: 'Seismic Engineering & NSCP Provisions',
    difficulty: 'Medium',
    question: 'Under NSCP 2015, the basic wind speed V in Wind Zone 1 (covering Eastern seaboard of Luzon, Samar, and Leyte) for Occupancy Category IV is:',
    answer: '250 km/h (70 m/s)',
    choices: ['200 km/h', '220 km/h', '250 km/h (70 m/s)', '300 km/h'],
    explanation: 'NSCP Section 207 maps the Philippines into 3 wind hazard zones, with Zone 1 subjected to highest super typhoon velocities.'
  },
  {
    id: 749,
    area: 'PSAD',
    subtopic: 'Seismic Engineering & NSCP Provisions',
    difficulty: 'Hard',
    question: 'In building seismic design, the redundancy factor ρ specified in NSCP Section 208.4.8.3 ranges between:',
    answer: '1.0 AND 1.25 (OR 1.40)',
    choices: ['0.85 and 1.0', '1.0 AND 1.25 (OR 1.40)', '1.25 and 1.75', '0.50 and 1.0'],
    explanation: 'Penalizes lateral force resisting frames that have few bays and lack multiple alternate load redistribution paths.'
  },
  {
    id: 750,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Hard',
    question: 'Castigliano’s first theorem states that the partial derivative of total strain energy U with respect to a virtual displacement Δi yields:',
    answer: 'THE GENERALIZED FORCE Pi ACTING IN THE DIRECTION OF THAT DISPLACEMENT',
    choices: [
      'THE GENERALIZED FORCE Pi ACTING IN THE DIRECTION OF THAT DISPLACEMENT',
      'The deflection at the support',
      'The internal bending moment',
      'The reciprocal stiffness'
    ],
    explanation: 'Castigliano I: ∂U/∂Δi = Pi (equilibrium). Castigliano II: ∂U/∂Pi = Δi (compatibility/deflection).'
  }
];

