import { CEQuestion } from '../types';

export const HPGE_FORMULA_QUESTIONS: CEQuestion[] = [
  // =========================================================================
  // HYDRAULICS & FLUID MECHANICS (Formula & Diagram Questions)
  // =========================================================================
  {
    id: 50001,
    area: 'HPGE',
    subtopic: 'Fluid Statics & Buoyancy',
    difficulty: 'Easy',
    question: 'In fluid properties, how is capillary rise h in a clean circular tube of diameter d related to surface tension σ, contact angle θ, and fluid unit weight γ?',
    latex: 'h = \\frac{4\\sigma\\cos\\theta}{\\gamma d}',
    answer: 'Directly proportional to 4σ cosθ and inversely proportional to γd',
    choices: [
      
      'Directly proportional to 4σ cosθ and inversely proportional to γd',
      'Directly proportional to 2σ sinθ and inversely proportional to γd',
      'Directly proportional to σ d cosθ and inversely proportional to 4γ',
      'Directly proportional to γd and inversely proportional to 4σ cosθ'
    ],
    explanation: 'Balancing vertical surface tension force πdσ cosθ against the liquid column weight (πd²/4)γh yields h = (4σ cosθ)/(γd).',
    isFormula: true
  },
  {
    id: 50002,
    area: 'HPGE',
    subtopic: 'Fluid Statics & Buoyancy',
    difficulty: 'Easy',
    question: 'What is the defining equation for the bulk modulus of elasticity E_B of a fluid subjected to pressure increase ΔP and volume change ΔV?',
    answer: 'E_B = −ΔP / (ΔV / V)',
    choices: [
      
      'E_B = −ΔV / (V · ΔP)',
      'E_B = −ΔP / (ΔV / V)',
      'E_B = ΔP · (ΔV / V)',
      'E_B = (P_1 + P_2) / (V_1 − V_2)'
    ],
    explanation: 'Bulk modulus measures fluid stiffness against compression: E_B = −ΔP / (ΔV/V), and its reciprocal β = 1/E_B is compressibility.',
    isFormula: true
  },
  {
    id: 50003,
    area: 'HPGE',
    subtopic: 'Fluid Statics & Buoyancy',
    difficulty: 'Medium',
    question: 'Referring to the inclined submerged plane surface diagram, how is the eccentricity e measured along the inclined plane from centroid (cg) to center of pressure (cp)?',
    diagramSrc: '/assets/hpge_formulas/p03_hydrostatic_inclined.png',
    diagramAlt: 'Inclined submerged plane area showing cg, cp, eccentricity e, and hydrostatic force P',
    answer: 'e = I_bar / (A · y_bar), where y_bar = h_bar / sinθ',
    choices: [
      
      'e = A · y_bar / I_bar, where y_bar = h_bar · sinθ',
      'e = I_bar / (A · h_bar), where y_bar = h_bar / cosθ',
      'e = I_bar / (A · y_bar), where y_bar = h_bar / sinθ',
      'e = I_bar · sinθ / (A · h_bar), where y_bar = h_bar · tanθ'
    ],
    explanation: 'For an inclined plane making angle θ with the free surface, inclined centroid distance y_bar = h_bar/sinθ and eccentricity e = I_bar/(A·y_bar).',
    isFormula: true
  },
  {
    id: 50004,
    area: 'HPGE',
    subtopic: 'Fluid Statics & Buoyancy',
    difficulty: 'Medium',
    question: 'When liquid lies strictly BELOW a curved submerged surface (as shown in the diagram), how are the vertical hydrostatic force P_V and its direction determined?',
    diagramSrc: '/assets/hpge_formulas/p04_curved_below.png',
    diagramAlt: 'Curved surface with liquid below the body',
    answer: 'Upward force equal to the weight of the imaginary liquid volume above the curve',
    choices: [
      
      'Downward force equal to the weight of the actual liquid volume below the curve',
      'Upward force equal to γ · h_bar multiplied by the vertical projected area',
      'Zero vertical force because pressure acts purely along horizontal planes',
      'Upward force equal to the weight of the imaginary liquid volume above the curve'
    ],
    explanation: 'Pressure pushes upward perpendicular to the boundary with intensity γh, producing an upward force equal to the weight of the imaginary liquid column extending from the curve up to the free surface.',
    isFormula: true
  },
  {
    id: 50005,
    area: 'HPGE',
    subtopic: 'Fluid Statics & Buoyancy',
    difficulty: 'Medium',
    question: 'For a prism of uniform height h floating vertically in two different liquids with specific gravities SG_1 and SG_2 and exposed heights a and b respectively, which relation holds?',
    diagramSrc: '/assets/hpge_formulas/p04_buoyancy_two_liquids.png',
    diagramAlt: 'Prism floating in two liquids showing exposed heights a and b',
    answer: 'SG_1 (h − a) = SG_2 (h − b)',
    choices: [
      
      'SG_1 (h − a) = SG_2 (h − b)',
      'SG_1 · a = SG_2 · b',
      'SG_1 (h + a) = SG_2 (h + b)',
      'SG_1 (h − b) = SG_2 (h − a)'
    ],
    explanation: 'Since the prism weight W is constant across both liquids, BF_1 = BF_2 gives γ_w·SG_1·A(h − a) = γ_w·SG_2·A(h − b).',
    isFormula: true
  },
  {
    id: 50006,
    area: 'HPGE',
    subtopic: 'Fluid Statics & Buoyancy',
    difficulty: 'Hard',
    question: 'Which diagram condition indicates a STABLE floating body with a restoring Righting Moment (RM) and what is its magnitude?',
    diagramSrc: '/assets/hpge_formulas/p05_righting_moment.png',
    diagramAlt: 'Floating vessel stability diagram showing metacenter M above center of gravity G',
    answer: 'Metacenter M lies above G (MB_o > GB_o) and RM = W(MG sinθ)',
    choices: [
      
      'Metacenter M lies below G (MB_o < GB_o) and RM = W(MG tanθ)',
      'Metacenter M lies above G (MB_o > GB_o) and RM = W(MG sinθ)',
      'Center of gravity G coincides with B_o and RM = W(GB_o cosθ)',
      'Metacenter M lies below B_o and RM = BF(MB_o sinθ)'
    ],
    explanation: 'When M sits above G (positive metacentric height MG > 0), the weight W and displaced buoyant force BF create a couple W·(MG sinθ) restoring the hull upright.',
    isFormula: true
  },
  {
    id: 50007,
    area: 'HPGE',
    subtopic: 'Fluid Statics & Buoyancy',
    difficulty: 'Hard',
    question: 'For a concrete gravity dam of base width B with vertical resultant R_y acting inside the middle third (e ≤ B/6), what are the foundation bearing pressures q?',
    diagramSrc: '/assets/hpge_formulas/p06_gravity_dam.png',
    diagramAlt: 'Gravity dam cross section showing P1, P2, weight W, and base uplift U',
    latex: 'q = \\frac{R_y}{B}\\left(1 \\pm \\frac{6e}{B}\\right)',
    answer: 'q = (R_y / B)(1 ± 6e / B), whereas for e > B/6, q_max = 2R_y / (3 x_bar)',
    choices: [
      
      'q = (R_y / B)(1 ± 3e / B), whereas for e > B/6, q_max = R_y / (2 x_bar)',
      'q = (R_y / B)(1 ± 2e / B), whereas for e > B/6, q_max = 3R_y / (2 x_bar)',
      'q = (R_y / B)(1 ± 6e / B), whereas for e > B/6, q_max = 2R_y / (3 x_bar)',
      'q = (2R_y / B)(1 ± 6e / B), whereas for e > B/6, q_max = R_y / (3 x_bar)'
    ],
    explanation: 'Inside the middle third (e ≤ B/6), the base remains wholly in compression with trapezoidal stress (R_y/B)(1 ± 6e/B); outside it, tension is ignored and a triangular pressure block over width 3x_bar gives q_max = 2R_y/(3x_bar).',
    isFormula: true
  },
  {
    id: 50008,
    area: 'HPGE',
    subtopic: 'Fluid Statics & Buoyancy',
    difficulty: 'Medium',
    question: 'In wood-stave pipes or pressurized cylindrical tanks carrying internal pressure p, what are the formulas for pipe wall thickness t and steel hoop spacing S?',
    answer: 't = pD / (2 S_t eff) and S = 2T / (pD)',
    choices: [
      
      't = pD / (4 S_t eff) and S = T / (pD)',
      't = 2pD / (S_t eff) and S = 4T / (pD)',
      't = pD · S_t / (2 eff) and S = pD / (2T)',
      't = pD / (2 S_t eff) and S = 2T / (pD)'
    ],
    explanation: 'Equating bursting force pDL against two wall tensions 2(t·L·S_t·eff) gives t = pD/(2 S_t eff); for discrete hoops of capacity T over length S, 2T = pDS gives S = 2T/(pD).',
    isFormula: true
  },
  {
    id: 50009,
    area: 'HPGE',
    subtopic: 'Fluid Statics & Buoyancy',
    difficulty: 'Medium',
    question: 'When an open fluid tank accelerates along a ramp inclined at angle α with acceleration a, what is the surface tilt angle θ relative to the horizontal?',
    diagramSrc: '/assets/hpge_formulas/p07_moving_inclined.png',
    diagramAlt: 'Liquid tank accelerating on inclined ramp angle alpha',
    latex: '\\tan\\theta = \\frac{a\\cos\\alpha}{g \\pm a\\sin\\alpha}',
    answer: 'tanθ = (a cosα) / (g ± a sinα), using + for upward and − for downward motion',
    choices: [
      
      'tanθ = (a cosα) / (g ± a sinα), using + for upward and − for downward motion',
      'tanθ = (a sinα) / (g ± a cosα), using + for downward and − for upward motion',
      'tanθ = (g ± a sinα) / (a cosα), using + for upward and − for downward motion',
      'tanθ = (a cosα) / (g − a cosα), regardless of upward or downward motion'
    ],
    explanation: 'Resolving acceleration a into horizontal component a cosα and vertical component ±a sinα modifies effective gravity to g ± a sinα.',
    isFormula: true
  },
  {
    id: 50010,
    area: 'HPGE',
    subtopic: 'Fluid Statics & Buoyancy',
    difficulty: 'Hard',
    question: 'For a rotating open cylindrical vessel initially having freeboard D above the liquid surface, what maximum paraboloid height y occurs just before spilling?',
    diagramSrc: '/assets/hpge_formulas/p08_rotating_vessel.png',
    diagramAlt: 'Rotating cylindrical tank with paraboloid liquid surface',
    answer: 'y = 2D, because the air paraboloid volume equals half the enclosing cylinder',
    choices: [
      
      'y = D, because the surface rises identically at the center and rim',
      'y = 2D, because the air paraboloid volume equals half the enclosing cylinder',
      'y = 1.5D, because air volume is one-third of the enclosing cylinder',
      'y = 3D, because centrifugal pressure triples at the outer perimeter'
    ],
    explanation: 'Conservation of liquid volume equates initial air space πr²D to the rotated paraboloid air pocket ½πr²y, giving y = 2D.',
    isFormula: true
  },
  {
    id: 50011,
    area: 'HPGE',
    subtopic: 'Fluid Dynamics & Energy/Continuity',
    difficulty: 'Easy',
    question: 'Referring to the Bernoulli pipe flow diagram above a datum, which sum defines the Total Energy Head E at any cross section?',
    diagramSrc: '/assets/hpge_formulas/p08_bernoulli_pipe.png',
    diagramAlt: 'Bernoulli energy heads on an inclined pipe above datum',
    answer: 'E = v²/(2g) + P/γ + z',
    choices: [
      
      'E = v²/g + P/ρ + z',
      'E = 2gv² + γP + z',
      'E = v²/(2g) + P/γ + z',
      'E = v²/(2g) + P/(2γ) − z'
    ],
    explanation: 'Total hydraulic energy head sums kinetic velocity head v²/(2g), piezometric pressure head P/γ, and potential elevation head z.',
    isFormula: true
  },
  {
    id: 50012,
    area: 'HPGE',
    subtopic: 'Fluid Dynamics & Energy/Continuity',
    difficulty: 'Medium',
    question: 'When computing electrical motor input power vs hydraulic water power P = γQE in Watt units, which efficiency statement is correct?',
    answer: 'For a pump P is output (divide by eff); for a turbine P is input (multiply by eff)',
    choices: [
      
      'For a pump P is input (multiply by eff); for a turbine P is output (divide by eff)',
      'For both pumps and turbines P is output and must be divided by eff',
      'For both pumps and turbines mechanical output equals γQE divided by 746',
      'For a pump P is output (divide by eff); for a turbine P is input (multiply by eff)'
    ],
    explanation: 'A pump delivers γQ·H_A to the water (water power output), so motor input = (γQ·H_A)/eff. A turbine receives γQ·H_E from water (input), so shaft output = (γQ·H_E)·eff.',
    isFormula: true
  },
  {
    id: 50013,
    area: 'HPGE',
    subtopic: 'Open Channels, Weirs & Pipe Flow',
    difficulty: 'Hard',
    question: 'In SI units using discharge Q and circular pipe diameter D, match the correct empirical constants for Darcy-Weisbach, Manning’s, and Hazen-Williams head loss h_f:',
    answer: '0.0826 (Darcy), 10.29 (Manning), and 10.67 (Hazen-Williams)',
    choices: [
      
      '0.0826 (Darcy), 10.29 (Manning), and 10.67 (Hazen-Williams)',
      '0.0826 (Darcy), 6.35 (Manning), and 1.84 (Hazen-Williams)',
      '10.29 (Darcy), 10.67 (Manning), and 0.0826 (Hazen-Williams)',
      '10.67 (Darcy), 0.0826 (Manning), and 6.35 (Hazen-Williams)'
    ],
    explanation: 'In SI Q-D form for circular pipes: Darcy h_f = 0.0826 f L Q²/D⁵; Manning h_f = 10.29 n² L Q²/D^(16/3); Hazen-Williams h_f = 10.67 L Q^1.85/(C^1.85 D^4.87).',
    isFormula: true
  },
  {
    id: 50014,
    area: 'HPGE',
    subtopic: 'Open Channels, Weirs & Pipe Flow',
    difficulty: 'Easy',
    question: 'Look at the parallel pipe network schematic connecting junctions A and B. Which two hydraulic governing equations apply across branches 1, 2, and 3?',
    diagramSrc: '/assets/hpge_formulas/p10_parallel_pipes.png',
    diagramAlt: 'Three parallel pipe branches between junctions A and B',
    answer: 'Q_total = Q_1 + Q_2 + Q_3 and h_f1 = h_f2 = h_f3',
    choices: [
      
      'Q_1 = Q_2 = Q_3 and HL = h_f1 + h_f2 + h_f3',
      'Q_total = Q_1 + Q_2 + Q_3 and h_f1 = h_f2 = h_f3',
      'Q_total = Q_1 + Q_2 + Q_3 and HL = h_f1 + h_f2 + h_f3',
      'Q_1 = Q_2 = Q_3 and h_f1 = h_f2 = h_f3'
    ],
    explanation: 'In parallel pipe networks, conservation of mass sums branch discharges at the junction while common piezometric heads force equal friction head loss across all branches.',
    isFormula: true
  },
  {
    id: 50015,
    area: 'HPGE',
    subtopic: 'Open Channels, Weirs & Pipe Flow',
    difficulty: 'Hard',
    question: 'In water hammer analysis, what is the critical closure time threshold separating rapid closure (P_h = ρcv) from slow closure (P_h = 2Lρv/t_c)?',
    latex: 'c = \\sqrt{\\frac{E_B}{\\rho\\left(1 + \\frac{E_B d}{E t}\\right)}}',
    answer: 't_c = 2L / c (round-trip pressure wave travel time)',
    choices: [
      
      't_c = L / (2c) (one-way wave midpoint time)',
      't_c = L / c (single-pass wave travel time)',
      't_c = 2L / c (round-trip pressure wave travel time)',
      't_c = 4L / c (double-cycle reflection time)'
    ],
    explanation: 'If valve closure time t_c ≤ 2L/c, the reflected relief wave cannot reach the valve before closure finishes, generating full Joukowsky surge pressure P_h = ρcv.',
    isFormula: true
  },
  {
    id: 50016,
    area: 'HPGE',
    subtopic: 'Open Channels, Weirs & Pipe Flow',
    difficulty: 'Medium',
    question: 'For laminar pipe flow (N_R < 2,000), how is the Darcy-Weisbach friction factor f calculated?',
    answer: 'f = 64 / N_R, independent of wall roughness ε',
    choices: [
      
      'f = 0.0826 / N_R, proportional to wall roughness ε',
      'f = 16 / √N_R, varying with relative roughness ε/D',
      'f = −2 log(2.51 / N_R), identical to rough turbulent flow',
      'f = 64 / N_R, independent of wall roughness ε'
    ],
    explanation: 'In laminar flow (Poiseuille flow, N_R < 2,000), friction factor equals 64/N_R and is unaffected by pipe roughness ε.',
    isFormula: true
  },
  {
    id: 50017,
    area: 'HPGE',
    subtopic: 'Fluid Dynamics & Energy/Continuity',
    difficulty: 'Medium',
    question: 'In a sharp-edged orifice with coefficient of velocity C_v and actual vena contracta jet velocity v, what is the orifice head loss HL?',
    answer: 'HL = (v² / 2g)(1 / C_v² − 1)',
    choices: [
      
      'HL = (v² / 2g)(1 / C_v² − 1)',
      'HL = (v² / 2g)(1 − C_v²)',
      'HL = (v² / 2g)(1 / C_v − 1)',
      'HL = (2g / v²)(1 / C_c² − 1)'
    ],
    explanation: 'Since ideal head h = v²/(2g C_v²) and actual jet velocity head is v²/(2g), the difference HL = h − v²/(2g) equals (v²/2g)(1/C_v² − 1).',
    isFormula: true
  },
  {
    id: 50018,
    area: 'HPGE',
    subtopic: 'Open Channels, Weirs & Pipe Flow',
    difficulty: 'Medium',
    question: 'Based on the most hydraulically efficient channel cross-sections diagram, at what depths of flow in a circular conduit of diameter D do maximum discharge and maximum velocity occur?',
    diagramSrc: '/assets/hpge_formulas/p12_efficient_sections.png',
    diagramAlt: 'Most hydraulically efficient rectangular, circular, triangular, and trapezoidal sections',
    answer: 'Max discharge at d = 0.94 D and max velocity at d = 0.81 D',
    choices: [
      
      'Max discharge at d = 0.81 D and max velocity at d = 0.94 D',
      'Max discharge at d = 0.94 D and max velocity at d = 0.81 D',
      'Max discharge at d = 0.50 D and max velocity at d = 0.75 D',
      'Max discharge at d = 1.00 D and max velocity at d = 0.67 D'
    ],
    explanation: 'In a circular pipe running partly full, Manning’s equation gives peak hydraulic radius (max velocity) at d = 0.81D and peak area-radius product (max Q) at d = 0.94D.',
    isFormula: true
  },
  {
    id: 50019,
    area: 'HPGE',
    subtopic: 'Fluid Dynamics & Energy/Continuity',
    difficulty: 'Medium',
    question: 'What is the closed-form time t required to drop the liquid head from h_1 to h_2 through an orifice of area A in a tank of constant horizontal cross-sectional area A_s?',
    latex: 't = \\frac{2 A_s}{C A \\sqrt{2g}}\\left(\\sqrt{h_1} - \\sqrt{h_2}\\right)',
    answer: 't = [2 A_s / (C A √(2g))] (√h_1 − √h_2)',
    choices: [
      't = [A_s / (C A √(2g))] (h_1 − h_2)',
      't = [2 A_s / (C A √(2g))] (√h_1 − √h_2)',
      't = [A_s / (2 C A √(2g))] (√h_1 − √h_2)',
      't = [2 C A / (A_s √(2g))] (h_1² − h_2²)'
    ],
    explanation: 'Integrating dt = −A_s dh / (C A √(2gh)) from h_1 to h_2 yields t = (2A_s / (CA√(2g)))(√h_1 − √h_2).',
    isFormula: true
  },
  {
    id: 50020,
    area: 'HPGE',
    subtopic: 'Open Channels, Weirs & Pipe Flow',
    difficulty: 'Medium',
    question: 'Using the weir classification diagram, what is the Francis effective crest length L′ for a doubly contracted rectangular weir and what standard SI discharge formula applies to a 90° V-notch weir?',
    diagramSrc: '/assets/hpge_formulas/p14_weirs_types.png',
    diagramAlt: 'Suppressed, singly contracted, and doubly contracted rectangular weirs',
    answer: 'L′ = L − 0.2H and Q_90° ≈ 1.4 H^2.5',
    choices: [
      
      'L′ = L − 0.1H and Q_90° ≈ 1.84 H^1.5',
      'L′ = L − 0.4H and Q_90° ≈ 1.71 H^1.5',
      'L′ = L − 0.2H and Q_90° ≈ 1.4 H^2.5',
      'L′ = L − 0.2H and Q_90° ≈ 1.86 H^2.5'
    ],
    explanation: 'Each end contraction reduces effective crest width by 0.1H (total 0.2H for doubly contracted); a 90° triangular weir uses Q = 1.4 H^2.5 in SI.',
    isFormula: true
  },
  {
    id: 50021,
    area: 'HPGE',
    subtopic: 'Open Channels, Weirs & Pipe Flow',
    difficulty: 'Easy',
    question: 'Compare the empirical SI discharge coefficients used for Francis rectangular, Cipoletti trapezoidal, and broad-crested Dam weirs (without approach velocity):',
    answer: '1.84 (Francis), 1.86 (Cipoletti), and 1.71 (Dam weir)',
    choices: [
      
      '1.71 (Francis), 1.84 (Cipoletti), and 1.86 (Dam weir)',
      '1.86 (Francis), 1.71 (Cipoletti), and 1.40 (Dam weir)',
      '1.40 (Francis), 1.84 (Cipoletti), and 1.86 (Dam weir)',
      '1.84 (Francis), 1.86 (Cipoletti), and 1.71 (Dam weir)'
    ],
    explanation: 'Standard SI weir formulas: Rectangular Francis Q = 1.84 L H^1.5, Cipoletti Q = 1.86 L H^1.5, and Dam as Weir Q = 1.71 L H^1.5.',
    isFormula: true
  },
  {
    id: 50022,
    area: 'HPGE',
    subtopic: 'Fluid Dynamics & Energy/Continuity',
    difficulty: 'Medium',
    question: 'Inspect the free-body diagram of an inclined reducing pipe bend. Which impulse-momentum expression gives the net fluid force component ΣF_x acting along the x-axis?',
    diagramSrc: '/assets/hpge_formulas/p15_pipe_bend_forces.png',
    diagramAlt: 'Pipe bend reducer free-body diagram with forces F1x, F2x, F2y, Rx, Ry',
    answer: 'ΣF_x = ρ Q (v_2x − v_1x)',
    choices: [
      
      'ΣF_x = ρ Q (v_2x − v_1x)',
      'ΣF_x = γ Q (v_1x + v_2x)',
      'ΣF_x = ρ Q (v_1x − v_2x)',
      'ΣF_x = ½ ρ A (v_2x² − v_1x²)'
    ],
    explanation: 'Newton’s Second Law applied to the steady control volume yields ΣF = ρQ(v_out − v_in), including pressure forces P_1A_1 and P_2A_2 plus bend reaction R_x.',
    isFormula: true
  },
  {
    id: 50023,
    area: 'HPGE',
    subtopic: 'Open Channels, Weirs & Pipe Flow',
    difficulty: 'Medium',
    question: 'In the hydraulic jump profile shown, what equation relates sequent depths d_1 and d_2 in a rectangular channel with unit discharge q = Q/b?',
    diagramSrc: '/assets/hpge_formulas/p16_hydraulic_jump.png',
    diagramAlt: 'Hydraulic jump profile showing d1, d2, v1, v2, EGL, and HL',
    latex: '\\frac{q^2}{g} = d_1 d_2 \\left(\\frac{d_1 + d_2}{2}\\right)',
    answer: 'q² / g = d_1 d_2 (d_1 + d_2) / 2, and power lost is P = Q γ HL',
    choices: [
      
      'q² / g = (d_1 + d_2)² / 2, and power lost is P = Q ρ HL',
      'q² / g = d_1 d_2 (d_1 + d_2) / 2, and power lost is P = Q γ HL',
      'q / g = d_1 d_2 (d_2 − d_1) / 2, and power lost is P = Q γ (d_2 − d_1)',
      'q² / (2g) = d_1³ + d_2³, and power lost is P = Q γ / HL'
    ],
    explanation: 'Momentum conservation between sections 1 and 2 gives q²/g = d_1 d_2 (d_1 + d_2)/2; total energy lost equals Qγ(E_1 − E_2) = Qγ·HL.',
    isFormula: true
  },

  // =========================================================================
  // GEOTECHNICAL ENGINEERING (Formula & Diagram Questions)
  // =========================================================================
  {
    id: 50024,
    area: 'HPGE',
    subtopic: 'Soil Physical Properties & Phase Relationships',
    difficulty: 'Easy',
    question: 'What is the formula for Critical Hydraulic Gradient i_cr that initiates quick-sand / boiling conditions in cohesionless soil?',
    answer: 'i_cr = γ′ / γ_w = (G_s − 1) / (1 + e)',
    choices: [
      
      'i_cr = γ_sat / γ_w = (G_s + e) / (1 + e)',
      'i_cr = γ_d / γ_w = G_s / (1 + e)',
      'i_cr = γ′ / γ_w = (G_s − 1) / (1 + e)',
      'i_cr = (G_s − e) / (1 + G_s)'
    ],
    explanation: 'Boiling occurs when upward seepage force i·γ_w balances buoyant submerged soil weight γ′, giving i_cr = γ′/γ_w = (G_s − 1)/(1 + e).',
    isFormula: true
  },
  {
    id: 50025,
    area: 'HPGE',
    subtopic: 'Soil Physical Properties & Phase Relationships',
    difficulty: 'Medium',
    question: 'Which dry unit weight expression correctly computes Relative Density D_r (%) in terms of γ_d, γ_d,min, and γ_d,max?',
    latex: 'D_r = \\frac{\\gamma_d - \\gamma_{d,\\min}}{\\gamma_{d,\\max} - \\gamma_{d,\\min}}\\left(\\frac{\\gamma_{d,\\max}}{\\gamma_d}\\right)\\times 100\\%',
    answer: '[(γ_d − γ_d,min) / (γ_d,max − γ_d,min)] · (γ_d,max / γ_d) × 100%',
    choices: [
      '[(γ_d − γ_d,min) / (γ_d,max − γ_d,min)] × 100%',
      '[(γ_d,max − γ_d) / (γ_d,max − γ_d,min)] · (γ_d,min / γ_d) × 100%',
      '[(γ_d − γ_d,min) / (γ_d,max − γ_d,min)] · (γ_d,max / γ_d) × 100%',
      '[(γ_d,max − γ_d,min) / (γ_d − γ_d,min)] · (γ_d / γ_d,max) × 100%'
    ],
    explanation: 'Because e = (G_s γ_w / γ_d) − 1 is inversely related to γ_d, converting D_r = (e_max − e)/(e_max − e_min) introduces the extra factor (γ_d,max / γ_d).',
    isFormula: true
  },
  {
    id: 50026,
    area: 'HPGE',
    subtopic: 'Soil Classification, Compaction & Permeability',
    difficulty: 'Medium',
    question: 'In Brown’s Suitability Number S_n for evaluating vibroflotation sand backfill, which sieve diameters enter the equation and what range rates "Excellent"?',
    latex: 'S_n = 1.7\\sqrt{\\frac{3}{D_{50}^2} + \\frac{1}{D_{20}^2} + \\frac{1}{D_{10}^2}}',
    answer: 'Uses D_50, D_20, D_10 with S_n = 0 to 10 rated Excellent',
    choices: [
      
      'Uses D_60, D_30, D_10 with S_n = 0 to 10 rated Excellent',
      'Uses D_75, D_25, D_10 with S_n = 10 to 20 rated Excellent',
      'Uses D_50, D_30, D_10 with S_n = 20 to 30 rated Excellent',
      'Uses D_50, D_20, D_10 with S_n = 0 to 10 rated Excellent'
    ],
    explanation: 'Suitability Number S_n = 1.7√(3/D_50² + 1/D_20² + 1/D_10²) classifies backfill: 0–10 Excellent, 10–20 Good, 20–30 Fair, 30–50 Poor.',
    isFormula: true
  },
  {
    id: 50027,
    area: 'HPGE',
    subtopic: 'Soil Classification, Compaction & Permeability',
    difficulty: 'Medium',
    question: 'In groundwater hydraulics, how is actual seepage (interstitial) velocity v_s related to Darcy discharge velocity v = k i, and what is seepage force j per unit soil volume?',
    answer: 'v_s = ki / n and j = i · γ_w',
    choices: [
      
      'v_s = ki / n and j = i · γ_w',
      'v_s = ki · n and j = i · γ_sat',
      'v_s = ki / e and j = i · γ_d',
      'v_s = ki · (1 + e) and j = k · γ_w'
    ],
    explanation: 'Because water only flows through void area nA, actual seepage velocity v_s = v/n = ki/n exceeds discharge velocity v, while seepage drag force per unit volume is j = i·γ_w.',
    isFormula: true
  },
  {
    id: 50028,
    area: 'HPGE',
    subtopic: 'Soil Classification, Compaction & Permeability',
    difficulty: 'Hard',
    question: 'Compare the steady-state pumping test permeability formulas for a Confined Aquifer (thickness t) versus an Unconfined Aquifer:',
    answer: 'Confined uses 2πt(h_1 − h_2); Unconfined uses π(h_1² − h_2²)',
    choices: [
      
      'Confined uses π(h_1² − h_2²); Unconfined uses 2πt(h_1 − h_2)',
      'Confined uses 2πt(h_1 − h_2); Unconfined uses π(h_1² − h_2²)',
      'Confined uses 4πt(h_1 − h_2); Unconfined uses 2π(h_1² − h_2²)',
      'Confined uses πt(h_1 + h_2); Unconfined uses 2π(h_1 − h_2)'
    ],
    explanation: 'Confined aquifer k = Q ln(r_1/r_2) / [2πt(h_1 − h_2)] integrates over constant thickness t; Unconfined aquifer k = Q ln(r_1/r_2) / [π(h_1² − h_2²)] integrates over variable saturated thickness h.',
    isFormula: true
  },
  {
    id: 50029,
    area: 'HPGE',
    subtopic: 'Soil Classification, Compaction & Permeability',
    difficulty: 'Medium',
    question: 'How is equivalent hydraulic conductivity k_eq computed for layered soils when flow is PARALLEL vs PERPENDICULAR to the bedding planes?',
    answer: 'Parallel: k_eq = Σ(hk) / H; Perpendicular: k_eq = H / Σ(h/k)',
    choices: [
      
      'Parallel: k_eq = H / Σ(h/k); Perpendicular: k_eq = Σ(hk) / H',
      'Parallel: k_eq = √(k_x k_z); Perpendicular: k_eq = Σ(hk) / H',
      'Parallel: k_eq = Σ(hk) / H; Perpendicular: k_eq = H / Σ(h/k)',
      'Parallel: k_eq = Σk / n; Perpendicular: k_eq = Σ(h · k)'
    ],
    explanation: 'Parallel flow behaves like resistors in parallel (thickness-weighted arithmetic mean); perpendicular flow has equal discharge through each layer (harmonic mean).',
    isFormula: true
  },
  {
    id: 50030,
    area: 'HPGE',
    subtopic: 'Consolidation, Shear Strength & Bearing Capacity',
    difficulty: 'Hard',
    question: 'For an overconsolidated clay where initial effective stress P_o < P_c and final stress P_o + ΔP > P_c, which equation computes primary consolidation settlement S_c?',
    answer: '[C_s H / (1 + e_o)] log(P_c / P_o) + [C_c H / (1 + e_o)] log[(P_o + ΔP) / P_c]',
    choices: [
      '[C_c H / (1 + e_o)] log(P_c / P_o) + [C_s H / (1 + e_o)] log[(P_o + ΔP) / P_c]',
      '[C_s H / (1 + e_o)] log(P_c / P_o) + [C_c H / (1 + e_o)] log[(P_o + ΔP) / P_o]',
      '[C_s H / (1 + e_o)] log(P_c / P_o) + [C_c H / (1 + e_o)] log[(P_o + ΔP) / P_c]',
      '[C_c H / (1 + e_o)] log[(P_o + ΔP) / P_o]'
    ],
    explanation: 'Compression follows the flatter recompression slope C_s from P_o up to preconsolidation pressure P_c, then follows virgin compression slope C_c from P_c to P_o + ΔP.',
    isFormula: true
  },
  {
    id: 50031,
    area: 'HPGE',
    subtopic: 'Consolidation, Shear Strength & Bearing Capacity',
    difficulty: 'Medium',
    question: 'Which relation connects coefficient of consolidation C_v, drainage path H_dr, dimensionless time factor T, and field permeability k via volume compressibility m_v?',
    answer: 'C_v = H_dr² · T / t and k = C_v · m_v · γ_w',
    choices: [
      
      'C_v = t · T / H_dr² and k = C_v / (m_v · γ_w)',
      'C_v = H_dr · T / t² and k = C_v · a_v · γ_w',
      'C_v = H_dr² / (T · t) and k = m_v · γ_w / C_v',
      'C_v = H_dr² · T / t and k = C_v · m_v · γ_w'
    ],
    explanation: 'From Terzaghi 1D consolidation theory, time factor T = C_v t / H_dr² and C_v = k / (m_v γ_w).',
    isFormula: true
  },
  {
    id: 50032,
    area: 'HPGE',
    subtopic: 'Soil Classification, Compaction & Permeability',
    difficulty: 'Medium',
    question: 'What is the sum of Consistency Index (CI) and Liquidity Index (LI) for any fine-grained soil, and what does the Atterberg scale state if LI > 1?',
    diagramSrc: '/assets/hpge_formulas/p23_atterberg_limits.png',
    diagramAlt: 'Atterberg limits consistency scale from Solid to Liquid',
    answer: 'CI + LI = 1 always, and LI > 1 places the soil in the Liquid state',
    choices: [
      
      'CI + LI = 1 always, and LI > 1 places the soil in the Liquid state',
      'CI + LI = PI always, and LI > 1 places the soil in the Semi-Solid state',
      'CI − LI = 1 always, and LI > 1 places the soil in the Brittle Solid state',
      'CI + LI = 0 always, and LI > 1 places the soil in the Plastic state'
    ],
    explanation: 'Since CI = (LL − w)/PI and LI = (w − PL)/PI, adding them gives (LL − PL)/PI = 1. When LI > 1 (so CI < 0), natural moisture w exceeds the Liquid Limit LL.',
    isFormula: true
  },
  {
    id: 50033,
    area: 'HPGE',
    subtopic: 'Soil Classification, Compaction & Permeability',
    difficulty: 'Hard',
    question: 'In a shrinkage limit lab test yielding dry mass M_2, dry volume V_2, water density ρ_w, and shrinkage limit SL (%), how are Shrinkage Ratio SR and grain specific gravity G_s computed?',
    answer: 'SR = M_2 / (V_2 ρ_w) and G_s = 1 / (1/SR − SL/100)',
    choices: [
      
      'SR = (V_2 ρ_w) / M_2 and G_s = 1 / (1/SR + SL/100)',
      'SR = M_2 / (V_2 ρ_w) and G_s = 1 / (1/SR − SL/100)',
      'SR = M_2 / (V_1 ρ_w) and G_s = SR − (SL / 100)',
      'SR = (M_1 − M_2) / (V_2 ρ_w) and G_s = 100 · SR / SL'
    ],
    explanation: 'At the shrinkage limit, voids remain barely saturated at dry volume V_2; rearranging e = G_s(SL/100) and SR = G_s/(1+e) solves directly for G_s = 1 / (1/SR − SL/100).',
    isFormula: true
  },
  {
    id: 50034,
    area: 'HPGE',
    subtopic: 'Consolidation, Shear Strength & Bearing Capacity',
    difficulty: 'Medium',
    question: 'Based on the Mohr’s circle and triaxial specimen diagrams, at what angle θ_f relative to the major principal plane does the shear failure plane form?',
    diagramSrc: '/assets/hpge_formulas/p24_mohrs_circle.png',
    diagramAlt: 'Mohr circle diagram showing failure envelope angle phi and 2theta',
    answer: 'θ_f = 45° + φ / 2',
    choices: [
      
      'θ_f = 45° − φ / 2',
      'θ_f = 45° + φ',
      'θ_f = 45° + φ / 2',
      'θ_f = 90° − φ / 2'
    ],
    explanation: 'On Mohr’s circle, the interior angle to the tangency point gives 2θ_f = 90° + φ, yielding failure plane inclination θ_f = 45° + φ/2.',
    isFormula: true
  },
  {
    id: 50035,
    area: 'HPGE',
    subtopic: 'Foundations, Retaining Walls & Slope Stability',
    difficulty: 'Hard',
    question: 'Examine the retaining wall lateral earth pressure diagrams for cohesive soil (c > 0) with surcharge q and groundwater table. How does the cohesion term 2c√K affect Active vs Passive lateral pressure?',
    diagramSrc: '/assets/hpge_formulas/p25_pressure_diagram.png',
    diagramAlt: 'Lateral earth pressure diagrams for soil, cohesion, surcharge, and water',
    answer: 'Subtracted (−2c√K_a) in Active pressure and Added (+2c√K_p) in Passive pressure',
    choices: [
      
      'Added (+2c√K_a) in Active pressure and Subtracted (−2c√K_p) in Passive pressure',
      'Subtracted in both Active and Passive pressures to remain conservative',
      'Multiplied directly by surcharge q without square root of K',
      'Subtracted (−2c√K_a) in Active pressure and Added (+2c√K_p) in Passive pressure'
    ],
    explanation: 'Cohesion resists active wall movement (−2c√K_a, producing a surface tension crack) and increases passive soil resistance (+2c√K_p).',
    isFormula: true
  },
  {
    id: 50036,
    area: 'HPGE',
    subtopic: 'Foundations, Retaining Walls & Slope Stability',
    difficulty: 'Medium',
    question: 'In Rankine lateral earth pressure theory with a level backfill (β = 0°), how are Active (K_a), Passive (K_p), and Jaky’s At-Rest (K_o) coefficients expressed?',
    answer: 'K_a = (1−sinφ)/(1+sinφ), K_p = (1+sinφ)/(1−sinφ), and K_o = 1 − sinφ',
    choices: [
      
      'K_a = (1−sinφ)/(1+sinφ), K_p = (1+sinφ)/(1−sinφ), and K_o = 1 − sinφ',
      'K_a = (1+sinφ)/(1−sinφ), K_p = (1−sinφ)/(1+sinφ), and K_o = 1 + sinφ',
      'K_a = (1−cosφ)/(1+cosφ), K_p = (1+cosφ)/(1−cosφ), and K_o = 1 − tanφ',
      'K_a = tan²(45°+φ/2), K_p = tan²(45°−φ/2), and K_o = sinφ'
    ],
    explanation: 'For level backfill, K_a = tan²(45°−φ/2) = (1−sinφ)/(1+sinφ), K_p = 1/K_a = (1+sinφ)/(1−sinφ), and at-rest Jaky K_o = 1 − sinφ.',
    isFormula: true
  },
  {
    id: 50037,
    area: 'HPGE',
    subtopic: 'Foundations, Retaining Walls & Slope Stability',
    difficulty: 'Hard',
    question: 'Referring to the driven pile in sand layer and Peck braced-cut envelopes, what are the sand critical depths D_c (loose vs dense) and braced-cut apparent pressure formulas?',
    diagramSrc: '/assets/hpge_formulas/p26_braced_cut.png',
    diagramAlt: 'Peck apparent earth pressure diagrams for braced cuts in sand and clay',
    answer: 'D_c = 10d (loose) or 20d (dense); Braced cut p = 0.65 K_a γh (sand) and γh − 4c (clay)',
    choices: [
      
      'D_c = 5d (loose) or 10d (dense); Braced cut p = 0.50 K_a γh (sand) and γh − 2c (clay)',
      'D_c = 10d (loose) or 20d (dense); Braced cut p = 0.65 K_a γh (sand) and γh − 4c (clay)',
      'D_c = 20d (loose) or 10d (dense); Braced cut p = 0.65 K_p γh (sand) and γh + 4c (clay)',
      'D_c = 15d (loose) or 30d (dense); Braced cut p = K_o γh (sand) and γh − 2c (clay)'
    ],
    explanation: 'Effective overburden pressure on driven piles stops increasing linearly past D_c = 10d (loose) or 20d (dense); Peck braced cuts use rectangular 0.65 K_a γh for sand and trapezoidal max (γh − 4c) for clay.',
    isFormula: true
  },
  {
    id: 50038,
    area: 'HPGE',
    subtopic: 'Foundations, Retaining Walls & Slope Stability',
    difficulty: 'Hard',
    question: 'In infinite slope stability (shown in the slope diagram), how does steady seepage parallel to the ground surface modify the Factor of Safety equation?',
    diagramSrc: '/assets/hpge_formulas/p27_slope_infinite.png',
    diagramAlt: 'Infinite slope stability diagram with slope angle beta',
    latex: 'FS_{\\text{seepage}} = \\frac{c}{\\gamma_{\\text{sat}} H \\sin\\beta\\cos\\beta} + \\frac{\\gamma\'\\tan\\phi}{\\gamma_{\\text{sat}}\\tan\\beta}',
    answer: 'Denominator uses γ_sat and the frictional tanφ/tanβ term is multiplied by γ′ / γ_sat',
    choices: [
      
      'Denominator uses γ_d and the frictional tanφ/tanβ term is multiplied by γ_sat / γ′',
      'Denominator uses γ_sat and the frictional tanφ/tanβ term is multiplied by γ_w / γ_sat',
      'Denominator uses γ_sat and the frictional tanφ/tanβ term is multiplied by γ′ / γ_sat',
      'Seepage cancels out the tanφ/tanβ term completely regardless of slope angle β'
    ],
    explanation: 'Full saturation increases driving weight via γ_sat while pore pressure reduces effective normal stress to γ′ H cos²β, scaling the frictional component by γ′/γ_sat.',
    isFormula: true
  },
  {
    id: 50039,
    area: 'HPGE',
    subtopic: 'Foundations, Retaining Walls & Slope Stability',
    difficulty: 'Hard',
    question: 'Define Taylor’s Stability Number m and the Culmann/Boussinesq empirical coefficient for vertical stress Δσ_z under a continuous LINE load q:',
    answer: 'm = c / (γ_s H), Stability Factor = 1/m, and Line Load stress Δσ_z = 0.637 q / N',
    choices: [
      
      'm = γ_s H / c, Stability Factor = m, and Line Load stress Δσ_z = 0.477 q / N',
      'm = c / (γ_s H), Stability Factor = 1/m, and Line Load stress Δσ_z = 0.318 q / N',
      'm = c · H / γ_s, Stability Factor = 1/m², and Line Load stress Δσ_z = 0.637 q / Z²',
      'm = c / (γ_s H), Stability Factor = 1/m, and Line Load stress Δσ_z = 0.637 q / N'
    ],
    explanation: 'Taylor’s Stability Number m = c/(γ_s H) is the reciprocal of Stability Factor; Boussinesq line-load stress uses 2/π ≈ 0.637 divided by N = Z[1 + (r/Z)²]².',
    isFormula: true
  },
  {
    id: 50040,
    area: 'HPGE',
    subtopic: 'Consolidation, Shear Strength & Bearing Capacity',
    difficulty: 'Medium',
    question: 'In Terzaghi’s ultimate bearing capacity equations for General Shear Failure, what shape factors multiply cN_c and γBN_γ for Strip, Square, and Circular footings respectively?',
    answer: 'cN_c: (1.0, 1.3, 1.3) and γBN_γ: (0.5, 0.4, 0.3)',
    choices: [
      
      'cN_c: (1.0, 1.3, 1.3) and γBN_γ: (0.5, 0.4, 0.3)',
      'cN_c: (1.0, 1.2, 1.3) and γBN_γ: (0.5, 0.3, 0.4)',
      'cN_c: (1.3, 1.0, 1.3) and γBN_γ: (0.4, 0.5, 0.3)',
      'cN_c: (1.0, 1.3, 1.5) and γBN_γ: (0.5, 0.4, 0.2)'
    ],
    explanation: 'Terzaghi’s equations: Strip = cN_c + qN_q + 0.5γBN_γ; Square = 1.3cN_c + qN_q + 0.4γBN_γ; Circular = 1.3cN_c + qN_q + 0.3γBN_γ.',
    isFormula: true
  },
  {
    id: 50041,
    area: 'HPGE',
    subtopic: 'Consolidation, Shear Strength & Bearing Capacity',
    difficulty: 'Easy',
    question: 'In the Unconfined Compression Test Mohr circle and piezometer standpipe diagram, how are undrained cohesion c and degree of consolidation D_c determined?',
    diagramSrc: '/assets/hpge_formulas/p30_unconfined_mohr.png',
    diagramAlt: 'Unconfined compression Mohr circle tangent from origin',
    answer: 'c = q_u / 2 (with σ_3 = 0) and D_c = [(h_w − h) / h] × 100',
    choices: [
      'c = q_u (with σ_3 = q_u/2) and D_c = [h / h_w] × 100',
      'c = q_u / 2 (with σ_3 = 0) and D_c = [(h_w − h) / h] × 100',
      'c = 2 q_u (with σ_3 = 0) and D_c = [(h_w + h) / h_w] × 100',
      'c = q_u / 2 (with σ_3 = q_u) and D_c = [(h − h_w) / h] × 100'
    ],
    explanation: 'Because lateral confining pressure σ_3 is zero in UCS, major principal stress σ_1 = q_u = P/A and the Mohr circle radius gives c = q_u/2. Standpipe head drop gives consolidation D_c.',
    isFormula: true
  },
  {
    id: 50042,
    area: 'HPGE',
    subtopic: 'Consolidation, Shear Strength & Bearing Capacity',
    difficulty: 'Hard',
    question: 'Compare Boussinesq’s vs Westergaard’s vertical soil stress equations beneath a concentrated point load Q at vertical depth Z and radial offset r:',
    latex: 'P_B = \\frac{0.477\\, Q}{Z^2\\left[1 + (r/Z)^2\\right]^{2.5}}, \\qquad P_W = \\frac{0.318\\, Q}{Z^2\\left[1 + 2(r/Z)^2\\right]^{1.5}}',
    answer: 'Boussinesq uses 0.477 and exponent 2.5; Westergaard uses 0.318, factor 2, and exponent 1.5',
    choices: [
      
      'Boussinesq uses 0.318 and exponent 1.5; Westergaard uses 0.477, factor 2, and exponent 2.5',
      'Boussinesq uses 0.477 and exponent 2.5; Westergaard uses 0.318, factor 2, and exponent 1.5',
      'Boussinesq uses 0.477, factor 2, and exponent 2.5; Westergaard uses 0.318 and exponent 1.5',
      'Boussinesq uses 0.637 and exponent 2.0; Westergaard uses 0.477 and exponent 1.5'
    ],
    explanation: 'Boussinesq assumes homogeneous isotropic soil (3/(2π) ≈ 0.477, power 2.5); Westergaard models stratified soil with zero lateral strain (1/π ≈ 0.318, coefficient 2 on (r/Z)², power 1.5).',
    isFormula: true
  },
  {
    id: 50043,
    area: 'HPGE',
    subtopic: 'Soil Classification, Compaction & Permeability',
    difficulty: 'Medium',
    question: 'Using the 2:1 pile-group stress transfer diagram into soft clay, from what depth along pile length L does the 2:1 stress distribution begin, and what equation relates borrow-pit vs compacted fill volumes?',
    diagramSrc: '/assets/hpge_formulas/p32_soft_clay_2to1.png',
    diagramAlt: 'Pile group 2:1 stress distribution starting at 2/3 L',
    answer: 'Starts at 2/3 L below pile cap; V_req/(1 + e_req) = V_BP/(1 + e_BP)',
    choices: [
      
      'Starts at 1/3 L below pile cap; V_req(1 + e_req) = V_BP(1 + e_BP)',
      'Starts at 1/2 L below pile cap; V_req · e_req = V_BP · e_BP',
      'Starts at 2/3 L below pile cap; V_req/(1 + e_req) = V_BP/(1 + e_BP)',
      'Starts directly at pile tip L; V_req/(1 + n_req) = V_BP/(1 + n_BP)'
    ],
    explanation: 'For friction piles in clay, load spreads at 2V:1H starting from a plane at 2/3 L depth; embankment earthwork conserves solid volume V_s = V_T/(1+e).',
    isFormula: true
  },
  {
    id: 50044,
    area: 'HPGE',
    subtopic: 'Soil Classification, Compaction & Permeability',
    difficulty: 'Easy',
    question: 'In the Flow Net seepage diagram beneath a concrete dam, what is the discharge formula Q for a NON-ISOTROPIC soil (k_x ≠ k_z), and what is the head drop per equipotential step?',
    diagramSrc: '/assets/hpge_formulas/p34_flow_net.png',
    diagramAlt: 'Flow net seepage paths under concrete dam showing Nf and Nd',
    answer: 'Q = √(k_x k_z) · H · (N_f / N_d) and Δh = H / N_d',
    choices: [
      
      'Q = ½(k_x + k_z) · H · (N_d / N_f) and Δh = H / N_f',
      'Q = √(k_x + k_z) · H · (N_f / N_d) and Δh = H · N_d',
      'Q = k_x · H · (N_d / N_f) and Δh = (k_x / k_z) · H',
      'Q = √(k_x k_z) · H · (N_f / N_d) and Δh = H / N_d'
    ],
    explanation: 'Transformed-section flow net analysis in anisotropic soil replaces isotropic k with the geometric mean √(k_x k_z), while total head H divides equally across N_d drops.',
    isFormula: true
  },
  {
    id: 50045,
    area: 'HPGE',
    subtopic: 'Open Channels, Weirs & Pipe Flow',
    difficulty: 'Hard',
    question: 'Which pair correctly states Kutter’s Formula for Chezy coefficient C and the Theoretical Chezy equation relating C to Darcy friction factor f?',
    latex: 'C = \\frac{\\frac{1}{n} + 23 + \\frac{0.00155}{S}}{1 + \\frac{n}{\\sqrt{R}}\\left(23 + \\frac{0.00155}{S}\\right)}',
    answer: 'Numerator & denominator share (23 + 0.00155/S); Theoretical C = √(8g / f)',
    choices: [
      'Numerator & denominator share (23 + 0.00155/S); Theoretical C = √(8g / f)',
      'Denominator uses (23 − 0.00155/S); Theoretical C = √(2g / f)',
      'Numerator uses 1/R and denominator uses n·S; Theoretical C = √(f / 8g)',
      'Numerator & denominator share (87 + 0.00155·S); Theoretical C = 8g / f'
    ],
    explanation: 'In SI units, Kutter’s formula repeats (23 + 0.00155/S) in both numerator and denominator, while equating Darcy-Weisbach and Chezy gives C = √(8g/f).',
    isFormula: true
  },
  {
    id: 50046,
    area: 'HPGE',
    subtopic: 'Open Channels, Weirs & Pipe Flow',
    difficulty: 'Hard',
    question: 'In the Three-Reservoir Problem shown (Case 1 vs Case 2), when initial trial assumption G = EL_B yields Q_A < Q_C, which case governs and what are the energy equations?',
    diagramSrc: '/assets/hpge_formulas/hge_p31_three_reservoir_c2.jpg',
    diagramAlt: 'Three-reservoir Case 2 diagram with grade G below reservoir B',
    answer: 'Case 2 (G < EL_B): Q_A + Q_B = Q_C, with EL_A − EL_B = h_fA − h_fB and EL_B − EL_C = h_fB + h_fC',
    choices: [
      'Case 1 (G > EL_B): Q_A = Q_B + Q_C, with EL_A − EL_B = h_fA + h_fB',
      'Case 2 (G < EL_B): Q_A + Q_B = Q_C, with EL_A − EL_B = h_fA − h_fB and EL_B − EL_C = h_fB + h_fC',
      'Case 2 (G < EL_B): Q_A = Q_B + Q_C, with EL_A − EL_B = h_fA + h_fB and EL_B − EL_C = h_fC − h_fB',
      'Case 1 (G > EL_B): Q_A + Q_B = Q_C, with EL_A − EL_C = h_fA − h_fC'
    ],
    explanation: 'When Q_A < Q_C at G = EL_B, Reservoir A alone cannot meet the demand of C, so hydraulic grade G drops below EL_B (Case 2) and Reservoir B drains toward C: Q_A + Q_B = Q_C.',
    isFormula: true
  },
  {
    id: 50047,
    area: 'HPGE',
    subtopic: 'Open Channels, Weirs & Pipe Flow',
    difficulty: 'Medium',
    question: 'What are the SI Hazen-Williams formulas for open-section Velocity (v) and circular-pipe Discharge (Q)?',
    latex: 'v = 0.8492\\, C\\, R^{0.63}\\, S^{0.54}, \\qquad Q = 0.2785\\, C\\, D^{2.63}\\, S^{0.54}',
    answer: 'v = 0.8492 C R^0.63 S^0.54 and Q = 0.2785 C D^2.63 S^0.54',
    choices: [
      'v = 0.8492 C R^0.63 S^0.54 and Q = 0.2785 C D^2.63 S^0.54',
      'v = 0.2785 C R^0.67 S^0.50 and Q = 0.8492 C D^2.63 S^0.54',
      'v = 1.318 C R^0.63 S^0.54 and Q = 0.432 C D^2.63 S^0.54',
      'v = 0.8492 C R^0.54 S^0.63 and Q = 0.2785 C D^2.50 S^0.54'
    ],
    explanation: 'In SI units, Hazen-Williams gives v = 0.8492 C R^0.63 S^0.54; substituting A = πD²/4 and R = D/4 yields Q = 0.2785 C D^2.63 S^0.54.',
    isFormula: true
  },
  {
    id: 50048,
    area: 'HPGE',
    subtopic: 'Open Channels, Weirs & Pipe Flow',
    difficulty: 'Medium',
    question: 'In the Alternate Stages of Flow curves shown, what occurs at critical depth d_c, and what characterizes Accelerated Flow in an open channel?',
    diagramSrc: '/assets/hpge_formulas/hge_p26_alternate_stages.png',
    diagramAlt: 'Specific Energy d vs E and Discharge d vs Q alternate stage curves',
    answer: 'E_min (fixed Q) and Q_max (fixed E) both occur at d_c; Accelerated flow has d₁ > d₂, v₁ < v₂, and S ≠ S_o',
    choices: [
      'E_max and Q_min both occur at d_c; Accelerated flow has d₁ < d₂, v₁ > v₂, and S = S_o',
      'E_min (fixed Q) and Q_max (fixed E) both occur at d_c; Accelerated flow has d₁ > d₂, v₁ < v₂, and S ≠ S_o',
      'E_min occurs in subcritical flow d₂ while Q_max occurs in supercritical flow d₁',
      'Alternate depths d₁ and d₂ have identical velocities v₁ = v₂ and equal Froude numbers'
    ],
    explanation: 'Critical depth d_c marks minimum specific energy E_min for given Q and maximum discharge Q_max for given E. In accelerated non-uniform flow, depth decreases (d₁ > d₂) as velocity rises (v₁ < v₂) and EGL is not parallel to bed (S ≠ S_o).',
    isFormula: true
  },
  {
    id: 50049,
    area: 'HPGE',
    subtopic: 'Open Channels, Weirs & Pipe Flow',
    difficulty: 'Medium',
    question: 'For the trapezoidal canal shown, what equation relates bed width b to depth d and side-slope angle θ for minimum seepage?',
    diagramSrc: '/assets/hpge_formulas/hge_p17_min_seepage_trapezoid.png',
    diagramAlt: 'Trapezoidal canal cross section showing bed width b, depth d, and angle theta',
    answer: 'b = 4 d tan(θ / 2)',
    choices: [
      'b = 2 d tan(θ)',
      'b = 4 d tan(θ / 2)',
      'b = d sin(θ / 2)',
      'b = 4 d cot(θ)'
    ],
    explanation: 'For a minimum-seepage trapezoidal canal of water depth d and side-slope angle θ, the optimal bed width is b = 4 d tan(θ/2).',
    isFormula: true
  },
  {
    id: 50050,
    area: 'HPGE',
    subtopic: 'Soil Classification, Compaction & Permeability',
    difficulty: 'Medium',
    question: 'In a field Sand Cone Test and laboratory Pycnometer Specific Gravity Test, which pair correctly defines hole volume V_soil and solid specific gravity G_s?',
    latex: 'm_{T_b} = m_{T_a} + m_{sc} + m_{SH}, \\qquad G_s = \\frac{\\text{Dry} - \\text{Empty}}{(\\text{Water} - \\text{Empty}) - (\\text{Sat} - \\text{Dry})}',
    answer: 'V_soil = m_SH / ρ_d(sand) and G_s = (Dry − Empty) / [(Water − Empty) − (Sat − Dry)]',
    choices: [
      'V_soil = (m_Tb − m_Ta) / ρ_d(sand) and G_s = (Dry − Empty) / (Sat − Water)',
      'V_soil = m_SH / ρ_d(sand) and G_s = (Dry − Empty) / [(Water − Empty) − (Sat − Dry)]',
      'V_soil = m_sc / ρ_d(sand) and G_s = (Sat − Empty) / [(Water − Empty) + (Dry − Empty)]',
      'V_soil = m_soil / m_SH and G_s = (Water − Empty) / (Sat − Dry)'
    ],
    explanation: 'Only sand inside the excavated hole (m_SH = m_Tb − m_Ta − m_sc) divided by calibrated sand dry density gives hole volume V_soil; pycnometer G_s compares dry soil mass (Dry − Empty) to displaced water mass.',
    isFormula: true
  },
  {
    id: 50051,
    area: 'HPGE',
    subtopic: 'Soil Classification, Compaction & Permeability',
    difficulty: 'Medium',
    question: 'In Hydrometer Analysis using Stokes’ Law, which equations give terminal settling velocity v, particle diameter D, and hydrometer constant K?',
    latex: 'v = \\frac{\\rho_s - \\rho_w}{18\\,\\eta} D^2, \\qquad D = K \\sqrt{\\frac{L}{t}}, \\qquad K = \\sqrt{\\frac{30\\,\\eta}{G_s - 1}}',
    answer: 'v = [(ρ_s − ρ_w)/(18η)] D², D = K√(L/t), and K = √[30η / (G_s − 1)]',
    choices: [
      'v = [(ρ_s − ρ_w)/(18η)] D², D = K√(L/t), and K = √[30η / (G_s − 1)]',
      'v = [(ρ_s + ρ_w)/(9η)] D², D = K(L/t), and K = √[18η / (G_s + 1)]',
      'v = [18η/(ρ_s − ρ_w)] D, D = K√(t/L), and K = √[G_s − 1 / (30η)]',
      'v = [(ρ_s − ρ_w)/(30η)] D², D = K√(L/t), and K = √[18η / (G_s − 1)]'
    ],
    explanation: 'Stokes’ Law relates settling velocity to (ρ_s − ρ_w)D² / (18η); converting units for L (cm), t (min), and D (mm) produces D = K√(L/t) with K = √[30η/(G_s − 1)].',
    isFormula: true
  },
  {
    id: 50052,
    area: 'HPGE',
    subtopic: 'Soil Classification, Compaction & Permeability',
    difficulty: 'Hard',
    question: 'Which set correctly states Toughness Index (TI), Shrinkage Index (SI), Linear Shrinkage (LS), and the AASHTO Group Index rule for subgroups A-2-6 and A-2-7?',
    latex: 'TI = \\frac{PI}{FI}, \\qquad SI = PL - SL, \\qquad LS = 1 - \\left(\\frac{1}{VS + 1}\\right)^{1/3}',
    answer: 'TI = PI / FI, SI = PL − SL, LS = 1 − [1/(VS + 1)]^(1/3), and GI uses ONLY the 2nd term for A-2-6 & A-2-7',
    choices: [
      'TI = FI / PI, SI = LL − SL, LS = 1 − (VS + 1)^(1/3), and GI uses only the 1st term for A-2-6 & A-2-7',
      'TI = PI / FI, SI = PL − SL, LS = 1 − [1/(VS + 1)]^(1/3), and GI uses ONLY the 2nd term for A-2-6 & A-2-7',
      'TI = PI × FI, SI = PI − SL, LS = [VS / (VS + 1)]^(1/3), and GI is always 0 for all A-2 soils',
      'TI = CI / FI, SI = PL − LL, LS = 1 − 1/(VS + 1), and GI drops PI − 10 for A-2-6 & A-2-7'
    ],
    explanation: 'Toughness index is PI/FI, shrinkage index is PL − SL, linear shrinkage from volumetric shrinkage VS (decimal) is 1 − (1/(VS+1))^(1/3), and AASHTO A-2-6/A-2-7 soils retain only the second GI term 0.01(F₂₀₀−15)(PI−10).',
    isFormula: true
  },
  {
    id: 50053,
    area: 'HPGE',
    subtopic: 'Consolidation, Shear Strength & Bearing Capacity',
    difficulty: 'Medium',
    question: 'In Terzaghi’s Ultimate Bearing Capacity equation for a RECTANGULAR footing of width B and length L under general shear failure, what are the shape factors on the cohesion and unit-weight terms?',
    latex: 'q_{\\text{ult}} = \\left(1 + \\frac{0.3 B}{L}\\right) c N_c + q N_q + \\left(0.5 - \\frac{0.1 B}{L}\\right)\\gamma B N_\\gamma',
    answer: '(1 + 0.3B/L) on c·N_c and (0.5 − 0.1B/L) on γ·B·N_γ',
    choices: [
      '(1 + 0.3B/L) on c·N_c and (0.5 − 0.1B/L) on γ·B·N_γ',
      '(1 − 0.3B/L) on c·N_c and (0.5 + 0.1B/L) on γ·B·N_γ',
      '(1 + 0.4B/L) on c·N_c and (0.5 − 0.2B/L) on γ·B·N_γ',
      '1.3 on c·N_c and 0.4 on γ·B·N_γ regardless of L'
    ],
    explanation: 'Checking B = L recovers the square footing factors (1 + 0.3 = 1.3 and 0.5 − 0.1 = 0.4), while L → ∞ recovers the strip footing (1.0 and 0.5).',
    isFormula: true
  },
  {
    id: 50054,
    area: 'HPGE',
    subtopic: 'Consolidation, Shear Strength & Bearing Capacity',
    difficulty: 'Medium',
    question: 'In bearing capacity water-table correction, when the Groundwater Table lies at depth D below the footing base within width B (Case III: 0 ≤ D ≤ B), what are q and effective γ?',
    latex: '\\gamma_{\\text{ave}} = \\frac{1}{B}\\left[\\gamma D + \\gamma\'(B - D)\\right]',
    answer: 'q = γ D_f and γ_ave = (1/B)[γ D + γ′(B − D)]',
    choices: [
      'q = γ′ D_f and γ_ave = (1/B)[γ′ D + γ(B − D)]',
      'q = γ D_f and γ_ave = (1/B)[γ D + γ′(B − D)]',
      'q = γ(D_f − D) + γ′ D and γ_eff = γ′',
      'q = γ D_f and γ_eff = γ (no correction needed inside B)'
    ],
    explanation: 'When GWT sits below the footing base, overburden q = γ D_f above base is unaffected, while the failure zone unit weight is interpolated over depth B: γ_ave = [γD + γ′(B−D)]/B.',
    isFormula: true
  },
  {
    id: 50055,
    area: 'HPGE',
    subtopic: 'Consolidation, Shear Strength & Bearing Capacity',
    difficulty: 'Hard',
    question: 'What is the net ultimate bearing capacity formula for a Mat Foundation resting on Saturated Clay (φ = 0°) with undrained cohesion c_u?',
    latex: 'q_{\\text{ult(net)}} = 5.14\\, c_u\\left(1 + \\frac{0.195\\, B}{L}\\right)\\left(1 + \\frac{0.4\\, D_f}{B}\\right)',
    answer: '5.14 c_u (1 + 0.195 B/L)(1 + 0.4 D_f/B)',
    choices: [
      '5.14 c_u (1 + 0.195 B/L)(1 + 0.4 D_f/B)',
      '5.7 c_u (1 + 0.3 B/L)(1 + 0.2 D_f/B)',
      '5.14 c_u (1 − 0.195 L/B)(1 + 0.4 B/D_f)',
      '(N_60 / 0.08)(1 + 0.33 D_f/B)(s_e / 25)'
    ],
    explanation: 'Skempton’s saturated clay mat bearing capacity uses N_c = 5.14 c_u modified by plan shape factor (1 + 0.195 B/L) and embedment factor (1 + 0.4 D_f/B).',
    isFormula: true
  },
  {
    id: 50056,
    area: 'HPGE',
    subtopic: 'Foundations, Retaining Walls & Slope Stability',
    difficulty: 'Medium',
    question: 'In Culmann’s slope stability analysis, what is the critical failure plane angle θ_cr, and how are partial Factors of Safety FS_c, FS_F, and FS_H defined?',
    latex: '\\theta_{cr} = \\frac{\\beta + \\phi_d}{2}, \\qquad FS_c = \\frac{c}{c_d}, \\qquad FS_F = \\frac{\\tan\\phi}{\\tan\\phi_d}, \\qquad FS_H = \\frac{H_{cr}}{H_{\\text{act}}}',
    answer: 'θ_cr = (β + φ_d)/2, FS_c = c/c_d, FS_F = tanφ/tanφ_d, and FS_H = H_cr / H_act',
    choices: [
      'θ_cr = 45° + φ_d/2, FS_c = c_d/c, FS_F = φ/φ_d, and FS_H = H_act / H_cr',
      'θ_cr = (β + φ_d)/2, FS_c = c/c_d, FS_F = tanφ/tanφ_d, and FS_H = H_cr / H_act',
      'θ_cr = (β − φ_d)/2, FS_c = c/c_d, FS_F = sinφ/sinφ_d, and FS_H = H_cr / H_act',
      'θ_cr = β + φ_d, FS_c = c/c_d, FS_F = tanφ/tanφ_d, and FS_H = H_act / H_cr'
    ],
    explanation: 'Culmann critical failure angle bisects slope angle β and developed friction φ_d: θ_cr = (β + φ_d)/2, while cohesion, friction, and height safety factors divide available capacity by developed/actual values.',
    isFormula: true
  }
];
