import { CEQuestion } from '../types';

export const HPGE_TOS_QUESTIONS: CEQuestion[] = [
  {
    id: 801,
    area: 'HPGE',
    subtopic: 'Fluid Statics & Buoyancy',
    difficulty: 'Medium',
    question: 'The total hydrostatic compressive force F acting on one side of a vertical submerged plane area A with centroid depth h_c is:',
    answer: 'F = γ · h_c · A',
    choices: [
      'F = γ · h_c · A',
      'F = 0.5 · γ · h_c · A',
      'F = γ · h_p · A',
      'F = ρ · g · h_c²'
    ],
    explanation: 'Hydrostatic force equals the hydrostatic pressure at the centroid (γ · h_c) multiplied by the total submerged area A.'
  },
  {
    id: 802,
    area: 'HPGE',
    subtopic: 'Fluid Statics & Buoyancy',
    difficulty: 'Hard',
    question: 'The distance of the Center of Pressure (h_p) below the Centroid (h_c) for a vertical submerged plane area with centroidal moment of inertia I_g is:',
    answer: 'h_p - h_c = I_g / (A · h_c)',
    choices: [
      'h_p - h_c = I_g / (A · h_c)',
      'h_p - h_c = I_g · h_c / A',
      'h_p - h_c = A / (I_g · h_c)',
      'h_p - h_c = h_c / 3'
    ],
    explanation: 'Derived from summing moments of hydrostatic pressure distribution: center of pressure always lies below centroid by I_g/(A·h_c).'
  },
  {
    id: 803,
    area: 'HPGE',
    subtopic: 'Fluid Statics & Buoyancy',
    difficulty: 'Medium',
    question: 'When an open liquid container is accelerated horizontally at constant acceleration a, the liquid surface tilts at angle θ given by:',
    answer: 'tan θ = a / g',
    choices: ['tan θ = g / a', 'tan θ = a / g', 'tan θ = a · g', 'sin θ = a / g'],
    explanation: 'Equilibrium of fluid surface particles subjected to horizontal inertia ma and downward gravitational weight mg.'
  },
  {
    id: 804,
    area: 'HPGE',
    subtopic: 'Fluid Statics & Buoyancy',
    difficulty: 'Hard',
    question: 'When an open cylindrical liquid tank is rotated about its vertical axis at constant angular velocity ω, the free surface forms a:',
    answer: 'PARABOLOID OF REVOLUTION (z = ω² · r² / 2g)',
    choices: [
      'SPHERICAL BOWL',
      'PARABOLOID OF REVOLUTION (z = ω² · r² / 2g)',
      'HYPERBOLOID',
      'CONICAL FUNNEL'
    ],
    explanation: 'Centrifugal acceleration causes pressure gradient in radial direction, shaping the liquid surface into a paraboloid.'
  },
  {
    id: 805,
    area: 'HPGE',
    subtopic: 'Fluid Statics & Buoyancy',
    difficulty: 'Hard',
    question: 'The volume of a paraboloid of revolution of height h and base radius r formed by rotating fluid is equal to:',
    answer: 'HALF THE VOLUME OF THE CIRCUMSCRIBING CYLINDER (0.5 · π · r² · h)',
    choices: [
      'HALF THE VOLUME OF THE CIRCUMSCRIBING CYLINDER (0.5 · π · r² · h)',
      'One-third the volume of cylinder (1/3 · π · r² · h)',
      'Two-thirds the volume of cylinder',
      'Equal to the cylinder volume'
    ],
    explanation: 'Crucial in CELE problems for determining liquid volume spilled during rotation: V_paraboloid = (1/2) · π · r² · h.'
  },
  {
    id: 806,
    area: 'HPGE',
    subtopic: 'Open Channels, Weirs & Pipe Flow',
    difficulty: 'Medium',
    question: 'In open channel hydraulics, the critical depth y_c for a rectangular channel of width b carrying discharge Q is given by:',
    answer: 'y_c = [ (Q / b)² / g ]^(1/3) = (q² / g)^(1/3)',
    choices: [
      'y_c = (Q² / g)^(1/2)',
      'y_c = [ (Q / b)² / g ]^(1/3) = (q² / g)^(1/3)',
      'y_c = q / √(g)',
      'y_c = 2 · q² / g'
    ],
    explanation: 'At critical flow depth, specific energy E is at absolute minimum and Froude number Fr = 1.0.'
  },
  {
    id: 807,
    area: 'HPGE',
    subtopic: 'Open Channels, Weirs & Pipe Flow',
    difficulty: 'Medium',
    question: 'Minimum specific energy E_min for a rectangular open channel carrying unit discharge q at critical depth y_c is:',
    answer: 'E_min = 1.5 · y_c',
    choices: ['E_min = y_c', 'E_min = 1.5 · y_c', 'E_min = 2.0 · y_c', 'E_min = 2.5 · y_c'],
    explanation: 'Specific energy E = y + V²/(2g). At critical flow, V²/(2g) = yc/2, giving Emin = yc + yc/2 = 1.5yc.'
  },
  {
    id: 808,
    area: 'HPGE',
    subtopic: 'Open Channels, Weirs & Pipe Flow',
    difficulty: 'Hard',
    question: 'The Hazen-Williams empirical formula for pipe flow velocity V in SI metric units is expressed as:',
    answer: 'V = 0.849 · C · R^(0.63) · S^(0.54)',
    choices: [
      'V = (1/n) · R^(2/3) · S^(1/2)',
      'V = 0.849 · C · R^(0.63) · S^(0.54)',
      'V = 1.318 · C · R^(0.63) · S^(0.54)',
      'V = C · √(R · S)'
    ],
    explanation: 'Widely used in water distribution network design; C is the Hazen-Williams roughness coefficient.'
  },
  {
    id: 809,
    area: 'HPGE',
    subtopic: 'Soil Physical Properties & Phase Relationships',
    difficulty: 'Medium',
    question: 'Basic soil phase relationship connecting specific gravity Gs, void ratio e, degree of saturation S, and moisture content w is:',
    answer: 'G_s · w = S · e',
    choices: [
      'G_s · S = w · e',
      'G_s · w = S · e',
      'w = G_s · S · e',
      'e = G_s · w · S'
    ],
    explanation: 'Fundamental geotechnical identity: Ww/Ws · Ws/(Vs·γw) = Vw/Vv · Vv/Vs => w · Gs = S · e.'
  },
  {
    id: 810,
    area: 'HPGE',
    subtopic: 'Soil Physical Properties & Phase Relationships',
    difficulty: 'Medium',
    question: 'The dry unit weight γ_d of soil is related to total moist unit weight γ and moisture content w by:',
    answer: 'γ_d = γ / (1 + w)',
    choices: ['γ_d = γ · (1 + w)', 'γ_d = γ / (1 + w)', 'γ_d = γ · (1 - w)', 'γ_d = γ / w'],
    explanation: 'Dry unit weight removes the mass of pore water: γ_d = Ws / V = (W / (1 + w)) / V = γ / (1 + w).'
  },
  {
    id: 811,
    area: 'HPGE',
    subtopic: 'Soil Physical Properties & Phase Relationships',
    difficulty: 'Medium',
    question: 'Submerged (buoyant) unit weight γ\' of saturated soil with specific gravity Gs and void ratio e is:',
    answer: 'γ\' = [ (G_s - 1) / (1 + e) ] · γ_w',
    choices: [
      'γ\' = [ (G_s + 1) / (1 + e) ] · γ_w',
      'γ\' = [ (G_s - 1) / (1 + e) ] · γ_w',
      'γ\' = G_s · γ_w / (1 + e)',
      'γ\' = γ_sat + γ_w'
    ],
    explanation: 'Effective buoyant unit weight γ\' = γ_sat - γ_w = [(Gs + e)/(1 + e)]γw - γw = [(Gs - 1)/(1 + e)]γw.'
  },
  {
    id: 812,
    area: 'HPGE',
    subtopic: 'Consolidation, Shear Strength & Bearing Capacity',
    difficulty: 'Hard',
    question: 'Terzaghi’s principle of effective stress in saturated soils states that total normal stress σ is the sum of:',
    answer: 'EFFECTIVE STRESS σ\' AND PORE WATER PRESSURE u (σ = σ\' + u)',
    choices: [
      'SHEAR STRESS τ AND PORE PRESSURE u',
      'EFFECTIVE STRESS σ\' AND PORE WATER PRESSURE u (σ = σ\' + u)',
      'ATMOSPHERIC PRESSURE AND HYDROSTATIC HEAD',
      'COHESION c AND FRICTION STRESS'
    ],
    explanation: 'Soil skeleton volume change, settlement, and shear resistance are controlled exclusively by effective stress σ\' = σ - u.'
  },
  {
    id: 813,
    area: 'HPGE',
    subtopic: 'Consolidation, Shear Strength & Bearing Capacity',
    difficulty: 'Hard',
    question: 'In an unconfined compression test on cohesive saturated clay (φ = 0), the undrained shear strength c_u is equal to:',
    answer: 'HALF OF THE UNCONFINED COMPRESSIVE STRENGTH (c_u = q_u / 2)',
    choices: [
      'Equal to the unconfined compressive strength (c_u = q_u)',
      'HALF OF THE UNCONFINED COMPRESSIVE STRENGTH (c_u = q_u / 2)',
      'Twice the compressive strength (c_u = 2 · q_u)',
      'c_u = q_u · tan 45°'
    ],
    explanation: 'Because cell pressure σ3 = 0, Mohr’s circle has diameter qu, yielding radius cu = qu / 2.'
  },
  {
    id: 814,
    area: 'HPGE',
    subtopic: 'Consolidation, Shear Strength & Bearing Capacity',
    difficulty: 'Hard',
    question: 'In Terzaghi’s bearing capacity equation for a square footing of width B, the shape factors modify the terms to:',
    answer: 'q_ult = 1.3 · c · N_c + q · N_q + 0.4 · γ · B · N_γ',
    choices: [
      'q_ult = c · N_c + q · N_q + 0.5 · γ · B · N_γ',
      'q_ult = 1.3 · c · N_c + q · N_q + 0.4 · γ · B · N_γ',
      'q_ult = 1.2 · c · N_c + q · N_q + 0.3 · γ · B · N_γ',
      'q_ult = 1.3 · c · N_c + q · N_q + 0.5 · γ · B · N_γ'
    ],
    explanation: 'For square footings, shape factors are sc = 1.3 and sγ = 0.8 (producing 0.8 × 0.5 = 0.4 in the third term).'
  },
  {
    id: 815,
    area: 'HPGE',
    subtopic: 'Foundations, Retaining Walls & Slope Stability',
    difficulty: 'Medium',
    question: 'For a strip foundation on purely cohesive clay (φ = 0, c = cu) with Nc = 5.7, Nq = 1.0, and Nγ = 0, the ultimate bearing capacity is:',
    answer: 'q_ult = 5.7 · c_u + γ · D_f',
    choices: [
      'q_ult = 5.14 · c_u',
      'q_ult = 5.7 · c_u + γ · D_f',
      'q_ult = 2.85 · c_u + γ · D_f',
      'q_ult = 6.0 · c_u'
    ],
    explanation: 'Terzaghi’s classic equation for continuous footing in undrained clay: q_ult = 5.7·cu + q.'
  },
  {
    id: 816,
    area: 'HPGE',
    subtopic: 'Open Channels, Weirs & Pipe Flow',
    difficulty: 'Hard',
    question: 'The Belanger momentum equation for the conjugate (sequent) depth ratio y2/y1 of a hydraulic jump in a horizontal rectangular channel is:',
    answer: 'y2 / y1 = 0.5 · [ √(1 + 8 · Fr1²) - 1 ]',
    choices: [
      'y2 / y1 = 0.5 · [ √(1 + 8 · Fr1²) - 1 ]',
      'y2 / y1 = √(1 + Fr1²)',
      'y2 / y1 = 2 · Fr1²',
      'y2 / y1 = (Fr1 + 1) / 2'
    ],
    explanation: 'Fundamental hydraulic jump momentum equation connecting upstream supercritical depth y1 and Froude number Fr1 to downstream subcritical depth y2.'
  },
  {
    id: 817,
    area: 'HPGE',
    subtopic: 'Open Channels, Weirs & Pipe Flow',
    difficulty: 'Medium',
    question: 'Energy head loss ΔE across a hydraulic jump in a rectangular channel of upstream depth y1 and downstream depth y2 is:',
    answer: 'ΔE = (y2 - y1)³ / (4 · y1 · y2)',
    choices: [
      'ΔE = (y2 - y1)² / (2 · g)',
      'ΔE = (y2 - y1)³ / (4 · y1 · y2)',
      'ΔE = y2 - y1',
      'ΔE = (y2³ - y1³) / (3 · y1 · y2)'
    ],
    explanation: 'Derived from energy difference E1 - E2, showing energy dissipation increases cubically with jump height (y2 - y1).'
  },
  {
    id: 818,
    area: 'HPGE',
    subtopic: 'Soil Classification, Compaction & Permeability',
    difficulty: 'Hard',
    question: 'In a flownet through an isotropic permeable soil medium with total head loss H, number of flow channels Nf, and equipotential drops Nd, total seepage discharge q is:',
    answer: 'q = k · H · (Nf / Nd)',
    choices: [
      'q = k · H · (Nd / Nf)',
      'q = k · H · (Nf / Nd)',
      'q = k · H · Nf · Nd',
      'q = k · √(H) · (Nf / Nd)'
    ],
    explanation: 'The ratio (Nf / Nd) is the geometric shape factor of the flownet grid.'
  },
  {
    id: 819,
    area: 'HPGE',
    subtopic: 'Consolidation, Shear Strength & Bearing Capacity',
    difficulty: 'Hard',
    question: 'The time t required to achieve an average degree of consolidation U in a clay layer of thickness H with coefficient of consolidation cv is:',
    answer: 't = Tv · (Hdr)² / cv',
    choices: [
      't = Tv · cv / (Hdr)²',
      't = Tv · (Hdr)² / cv',
      't = cv · Hdr / Tv',
      't = Tv · Hdr / (2 · cv)'
    ],
    explanation: 'Hdr is the drainage path length (Hdr = H/2 for two-way drainage, Hdr = H for one-way drainage), and Tv is dimensionless time factor.'
  },
  {
    id: 820,
    area: 'HPGE',
    subtopic: 'Consolidation, Shear Strength & Bearing Capacity',
    difficulty: 'Medium',
    question: 'For a normally consolidated clay soil subjected to a Consolidated-Drained (CD) triaxial test, the effective cohesion c\' is equal to:',
    answer: 'ZERO (c\' = 0)',
    choices: ['qu / 2', 'ZERO (c\' = 0)', 'Equal to pore pressure u', '0.577 · σ\'1'],
    explanation: 'Normally consolidated clays have zero effective cohesion intercept; shear strength is governed purely by internal friction: τ = σ\' · tan φ\'.'
  },
  {
    id: 821,
    area: 'HPGE',
    subtopic: 'Foundations, Retaining Walls & Slope Stability',
    difficulty: 'Medium',
    question: 'The Factor of Safety (FS) against sliding for a gravity retaining wall with total vertical weight W, base friction coefficient μ, and total horizontal active thrust Pa is:',
    answer: 'FS = (μ · ΣW) / Pa',
    choices: [
      'FS = Pa / (μ · ΣW)',
      'FS = (μ · ΣW) / Pa',
      'FS = (ΣW + Pa) / μ',
      'FS = μ · Pa / ΣW'
    ],
    explanation: 'Standard code requirement specifies minimum FS against sliding ≥ 1.50.'
  },
  {
    id: 822,
    area: 'HPGE',
    subtopic: 'Foundations, Retaining Walls & Slope Stability',
    difficulty: 'Medium',
    question: 'The Factor of Safety against overturning for a retaining wall is defined as the ratio of:',
    answer: 'TOTAL RESISTING MOMENTS TO TOTAL OVERTURNING MOMENTS (ΣMR / ΣMO)',
    choices: [
      'TOTAL OVERTURNING MOMENTS TO RESISTING MOMENTS',
      'TOTAL RESISTING MOMENTS TO TOTAL OVERTURNING MOMENTS (ΣMR / ΣMO)',
      'BASE FRICTION TO HORIZONTAL THRUST',
      'SOIL BEARING CAPACITY TO BASE PRESSURE'
    ],
    explanation: 'Moments are evaluated about the toe of the retaining wall base slab; minimum required FS overturning ≥ 2.0.'
  },
  {
    id: 823,
    area: 'HPGE',
    subtopic: 'Foundations, Retaining Walls & Slope Stability',
    difficulty: 'Hard',
    question: 'To avoid any tensile uplift stresses at the base of a retaining wall footing of base width B, the resultant vertical load must fall within:',
    answer: 'THE MIDDLE THIRD OF THE BASE (ECCENTRICITY e ≤ B / 6)',
    choices: [
      'The middle half of the base (e ≤ B / 4)',
      'THE MIDDLE THIRD OF THE BASE (ECCENTRICITY e ≤ B / 6)',
      'Directly at the centroid (e = 0)',
      'The outer third of the base'
    ],
    explanation: 'Kern requirement: when e ≤ B/6, base contact pressure q = (W/B)·[1 ± 6e/B] remains compressive throughout.'
  },
  {
    id: 824,
    area: 'HPGE',
    subtopic: 'Fluid Dynamics & Energy/Continuity',
    difficulty: 'Medium',
    question: 'Chezy’s open channel velocity formula is expressed as V = C · √(R · S). The relation between Chezy C and Manning roughness n in SI units is:',
    answer: 'C = (1 / n) · R^(1/6)',
    choices: ['C = n · R^(1/6)', 'C = (1 / n) · R^(1/6)', 'C = (1 / n) · R^(2/3)', 'C = 1 / (n · R)'],
    explanation: 'Equating Manning’s velocity V = (1/n)·R^(2/3)·S^(1/2) with Chezy’s V = C·R^(1/2)·S^(1/2) gives C = R^(1/6)/n.'
  },
  {
    id: 825,
    area: 'HPGE',
    subtopic: 'Fluid Statics & Buoyancy',
    difficulty: 'Medium',
    question: 'The bulk modulus of elasticity K of a fluid is defined as the ratio of compressive stress change to volumetric strain:',
    answer: 'K = - ΔP / (ΔV / V)',
    choices: [
      'K = - ΔV / (ΔP / V)',
      'K = - ΔP / (ΔV / V)',
      'K = ΔP · ΔV / V',
      'K = ρ · ΔP / ΔV'
    ],
    explanation: 'Measures fluid incompressibility; for pure water at 20°C, K is approximately 2.2 GPa (2.2 × 10⁹ N/m²).'
  }
];
