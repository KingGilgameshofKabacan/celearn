import { CEQuestion } from '../types';

export const PSAD_FORMULA_QUESTIONS: CEQuestion[] = [
  // =========================================================================
  // ENGINEERING MECHANICS (Q1 - Q7)
  // =========================================================================
  {
    id: 51001,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Easy',
    question: 'For a parabolic cable supporting a uniform horizontal distributed load w, where do the minimum and maximum tensile forces occur?',
    diagramSrc: '/assets/psad_formulas/p02_parabolic_cable.png',
    diagramAlt: 'Parabolic cable carrying uniform horizontal load with T_0 at lowest point',
    answer: 'Minimum at the lowest point (sag vertex) and maximum at the steepest support slope',
    choices: [
      'Minimum at the lowest point (sag vertex) and maximum at the steepest support slope',
      'Maximum at the lowest point (sag vertex) and minimum at the steepest support slope',
      'Equal constant tension throughout every segment regardless of cable slope',
      'Zero horizontal tension at the lowest point and minimum total tension at quarter-span'
    ],
    explanation: 'Because the horizontal force component H = T_0 stays constant everywhere along the parabolic profile while vertical shear adds T_v, total cable tension T = √(T_0² + V²) is minimum at zero slope and maximum at the steepest support.',
    isFormula: true
  },
  {
    id: 51002,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Medium',
    question: 'In symmetrical catenary cable analysis parameterized by c = T_0 / w, which fundamental relationship links cable elevation y from the directrix, catenary parameter c, and arc length s?',
    diagramSrc: '/assets/psad_formulas/p03_symmetrical_catenary.png',
    diagramAlt: 'Symmetrical catenary coordinate system with directrix distance c',
    answer: 'y² = c² + s², with T = w y and T_0 = w c',
    choices: [
      's² = y² + c², with T = w c and T_0 = w y',
      'y² = c² + s², with T = w y and T_0 = w c',
      'c² = y² + s², with T = w s and T_0 = w y',
      'y = c · sinh(x/c) and s = c · cosh(x/c)'
    ],
    explanation: 'Since y = c cosh(x/c) and s = c sinh(x/c), cosh²(x/c) − sinh²(x/c) = 1 directly gives y² = c² + s², while total tension at elevation y equals T = w y.',
    isFormula: true
  },
  {
    id: 51003,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Easy',
    question: 'A particle moves along a curved path of instantaneous radius R at speed v with tangential acceleration a_t. Which formula gives its total acceleration magnitude a?',
    diagramSrc: '/assets/psad_formulas/p04_curvilinear_motion.png',
    diagramAlt: 'Curvilinear motion tangential and normal acceleration vectors',
    answer: 'a = √((v²/R)² + a_t²)',
    choices: [
      'a = (v²/R) + a_t',
      'a = √((v/R²)² + a_t²)',
      'a = √((v²/R)² + a_t²)',
      'a = √((v·R)² + a_t²)'
    ],
    explanation: 'Normal (centripetal) acceleration a_n = v²/R acts perpendicular to tangential acceleration a_t, so total acceleration magnitude is √(a_n² + a_t²).',
    isFormula: true
  },
  {
    id: 51004,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Easy',
    question: 'For a flat belt wrapped n complete turns around a fixed pulley with static friction coefficient μ_s, what ratio relates the tight-side tension T_2 to the slack-side tension T_1 at impending slip?',
    latex: '\\frac{T_2}{T_1} = e^{\\beta\\mu_s}',
    answer: 'T_2 / T_1 = e^(2π n μ_s)',
    choices: [
      'T_2 / T_1 = 2π n μ_s',
      'T_2 / T_1 = e^(n μ_s / 2π)',
      'T_2 / T_1 = ln(2π n μ_s)',
      'T_2 / T_1 = e^(2π n μ_s)'
    ],
    explanation: 'With contact angle β = 2πn radians for n full turns, the capstan belt-friction equation gives T_2/T_1 = e^(β μ_s) = e^(2π n μ_s).',
    isFormula: true
  },
  {
    id: 51005,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Medium',
    question: 'In projectile motion launched at initial speed v_i and angle θ above level ground, what is the maximum horizontal range x_max before returning to the launch elevation?',
    answer: 'x_max = (v_i² sin 2θ) / g',
    choices: [
      'x_max = (v_i² sin 2θ) / g',
      'x_max = (v_i sin θ)² / (2g)',
      'x_max = (v_i² cos² θ) / g',
      'x_max = (2 v_i² sin θ) / g'
    ],
    explanation: 'Flight time to return to level ground is t = 2(v_i sinθ)/g; multiplying by horizontal speed v_i cosθ gives x_max = v_i²(2 sinθ cosθ)/g = (v_i² sin 2θ)/g.',
    isFormula: true
  },
  {
    id: 51006,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Easy',
    question: 'During a two-body collinear impact with velocities v_1, v_2 before collision and v_1′, v_2′ after collision, which statement correctly defines the coefficient of restitution e?',
    latex: 'e = -\\frac{v_2\' - v_1\'}{v_2 - v_1}',
    answer: 'e = 1 denotes a perfectly elastic impact and e = 0 denotes a perfectly plastic impact',
    choices: [
      'e = 0 denotes a perfectly elastic impact and e = 1 denotes a perfectly plastic impact',
      'e = 1 denotes a perfectly elastic impact and e = 0 denotes a perfectly plastic impact',
      'e = 0.5 denotes conservation of kinetic energy without momentum transfer',
      'e is always greater than 1.0 whenever the two masses coalesce after contact'
    ],
    explanation: 'Coefficient of restitution e measures relative separation speed over relative approach speed: e = 1 for perfectly elastic bounce (kinetic energy conserved) and e = 0 when bodies stick together.',
    isFormula: true
  },
  {
    id: 51007,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Medium',
    question: 'When analyzing an a–t (acceleration vs time) graph in rectilinear motion, how is the change in displacement Δs over time interval t computed graphically?',
    answer: 'Δs = v_0 t + change in the first moment of area of the a–t diagram',
    choices: [
      'Δs = change in area directly under the a–t diagram',
      'Δs = slope of the tangent drawn on the a–t diagram',
      'Δs = v_0 t + change in the first moment of area of the a–t diagram',
      'Δs = change in second moment of area divided by v_0'
    ],
    explanation: 'Under the area-moment method for kinematics graphs, Δv = Area_(a–t) while Δs = v_0 t + Δ(moment of a–t area about end time t).',
    isFormula: true
  },

  // =========================================================================
  // REINFORCED CONCRETE DESIGN (Q8 - Q20)
  // =========================================================================
  {
    id: 51008,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Easy',
    question: 'Under NSCP / ACI flexural design, how is the Whitney rectangular stress block depth factor β₁ calculated for concrete compressive strengths f_c’ > 28 MPa?',
    diagramSrc: '/assets/psad_formulas/p08_rcd_stress_block.png',
    diagramAlt: 'RC beam strain profile and Whitney rectangular stress block diagram',
    answer: 'β₁ = 0.85 − 0.05(f_c’ − 28)/7, bounded below at 0.65',
    choices: [
      'β₁ = 0.85 − 0.05(f_c’ − 28)/7, bounded above at 0.90',
      'β₁ = 0.85 + 0.05(f_c’ − 28)/7, bounded above at 0.95',
      'β₁ = 0.85 − 0.02(f_c’ − 21)/7, bounded below at 0.60',
      'β₁ = 0.85 − 0.05(f_c’ − 28)/7, bounded below at 0.65'
    ],
    explanation: 'β₁ remains 0.85 for f_c’ ≤ 28 MPa and decreases linearly by 0.05 for every 7 MPa above 28 MPa, with a minimum floor of 0.65 (reached at f_c’ ≥ 56 MPa).',
    isFormula: true
  },
  {
    id: 51009,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    question: 'In a rectangular reinforced concrete beam, at what neutral axis depth ratio c / d_t does a section reach the tension-controlled threshold (ε_t = 0.005, φ = 0.90)?',
    latex: 'c = \\frac{600\\, d_t}{600 + f_s}',
    answer: 'c = (3/8) d_t',
    choices: [
      'c = (3/8) d_t',
      'c = (5/8) d_t',
      'c = (3/5) d_t',
      'c = (1/2) d_t'
    ],
    explanation: 'Setting ε_c = 0.003 and net tensile strain ε_t = 0.005 (elastic stress 1000 MPa) yields c/d_t = 0.003/(0.003+0.005) = 600/(600+1000) = 3/8 = 0.375.',
    isFormula: true
  },
  {
    id: 51010,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    question: 'Referring to the strength reduction factor φ graph, which transition-zone interpolation equation applies to tied ("Other") flexural/compression-transition sections?',
    diagramSrc: '/assets/psad_formulas/p11_phi_transition_chart.png',
    diagramAlt: 'Strength reduction factor phi transition zone chart for spiral vs other',
    answer: 'φ = 0.65 + 0.25[(ε_t − ε_ty) / (0.005 − ε_ty)]',
    choices: [
      'φ = 0.75 + 0.15[(ε_t − ε_ty) / (0.005 − ε_ty)]',
      'φ = 0.65 + 0.25[(ε_t − ε_ty) / (0.005 − ε_ty)]',
      'φ = 0.65 + 0.15[(ε_t − 0.005) / (ε_ty − 0.005)]',
      'φ = 0.90 − 0.25[(ε_t − ε_ty) / (0.005 − ε_ty)]'
    ],
    explanation: 'For "Other" (tied) sections, φ rises linearly from 0.65 at ε_ty to 0.90 at ε_t = 0.005 (span 0.25), whereas spiral sections rise from 0.75 to 0.90 (span 0.15).',
    isFormula: true
  },
  {
    id: 51011,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Easy',
    question: 'Which two expressions govern the minimum flexural steel reinforcement ratio ρ_min in reinforced concrete beams depending on whether f_c’ exceeds 31.6 MPa?',
    answer: 'ρ_min = 0.25√f_c’ / f_y for f_c’ > 31.6 MPa, and 1.4 / f_y for f_c’ < 31.6 MPa',
    choices: [
      'ρ_min = 1.4 / f_y for f_c’ > 31.6 MPa, and 0.25√f_c’ / f_y for f_c’ < 31.6 MPa',
      'ρ_min = 0.17√f_c’ / f_y for f_c’ > 31.6 MPa, and 0.85 / f_y for f_c’ < 31.6 MPa',
      'ρ_min = 0.25√f_c’ / f_y for f_c’ > 31.6 MPa, and 1.4 / f_y for f_c’ < 31.6 MPa',
      'ρ_min = 0.35√f_c’ / f_y regardless of concrete compressive strength'
    ],
    explanation: 'NSCP requires ρ_min = max(0.25√f_c’/f_y, 1.4/f_y); the boundary where 0.25√f_c’ equals 1.4 occurs near f_c’ ≈ 31.4–31.6 MPa.',
    isFormula: true
  },
  {
    id: 51012,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Hard',
    question: 'In doubly reinforced beam design (see stress-couple diagram), what equilibrium equation solves for the required compression steel area A_s’ when accounting for concrete displaced by the compression bars?',
    diagramSrc: '/assets/psad_formulas/p12_doubly_reinforced_beam.png',
    diagramAlt: 'Doubly reinforced beam internal force couples M_n1 and M_n2',
    answer: 'A_s’(f_s’ − 0.85 f_c’) = A_s2 f_y',
    choices: [
      'A_s’(f_s’ + 0.85 f_c’) = A_s2 f_y',
      'A_s’ f_y = A_s1 (0.85 f_c’)',
      'A_s’(f_s’ − 0.85 f_c’) = (A_s1 + A_s2) f_y',
      'A_s’(f_s’ − 0.85 f_c’) = A_s2 f_y'
    ],
    explanation: 'The concrete compression block of area A_s’ displaced by the compression bars carries 0.85 f_c’, so net compression steel force C_s = A_s’(f_s’ − 0.85 f_c’) balances extra tension T_2 = A_s2 f_y.',
    isFormula: true
  },
  {
    id: 51013,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    question: 'How does NSCP shear design modify maximum vertical stirrup spacing s_max once required stirrup shear V_s exceeds (1/3)√f_c’ b_w d?',
    latex: 's = \\frac{A_v f_{yt} d}{V_s}',
    answer: 's_max tightens from min(d/2, 600 mm) to min(d/4, 300 mm)',
    choices: [
      's_max tightens from min(d/2, 600 mm) to min(d/4, 300 mm)',
      's_max increases from min(d/4, 300 mm) to min(d/2, 600 mm)',
      'Stirrups are no longer permitted and concrete thickness must double',
      's_max tightens from min(d/3, 450 mm) to min(d/6, 150 mm)'
    ],
    explanation: 'When V_s ≤ (1/3)√f_c’ b_w d, s_max = min(d/2, 600 mm); between 1/3 and 2/3 √f_c’ b_w d, s_max halves to min(d/4, 300 mm). Beyond 2/3 √f_c’ b_w d, section dimensions must be enlarged.',
    isFormula: true
  },
  {
    id: 51014,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    question: 'When axial force N_u acts on a concrete beam, what denominators scale N_u/A_g inside V_c for axial compression versus axial tension?',
    answer: '14 A_g for axial compression (+) and 3.5 A_g for axial tension (−)',
    choices: [
      '3.5 A_g for axial compression (+) and 14 A_g for axial tension (−)',
      '14 A_g for axial compression (+) and 3.5 A_g for axial tension (−)',
      '7 A_g for axial compression (+) and 1.4 A_g for axial tension (−)',
      '20 A_g for axial compression (+) and 10 A_g for axial tension (−)'
    ],
    explanation: 'NSCP adjusts V_c = 0.17[1 + N_u/(14 A_g)]λ√f_c’ b_w d under compression, while tension reduces V_c much more aggressively with 0.17[1 + N_u/(3.5 A_g)]λ√f_c’ b_w d (with N_u negative).',
    isFormula: true
  },
  {
    id: 51015,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Easy',
    question: 'What nominal capacity factor and strength reduction factor φ apply to Tied versus Spiral reinforced concrete columns under pure compression?',
    latex: 'P_0 = 0.85 f_c\'(A_g - A_{st}) + A_{st} f_y',
    answer: 'Tied: P_n = 0.80 P_0 (φ = 0.65); Spiral: P_n = 0.85 P_0 (φ = 0.75)',
    choices: [
      'Tied: P_n = 0.85 P_0 (φ = 0.75); Spiral: P_n = 0.80 P_0 (φ = 0.65)',
      'Tied: P_n = 0.80 P_0 (φ = 0.75); Spiral: P_n = 0.85 P_0 (φ = 0.65)',
      'Tied: P_n = 0.80 P_0 (φ = 0.65); Spiral: P_n = 0.85 P_0 (φ = 0.75)',
      'Tied: P_n = 0.75 P_0 (φ = 0.70); Spiral: P_n = 0.90 P_0 (φ = 0.80)'
    ],
    explanation: 'Spiral columns exhibit superior confinement and toughness, earning both a higher minimum-eccentricity cap (0.85 P_0 vs 0.80 P_0) and higher φ (0.75 vs 0.65).',
    isFormula: true
  },
  {
    id: 51016,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Hard',
    question: 'In Bresler’s Reciprocal Load Equation for a column subjected to biaxial bending, how does nominal axial load capacity P_n relate to uniaxial capacities P_nx, P_ny, and pure axial capacity P_0?',
    answer: '1/P_n = 1/P_nx + 1/P_ny − 1/P_0',
    choices: [
      '1/P_n = 1/P_nx + 1/P_ny + 1/P_0',
      '1/P_n = 1/P_nx + 1/P_ny − 1/P_0',
      'P_n = P_nx + P_ny − P_0',
      '1/P_n = √((1/P_nx)² + (1/P_ny)²) − 1/P_0'
    ],
    explanation: 'Bresler’s reciprocal interaction approximates the failure surface as 1/P_n = 1/P_nx + 1/P_ny − 1/P_0 (valid for P_n ≥ 0.10 P_0).',
    isFormula: true
  },
  {
    id: 51017,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    question: 'Referring to the bi-axially loaded rectangular footing plan (dimensions B × D, eccentricities e_x and e_y), what formula calculates soil bearing pressure q at any corner?',
    diagramSrc: '/assets/psad_formulas/p18_biaxial_footing.png',
    diagramAlt: 'Biaxial footing plan showing eccentricities e_x and e_y across dimensions B and D',
    answer: 'q = (P / BD)(1 ± 6e_x / B ± 6e_y / D)',
    choices: [
      'q = (P / BD)(1 ± 3e_x / B ± 3e_y / D)',
      'q = (P / BD)(1 ± 6e_x / D ± 6e_y / B)',
      'q = (P / BD)(1 ± 6e_x / B ± 6e_y / D)',
      'q = (P / BD)(1 ± 12e_x / B ± 12e_y / D)'
    ],
    explanation: 'Combining axial stress P/A with bending stresses M_y x / I_y and M_x y / I_x on a B × D rectangle gives q = (P/BD)(1 ± 6e_x/B ± 6e_y/D), with (+) on corners toward the load eccentricity.',
    isFormula: true
  },
  {
    id: 51018,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    question: 'What are the default effective depths d for a reinforced concrete spread footing when checking One-Way (Beam) Shear versus Two-Way (Punching) Shear?',
    answer: 'One-way: d = t − cc − 0.5 d_b; Punching: d = t − cc − d_b',
    choices: [
      'One-way: d = t − cc − d_b; Punching: d = t − cc − 0.5 d_b',
      'One-way: d = t − cc − 0.5 d_b; Punching: d = t − cc − d_b',
      'One-way: d = t − cc − 1.5 d_b; Punching: d = t − cc − 0.5 d_b',
      'Both one-way and punching use d = t − cc − 1.0 d_b identically'
    ],
    explanation: 'One-way shear evaluates the governing direction at the outer mat centroid (t − cc − 0.5 d_b), whereas two-way punching acts around all four faces simultaneously and uses the average depth of both orthogonal layers (t − cc − d_b).',
    isFormula: true
  },
  {
    id: 51019,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    question: 'In the NSCP three-case concrete punching shear strength V_c table, what values of α_s apply to interior, edge, and corner columns?',
    diagramSrc: '/assets/psad_formulas/p19_punching_vc_table.png',
    diagramAlt: 'Three-case punching shear strength V_c table',
    answer: 'α_s = 40 (interior), 30 (edge), and 20 (corner)',
    choices: [
      'α_s = 20 (interior), 30 (edge), and 40 (corner)',
      'α_s = 40 (interior), 25 (edge), and 15 (corner)',
      'α_s = 30 (interior), 20 (edge), and 10 (corner)',
      'α_s = 40 (interior), 30 (edge), and 20 (corner)'
    ],
    explanation: 'Punching shear strength V_c = (1/12)(2 + α_s d / b_o)λ√f_c’ b_o d assigns α_s = 40 for 4-sided interior columns, 30 for 3-sided edge columns, and 20 for 2-sided corner columns.',
    isFormula: true
  },
  {
    id: 51020,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Hard',
    question: 'When designing a reinforced concrete T-beam where compression depth exceeds flange thickness (a > t_f), what nominal flexural strength formula M_n balances flange outstand and web compression forces?',
    diagramSrc: '/assets/psad_formulas/p22_tbeam_section.png',
    diagramAlt: 'T-beam cross section showing flange outstands and moment lever arms',
    answer: 'M_n = 0.85 f_c’[ t_f(b_f − b_w)(d − t_f/2) + a b_w (d − a/2) ]',
    choices: [
      'M_n = 0.85 f_c’[ t_f(b_f − b_w)(d − t_f/2) + a b_w (d − a/2) ]',
      'M_n = 0.85 f_c’[ a b_f (d − a/2) − t_f b_w (d − t_f/2) ]',
      'M_n = 0.85 f_c’[ t_f b_w (d − t_f/2) + a(b_f − b_w)(d − a/2) ]',
      'M_n = 0.85 f_c’ b_f a (d − t_f/2)'
    ],
    explanation: 'When a > t_f, the T-shaped compression zone decomposes into overhanging flange rectangles t_f(b_f − b_w) with lever arm (d − t_f/2) plus the full rectangular web a b_w with lever arm (d − a/2).',
    isFormula: true
  },

  // =========================================================================
  // THEORY OF STRUCTURES (Q21 - Q28)
  // =========================================================================
  {
    id: 51021,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Easy',
    question: 'Using the closed-loop rule for planar 2D rigid frames (as illustrated in the diagram), how is the degree of static indeterminacy DI computed?',
    diagramSrc: '/assets/psad_formulas/p24_2d_frame_loops.png',
    diagramAlt: '2D rigid portal frame with two closed loops and fixed bases',
    answer: 'DI = 3(number of closed loops) − internal releases',
    choices: [
      'DI = 2(number of closed loops) − internal releases',
      'DI = 3(number of closed loops) + internal releases',
      'DI = 3(number of closed loops) − internal releases',
      'DI = number of members + reactions − 3(joints)'
    ],
    explanation: 'Each closed rigid loop (including the fixed ground between fixed supports) adds 3 static indeterminacies, reduced by 1 per internal hinge or 2 per axial/shear release.',
    isFormula: true
  },
  {
    id: 51022,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Easy',
    question: 'In conjugate beam analysis, how do an Interior Roller/Pin Support and a Fixed Support on a real beam transform?',
    diagramSrc: '/assets/psad_formulas/p24_conjugate_beam_supports.png',
    diagramAlt: 'Real beam vs Conjugate beam support transformation table',
    answer: 'Interior Roller/Pin → Internal Hinge; Fixed Support → Free End',
    choices: [
      'Interior Roller/Pin → Fixed Support; Fixed Support → End Roller',
      'Interior Roller/Pin → Free End; Fixed Support → Internal Hinge',
      'Interior Roller/Pin → Internal Hinge; Fixed Support → End Pin',
      'Interior Roller/Pin → Internal Hinge; Fixed Support → Free End'
    ],
    explanation: 'Real interior support has zero deflection (conjugate M = 0) but continuous nonzero slope (conjugate V ≠ 0), matching an internal hinge; real fixed end has zero slope and deflection (conjugate V = 0, M = 0), matching a free end.',
    isFormula: true
  },
  {
    id: 51023,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Easy',
    question: 'In Hardy Cross Moment Distribution, what stiffness factor k and distribution factor DF apply to a prismatic beam whose far end is hinged/roller supported?',
    answer: 'Modified stiffness k = (3/4)(4EI/L) = 3EI/L, and DF = 1.0 at the hinged end',
    choices: [
      'Modified stiffness k = 3EI/L, and DF = 0.0 at the hinged end',
      'Modified stiffness k = (3/4)(4EI/L) = 3EI/L, and DF = 1.0 at the hinged end',
      'Standard stiffness k = 4EI/L, and carry-over factor = +0.5',
      'Modified stiffness k = 2EI/L, and DF = 0.5 at the hinged end'
    ],
    explanation: 'Using modified stiffness 3/4 k = 3EI/L eliminates carry-over back from an outer pin/roller; an external hinged/roller/overhang end has DF = 1.0 (fixed end has DF = 0).',
    isFormula: true
  },
  {
    id: 51024,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Medium',
    question: 'In the Superposition Method, compare the maximum midspan deflections of a simply supported beam carrying a midspan point load P (Case 1) versus a uniform load w_0 (Case 3).',
    diagramSrc: '/assets/psad_formulas/p26_superposition_case1.png',
    diagramAlt: 'Superposition Case 1 midspan point load deflection equations',
    answer: 'Case 1: PL³ / (48EI); Case 3: 5 w_0 L⁴ / (384EI)',
    choices: [
      'Case 1: PL³ / (48EI); Case 3: 5 w_0 L⁴ / (384EI)',
      'Case 1: PL³ / (16EI); Case 3: w_0 L⁴ / (24EI)',
      'Case 1: PL³ / (3EI); Case 3: w_0 L⁴ / (8EI)',
      'Case 1: PL³ / (48EI); Case 3: w_0 L⁴ / (185EI)'
    ],
    explanation: 'Simply supported midspan load deflects PL³/(48EI) with end slope PL²/(16EI); full UDL deflects 5 w_0 L⁴/(384EI) with end slope w_0 L³/(24EI).',
    isFormula: true
  },
  {
    id: 51025,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Medium',
    question: 'In the Three-Moment Equation, what span loading factor (6Aā/L = 6Ab̄/L) corresponds to a full uniform distributed load w_0 versus a symmetrical triangular load peaking at w_0 at midspan?',
    diagramSrc: '/assets/psad_formulas/p29_three_moment_loading_table.png',
    diagramAlt: 'Three-Moment Equation 6Aa/L and 6Ab/L span loading table',
    answer: 'Full UDL: w_0 L³ / 4; Symmetrical Triangular: 5 w_0 L³ / 32',
    choices: [
      'Full UDL: w_0 L³ / 12; Symmetrical Triangular: 5 w_0 L³ / 96',
      'Full UDL: w_0 L³ / 8; Symmetrical Triangular: w_0 L³ / 16',
      'Full UDL: w_0 L³ / 4; Symmetrical Triangular: 5 w_0 L³ / 32',
      'Full UDL: w_0 L³ / 24; Symmetrical Triangular: 8 w_0 L³ / 60'
    ],
    explanation: 'For simple spans of length L, the elastic-weight loading factors are 6Aā/L = w_0 L³/4 for uniform load and 5 w_0 L³/32 for a symmetrical gable triangle.',
    isFormula: true
  },
  {
    id: 51026,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Medium',
    question: 'From the Fixed-End Moments chart, what are FEM_AB and FEM_BA for a fixed-fixed beam under (1) a left-heavy linear triangular load w and (2) equal third-point loads P at L/3 and 2L/3?',
    diagramSrc: '/assets/psad_formulas/p40_fem_point_distributed_table.png',
    diagramAlt: 'Fixed-End Moments chart for point loads, moments, and distributed loads',
    answer: 'Triangular: wL²/20 (heavy end) & wL²/30 (zero end); Third-point loads: 2PL/9 at both ends',
    choices: [
      'Triangular: wL²/15 & wL²/30; Third-point loads: PL/3 at both ends',
      'Triangular: wL²/20 (heavy end) & wL²/30 (zero end); Third-point loads: 2PL/9 at both ends',
      'Triangular: wL²/12 & wL²/20; Third-point loads: 5PL/16 at both ends',
      'Triangular: 5wL²/96 at both ends; Third-point loads: PL/4 at both ends'
    ],
    explanation: 'Fixed-fixed FEM values are wL²/20 at the heavy load end and wL²/30 at the apex for a full linear triangle, and 2PL/9 at both fixed ends for equal loads at third points.',
    isFormula: true
  },
  {
    id: 51027,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Medium',
    question: 'Using the Influence Lines & Moving Loads formulas, what is the absolute maximum bending moment produced on a simple span L by two moving axle loads (resultant R, smaller load P_s, spacing d)?',
    diagramSrc: '/assets/psad_formulas/p41_influence_lines.png',
    diagramAlt: 'Simple beam influence lines for reaction, shear, and bending moment',
    answer: 'M_max = (R L − P_s d)² / (4 R L)',
    choices: [
      'M_max = (R L + P_s d)² / (4 R L)',
      'M_max = (R L − P_s d) / (4 L)',
      'M_max = (R L − P_s d)² / (8 R L)',
      'M_max = (R L − P_s d)² / (4 R L)'
    ],
    explanation: 'Placing the heavier wheel and resultant R equidistant from span centerline gives an exact closed-form absolute maximum moment M_max = (RL − P_s d)² / (4RL).',
    isFormula: true
  },
  {
    id: 51028,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Hard',
    question: 'Referring to the propped cantilever beam chart, what fixed-end moment FEM’_AB and roller end reaction R_B develop under a full UDL w?',
    diagramSrc: '/assets/psad_formulas/p45_fem_distributed_table.png',
    diagramAlt: 'Propped cantilever FEM and end reaction table for distributed loads',
    answer: 'FEM’_AB = wL² / 8 and roller reaction R_B = 3wL / 8',
    choices: [
      'FEM’_AB = wL² / 8 and roller reaction R_B = 3wL / 8',
      'FEM’_AB = wL² / 12 and roller reaction R_B = wL / 2',
      'FEM’_AB = wL² / 15 and roller reaction R_B = wL / 10',
      'FEM’_AB = 9wL² / 128 and roller reaction R_B = 5wL / 8'
    ],
    explanation: 'Releasing the right fixed moment wL²/12 carries over half (−wL²/24) to the fixed end, yielding FEM’_AB = wL²/12 + wL²/24 = wL²/8 and roller reaction R_B = wL/2 − (wL²/8)/L = 3wL/8.',
    isFormula: true
  },

  // =========================================================================
  // STRENGTH OF MATERIALS (Q29 - Q34)
  // =========================================================================
  {
    id: 51029,
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Easy',
    question: 'In thin-walled pressure vessels of internal pressure p, diameter D, and wall thickness t, how do cylindrical hoop stress σ_T, cylindrical longitudinal stress σ_L, and spherical wall stress compare?',
    answer: 'σ_T = pD/(2t), while σ_L = σ_sphere = pD/(4t)',
    choices: [
      'σ_T = pD/(4t), while σ_L = σ_sphere = pD/(2t)',
      'σ_T = pD/(2t), while σ_L = σ_sphere = pD/(4t)',
      'σ_T = pD/(2t), σ_L = pD/(3t), and σ_sphere = pD/(6t)',
      'All three wall stresses equal pD/(2t)'
    ],
    explanation: 'In thin cylinders, circumferential tangential (hoop) stress pD/(2t) is twice longitudinal stress pD/(4t); spherical shells resist pressure biaxially with pD/(4t) in all directions.',
    isFormula: true
  },
  {
    id: 51030,
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Easy',
    question: 'What is the maximum torsional shear stress τ_max in a solid circular shaft of diameter D versus a hollow circular shaft (outer D, inner d) under torque T?',
    answer: 'Solid: τ_max = 16T / (πD³); Hollow: τ_max = 16TD / [π(D⁴ − d⁴)]',
    choices: [
      'Solid: τ_max = 32T / (πD³); Hollow: τ_max = 32TD / [π(D⁴ − d⁴)]',
      'Solid: τ_max = 16T / (πD⁴); Hollow: τ_max = 16T / [π(D³ − d³)]',
      'Solid: τ_max = 16T / (πD³); Hollow: τ_max = 16TD / [π(D⁴ − d⁴)]',
      'Solid: τ_max = 8T / (πD³); Hollow: τ_max = 8TD / [π(D⁴ − d⁴)]'
    ],
    explanation: 'Substituting r = D/2 and J = (π/32)D⁴ (or (π/32)(D⁴ − d⁴)) into τ = Tr/J yields 16T/(πD³) for solid shafts and 16TD/[π(D⁴ − d⁴)] for hollow shafts.',
    isFormula: true
  },
  {
    id: 51031,
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Medium',
    question: 'In A.M. Wahl’s helical coil spring formula with spring index m = 2R/d, what stress concentration & curvature factor multiplies 16PR/(πd³)?',
    latex: 'S_s = \\frac{16PR}{\\pi d^3}\\left[\\frac{4m-1}{4m-4} + \\frac{0.615}{m}\\right]',
    answer: '(4m − 1)/(4m − 4) + 0.615/m',
    choices: [
      '(4m + 1)/(4m − 4) − 0.615/m',
      '(4m − 1)/(4m − 4) + 0.615/m',
      '(1 + m/4) + 0.615/m',
      '(4m − 4)/(4m − 1) + 0.615/m'
    ],
    explanation: 'Wahl’s factor accounts for both inner-fiber wire curvature (4m − 1)/(4m − 4) and direct transverse shear correction 0.615/m.',
    isFormula: true
  },
  {
    id: 51032,
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Easy',
    question: 'For a built-up timber or steel girder joined by shear connectors each having allowable shear capacity R, how is the required longitudinal connector spacing s determined?',
    answer: 's = (R · I) / (V · Q)',
    choices: [
      's = (V · Q) / (R · I)',
      's = (R · Q) / (V · I)',
      's = (R · I) / (V · Q)',
      's = (R · I · b) / (V · Q)'
    ],
    explanation: 'Shear flow is q = VQ/I (force per unit length), so dividing connector capacity R by shear flow q yields spacing s = R / q = RI / (VQ).',
    isFormula: true
  },
  {
    id: 51033,
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Medium',
    question: 'When using the Transformed Section method (n = E_stiff / E_less) to convert a stiffer material into an equivalent area of a less stiff material, how should its width parallel to the neutral axis be scaled?',
    answer: 'Multiply the stiffer material’s width parallel to the N.A. by n',
    choices: [
      'Divide the stiffer material’s width parallel to the N.A. by n',
      'Multiply its perpendicular depth by n while keeping width fixed',
      'Divide its perpendicular depth by n²',
      'Multiply the stiffer material’s width parallel to the N.A. by n'
    ],
    explanation: 'To preserve equal axial stiffness EA at identical strain and distance y from N.A., transforming stiff → soft replaces A_stiff with larger equivalent width n·b_stiff.',
    isFormula: true
  },
  {
    id: 51034,
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Medium',
    question: 'For a uniform precast concrete pile of length L lifted symmetrically at two pick-up points at equal distance x from each end, what overhangs minimize bending moment versus minimize shear?',
    answer: '0.2071 L for minimum moment; 0.25 L for minimum shear',
    choices: [
      '0.2071 L for minimum moment; 0.25 L for minimum shear',
      '0.25 L for minimum moment; 0.2071 L for minimum shear',
      '0.2929 L for minimum moment; 0.145 L for minimum shear',
      '0.145 L for minimum moment; 0.2071 L for minimum shear'
    ],
    explanation: 'Equating cantilever hogging moment wx²/2 to interior positive moment w(L−2x)²/8 − wx²/2 gives x = 0.2071L; equating shear wx = w(L/2 − x) gives x = 0.25L.',
    isFormula: true
  },

  // =========================================================================
  // STEEL & PRESTRESSED CONCRETE + EARTHQUAKE ENGINEERING (Q35 - Q42)
  // =========================================================================
  {
    id: 51035,
    area: 'PSAD',
    subtopic: 'Structural Steel & Timber Design',
    difficulty: 'Easy',
    question: 'Unless specified otherwise in structural steel problems, what standard material properties apply to A36 structural steel (F_y, F_u, and E_s)?',
    answer: 'F_y = 248 MPa, F_u = 400 MPa, E_s = 200,000 MPa',
    choices: [
      'F_y = 345 MPa, F_u = 450 MPa, E_s = 200,000 MPa',
      'F_y = 248 MPa, F_u = 400 MPa, E_s = 200,000 MPa',
      'F_y = 276 MPa, F_u = 415 MPa, E_s = 210,000 MPa',
      'F_y = 248 MPa, F_u = 360 MPa, E_s = 190,000 MPa'
    ],
    explanation: 'Standard ASTM A36 steel in metric CELE practice uses F_y = 248 MPa (36 ksi), F_u = 400 MPa (58 ksi), and Young’s modulus E_s = 200,000 MPa.',
    isFormula: true
  },
  {
    id: 51036,
    area: 'PSAD',
    subtopic: 'Structural Steel & Timber Design',
    difficulty: 'Medium',
    question: 'Under ASD steel beam web yielding checks against concentrated loads, what effective bearing lengths are used for an interior load versus an end reaction?',
    answer: 'Interior load (> d from end): t_w(N + 5k); End reaction: t_w(N + 2.5k)',
    choices: [
      'Interior load (> d from end): t_w(N + 2.5k); End reaction: t_w(N + 5k)',
      'Interior load (> d from end): t_w(N + 6k); End reaction: t_w(N + 3k)',
      'Interior load (> d from end): t_w(N + 5k); End reaction: t_w(N + 2.5k)',
      'Both interior and end reactions use t_w(N + 2k) against 0.75 F_y'
    ],
    explanation: 'Load disperses at 2.5:1 through the flange+fillet depth k: 2.5k on both sides at an interior load gives N + 5k, whereas dispersion occurs on one side only at a beam end, giving N + 2.5k.',
    isFormula: true
  },
  {
    id: 51037,
    area: 'PSAD',
    subtopic: 'Structural Steel & Timber Design',
    difficulty: 'Medium',
    question: 'In LRFD tension member design, how are the two tensile limit states (gross section yielding and net section fracture/rupture) computed?',
    answer: 'Yielding: φP_n = 0.90 F_y A_g; Rupture: φP_n = 0.75 F_u U A_n',
    choices: [
      'Yielding: φP_n = 0.75 F_y A_g; Rupture: φP_n = 0.90 F_u U A_n',
      'Yielding: φP_n = 0.90 F_y A_n; Rupture: φP_n = 0.75 F_u A_g',
      'Yielding: φP_n = 0.85 F_y A_g; Rupture: φP_n = 0.75 F_u (A_n / U)',
      'Yielding: φP_n = 0.90 F_y A_g; Rupture: φP_n = 0.75 F_u U A_n'
    ],
    explanation: 'LRFD tension member capacity is the smaller of gross yielding φ_t = 0.90 applied to F_y A_g and net fracture φ_t = 0.75 applied to effective net area A_e = U A_n and F_u.',
    isFormula: true
  },
  {
    id: 51038,
    area: 'PSAD',
    subtopic: 'Structural Steel & Timber Design',
    difficulty: 'Medium',
    question: 'For an eccentrically loaded fillet weld group lying in-plane, which throat area A_w and polar moment of inertia J govern direct shear and torsional shear?',
    answer: 'A_w = 0.707 t_w L and J = Σ L[(x² + y²) + L²/12]',
    choices: [
      'A_w = 0.707 t_w L and J = Σ L[(x² + y²) + L²/12]',
      'A_w = t_w L and J = Σ (x² + y²)',
      'A_w = 0.707 t_w L and J = Σ [L²/12 − (x² + y²)]',
      'A_w = 0.85 t_w L and J = Σ L[(x² + y²) + L²/6]'
    ],
    explanation: 'A 45° equal-leg fillet weld has throat thickness 0.707 t_w, and treating each weld segment as a unit-width line gives polar moment J = Σ L[(x² + y²) + L²/12] about the weld centroid.',
    isFormula: true
  },
  {
    id: 51039,
    area: 'PSAD',
    subtopic: 'Structural Steel & Timber Design',
    difficulty: 'Easy',
    question: 'How does adding a single sagrod at midspan of a sloped roof purlin of truss spacing L affect its weak-axis bending moment M_y under tangential roof load W_x?',
    diagramSrc: '/assets/psad_formulas/p38_steel_purlins.png',
    diagramAlt: 'Inclined roof purlin C-channel with roof slope theta and gravity/wind loads',
    answer: 'M_y drops by a factor of 4 from W_x L² / 8 to W_x L² / 32',
    choices: [
      'M_y drops by a factor of 2 from W_x L² / 8 to W_x L² / 16',
      'M_y drops by a factor of 4 from W_x L² / 8 to W_x L² / 32',
      'M_x drops from W_y L² / 8 to W_y L² / 32 while M_y stays unchanged',
      'M_y increases to W_x L² / 4 due to continuity over the sagrod'
    ],
    explanation: 'A midspan sagrod braces the purlin in the weak (y-bending) direction, cutting the simple span from L to L/2 so M_y = W_x(L/2)²/8 = W_x L²/32.',
    isFormula: true
  },
  {
    id: 51040,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    question: 'In a prestressed concrete homogeneous beam with tendons placed BELOW the neutral axis carrying downward gravity loads (+ tension, − compression), what are the three term signs in f_top and f_bot?',
    diagramSrc: '/assets/psad_formulas/p37_prestressed_tendons.png',
    diagramAlt: 'Prestressed beam cross section showing tendon below and above N.A.',
    answer: 'f_top = −P/A + Pec/I − Mc/I and f_bot = −P/A − Pec/I + Mc/I',
    choices: [
      'f_top = −P/A − Pec/I + Mc/I and f_bot = −P/A + Pec/I − Mc/I',
      'f_top = −P/A + Pec/I + Mc/I and f_bot = −P/A − Pec/I − Mc/I',
      'f_top = −P/A + Pec/I − Mc/I and f_bot = −P/A − Pec/I + Mc/I',
      'f_top = +P/A + Pec/I − Mc/I and f_bot = −P/A − Pec/I + Mc/I'
    ],
    explanation: 'Axial prestress compresses both faces (−P/A); eccentric tendon below N.A. lifts camber (+Pec/I tension at top, −Pec/I compression at bottom); downward load compresses top (−Mc/I) and tensions bottom (+Mc/I).',
    isFormula: true
  },
  {
    id: 51041,
    area: 'PSAD',
    subtopic: 'Seismic Engineering & NSCP Provisions',
    difficulty: 'Easy',
    question: 'Under NSCP 2015 Seismic Provisions, how are Zone 4 near-source seismic coefficients C_a and C_v computed, and what formula bounds the maximum design base shear V_max?',
    diagramSrc: '/assets/psad_formulas/p46_seismic_building.png',
    diagramAlt: '6-storey building elevation for NSCP seismic design base shear',
    answer: 'C_a = 0.44 N_a, C_v = 0.64 N_v, and V_max = 2.5 C_a I W / R',
    choices: [
      'C_a = 0.44 N_a, C_v = 0.64 N_v, and V_max = 2.5 C_a I W / R',
      'C_a = 0.64 N_a, C_v = 0.44 N_v, and V_max = 2.5 C_v I W / R',
      'C_a = 0.44 N_v, C_v = 0.64 N_a, and V_max = 0.11 C_a I W',
      'C_a = 0.40 N_a, C_v = 0.56 N_v, and V_max = C_v I W / (R T)'
    ],
    explanation: 'In Seismic Zone 4 (Z = 0.4) with stiff/dense soil profile, C_a = 0.44 N_a and C_v = 0.64 N_v, while total design base shear V = C_v I W / (RT) need not exceed V_max = 2.5 C_a I W / R.',
    isFormula: true
  },
  {
    id: 51042,
    area: 'PSAD',
    subtopic: 'Seismic Engineering & NSCP Provisions',
    difficulty: 'Medium',
    question: 'In vertical distribution of NSCP design seismic base shear V, what roof whipping force F_t applies and when can it be omitted?',
    answer: 'F_t = 0.07 T V ≤ 0.25 V (and F_t = 0 whenever T ≤ 0.7 s)',
    choices: [
      'F_t = 0.25 T V ≤ 0.07 V (and F_t = 0 whenever T ≥ 0.7 s)',
      'F_t = 0.07 T V ≤ 0.25 V (and F_t = 0 whenever T ≤ 0.7 s)',
      'F_t = 0.07 V / T ≤ 0.25 V (and F_t = 0 whenever T ≤ 1.0 s)',
      'F_t = 0.10 T V ≤ 0.30 V (and F_t = 0 whenever T ≤ 0.5 s)'
    ],
    explanation: 'Higher-mode whip at the roof adds concentrated force F_t = 0.07 T V (capped at 0.25 V) for flexible structures with T > 0.7 s; for stiff buildings (T ≤ 0.7 s), F_t = 0 and the full V distributes via W_x h_x.',
    isFormula: true
  },
  {
    id: 51043,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Hard',
    question: 'In Superposition Method Case 2 (a simply supported beam of span L carrying an eccentric point load P at distance a from the left support and b from the right support, with a > b), which formulas locate the maximum deflection x from the left support and give the midspan deflection δ_mid?',
    latex: '\\delta_{\\text{mid}} = \\frac{Pb}{48EI}\\left(3L^2 - 4b^2\\right) \\quad (a > b)',
    answer: 'x = √[(L² − b²) / 3] and δ_mid = [Pb / (48EI)](3L² − 4b²)',
    choices: [
      'x = √[(L² − a²) / 3] and δ_mid = [Pa / (48EI)](3L² − 4a²)',
      'x = √[(L² − b²) / 3] and δ_mid = [Pb / (48EI)](3L² − 4b²)',
      'x = (L − b) / 2 and δ_mid = [P a² b² / (3 E I L)]',
      'x = √[(L² + b²) / 3] and δ_mid = [Pb / (24EI)](3L² − 2b²)'
    ],
    explanation: 'For a > b, setting the slope dy/dx = 0 in the 0 < x < a elastic curve segment yields x_max = √[(L² − b²)/3] (always within 0.4226L to 0.50L of span), and evaluating at x = L/2 yields δ_mid = [Pb/(48EI)](3L² − 4b²). Note that Pa²b²/(3EIL) is the deflection directly under the load, not the midspan or absolute maximum deflection.',
    isFormula: true
  },

  // =========================================================================
  // ADDITIONAL PSAD FORMULAS (Q44 - Q63) — ONCE (2024) FORMULA CARDS
  // =========================================================================
  {
    id: 51044,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Easy',
    question: 'In parabolic cable analysis (span L, sag d, uniform horizontal load w), how is the constant horizontal tension H (minimum tension at the lowest point) computed?',
    diagramSrc: '/assets/psad_formulas/p02_parabolic_cable.png',
    diagramAlt: 'Parabolic cable carrying uniform horizontal load with T_0 at lowest point',
    answer: 'H = w L² / (8 d)',
    choices: [
      'H = w L² / (4 d)',
      'H = w L² / (8 d)',
      'H = w L² / (12 d)',
      'H = w L / (2 d)'
    ],
    explanation: 'Taking moments about the sag vertex on a half-span L/2 gives H·d = (wL/2)(L/4) = wL²/8, so minimum tension T_0 = H = wL²/(8d).',
    isFormula: true
  },
  {
    id: 51045,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Easy',
    question: 'Referring to the 2D Support Reactions table, how many unknown reaction components correspond to (1) a roller, rocker, short link, or collar on a frictionless rod versus (2) a rough surface or frictionless pin?',
    diagramSrc: '/assets/psad_formulas/p06_support_reactions_table.jpg',
    diagramAlt: '2D support reactions table showing rollers, links, pins, rough surfaces, and fixed supports',
    answer: 'Roller/link/collar: 1 unknown (known line of action); Pin/rough surface: 2 unknowns',
    choices: [
      'Roller/link/collar: 2 unknowns; Pin/rough surface: 1 unknown',
      'Roller/link/collar: 1 unknown (known line of action); Pin/rough surface: 2 unknowns',
      'Roller/link/collar: 1 unknown; Pin/rough surface: 3 unknowns including couple moment',
      'Both support groups always introduce 2 unknown force components'
    ],
    explanation: 'Rollers, rockers, short cables/links, and frictionless collars/slots restrain translation along one known line of action (1 unknown), whereas pins/hinges and rough surfaces prevent translation in two orthogonal directions (2 unknowns).',
    isFormula: true
  },
  {
    id: 51046,
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Easy',
    question: 'Which elastic relationship correctly expresses the Bulk Modulus E_bulk (volume modulus K) in terms of Young’s modulus E and Poisson’s ratio ν?',
    answer: 'E_bulk = E / [3(1 − 2ν)]',
    choices: [
      'E_bulk = E / [2(1 + ν)]',
      'E_bulk = E / [3(1 − 2ν)]',
      'E_bulk = E(1 − 2ν) / 3',
      'E_bulk = 3E / [2(1 + ν)]'
    ],
    explanation: 'While shear modulus G = E/[2(1+ν)], volumetric hydrostatic compression yields E_bulk = σ / (ΔV/V_i) = E / [3(1 − 2ν)].',
    isFormula: true
  },
  {
    id: 51047,
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Medium',
    question: 'A uniform prismatic bar of total weight W, length L, cross-sectional area A, and modulus E hangs vertically under its own weight. What total axial elongation δ_self occurs?',
    answer: 'δ_self = W L / (2 A E)',
    choices: [
      'δ_self = W L / (A E)',
      'δ_self = W L / (3 A E)',
      'δ_self = W L / (2 A E)',
      'δ_self = 2 W L / (A E)'
    ],
    explanation: 'Internal axial tension increases linearly from 0 at the free bottom to W at the top support (average P = W/2), producing δ = (W/2)L/(AE) = WL/(2AE).',
    isFormula: true
  },
  {
    id: 51048,
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Medium',
    question: 'A cantilever beam of length L and flexural rigidity EI has unpropped free-end deflection δ_free and is later supported at its tip by an elastic spring of stiffness k. What upward reaction R develops in the spring?',
    answer: 'R = (3 δ_free E I k) / (k L³ + 3 E I)',
    choices: [
      'R = (δ_free E I k) / (k L³ + E I)',
      'R = (3 δ_free E I k) / (k L³ + 3 E I)',
      'R = (k δ_free L³) / (3 E I)',
      'R = (3 E I + k L³) / (3 δ_free E I k)'
    ],
    explanation: 'Compatibility requires δ_free − R L³/(3EI) = R/k; factoring R(L³/(3EI) + 1/k) = δ_free yields R = 3 δ_free E I k / (k L³ + 3 E I).',
    isFormula: true
  },
  {
    id: 51049,
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Medium',
    question: 'How do maximum transverse flexural shear stress f_v,max (compared with average shear V/A) and thin-walled closed-tube torsional shear stress τ (Bredt formula) compute?',
    answer: 'Rect: 3V/(2A), Circle: 4V/(3A), Hollow Circle: 2V/A; Closed Tube Torsion: τ = T / (2 t A_m)',
    choices: [
      'Rect: 4V/(3A), Circle: 3V/(2A), Hollow Circle: 2V/A; Closed Tube Torsion: τ = T / (t A_m)',
      'Rect: 3V/(2A), Circle: 4V/(3A), Hollow Circle: 2V/A; Closed Tube Torsion: τ = T / (2 t A_m)',
      'Rect: 2V/A, Circle: 3V/(2A), Hollow Circle: 4V/(3A); Closed Tube Torsion: τ = 2T / (t A_m)',
      'Rect: 3V/(2A), Circle: 4V/(3A), Hollow Circle: 4V/(3A); Closed Tube Torsion: τ = T r / (2 t A_m)'
    ],
    explanation: 'Evaluating VQ/(Ib) at the neutral axis gives 1.5(V/A) for rectangles, 4/3(V/A) for solid circles, and 2(V/A) for thin hollow circles; Bredt’s closed-tube torsion law gives shear flow q = T/(2 A_m) and stress τ = T/(2 t A_m).',
    isFormula: true
  },
  {
    id: 51050,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Medium',
    question: 'What are the 3D Degree of Indeterminacy formulas for space beams, space trusses, and space rigid frames (where R = reactions, M = members, J = joints, S = internal releases)?',
    answer: 'Beams: R − 6 − S; Trusses: M + R − 3J; Frames: 6M + R − (6J + S)',
    choices: [
      'Beams: R − 3 − S; Trusses: M + R − 2J; Frames: 3M + R − (3J + S)',
      'Beams: R − 6 − S; Trusses: M + R − 3J; Frames: 6M + R − (6J + S)',
      'Beams: R − 6 − S; Trusses: 3M + R − 6J; Frames: 6M + R − 3J',
      'Beams: R − 4 − S; Trusses: M + R − 3J; Frames: 4M + R − (6J + S)'
    ],
    explanation: 'In 3D space, static equilibrium provides 6 equations for a single beam (or 6 per frame joint), whereas 3D truss pin/ball joints provide 3 force equations per joint (3J).',
    isFormula: true
  },
  {
    id: 51051,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Hard',
    question: 'What are the exact cantilever free-end deflections δ for (1) a full UDL w and (2) a triangular load w peaking at the fixed wall, plus the maximum deflection of a simple beam under a full linear triangular load?',
    answer: 'Cantilever UDL: wL⁴/(8EI); Cantilever Tri: wL⁴/(30EI); Simple Tri: 0.00652 wL⁴/(EI)',
    choices: [
      'Cantilever UDL: 5wL⁴/(384EI); Cantilever Tri: wL⁴/(24EI); Simple Tri: 0.0130 wL⁴/(EI)',
      'Cantilever UDL: wL⁴/(8EI); Cantilever Tri: wL⁴/(15EI); Simple Tri: 5wL⁴/(384EI)',
      'Cantilever UDL: wL⁴/(8EI); Cantilever Tri: wL⁴/(30EI); Simple Tri: 0.00652 wL⁴/(EI)',
      'Cantilever UDL: wL⁴/(12EI); Cantilever Tri: wL⁴/(20EI); Simple Tri: 0.0054 wL⁴/(EI)'
    ],
    explanation: 'Integrating M(x)/EI by Moment-Area from the fixed wall gives wL⁴/(8EI) for uniform load and wL⁴/(30EI) when linearly varying to w at the wall; a simply supported triangular beam peaks at ≈0.00652 wL⁴/(EI).',
    isFormula: true
  },
  {
    id: 51052,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Medium',
    question: 'Compared against a simply supported beam (MF = 1.0), what Midspan Deflection Multipliers (MF) apply to a fixed-fixed beam under (1) a full UDL w (factor × 5wL⁴/384EI) and (2) a midspan point load P (factor × PL³/48EI)?',
    answer: 'Fixed-fixed UDL MF = 0.20 (wL⁴/384EI); Fixed-fixed midspan P MF = 0.25 (PL³/192EI)',
    choices: [
      'Fixed-fixed UDL MF = 0.25; Fixed-fixed midspan P MF = 0.50',
      'Fixed-fixed UDL MF = 0.50; Fixed-fixed midspan P MF = 0.25',
      'Fixed-fixed UDL MF = 0.20 (wL⁴/384EI); Fixed-fixed midspan P MF = 0.25 (PL³/192EI)',
      'Fixed-fixed UDL MF = 0.14; Fixed-fixed midspan P MF = 0.20'
    ],
    explanation: 'End fixity cuts UDL midspan deflection by a factor of 5 (5/384 × 0.20 = 1/384) and midspan point-load deflection by a factor of 4 (1/48 × 0.25 = 1/192).',
    isFormula: true
  },
  {
    id: 51053,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Medium',
    question: 'From the Three-Span Continuous Beam Pattern Loading chart, which live-load pattern produces the largest negative moment at interior support B, and what is its magnitude?',
    diagramSrc: '/assets/psad_formulas/p18_pattern_3spans.jpg',
    diagramAlt: 'Three equal span continuous beam shear and moment diagrams for pattern loadings',
    answer: 'Loading adjacent spans AB and BC while leaving CD unloaded: M_neg,B = −0.117 w l²',
    choices: [
      'Loading all three spans simultaneously: M_neg,B = −0.100 w l²',
      'Loading only the two outer spans AB and CD: M_neg,B = −0.050 w l²',
      'Loading adjacent spans AB and BC while leaving CD unloaded: M_neg,B = −0.117 w l²',
      'Loading only the center span BC: M_neg,B = −0.125 w l²'
    ],
    explanation: 'Loading the two adjacent spans sharing support B (AB and BC) while leaving remote span CD unloaded produces M_B = −0.117 w l², larger in magnitude than −0.100 w l² when all three spans are loaded.',
    isFormula: true
  },
  {
    id: 51054,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Easy',
    question: 'In PERT-CPM construction scheduling, how are Total Float (TF), Free Float (FF), and Interfering Float (IF) computed for an activity A followed immediately by successor B?',
    answer: 'TF = LS − ES (or LF − EF); FF = ES_B − EF_A; IF = TF − FF',
    choices: [
      'TF = EF − ES; FF = LS_B − LF_A; IF = TF + FF',
      'TF = LS − ES (or LF − EF); FF = ES_B − EF_A; IF = TF − FF',
      'TF = ES_B − EF_A; FF = LS − ES; IF = FF − TF',
      'TF = LF − ES; FF = LF_B − EF_A; IF = TF / FF'
    ],
    explanation: 'Total Float measures maximum delay without extending project completion (LS − ES); Free Float measures delay before affecting successor Early Start (ES_B − EF_A); Interfering Float equals their difference (TF − FF).',
    isFormula: true
  },
  {
    id: 51055,
    area: 'PSAD',
    subtopic: 'Structural Steel & Timber Design',
    difficulty: 'Hard',
    question: 'In ASD structural steel column design, what separates inelastic from elastic buckling (C_c), and which allowable stress F_a formula governs when KL/r > C_c?',
    answer: 'C_c = √(2π² E / F_y); for KL/r > C_c, F_a = 12π² E / [23 (KL/r)²]',
    choices: [
      'C_c = √(π² E / F_y); for KL/r > C_c, F_a = 5π² E / [3 (KL/r)²]',
      'C_c = 4.71 √(E / F_y); for KL/r > C_c, F_a = 0.877 π² E / (KL/r)²',
      'C_c = √(2π² E / F_y); for KL/r > C_c, F_a = 12π² E / [23 (KL/r)²]',
      'C_c = √(2π² E / F_y); for KL/r > C_c, F_a = [1 − (KL/r)²/(2C_c²)] F_y / FS'
    ],
    explanation: 'ASD defines transition slenderness C_c = √(2π²E/F_y); above C_c, Euler stress F_e = π²E/(KL/r)² is divided by constant Factor of Safety 23/12, yielding F_a = 12π²E / [23(KL/r)²].',
    isFormula: true
  },
  {
    id: 51056,
    area: 'PSAD',
    subtopic: 'Structural Steel & Timber Design',
    difficulty: 'Hard',
    question: 'In LRFD steel tension connection Block Shear Rupture (φ = 0.75), how is the nominal resistance R_n calculated across shear planes (A_gv, A_nv) and tension plane (A_nt)?',
    answer: 'R_n = 0.6 F_u A_nv + U_bs F_u A_nt ≤ 0.6 F_y A_gv + U_bs F_u A_nt',
    choices: [
      'R_n = 0.6 F_y A_nv + U_bs F_y A_nt ≤ 0.6 F_u A_gv + U_bs F_u A_nt',
      'R_n = 0.6 F_u A_nv + U_bs F_u A_nt ≤ 0.6 F_y A_gv + U_bs F_u A_nt',
      'R_n = 0.75 F_u A_nv + 0.90 F_y A_nt',
      'R_n = 0.6 F_u A_gv + 0.5 F_y A_nt ≤ F_u A_nv'
    ],
    explanation: 'NSCP/AISC computes block shear rupture on net tension (U_bs F_u A_nt) plus the smaller of shear fracture (0.6 F_u A_nv) and shear yielding along the gross shear area (0.6 F_y A_gv).',
    isFormula: true
  },
  {
    id: 51057,
    area: 'PSAD',
    subtopic: 'Structural Steel & Timber Design',
    difficulty: 'Medium',
    question: 'In LRFD steel column design, what critical slenderness threshold C_c and formulas determine F_cr for inelastic versus elastic flexural buckling?',
    answer: 'C_c = 4.71 √(E/F_y); F_cr = 0.658^(F_y/F_e) F_y for KL/r ≤ C_c, and 0.877 F_e for KL/r > C_c',
    choices: [
      'C_c = 4.71 √(E/F_y); F_cr = 0.877^(F_y/F_e) F_y for KL/r ≤ C_c, and 0.658 F_e for KL/r > C_c',
      'C_c = √(2π² E / F_y); F_cr = 0.658^(F_y/F_e) F_y for KL/r ≤ C_c, and 0.5 F_e for KL/r > C_c',
      'C_c = 4.71 √(E/F_y); F_cr = 0.658^(F_y/F_e) F_y for KL/r ≤ C_c, and 0.877 F_e for KL/r > C_c',
      'C_c = 4.71 √(F_y/E); F_cr = [1 − F_y/(2F_e)] F_y for KL/r ≤ C_c'
    ],
    explanation: 'At KL/r = 4.71√(E/F_y), F_y/F_e = 2.25; below this limit inelastic buckling gives F_cr = 0.658^(F_y/F_e) F_y, and above it elastic buckling gives F_cr = 0.877 F_e (with φ_c = 0.90).',
    isFormula: true
  },
  {
    id: 51058,
    area: 'PSAD',
    subtopic: 'Structural Steel & Timber Design',
    difficulty: 'Medium',
    question: 'In Steel Plastic Analysis, how are Plastic Section Modulus Z, Plastic Moment M_p, Shape Factor SF, and minimum number of plastic hinges N_PH at collapse determined?',
    answer: 'Z = Σ|A_i ȳ_i| about equal-area PNA; M_p = F_y Z; SF = Z/S = M_p/M_y; N_PH = DI + 1',
    choices: [
      'Z = I/c; M_p = 0.66 F_y Z; SF = S/Z; N_PH = DI',
      'Z = Σ|A_i ȳ_i| about equal-area PNA; M_p = F_y Z; SF = Z/S = M_p/M_y; N_PH = DI + 1',
      'Z = Σ(A_i ȳ_i²); M_p = F_y Z; SF = M_y/M_p; N_PH = DI − 1',
      'Z = Σ|A_i ȳ_i| about elastic centroid; M_p = 1.5 F_y S; N_PH = DI + 2'
    ],
    explanation: 'Full yielding splits tension and compression areas equally (A_top = A_bot); taking first moments of both half-areas about this PNA gives Z, M_p = F_y Z, shape factor Z/S, and a collapse mechanism forms after DI + 1 hinges.',
    isFormula: true
  },
  {
    id: 51059,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    question: 'In Working Stress Design (WSD) Transformed Section analysis of a cracked doubly reinforced concrete beam (modular ratio n = E_s / E_c), how are tension steel A_s and compression steel A_s′ transformed into equivalent concrete areas?',
    diagramSrc: '/assets/psad_formulas/p31_wsd_beam_analysis.jpg',
    diagramAlt: 'Working Stress Design transformed sections for uncracked and cracked SRB and DRB',
    answer: 'Cracked tension steel: n A_s; Compression steel: (2n − 1) A_s′ (giving stress f_s′/(2n) = M y / I)',
    choices: [
      'Cracked tension steel: (n − 1) A_s; Compression steel: n A_s′',
      'Cracked tension steel: n A_s; Compression steel: (2n − 1) A_s′ (giving stress f_s′/(2n) = M y / I)',
      'Cracked tension steel: 2n A_s; Compression steel: (n − 1) A_s′',
      'Cracked tension steel: A_s / n; Compression steel: A_s′ / (2n − 1)'
    ],
    explanation: 'In a cracked section, tension concrete is neglected so tension steel transforms to n A_s, whereas compression steel embedded inside the concrete compression zone transforms to (2n − 1) A_s′ (2n accounts for creep, −1 subtracts displaced concrete).',
    isFormula: true
  },
  {
    id: 51060,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Hard',
    question: 'Under NSCP/ACI Torsion Design, when can torsion be neglected, how does combined shear-torsion stirrup spacing A_T/s combine transverse areas, and what is s_max?',
    diagramSrc: '/assets/psad_formulas/p39_rcd_torsion_acp_ach.png',
    diagramAlt: 'Concrete torsion gross area Acp/Pcp and closed-stirrup centerline area Aoh/Ph',
    answer: 'Neglect if T_u < φ T_TH; combine A_T/s = A_v/s + 2 A_t/s; s_max = min(P_h/8, 300 mm)',
    choices: [
      'Neglect if T_u < φ T_CR; combine A_T/s = A_v/s + A_t/s; s_max = min(P_h/4, 600 mm)',
      'Neglect if T_u < φ T_TH; combine A_T/s = A_v/s + 2 A_t/s; s_max = min(P_h/8, 300 mm)',
      'Neglect if T_u < 0.5 φ T_CR; combine A_T/s = 2 A_v/s + A_t/s; s_max = min(d/2, 300 mm)',
      'Neglect if T_u < φ T_TH; combine A_T/s = A_v/s + 2 A_t/s; s_max = min(P_cp/8, 450 mm)'
    ],
    explanation: 'Torsion is neglected below φ T_TH = φ (λ√f_c’/12)(A_cp²/P_cp); because A_t is the area of ONE closed stirrup leg while A_v counts TWO legs, total stirrup steel per unit spacing is A_v/s + 2 A_t/s with spacing capped at min(P_h/8, 300 mm).',
    isFormula: true
  },
  {
    id: 51061,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    question: 'When using the Jackson & Moreland alignment nomogram to determine column effective length factor k via joint stiffness ratio ψ = Σ(EI/L)_cols / Σ(EI/L)_beams, what NSCP cracked moment-of-inertia factors and idealized base ψ values apply?',
    diagramSrc: '/assets/psad_formulas/p17_effective_length_nomogram.jpg',
    diagramAlt: 'Jackson and Moreland alignment charts for nonsway and sway frames',
    answer: 'I_col = 0.70 I_g, I_beam = 0.35 I_g; idealized fixed base ψ = 1.0, hinged base ψ = 10',
    choices: [
      'I_col = 0.35 I_g, I_beam = 0.70 I_g; idealized fixed base ψ = 0, hinged base ψ = 1.0',
      'I_col = 0.70 I_g, I_beam = 0.35 I_g; idealized fixed base ψ = 1.0, hinged base ψ = 10',
      'I_col = 0.50 I_g, I_beam = 0.50 I_g; idealized fixed base ψ = 10, hinged base ψ = 1.0',
      'I_col = 0.70 I_g, I_beam = 0.25 I_g; idealized fixed base ψ = 2.0, hinged base ψ = 20'
    ],
    explanation: 'NSCP slenderness analysis scales columns to 0.70 I_g, beams to 0.35 I_g, and slabs to 0.25 I_g; in reinforced concrete practice, realistic foundation rotation uses ψ = 1.0 (fixed base) and ψ = 10 (hinged base).',
    isFormula: true
  },
  {
    id: 51062,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    question: 'Using the ACI Shear & Moment Coefficients chart for 3+ equal continuous spans (all exterior ends integral with spandrel beams/columns), what moment coefficients C multiply w l_n² at (1) the exterior face of the first interior support and (2) an interior span positive midspan?',
    diagramSrc: '/assets/psad_formulas/p45_aci_shear_moment_coeffs.jpg',
    diagramAlt: 'ACI Shear and Moment Coefficients diagram for 2, 3, and 4 continuous spans',
    answer: '1/10 at exterior face of first interior support, and 1/16 at interior span positive midspan',
    choices: [
      '1/9 at exterior face of first interior support, and 1/14 at interior span positive midspan',
      '1/11 at exterior face of first interior support, and 1/14 at interior span positive midspan',
      '1/10 at exterior face of first interior support, and 1/16 at interior span positive midspan',
      '1/16 at exterior face of first interior support, and 1/11 at interior span positive midspan'
    ],
    explanation: 'For 3 or more spans, ACI assigns −w l_n²/10 at the exterior face of the first interior support (vs 1/9 for 2 spans), −w l_n²/11 at other interior supports, +w l_n²/14 for end-span positive moment, and +w l_n²/16 for interior positive spans.',
    isFormula: true
  },
  {
    id: 51063,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    question: 'In Pile Cap Design under axial load P_u and biaxial moments M_x, M_y, how is an individual pile reaction R computed, and what punching shear perimeter b_o applies around a circular column of diameter D?',
    diagramSrc: '/assets/psad_formulas/p50_pile_cap_critical_sections.jpg',
    diagramAlt: 'Pile cap critical sections for wide beam shear, flexure, and punching shear',
    answer: 'R = P/n ± (M_x y)/Σy² ± (M_y x)/Σx², with circular column punching perimeter b_o = π(D + d)',
    choices: [
      'R = P/n ± (M_x x)/Σx² ± (M_y y)/Σy², with circular column punching perimeter b_o = π D',
      'R = P/n ± (M_x y)/Σy² ± (M_y x)/Σx², with circular column punching perimeter b_o = π(D + d)',
      'R = P/n ± (6 M_x)/B² ± (6 M_y)/L², with circular column punching perimeter b_o = 2π(D + d)',
      'R = P/n ± (M_x y)/Σy² ± (M_y x)/Σx², with circular column punching perimeter b_o = 4(D + d)'
    ],
    explanation: 'Piles act as discrete point areas with moment of inertia Σy² and Σx² giving R = P/n ± M_x y/Σy² ± M_y x/Σx²; at distance d/2 outside a circular column of diameter D, the critical perimeter has diameter D + d so b_o = π(D + d).',
    isFormula: true
  }
];
