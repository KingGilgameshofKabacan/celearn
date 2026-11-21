import { CEQuestion } from '../types';

export const SCANNED_PDF_QUESTIONS: CEQuestion[] = [
  {
    "id": 3001,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Easy",
    "question": "A physical science that deals with the actions and behaviors of fluids at rest or in motion.",
    "answer": "Fluid Mechanics",
    "choices": [
      "Fluid Mechanics",
      "Soil Mechanics",
      "Structural Mechanics",
      "Kinematics of Rigid Bodies"
    ],
    "explanation": "Fluid mechanics is the branch of physics and engineering dealing with fluids (liquids and gases) under stationary (hydrostatics) and moving (hydrodynamics) conditions."
  },
  {
    "id": 3002,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Easy",
    "question": "The specific subdivision of fluid mechanics that deals with fluids at rest and pressure distributions in stationary fluid bodies.",
    "answer": "Fluid Statics",
    "choices": [
      "Fluid Statics",
      "Fluid Dynamics",
      "Kinematics",
      "Thermodynamics"
    ],
    "explanation": "Fluid statics (or hydrostatics) examines fluids when there is no relative motion between adjacent fluid layers, meaning shear stresses are zero."
  },
  {
    "id": 3003,
    "area": "HPGE",
    "subtopic": "Fluid Dynamics & Energy/Continuity",
    "difficulty": "Easy",
    "question": "The branch of fluid mechanics concerned with fluids in motion and the forces causing or resulting from such motion.",
    "answer": "Fluid Dynamics",
    "choices": [
      "Fluid Dynamics",
      "Fluid Statics",
      "Soil Mechanics",
      "Geodesy"
    ],
    "explanation": "Fluid dynamics analyzes fluid velocity, acceleration, pressure gradients, and viscous dissipation in moving fluids."
  },
  {
    "id": 3004,
    "area": "HPGE",
    "subtopic": "Fluid Dynamics & Energy/Continuity",
    "difficulty": "Medium",
    "question": "The branch of fluid mechanics applied to the flow of liquids or to low-velocity gas flows where the fluid can be considered essentially incompressible.",
    "answer": "Hydrodynamics",
    "choices": [
      "Hydrodynamics",
      "Aerodynamics",
      "Magnetohydrodynamics",
      "Gas Dynamics"
    ],
    "explanation": "Hydrodynamics focuses on liquid flow phenomena where density variations are negligible and inertial and pressure forces dominate."
  },
  {
    "id": 3005,
    "area": "HPGE",
    "subtopic": "Open Channels, Weirs & Pipe Flow",
    "difficulty": "Easy",
    "question": "The applied engineering science dealing with the practical conveyance and control of liquids, especially water and oil, through pipes, channels, and control structures.",
    "answer": "Hydraulics",
    "choices": [
      "Hydraulics",
      "Pneumatics",
      "Hydrogeology",
      "Aerodynamics"
    ],
    "explanation": "Hydraulics deals with practical engineering devices involving liquids, including dams, culverts, spillways, pipes, pumps, and water turbines."
  },
  {
    "id": 3006,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Easy",
    "question": "Any substance that flows or deforms continuously and permanently when subjected to shearing or tangential stresses, no matter how small.",
    "answer": "Fluid",
    "choices": [
      "Fluid",
      "Rigid Body",
      "Plastic Solid",
      "Elastomer"
    ],
    "explanation": "Unlike solids that sustain shear stress up to an elastic limit, fluids cannot remain at rest under the application of shear stress and will deform continuously."
  },
  {
    "id": 3007,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Medium",
    "question": "A theoretical fluid assumed to have zero viscosity, to be completely incompressible, and to experience no friction, boundary drag, or turbulence during flow.",
    "answer": "Ideal Fluid",
    "choices": [
      "Ideal Fluid",
      "Real Fluid",
      "Bingham Plastic",
      "Newtonian Fluid"
    ],
    "explanation": "An ideal (inviscid) fluid has frictionless, non-viscous behavior and uniform velocity distribution when flowing through conduits."
  },
  {
    "id": 3008,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Medium",
    "question": "A fluid that exhibits finite viscosity, experiences boundary friction and shear resistance between moving layers, and develops non-uniform velocity distribution.",
    "answer": "Real Fluid",
    "choices": [
      "Real Fluid",
      "Ideal Fluid",
      "Inviscid Fluid",
      "Perfect Gas"
    ],
    "explanation": "All naturally occurring fluids are real fluids possessing dynamic viscosity, internal shearing resistance, and susceptibility to turbulent eddies."
  },
  {
    "id": 3009,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Medium",
    "question": "A real fluid in which the shear stress between adjacent layers is directly and linearly proportional to the rate of shear strain.",
    "answer": "Newtonian Fluid",
    "choices": [
      "Newtonian Fluid",
      "Non-newtonian Fluid",
      "Bingham Plastic",
      "Pseudoplastic Fluid"
    ],
    "explanation": "Newtonian fluids (such as water, air, and light oils) satisfy Newton’s law of viscosity: τ = μ (dv/dy) with a constant dynamic viscosity μ."
  },
  {
    "id": 3010,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Hard",
    "question": "A fluid whose apparent viscosity varies with the applied shear stress or velocity gradient, including pseudoplastic, dilatant, and Bingham plastic materials.",
    "answer": "Non-newtonian Fluid",
    "choices": [
      "Non-newtonian Fluid",
      "Newtonian Fluid",
      "Ideal Fluid",
      "Inviscid Fluid"
    ],
    "explanation": "Non-Newtonian fluids (like drill mud, paint, slurries, and concrete paste) do not have a constant dynamic viscosity independent of shear strain rate."
  },
  {
    "id": 3011,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Easy",
    "question": "The physical property of a fluid defined as its mass per unit volume (ρ = m / V).",
    "answer": "Mass Density",
    "choices": [
      "Mass Density",
      "Specific Volume",
      "Unit Weight",
      "Specific Gravity"
    ],
    "explanation": "Mass density (ρ) is measured in kg/m³ in SI units (approximately 1000 kg/m³ for pure water at 4°C)."
  },
  {
    "id": 3012,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Medium",
    "question": "The volume occupied by a unit mass of fluid, representing the mathematical reciprocal of mass density (v = 1 / ρ).",
    "answer": "Specific Volume",
    "choices": [
      "Specific Volume",
      "Mass Density",
      "Unit Weight",
      "Specific Gravity"
    ],
    "explanation": "Specific volume is measured in m³/kg and indicates how much spatial volume is required per unit kilogram of the fluid."
  },
  {
    "id": 3013,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Easy",
    "question": "The gravitational force exerted by a unit volume of fluid, equal to mass density multiplied by gravitational acceleration (γ = ρg).",
    "answer": "Unit Weight",
    "choices": [
      "Unit Weight",
      "Mass Density",
      "Specific Gravity",
      "Specific Volume"
    ],
    "explanation": "Unit weight (γ or specific weight) is measured in kN/m³ or N/m³ (standard value for water is 9.81 kN/m³)."
  },
  {
    "id": 3014,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Easy",
    "question": "The dimensionless ratio of a fluid’s mass density or unit weight to that of a standard reference fluid, typically water at 4°C.",
    "answer": "Specific Gravity",
    "choices": [
      "Specific Gravity",
      "Unit Weight",
      "Kinematic Viscosity",
      "Bulk Modulus"
    ],
    "explanation": "Specific gravity (SG) has no units; for water SG = 1.0, mercury SG ≈ 13.6, and typical gasoline SG ≈ 0.72."
  },
  {
    "id": 3015,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Medium",
    "question": "The internal property of a fluid which determines the amount of its resistance to shearing forces and relative sliding between fluid layers.",
    "answer": "Viscosity",
    "choices": [
      "Viscosity",
      "Surface Tension",
      "Capillarity",
      "Compressibility"
    ],
    "explanation": "Viscosity represents fluid friction; dynamic (absolute) viscosity μ is measured in Pa·s or Poise."
  },
  {
    "id": 3016,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Medium",
    "question": "The ratio of dynamic (absolute) viscosity of a fluid to its mass density (ν = μ / ρ).",
    "answer": "Kinematic Viscosity",
    "choices": [
      "Kinematic Viscosity",
      "Dynamic Viscosity",
      "Specific Gravity",
      "Relative Viscosity"
    ],
    "explanation": "Kinematic viscosity ν is expressed in m²/s in SI units, or stokes (cm²/s) in CGS units."
  },
  {
    "id": 3017,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Medium",
    "question": "A tensile force within the surface layer of a liquid that causes the layer to behave like an elastic sheet due to intermolecular cohesive forces.",
    "answer": "Surface Tension",
    "choices": [
      "Surface Tension",
      "Viscosity",
      "Buoyancy",
      "Vapor Pressure"
    ],
    "explanation": "Surface tension (σ) arises from unbalanced inward molecular attraction at liquid-gas interfaces, measured in N/m."
  },
  {
    "id": 3018,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Medium",
    "question": "The fractional change in the volume of a fluid per unit change in hydrostatic pressure under a constant temperature process.",
    "answer": "Compressibility",
    "choices": [
      "Compressibility",
      "Viscosity",
      "Elastic Modulus",
      "Cavitation"
    ],
    "explanation": "Compressibility β is the measure of the relative volume change of a fluid as a response to pressure change, defined as β = 1 / Ev."
  },
  {
    "id": 3019,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Hard",
    "question": "The ratio of the change in unit pressure to the corresponding volumetric strain per unit volume, expressing the elastic resistance of a fluid to compression.",
    "answer": "Bulk Modulus of Elasticity",
    "choices": [
      "Bulk Modulus of Elasticity",
      "Shear Modulus",
      "Young's Modulus",
      "Poisson's Ratio"
    ],
    "explanation": "Bulk modulus of elasticity Ev = -V (dp/dV); for water, Ev ≈ 2.2 GPa, which is why water is practically treated as incompressible."
  },
  {
    "id": 3020,
    "area": "HPGE",
    "subtopic": "Fluid Dynamics & Energy/Continuity",
    "difficulty": "Hard",
    "question": "Small acoustic pressure perturbations imposed on a fluid that propagate through the medium at a velocity known as sonic velocity or celerity.",
    "answer": "Pressure Disturbances",
    "choices": [
      "Pressure Disturbances",
      "Surface Ripples",
      "Hydraulic Jumps",
      "Eddy Currents"
    ],
    "explanation": "Pressure disturbances travel through elastic fluids at the celerity c = √(Ev / ρ), which corresponds to the speed of sound in the liquid."
  },
  {
    "id": 3021,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Medium",
    "question": "The equilibrium pressure exerted by gaseous molecules escaping from a liquid surface in a closed container at a given temperature.",
    "answer": "Vapor Pressure",
    "choices": [
      "Vapor Pressure",
      "Atmospheric Pressure",
      "Gage Pressure",
      "Partial Pressure"
    ],
    "explanation": "Vapor pressure increases exponentially with temperature; when vapor pressure matches local pressure, cavitation or boiling begins."
  },
  {
    "id": 3022,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Easy",
    "question": "Liquids that possess high vapor pressures at normal room temperatures and therefore vaporize easily into the surrounding air.",
    "answer": "Volatile Liquids",
    "choices": [
      "Volatile Liquids",
      "Viscous Liquids",
      "Incompressible Liquids",
      "Newtonian Liquids"
    ],
    "explanation": "Volatile liquids (like gasoline, ether, and alcohol) boil or evaporate readily at modest temperatures and low ambient pressures."
  },
  {
    "id": 3023,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Easy",
    "question": "The thermal phenomenon occurring when liquid temperature increases to the point where its internal vapor pressure equals local ambient pressure.",
    "answer": "Boiling",
    "choices": [
      "Boiling",
      "Condensation",
      "Cavitation",
      "Sublimation"
    ],
    "explanation": "Boiling produces rapid bubble formation throughout the body of the liquid when vapor pressure matches ambient environmental pressure."
  },
  {
    "id": 3024,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Easy",
    "question": "The physical law stating that pressure applied to an enclosed liquid at rest is transmitted undiminished in all directions to every portion of the fluid and container walls.",
    "answer": "Pascal's Law",
    "choices": [
      "Pascal's Law",
      "Archimedes' Principle",
      "Hooke's Law",
      "Bernoulli's Principle"
    ],
    "explanation": "Pascal’s principle forms the foundation of hydrostatic machinery such as hydraulic presses, automotive jacks, and hydraulic brake systems."
  },
  {
    "id": 3025,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Easy",
    "question": "The total fluid pressure measured above a perfect absolute vacuum (zero absolute pressure datum).",
    "answer": "Absolute Pressure",
    "choices": [
      "Absolute Pressure",
      "Gage Pressure",
      "Atmospheric Pressure",
      "Differential Pressure"
    ],
    "explanation": "Absolute pressure = Gage pressure + Atmospheric pressure (Pabs = Pgage + Patm). Absolute pressure cannot be negative."
  },
  {
    "id": 3026,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Easy",
    "question": "The pressure measured above or below local atmospheric pressure by standard Bourdon tubes, manometers, or electronic transducers.",
    "answer": "Gage Pressure",
    "choices": [
      "Gage Pressure",
      "Absolute Pressure",
      "Total Pressure",
      "Hydrostatic Head"
    ],
    "explanation": "Gage pressure uses atmospheric pressure as its zero datum. Pressures below atmospheric are known as vacuum or negative gage pressure."
  },
  {
    "id": 3027,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Easy",
    "question": "The pressure exerted at any point on the earth’s surface from the weight of the air column above it (standard sea-level value = 101.325 kPa).",
    "answer": "Atmospheric Pressure",
    "choices": [
      "Atmospheric Pressure",
      "Gage Pressure",
      "Hydrostatic Pressure",
      "Vapor Pressure"
    ],
    "explanation": "Standard atmospheric pressure at mean sea level equals 101.325 kPa (14.7 psi, 760 mm Hg, or 10.33 m of water)."
  },
  {
    "id": 3028,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Easy",
    "question": "A space or enclosed container from which all matter has been completely or partially evacuated, resulting in pressure below atmospheric.",
    "answer": "Vacuum",
    "choices": [
      "Vacuum",
      "Vapor Envelope",
      "Cavitation Pocket",
      "Air Pocket"
    ],
    "explanation": "A perfect vacuum represents zero absolute pressure, while partial vacuums correspond to negative gage pressure."
  },
  {
    "id": 3029,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Medium",
    "question": "The vertical height of a column of homogeneous liquid of unit weight γ that will produce a specified pressure intensity (h = p / γ).",
    "answer": "Pressure Head",
    "choices": [
      "Pressure Head",
      "Velocity Head",
      "Elevation Head",
      "Total Head"
    ],
    "explanation": "Pressure head represents the hydrostatic pressure energy per unit weight of fluid, expressed in meters or feet of liquid."
  },
  {
    "id": 3030,
    "area": "HPGE",
    "subtopic": "Fluid Dynamics & Energy/Continuity",
    "difficulty": "Medium",
    "question": "A bent tube, usually U-shaped, containing one or more liquids of known specific gravity used to measure fluid pressure or differential pressure.",
    "answer": "Manometer",
    "choices": [
      "Manometer",
      "Hydrometer",
      "Anemometer",
      "Tachometer"
    ],
    "explanation": "Manometers utilize the hydrostatic relationship Δp = γh to quantify fluid pressure differences based on liquid column heights."
  },
  {
    "id": 3031,
    "area": "HPGE",
    "subtopic": "Fluid Dynamics & Energy/Continuity",
    "difficulty": "Medium",
    "question": "A U-tube containing one or more indicator fluids with one limb connected to a pressurized conduit and the opposite limb open to ambient atmospheric pressure.",
    "answer": "Open Manometer",
    "choices": [
      "Open Manometer",
      "Differential Manometer",
      "Barometer",
      "Bourdon Gauge"
    ],
    "explanation": "Open manometers measure gage pressure directly by venting one side to atmospheric pressure."
  },
  {
    "id": 3032,
    "area": "HPGE",
    "subtopic": "Fluid Dynamics & Energy/Continuity",
    "difficulty": "Medium",
    "question": "A manometer without an atmospheric surface, connected across two distinct pipe points to measure exclusively the difference in pressure between them.",
    "answer": "Differential Manometer",
    "choices": [
      "Differential Manometer",
      "Open Manometer",
      "Piezometer",
      "Barometer"
    ],
    "explanation": "Differential manometers eliminate atmospheric pressure effects to isolate pressure drops across orifices, venturi meters, or pipe fittings."
  },
  {
    "id": 3033,
    "area": "HPGE",
    "subtopic": "Fluid Dynamics & Energy/Continuity",
    "difficulty": "Easy",
    "question": "The simplest form of open manometer, consisting of a vertical tube tapped into the wall of a container or conduit for measuring positive liquid pressure head.",
    "answer": "Piezometer",
    "choices": [
      "Piezometer",
      "Venturi Tube",
      "Pitot Tube",
      "Rotameter"
    ],
    "explanation": "A piezometer allows liquid to rise naturally until the liquid column height balances internal pressure (h = p / γ). It cannot measure gas pressure or vacuum."
  },
  {
    "id": 3034,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Easy",
    "question": "A hydraulic structure constructed across a river, stream, or valley to retain, control, or store water flow.",
    "answer": "DAM",
    "choices": [
      "DAM",
      "Levee",
      "Groin",
      "Jetty"
    ],
    "explanation": "Dams store reservoir water for municipal supply, hydroelectric power, irrigation, flood control, and navigation."
  },
  {
    "id": 3035,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Medium",
    "question": "A massive dam constructed of concrete or stone masonry that relies solely on its self-weight to resist overturning and sliding from hydrostatic water pressure.",
    "answer": "Gravity Dam",
    "choices": [
      "Gravity Dam",
      "Arch Dam",
      "Buttress Dam",
      "Embankment Dam"
    ],
    "explanation": "Gravity dams resist water pressure through dead weight; key stability checks include overturning, sliding along the base, and foundation bearing capacity."
  },
  {
    "id": 3036,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Medium",
    "question": "A water-retaining gravity dam formed out of compacted natural materials including loose rock, earth fill, or a zoned composite of rock and clay core.",
    "answer": "Embankment Dam",
    "choices": [
      "Embankment Dam",
      "Gravity Dam",
      "Buttress Dam",
      "Arch Dam"
    ],
    "explanation": "Embankment dams (earthfill or rockfill) have trapezoidal slopes with an impermeable clay core or geomembrane to prevent internal seepage."
  },
  {
    "id": 3037,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Medium",
    "question": "A dam consisting of a watertight upstream face or slab supported at spaced intervals by several downstream structural buttress walls.",
    "answer": "Buttress Dam",
    "choices": [
      "Buttress Dam",
      "Gravity Dam",
      "Embankment Dam",
      "Cofferdam"
    ],
    "explanation": "Buttress dams require significantly less concrete volume than solid gravity dams by transmitting hydraulic thrust to spaced concrete piers."
  },
  {
    "id": 3038,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Easy",
    "question": "The fundamental hydrostatic principle stating that any body submerged in a fluid is acted upon by an upward buoyant force equal to the weight of the displaced fluid.",
    "answer": "Archimedes' Principle",
    "choices": [
      "Archimedes' Principle",
      "Pascal's Principle",
      "Torricelli's Law",
      "Newton's Third Law"
    ],
    "explanation": "Discovered by Archimedes, Fb = γ V_displaced, acting upward through the centroid of the displaced liquid volume (center of buoyancy)."
  },
  {
    "id": 3039,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Easy",
    "question": "The resultant net upward vertical hydrostatic force acting on a floating or submerged body due to the vertical pressure gradient in the surrounding fluid.",
    "answer": "Buoyant Force",
    "choices": [
      "Buoyant Force",
      "Drag Force",
      "Hydrodynamic Lift",
      "Capillary Force"
    ],
    "explanation": "Buoyant force balances gravity in floating bodies and equals the weight of the fluid displaced by the submerged portion."
  },
  {
    "id": 3040,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Hard",
    "question": "The point of intersection between the vertical axis of symmetry of a floating body and the vertical line of action of the buoyant force when the body is tilted.",
    "answer": "Metacenter",
    "choices": [
      "Metacenter",
      "Center of Buoyancy",
      "Center of Gravity",
      "Center of Pressure"
    ],
    "explanation": "The position of the metacenter (M) relative to the center of gravity (G) governs the initial rotational stability of ships and floating pontoons."
  },
  {
    "id": 3041,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Hard",
    "question": "The vertical distance between the center of gravity and the metacenter of a floating vessel (GM = MB ± GB).",
    "answer": "Metacentric Height",
    "choices": [
      "Metacentric Height",
      "Buoyancy Draft",
      "Righting Arm",
      "Freeboard Height"
    ],
    "explanation": "Metacentric height (GM = I/V - GB) dictates whether a floating vessel will right itself (GM > 0) or capsize (GM < 0) when tilted."
  },
  {
    "id": 3042,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Medium",
    "question": "The equilibrium condition of a floating vessel wherein the metacenter M lies above the center of gravity G (GM > 0), creating a restoring righting couple.",
    "answer": "Stable Equilibrium",
    "choices": [
      "Stable Equilibrium",
      "Unstable Equilibrium",
      "Neutral Equilibrium",
      "Dynamic Equilibrium"
    ],
    "explanation": "In stable equilibrium, when heel angle increases, the buoyant force and gravity create a couple that rotates the vessel back to the upright position."
  },
  {
    "id": 3043,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Medium",
    "question": "The equilibrium condition of a floating vessel wherein the metacenter M lies below the center of gravity G (negative GM), producing an overturning moment.",
    "answer": "Unstable Equilibrium",
    "choices": [
      "Unstable Equilibrium",
      "Stable Equilibrium",
      "Neutral Equilibrium",
      "Quasi-static Equilibrium"
    ],
    "explanation": "In unstable equilibrium, any minor disturbance produces an overturning moment that increases heel angle until the vessel capsizes."
  },
  {
    "id": 3044,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Medium",
    "question": "The equilibrium condition of a floating vessel wherein the metacenter M and the center of gravity G coincide at the same point (GM = 0).",
    "answer": "Neutral Equilibrium",
    "choices": [
      "Neutral Equilibrium",
      "Stable Equilibrium",
      "Unstable Equilibrium",
      "Static Equilibrium"
    ],
    "explanation": "In neutral equilibrium, the vessel remains at whatever tilt angle it is placed in without restoring or overturning moments."
  },
  {
    "id": 3045,
    "area": "HPGE",
    "subtopic": "Open Channels, Weirs & Pipe Flow",
    "difficulty": "Easy",
    "question": "The volume of liquid passing through a cross section of a stream, pipe, or conduit per unit of time (Q = Av), commonly expressed in m³/s.",
    "answer": "Discharge",
    "choices": [
      "Discharge",
      "Velocity",
      "Hydraulic Head",
      "Wetted Perimeter"
    ],
    "explanation": "Discharge (or volumetric flow rate) is computed as product of cross-sectional area and average flow velocity: Q = A × V."
  },
  {
    "id": 3046,
    "area": "HPGE",
    "subtopic": "Open Channels, Weirs & Pipe Flow",
    "difficulty": "Easy",
    "question": "A fluid flow condition where flow parameters such as discharge, velocity, and pressure at a given cross section remain constant over time.",
    "answer": "Steady Flow",
    "choices": [
      "Steady Flow",
      "Unsteady Flow",
      "Turbulent Flow",
      "Uniform Flow"
    ],
    "explanation": "In steady flow, partial derivatives with respect to time are zero: ∂v/∂t = 0, ∂p/∂t = 0, and ∂Q/∂t = 0."
  },
  {
    "id": 3047,
    "area": "HPGE",
    "subtopic": "Open Channels, Weirs & Pipe Flow",
    "difficulty": "Easy",
    "question": "A fluid flow condition in which flow discharge, velocity, or depth at a given cross section changes with respect to time.",
    "answer": "Unsteady Flow",
    "choices": [
      "Unsteady Flow",
      "Steady Flow",
      "Laminar Flow",
      "Uniform Flow"
    ],
    "explanation": "Unsteady flow occurs during flood wave routing, pipe valve closures, pump startups, and tidal variations."
  },
  {
    "id": 3048,
    "area": "HPGE",
    "subtopic": "Open Channels, Weirs & Pipe Flow",
    "difficulty": "Easy",
    "question": "An open channel flow condition where the average velocity, water depth, and cross-sectional area remain identical at every successive section along the reach.",
    "answer": "Uniform Flow",
    "choices": [
      "Uniform Flow",
      "Non-uniform Flow",
      "Varied Flow",
      "Critical Flow"
    ],
    "explanation": "Uniform flow occurs when gravity driving forces exactly balance boundary friction losses, resulting in a constant depth known as normal depth dn."
  },
  {
    "id": 3049,
    "area": "HPGE",
    "subtopic": "Open Channels, Weirs & Pipe Flow",
    "difficulty": "Easy",
    "question": "A flow state where the discharge or mass flow rate passing every cross section along the stream at any given instant is identical.",
    "answer": "Continuous Flow",
    "choices": [
      "Continuous Flow",
      "Intermittent Flow",
      "Compressible Flow",
      "Rotational Flow"
    ],
    "explanation": "Continuous flow obeys the continuity equation for incompressible fluids: Q = A1V1 = A2V2 = constant."
  },
  {
    "id": 3050,
    "area": "HPGE",
    "subtopic": "Open Channels, Weirs & Pipe Flow",
    "difficulty": "Hard",
    "question": "An open channel flow regime in which, for a specified volumetric discharge, the specific energy of flow is at an absolute minimum (Froude number Fr = 1.0).",
    "answer": "Critical Flow",
    "choices": [
      "Critical Flow",
      "Subcritical Flow",
      "Supercritical Flow",
      "Laminar Flow"
    ],
    "explanation": "At critical flow, specific energy is minimized (dE/dy = 0), velocity equals critical velocity (vc = √(gdc)), and Fr = 1.0."
  },
  {
    "id": 3051,
    "area": "HPGE",
    "subtopic": "Fluid Dynamics & Energy/Continuity",
    "difficulty": "Medium",
    "question": "A type of fluid flow in which the density of the fluid remains constant from one point to another throughout the flow field.",
    "answer": "Incompressible Flow",
    "choices": [
      "Incompressible Flow",
      "Compressible Flow",
      "Isentropic Flow",
      "Adiabatic Flow"
    ],
    "explanation": "Most liquid flows and gas flows at Mach numbers below 0.3 are modeled accurately as incompressible flows (Dρ/Dt = 0)."
  },
  {
    "id": 3052,
    "area": "HPGE",
    "subtopic": "Open Channels, Weirs & Pipe Flow",
    "difficulty": "Easy",
    "question": "A smooth, orderly flow regime where individual fluid particles move along parallel, uninterrupted streamlines without lateral mixing or crossing.",
    "answer": "Laminar Flow",
    "choices": [
      "Laminar Flow",
      "Turbulent Flow",
      "Transitional Flow",
      "Critical Flow"
    ],
    "explanation": "Laminar flow occurs in closed pipes when Reynolds number Re < 2000, governed by viscous shear resistance."
  },
  {
    "id": 3053,
    "area": "HPGE",
    "subtopic": "Open Channels, Weirs & Pipe Flow",
    "difficulty": "Easy",
    "question": "A chaotic flow regime where fluid particles move in irregular trajectories, continuously crossing and colliding to form macroscopic eddies and high energy loss.",
    "answer": "Turbulent Flow",
    "choices": [
      "Turbulent Flow",
      "Laminar Flow",
      "Inviscid Flow",
      "Creeping Flow"
    ],
    "explanation": "Turbulent flow develops in pipes when Reynolds number Re > 4000, exhibiting logarithmic velocity profiles and shear stress dominated by Reynolds stresses."
  },
  {
    "id": 3054,
    "area": "HPGE",
    "subtopic": "Fluid Dynamics & Energy/Continuity",
    "difficulty": "Hard",
    "question": "A fluid flow regime in which fluid elements rotate about their own mass center axes while traveling along streamlines.",
    "answer": "Rotational Flow",
    "choices": [
      "Rotational Flow",
      "Irrotational Flow",
      "Potential Flow",
      "Uniform Flow"
    ],
    "explanation": "Rotational flow possesses non-zero fluid vorticity (curl of velocity vector ≠ 0), characteristic of boundary layer zones and vortices."
  },
  {
    "id": 3055,
    "area": "HPGE",
    "subtopic": "Fluid Dynamics & Energy/Continuity",
    "difficulty": "Hard",
    "question": "A flow condition in which fluid particles do not rotate about their own axes while traveling along streamlines (vorticity equals zero).",
    "answer": "Irrotational Flow",
    "choices": [
      "Irrotational Flow",
      "Rotational Flow",
      "Turbulent Flow",
      "Vortex Flow"
    ],
    "explanation": "Irrotational flows satisfy curl(V) = 0 and can be represented by a velocity potential function Φ (potential flow theory)."
  },
  {
    "id": 3056,
    "area": "HPGE",
    "subtopic": "Fluid Dynamics & Energy/Continuity",
    "difficulty": "Medium",
    "question": "Imaginary lines drawn through a flowing fluid such that tangent lines at every point indicate the instantaneous direction of the fluid velocity vector.",
    "answer": "Streamlines",
    "choices": [
      "Streamlines",
      "Pathlines",
      "Streaklines",
      "Contour Lines"
    ],
    "explanation": "Streamlines are instantaneous velocity direction curves; in steady flow, streamlines, pathlines, and streaklines are identical."
  },
  {
    "id": 3057,
    "area": "HPGE",
    "subtopic": "Fluid Dynamics & Energy/Continuity",
    "difficulty": "Medium",
    "question": "A tubular flow boundary formed by a bundle of contiguous streamlines across whose lateral envelope surface no fluid flow can pass.",
    "answer": "Streamtubes",
    "choices": [
      "Streamtubes",
      "Flow Pipes",
      "Canals",
      "Vortex Tubes"
    ],
    "explanation": "Because velocity vectors are everywhere tangent to streamlines, fluid can neither enter nor leave through the sides of a streamtube."
  },
  {
    "id": 3058,
    "area": "HPGE",
    "subtopic": "Soil Classification, Compaction & Permeability",
    "difficulty": "Medium",
    "question": "An orthogonal grid composed of intersecting streamlines and equipotential lines drawn to model two-dimensional potential fluid or seepage flow.",
    "answer": "Flow Nets",
    "choices": [
      "Flow Nets",
      "Isochrones",
      "Nomographs",
      "Contour Grids"
    ],
    "explanation": "Flow nets provide graphical solutions to Laplace’s equation for 2D seepage beneath dams and sheet pile walls."
  },
  {
    "id": 3059,
    "area": "HPGE",
    "subtopic": "Fluid Dynamics & Energy/Continuity",
    "difficulty": "Medium",
    "question": "The total mechanical energy per unit weight of fluid in motion, equal to the sum of elevation head, pressure head, and velocity head (H = z + p/γ + v²/2g).",
    "answer": "Total Flow Energy",
    "choices": [
      "Total Flow Energy",
      "Specific Energy",
      "Pressure Head",
      "Kinetic Momentum"
    ],
    "explanation": "Total flow energy head (Bernoulli head) represents the complete mechanical energy possessed by flowing fluid per unit weight."
  },
  {
    "id": 3060,
    "area": "HPGE",
    "subtopic": "Fluid Dynamics & Energy/Continuity",
    "difficulty": "Easy",
    "question": "The hydrodynamic principle stating that in steady frictionless flow of an incompressible fluid, an increase in flow speed occurs simultaneously with a decrease in pressure.",
    "answer": "Bernoulli's Principle",
    "choices": [
      "Bernoulli's Principle",
      "Pascal's Law",
      "Archimedes' Principle",
      "Torricelli's Law"
    ],
    "explanation": "Bernoulli’s equation states: p1/γ + v1²/2g + z1 = p2/γ + v2²/2g + z2 along a frictionless streamline."
  },
  {
    "id": 3061,
    "area": "HPGE",
    "subtopic": "Fluid Dynamics & Energy/Continuity",
    "difficulty": "Medium",
    "question": "The graphical line showing the sum of elevation head and pressure head (z + p/γ) at all stations along a pipe or channel.",
    "answer": "Hydraulic Grade Line",
    "choices": [
      "Hydraulic Grade Line",
      "Energy Grade Line",
      "Datum Line",
      "Critical Depth Line"
    ],
    "explanation": "The hydraulic grade line (HGL) represents the height to which liquid would rise in a piezometer column at that section."
  },
  {
    "id": 3062,
    "area": "HPGE",
    "subtopic": "Fluid Dynamics & Energy/Continuity",
    "difficulty": "Medium",
    "question": "The graphical profile line representing the total mechanical energy head (z + p/γ + v²/2g) along a flowing conduit, located above the HGL by the velocity head.",
    "answer": "Energy Grade Line",
    "choices": [
      "Energy Grade Line",
      "Hydraulic Grade Line",
      "Total Invert Line",
      "Bed Profile"
    ],
    "explanation": "The energy grade line (EGL) always slopes downward in the direction of real flow due to friction losses, except where energy is added by a pump."
  },
  {
    "id": 3063,
    "area": "HPGE",
    "subtopic": "Fluid Dynamics & Energy/Continuity",
    "difficulty": "Easy",
    "question": "A closed perimeter opening in the side or bottom of a tank, reservoir, or pipe through which fluid discharges as an issuing jet.",
    "answer": "Orifice",
    "choices": [
      "Orifice",
      "Weir",
      "Diffuser",
      "Venturi"
    ],
    "explanation": "Standard orifice discharge is calculated using Q = C_d A √(2gh), where C_d is the coefficient of discharge."
  },
  {
    "id": 3064,
    "area": "HPGE",
    "subtopic": "Fluid Dynamics & Energy/Continuity",
    "difficulty": "Medium",
    "question": "A differential pressure flowmeter consisting of a converging inlet section, a constricted throat, and a gradual diverging expansion cone used to measure pipe discharge.",
    "answer": "Venturi Meter",
    "choices": [
      "Venturi Meter",
      "Pitot Tube",
      "Orifice Plate",
      "Rotameter"
    ],
    "explanation": "Venturi meters provide highly accurate flow measurement with minimal overall permanent head loss due to the gradual diffuser cone."
  },
  {
    "id": 3065,
    "area": "HPGE",
    "subtopic": "Fluid Dynamics & Energy/Continuity",
    "difficulty": "Easy",
    "question": "A converging conduit fitting attached to the end of a pipe or hose to increase the velocity and kinetic energy of an issuing liquid jet.",
    "answer": "Nozzle",
    "choices": [
      "Nozzle",
      "Diffuser",
      "Orifice",
      "Valve"
    ],
    "explanation": "Nozzles convert pressure head into high-velocity kinetic energy head for firefighting, Pelton wheel impulse turbines, and hydraulic jetting."
  },
  {
    "id": 3066,
    "area": "HPGE",
    "subtopic": "Fluid Dynamics & Energy/Continuity",
    "difficulty": "Medium",
    "question": "An open-ended L-shaped tube pointing directly into an oncoming fluid flow used to measure stagnation pressure and local flow velocity.",
    "answer": "Pitot Tube",
    "choices": [
      "Pitot Tube",
      "Venturi Meter",
      "Piezometer",
      "Manometer"
    ],
    "explanation": "By converting local kinetic energy into stagnation pressure head, velocity is determined via v = √(2gΔh)."
  },
  {
    "id": 3067,
    "area": "HPGE",
    "subtopic": "Open Channels, Weirs & Pipe Flow",
    "difficulty": "Easy",
    "question": "An overflow notch or barrier structure constructed across an open channel to measure or regulate volumetric discharge.",
    "answer": "Weir",
    "choices": [
      "Weir",
      "Orifice",
      "Sluice Gate",
      "Culvert"
    ],
    "explanation": "Common types of weirs include rectangular, triangular (V-notch), trapezoidal (Cipolletti), and broad-crested weirs."
  },
  {
    "id": 3068,
    "area": "HPGE",
    "subtopic": "Fluid Dynamics & Energy/Continuity",
    "difficulty": "Medium",
    "question": "The hydrodynamic theorem stating that the theoretical speed of efflux of liquid discharging through an orifice under head h equals the velocity of free fall from that height (v = √(2gh)).",
    "answer": "Torricelli's Theorem",
    "choices": [
      "Torricelli's Theorem",
      "Bernoulli's Theorem",
      "Pascal's Principle",
      "Darcy's Law"
    ],
    "explanation": "Derived from Bernoulli’s theorem assuming negligible approach velocity: v = √(2gh)."
  },
  {
    "id": 3069,
    "area": "HPGE",
    "subtopic": "Open Channels, Weirs & Pipe Flow",
    "difficulty": "Easy",
    "question": "The dimensionless ratio of fluid inertial forces to viscous forces (Re = ρvD / μ) used to identify laminar and turbulent flow regimes.",
    "answer": "Reynolds Number",
    "choices": [
      "Reynolds Number",
      "Froude Number",
      "Mach Number",
      "Weber Number"
    ],
    "explanation": "In pipe flow, Re < 2000 denotes laminar flow, 2000 < Re < 4000 is transitional, and Re > 4000 indicates fully turbulent flow."
  },
  {
    "id": 3070,
    "area": "HPGE",
    "subtopic": "Open Channels, Weirs & Pipe Flow",
    "difficulty": "Medium",
    "question": "The head loss in a pipe system caused by fluid shear friction along straight sections of pipe of uniform diameter and roughness.",
    "answer": "Major Head Loss",
    "choices": [
      "Major Head Loss",
      "Minor Head Loss",
      "Velocity Loss",
      "Shock Loss"
    ],
    "explanation": "Major head loss is calculated using the Darcy-Weisbach equation: hf = f (L/D) (v² / 2g)."
  },
  {
    "id": 3071,
    "area": "HPGE",
    "subtopic": "Open Channels, Weirs & Pipe Flow",
    "difficulty": "Medium",
    "question": "Head losses in pipe flow caused by localized flow disruptions such as sudden contractions, expansions, elbows, bends, tees, and valves.",
    "answer": "Minor Head Loss",
    "choices": [
      "Minor Head Loss",
      "Major Head Loss",
      "Skin Friction Loss",
      "Drag Loss"
    ],
    "explanation": "Minor head losses are expressed in terms of velocity head: hm = K (v² / 2g), where K is the loss coefficient."
  },
  {
    "id": 3072,
    "area": "HPGE",
    "subtopic": "Open Channels, Weirs & Pipe Flow",
    "difficulty": "Medium",
    "question": "The dimensionless value defined as the ratio of inertial forces to gravity forces (Fr = v / √(gD)), governing open channel flow regimes.",
    "answer": "Froude Number",
    "choices": [
      "Froude Number",
      "Reynolds Number",
      "Mach Number",
      "Euler Number"
    ],
    "explanation": "Fr < 1 indicates subcritical tranquil flow, Fr = 1 indicates critical flow, and Fr > 1 indicates supercritical rapid flow."
  },
  {
    "id": 3073,
    "area": "HPGE",
    "subtopic": "Open Channels, Weirs & Pipe Flow",
    "difficulty": "Medium",
    "question": "The depth of open channel flow at which, for a given discharge, specific energy is minimum and Froude number equals 1.0.",
    "answer": "Critical Depth",
    "choices": [
      "Critical Depth",
      "Normal Depth",
      "Hydraulic Depth",
      "Conjugate Depth"
    ],
    "explanation": "For rectangular channels, critical depth is dc = ³√(q² / g), where q is discharge per unit width."
  },
  {
    "id": 3074,
    "area": "HPGE",
    "subtopic": "Open Channels, Weirs & Pipe Flow",
    "difficulty": "Medium",
    "question": "The longitudinal channel bed slope required to maintain steady uniform flow at critical depth for a specified discharge.",
    "answer": "Critical Slope",
    "choices": [
      "Critical Slope",
      "Mild Slope",
      "Steep Slope",
      "Adverse Slope"
    ],
    "explanation": "When actual channel slope So = Sc, uniform normal flow occurs at critical depth."
  },
  {
    "id": 3075,
    "area": "HPGE",
    "subtopic": "Open Channels, Weirs & Pipe Flow",
    "difficulty": "Medium",
    "question": "An abrupt increase in depth of rapidly flowing water accompanied by high turbulence and kinetic energy dissipation when transitioning from supercritical to subcritical flow.",
    "answer": "Hydraulic Jump",
    "choices": [
      "Hydraulic Jump",
      "Surge Wave",
      "Backwater Curve",
      "Drawdown Curve"
    ],
    "explanation": "Hydraulic jumps occur when flow transitions from Fr1 > 1 to Fr2 < 1, used in stilling basins below spillways to prevent downstream riverbed erosion."
  },
  {
    "id": 3076,
    "area": "HPGE",
    "subtopic": "Fluid Dynamics & Energy/Continuity",
    "difficulty": "Hard",
    "question": "A severe acoustic pressure surge or shock wave caused when flowing liquid in a pipeline is forced to stop or abruptly change velocity due to rapid valve closure.",
    "answer": "Water Hammer",
    "choices": [
      "Water Hammer",
      "Cavitation",
      "Surge Tank Oscillation",
      "Vortex Shedding"
    ],
    "explanation": "Water hammer produces intense pressure waves Δp = ρ c Δv that can rupture pipelines if not mitigated by surge tanks or slow-closing valves."
  },
  {
    "id": 3077,
    "area": "HPGE",
    "subtopic": "Fluid Dynamics & Energy/Continuity",
    "difficulty": "Medium",
    "question": "The component of the resultant hydrodynamic force exerted by a fluid on a body acting parallel and opposite to the relative direction of fluid motion.",
    "answer": "Drag Force",
    "choices": [
      "Drag Force",
      "Lift Force",
      "Buoyant Force",
      "Thrust Force"
    ],
    "explanation": "Drag force Fd = 1/2 Cd ρ A v² consists of skin friction drag and form (pressure) drag."
  },
  {
    "id": 3078,
    "area": "HPGE",
    "subtopic": "Fluid Dynamics & Energy/Continuity",
    "difficulty": "Medium",
    "question": "The component of the resultant force exerted by a fluid on a body acting perpendicular to the relative oncoming motion of the fluid.",
    "answer": "Lift Force",
    "choices": [
      "Lift Force",
      "Drag Force",
      "Momentum Force",
      "Buoyancy Force"
    ],
    "explanation": "Lift force Fl = 1/2 Cl ρ A v² results from circulation and asymmetric pressure distributions across hydrofoils and airfoils."
  },
  {
    "id": 3079,
    "area": "HPGE",
    "subtopic": "Foundations, Retaining Walls & Slope Stability",
    "difficulty": "Medium",
    "question": "The dimensionless ratio between lateral and vertical principal effective stresses when an earth-retaining structure moves away from the retained soil mass.",
    "answer": "Active Earth Pressure Coefficient",
    "choices": [
      "Active Earth Pressure Coefficient",
      "Passive Earth Pressure Coefficient",
      "At-rest Earth Pressure Coefficient",
      "Bearing Capacity Factor"
    ],
    "explanation": "Rankine’s active earth pressure coefficient Ka = (1 - sin φ) / (1 + sin φ) = tan²(45° - φ/2)."
  },
  {
    "id": 3080,
    "area": "HPGE",
    "subtopic": "Foundations, Retaining Walls & Slope Stability",
    "difficulty": "Medium",
    "question": "The dimensionless ratio between lateral and vertical principal effective stresses when an earth-retaining structure is pushed forcefully against a retained soil mass.",
    "answer": "Passive Earth Pressure Coefficient",
    "choices": [
      "Passive Earth Pressure Coefficient",
      "Active Earth Pressure Coefficient",
      "At-rest Coefficient",
      "Cohesion Coefficient"
    ],
    "explanation": "Rankine’s passive coefficient Kp = (1 + sin φ) / (1 - sin φ) = tan²(45° + φ/2) represents maximum lateral resistance against thrust."
  },
  {
    "id": 3081,
    "area": "HPGE",
    "subtopic": "Foundations, Retaining Walls & Slope Stability",
    "difficulty": "Easy",
    "question": "The maximum allowable contact pressure that ensures an adequate margin of safety against shear failure and keeps settlement within tolerable limits.",
    "answer": "Allowable Bearing Capacity",
    "choices": [
      "Allowable Bearing Capacity",
      "Ultimate Bearing Capacity",
      "Overburden Pressure",
      "Intergranular Stress"
    ],
    "explanation": "Allowable bearing capacity q_all = q_ult / FS, where the safety factor FS typically ranges from 2.5 to 3.0 for shallow footings."
  },
  {
    "id": 3082,
    "area": "HPGE",
    "subtopic": "Consolidation, Shear Strength & Bearing Capacity",
    "difficulty": "Easy",
    "question": "The component of shear strength of a rock or soil mass resulting from intermolecular and interparticle attraction independent of normal confining stress.",
    "answer": "Cohesion",
    "choices": [
      "Cohesion",
      "Internal Friction Angle",
      "Pore Pressure",
      "Dilatancy"
    ],
    "explanation": "Cohesion (c) is the shear strength intercept in the Mohr-Coulomb equation: τ = c + σ’ tan φ."
  },
  {
    "id": 3083,
    "area": "HPGE",
    "subtopic": "Soil Physical Properties & Phase Relationships",
    "difficulty": "Easy",
    "question": "The geotechnical term used to describe the degree of firmness, hardness, or plasticity of fine-grained cohesive soil at a given moisture content.",
    "answer": "Consistency",
    "choices": [
      "Consistency",
      "Compaction",
      "Permeability",
      "Porosity"
    ],
    "explanation": "Soil consistency is categorized as very soft, soft, medium, stiff, very stiff, or hard based on Atterberg limits and unconfined compressive strength."
  },
  {
    "id": 3084,
    "area": "HPGE",
    "subtopic": "Foundations, Retaining Walls & Slope Stability",
    "difficulty": "Easy",
    "question": "The vertical distance (Df) measured from the ground surface down to the base or bearing plane of a foundation.",
    "answer": "Embedment Depth",
    "choices": [
      "Embedment Depth",
      "Foundation Width",
      "Frost Line",
      "Settlement Depth"
    ],
    "explanation": "Embedment depth Df provides surcharge confining pressure (γ Df) which enhances foundation bearing capacity."
  },
  {
    "id": 3085,
    "area": "HPGE",
    "subtopic": "Soil Classification, Compaction & Permeability",
    "difficulty": "Medium",
    "question": "A line or surface along which the total hydraulic potential head is identical at all points within a seepage flow field.",
    "answer": "Equipotential Line",
    "choices": [
      "Equipotential Line",
      "Flow Line",
      "Phreatic Line",
      "Boundary Streamline"
    ],
    "explanation": "Equipotential lines intersect flow lines at right angles (90°) to form orthogonal curvilinear squares in a flow net."
  },
  {
    "id": 3086,
    "area": "HPGE",
    "subtopic": "Soil Classification, Compaction & Permeability",
    "difficulty": "Medium",
    "question": "A path along which an individual water molecule travels through a permeable soil medium from upstream to downstream.",
    "answer": "Flow Line",
    "choices": [
      "Flow Line",
      "Equipotential Line",
      "Hydraulic Gradient",
      "Critical Path"
    ],
    "explanation": "Flow lines define the trajectory of laminar groundwater seepage through porous soil matrices."
  },
  {
    "id": 3087,
    "area": "HPGE",
    "subtopic": "Foundations, Retaining Walls & Slope Stability",
    "difficulty": "Easy",
    "question": "An enlarged concrete slab element designed to distribute concentrated column or wall loads safely over a wider area of supporting soil.",
    "answer": "Footing",
    "choices": [
      "Footing",
      "Grade Beam",
      "Pier Cap",
      "Retaining Key"
    ],
    "explanation": "Footings prevent excessive settlement or punch-through shear failure by reducing applied contact pressure onto subgrade soil."
  },
  {
    "id": 3088,
    "area": "HPGE",
    "subtopic": "Foundations, Retaining Walls & Slope Stability",
    "difficulty": "Easy",
    "question": "The substructure of an engineered building or facility that directly interfaces with and transmits building loads into the underlying soil or rock strata.",
    "answer": "Foundation",
    "choices": [
      "Foundation",
      "Superstructure",
      "Subgrade",
      "Diaphragm"
    ],
    "explanation": "Foundations are classified as shallow (spread footings, mat foundations) or deep (driven piles, drilled shafts, caissons)."
  },
  {
    "id": 3089,
    "area": "HPGE",
    "subtopic": "Consolidation, Shear Strength & Bearing Capacity",
    "difficulty": "Hard",
    "question": "The effective stress carried by the solid soil mineral skeleton resulting from particle-to-particle contact forces (σ’ = σ - u).",
    "answer": "Intergranular Stress",
    "choices": [
      "Intergranular Stress",
      "Pore Water Pressure",
      "Total Stress",
      "Hydrostatic Stress"
    ],
    "explanation": "Also known as effective stress (Terzaghi’s principle), intergranular stress controls soil volume change, consolidation, and shear strength."
  },
  {
    "id": 3090,
    "area": "HPGE",
    "subtopic": "Consolidation, Shear Strength & Bearing Capacity",
    "difficulty": "Medium",
    "question": "The seismic phenomenon in which saturated, loose cohesionless soils temporarily lose shear strength and stiffness during earthquake shaking, behaving like a liquid.",
    "answer": "Liquefaction",
    "choices": [
      "Liquefaction",
      "Consolidation",
      "Subsidence",
      "Piping"
    ],
    "explanation": "Cyclic seismic shaking builds up excess pore water pressure until effective stress drops to zero, causing bearing failures and sand boils."
  },
  {
    "id": 3091,
    "area": "HPGE",
    "subtopic": "Consolidation, Shear Strength & Bearing Capacity",
    "difficulty": "Medium",
    "question": "The vertical pressure or effective stress exerted at a given depth by the weight of the overlying soil layers (γz).",
    "answer": "Overburden Pressure",
    "choices": [
      "Overburden Pressure",
      "Pore Pressure",
      "Hydrostatic Pressure",
      "Lateral Thrust"
    ],
    "explanation": "Overburden pressure (geostatic stress) σv = Σ(γ × h) increases linearly with depth in homogeneous soil deposits."
  },
  {
    "id": 3092,
    "area": "HPGE",
    "subtopic": "Consolidation, Shear Strength & Bearing Capacity",
    "difficulty": "Medium",
    "question": "A soil deposit whose present effective overburden pressure is less than the maximum preconsolidation stress it experienced in its geological history.",
    "answer": "Overconsolidated Soil",
    "choices": [
      "Overconsolidated Soil",
      "Normally Consolidated Soil",
      "Underconsolidated Soil",
      "Sensitive Clay"
    ],
    "explanation": "Overconsolidated clays exhibit an overconsolidation ratio OCR > 1.0, experiencing lower settlement than normally consolidated clays under applied load."
  },
  {
    "id": 3093,
    "area": "HPGE",
    "subtopic": "Soil Physical Properties & Phase Relationships",
    "difficulty": "Easy",
    "question": "The hydrostatic pressure exerted by water occupying the interstitial void spaces between mineral soil particles.",
    "answer": "Pore Water Pressure",
    "choices": [
      "Pore Water Pressure",
      "Effective Stress",
      "Total Stress",
      "Capillary Tension"
    ],
    "explanation": "Pore water pressure u reduces effective intergranular stress (σ’ = σ - u) and diminishes the frictional shear strength of the soil."
  },
  {
    "id": 3094,
    "area": "HPGE",
    "subtopic": "Foundations, Retaining Walls & Slope Stability",
    "difficulty": "Easy",
    "question": "An engineered structure whose primary function is to prevent lateral movement of earth and support vertical or steep soil banks.",
    "answer": "Retaining Wall",
    "choices": [
      "Retaining Wall",
      "Shear Wall",
      "Bulkhead",
      "Curtain Wall"
    ],
    "explanation": "Retaining walls include gravity, cantilever, counterfort, and mechanically stabilized earth (MSE) walls."
  },
  {
    "id": 3095,
    "area": "HPGE",
    "subtopic": "Consolidation, Shear Strength & Bearing Capacity",
    "difficulty": "Medium",
    "question": "The internal resistance per unit area that a soil mass can mobilize along an internal failure plane to resist sliding or shearing failure.",
    "answer": "Shear Strength",
    "choices": [
      "Shear Strength",
      "Tensile Strength",
      "Compressive Strength",
      "Bearing Capacity"
    ],
    "explanation": "Soil derives its shear strength from interparticle friction and cohesion, quantified by Mohr-Coulomb criteria: τ = c’ + σ’ tan φ’."
  },
  {
    "id": 3096,
    "area": "HPGE",
    "subtopic": "Consolidation, Shear Strength & Bearing Capacity",
    "difficulty": "Easy",
    "question": "The total vertical or horizontal stress at a point in a soil mass, equal to the sum of effective intergranular stress and pore water pressure (σ = σ’ + u).",
    "answer": "Total Stress",
    "choices": [
      "Total Stress",
      "Effective Stress",
      "Deviator Stress",
      "Principal Stress"
    ],
    "explanation": "Total stress represents the overall load per unit area, including both solid soil skeleton forces and pore water pressure."
  },
  {
    "id": 3097,
    "area": "HPGE",
    "subtopic": "Foundations, Retaining Walls & Slope Stability",
    "difficulty": "Easy",
    "question": "A foundation in which the ratio of embedment depth to minimum plan dimension (width B) is typically less than or equal to 2.5 (Df / B ≤ 2.5).",
    "answer": "Shallow Foundation",
    "choices": [
      "Shallow Foundation",
      "Deep Foundation",
      "Pile Foundation",
      "Drilled Pier"
    ],
    "explanation": "Shallow foundations include isolated pad footings, strip footings, and raft (mat) foundations constructed near the ground surface."
  },
  {
    "id": 3098,
    "area": "HPGE",
    "subtopic": "Foundations, Retaining Walls & Slope Stability",
    "difficulty": "Medium",
    "question": "The theoretical maximum contact pressure that a soil mass can support before suffering catastrophic shear rupture or bearing failure.",
    "answer": "Ultimate Bearing Capacity",
    "choices": [
      "Ultimate Bearing Capacity",
      "Allowable Bearing Capacity",
      "Net Bearing Capacity",
      "Settlement Threshold"
    ],
    "explanation": "Calculated using Terzaghi’s bearing capacity formula: qu = c Nc + γ Df Nq + 0.5 γ B Nγ."
  },
  {
    "id": 3099,
    "area": "HPGE",
    "subtopic": "Foundations, Retaining Walls & Slope Stability",
    "difficulty": "Hard",
    "question": "The maximum net contact pressure that soil can sustain above its initial effective overburden pressure (q_net = q_ult - γ Df).",
    "answer": "Ultimate Net Bearing Capacity",
    "choices": [
      "Ultimate Net Bearing Capacity",
      "Gross Bearing Capacity",
      "Safe Bearing Capacity",
      "Allowable Bearing Pressure"
    ],
    "explanation": "Ultimate net bearing capacity isolates the net increase in foundation stress above existing in-situ geostatic overburden."
  },
  {
    "id": 3100,
    "area": "PSAD",
    "subtopic": "Seismic Engineering & NSCP Provisions",
    "difficulty": "Easy",
    "question": "The real physical lateral displacement or ground motion experienced by a structure during seismic shaking, measured by a seismometer.",
    "answer": "Actual Displacement",
    "choices": [
      "Actual Displacement",
      "Elastic Deflection",
      "Plastic Hinge Rotation",
      "Interstory Drift Ratio"
    ],
    "explanation": "Seismometers record actual ground and structural response displacements during earthquake events."
  },
  {
    "id": 3101,
    "area": "PSAD",
    "subtopic": "Seismic Engineering & NSCP Provisions",
    "difficulty": "Medium",
    "question": "The point on a building floor diaphragm through which the resultant of the lateral resistance of all vertical lateral-force-resisting elements acts.",
    "answer": "Center of Rigidity",
    "choices": [
      "Center of Rigidity",
      "Center of Mass",
      "Centroid of Geometry",
      "Point of Inflection"
    ],
    "explanation": "Center of rigidity (CR) represents the stiffness-weighted center of shear walls and frames resisting seismic or wind loads."
  },
  {
    "id": 3102,
    "area": "PSAD",
    "subtopic": "Seismic Engineering & NSCP Provisions",
    "difficulty": "Medium",
    "question": "The point on a floor diaphragm through which the resultant inertial seismic lateral force acts, corresponding to the centroid of floor mass.",
    "answer": "Center of Mass",
    "choices": [
      "Center of Mass",
      "Center of Rigidity",
      "Shear Center",
      "Neutral Axis"
    ],
    "explanation": "During an earthquake, floor accelerations act through the center of mass (CM), which depends on dead load and permanent equipment placement."
  },
  {
    "id": 3103,
    "area": "PSAD",
    "subtopic": "Reinforced Concrete & Prestressed Design",
    "difficulty": "Easy",
    "question": "A vertical structural compression member having a ratio of unsupported height to least lateral dimension not less than 3, used primarily to support axial compressive loads.",
    "answer": "Column",
    "choices": [
      "Column",
      "Pedestal",
      "Beam",
      "Pier Cap"
    ],
    "explanation": "Under NSCP 2015, vertical compression members with height-to-least-lateral-dimension ratio ≥ 3 are designated as columns (shorter members are pedestals)."
  },
  {
    "id": 3104,
    "area": "PSAD",
    "subtopic": "Reinforced Concrete & Prestressed Design",
    "difficulty": "Medium",
    "question": "A short structural cantilever bracket projecting from the face of a concrete column or wall designed to support heavy beam or crane girder reactions.",
    "answer": "Corbel",
    "choices": [
      "Corbel",
      "Spandrel",
      "Haunch",
      "Gusset Plate"
    ],
    "explanation": "Corbels have shear span-to-depth ratios a/d < 1.0, designed using the strut-and-tie method to prevent shear-friction failure."
  },
  {
    "id": 3105,
    "area": "PSAD",
    "subtopic": "Strength of Materials & Mechanics of Deformable Bodies",
    "difficulty": "Medium",
    "question": "The slow, progressive, time-dependent deformation of a structural material under sustained constant mechanical loading.",
    "answer": "Creep",
    "choices": [
      "Creep",
      "Fatigue",
      "Relaxation",
      "Elastic Recovery"
    ],
    "explanation": "Concrete creep increases long-term beam deflections up to 2–3 times initial instantaneous elastic deflection (NSCP 2015 Sec. 424.2.4)."
  },
  {
    "id": 3106,
    "area": "PSAD",
    "subtopic": "Strength of Materials & Mechanics of Deformable Bodies",
    "difficulty": "Easy",
    "question": "The mechanical property of a material allowing it to undergo significant plastic deformation beyond yield before suffering brittle fracture or failure.",
    "answer": "Ductility",
    "choices": [
      "Ductility",
      "Brittleness",
      "Hardness",
      "Elasticity"
    ],
    "explanation": "Ductility is essential in seismic design, enabling reinforced concrete frames and structural steel to dissipate earthquake energy via plastic hinges."
  },
  {
    "id": 3107,
    "area": "PSAD",
    "subtopic": "Strength of Materials & Mechanics of Deformable Bodies",
    "difficulty": "Easy",
    "question": "The property of a material which enables it to completely return to its original dimensions and shape when applied mechanical loads are removed.",
    "answer": "Elasticity",
    "choices": [
      "Elasticity",
      "Plasticity",
      "Malleability",
      "Viscosity"
    ],
    "explanation": "Elastic deformation involves reversible stretching of atomic bonds without permanent dislocation."
  },
  {
    "id": 3108,
    "area": "PSAD",
    "subtopic": "Seismic Engineering & NSCP Provisions",
    "difficulty": "Medium",
    "question": "The horizontal spatial distance between the center of rigidity and the center of mass on a structural floor diaphragm.",
    "answer": "Eccentricity",
    "choices": [
      "Eccentricity",
      "Story Drift",
      "Radius of Gyration",
      "Clear Span"
    ],
    "explanation": "Diaphragm eccentricity (e = |x_cm - x_cr|) creates torsional moment (Mt = V × e) which amplifies shear stresses in perimeter frames."
  },
  {
    "id": 3109,
    "area": "PSAD",
    "subtopic": "Strength of Materials & Mechanics of Deformable Bodies",
    "difficulty": "Medium",
    "question": "The progressive structural damage and eventual sudden fracture of a member subjected to repetitive cycles of fluctuating mechanical stresses.",
    "answer": "Fatigue",
    "choices": [
      "Fatigue",
      "Creep",
      "Corrosion",
      "Buckling"
    ],
    "explanation": "Fatigue failure initiates at microscopic stress concentrations and propagates cracks under stresses well below static yield strength."
  },
  {
    "id": 3110,
    "area": "PSAD",
    "subtopic": "Seismic Engineering & NSCP Provisions",
    "difficulty": "Easy",
    "question": "The vertical depth beneath the earth’s surface from the epicenter down to the subterranean hypocenter where earthquake fault rupture originates.",
    "answer": "Focal Depth",
    "choices": [
      "Focal Depth",
      "Epicentral Distance",
      "Fault Throw",
      "Seismic Shadow"
    ],
    "explanation": "Shallow focal depths (h < 70 km) typically produce more destructive ground shaking than deep-focus earthquakes."
  },
  {
    "id": 3111,
    "area": "PSAD",
    "subtopic": "Strength of Materials & Mechanics of Deformable Bodies",
    "difficulty": "Easy",
    "question": "A material that possesses identical chemical composition and physical properties at every point throughout its volume.",
    "answer": "Homogeneous Material",
    "choices": [
      "Homogeneous Material",
      "Isotropic Material",
      "Orthotropic Material",
      "Anisotropic Material"
    ],
    "explanation": "Homogeneity refers to point-to-point uniformity in composition (as opposed to isotropy, which refers to direction-independent properties)."
  },
  {
    "id": 3112,
    "area": "PSAD",
    "subtopic": "Strength of Materials & Mechanics of Deformable Bodies",
    "difficulty": "Easy",
    "question": "The fundamental constitutive law stating that mechanical stress is directly proportional to strain within the proportional elastic region (σ = E ε).",
    "answer": "Hooke's Law",
    "choices": [
      "Hooke's Law",
      "Pascal's Law",
      "Newton's Law",
      "Euler's Formula"
    ],
    "explanation": "Formulated by Robert Hooke in 1678 (ut tensio, sic vis), forming the core of linear elastic structural analysis."
  },
  {
    "id": 3113,
    "area": "PSAD",
    "subtopic": "Strength of Materials & Mechanics of Deformable Bodies",
    "difficulty": "Easy",
    "question": "A material possessing identical elastic and physical properties in all spatial directions at any given point.",
    "answer": "Isotropic Material",
    "choices": [
      "Isotropic Material",
      "Orthotropic Material",
      "Anisotropic Material",
      "Homogeneous Material"
    ],
    "explanation": "Structural steel is typically modeled as isotropic (same Young’s modulus E in all orientations), whereas wood and laminated composites are not."
  },
  {
    "id": 3114,
    "area": "PSAD",
    "subtopic": "Structural Mechanics & Statics",
    "difficulty": "Easy",
    "question": "The retarding frictional force that acts between two contacting surfaces when there is relative sliding motion between them.",
    "answer": "Kinetic Friction",
    "choices": [
      "Kinetic Friction",
      "Static Friction",
      "Rolling Resistance",
      "Viscous Drag"
    ],
    "explanation": "Kinetic friction force Fk = μk N is generally lower than peak static friction force Fs = μs N."
  },
  {
    "id": 3115,
    "area": "PSAD",
    "subtopic": "Seismic Engineering & NSCP Provisions",
    "difficulty": "Easy",
    "question": "The quantitative measure of total energy released at the earthquake source, historically measured on the Richter logarithmic scale.",
    "answer": "Magnitude of Earthquake",
    "choices": [
      "Magnitude of Earthquake",
      "Intensity of Earthquake",
      "Peak Ground Acceleration",
      "Spectral Response"
    ],
    "explanation": "Earthquake magnitude (M) measures energy released at the hypocenter, whereas intensity (MMI / PEIS) describes observed surface shaking damage."
  },
  {
    "id": 3116,
    "area": "PSAD",
    "subtopic": "Strength of Materials & Mechanics of Deformable Bodies",
    "difficulty": "Hard",
    "question": "A composite or structural material exhibiting different elastic properties along mutually perpendicular orthogonal planes of symmetry.",
    "answer": "Orthotropic Material",
    "choices": [
      "Orthotropic Material",
      "Isotropic Material",
      "Homogeneous Material",
      "Anisotropic Material"
    ],
    "explanation": "Timber and orthotropic steel bridge decks have three mutually perpendicular axes of material symmetry (longitudinal, radial, and tangential)."
  },
  {
    "id": 3117,
    "area": "PSAD",
    "subtopic": "Strength of Materials & Mechanics of Deformable Bodies",
    "difficulty": "Medium",
    "question": "The negative ratio of transverse (lateral) strain to longitudinal (axial) strain in an elastic member subjected to uniaxial tensile stress (ν = -ε_lat / ε_axial).",
    "answer": "Poisson's Ratio",
    "choices": [
      "Poisson's Ratio",
      "Shear Modulus",
      "Slenderness Ratio",
      "Bulk Modulus"
    ],
    "explanation": "For structural steel, Poisson’s ratio ν ≈ 0.30; for concrete, ν ≈ 0.15 to 0.20."
  },
  {
    "id": 3118,
    "area": "PSAD",
    "subtopic": "Reinforced Concrete & Prestressed Design",
    "difficulty": "Medium",
    "question": "A method of prestressing concrete wherein high-strength steel tendons are tensioned and anchored after the concrete has been cast and cured to sufficient compressive strength.",
    "answer": "Post-tensioning",
    "choices": [
      "Post-tensioning",
      "Pre-tensioning",
      "Internal Anchorage",
      "Grout Bonding"
    ],
    "explanation": "Post-tensioning utilizes internal ducts cast into the concrete; tendons are jacked against the hardened member and locked with wedge anchors."
  },
  {
    "id": 3119,
    "area": "PSAD",
    "subtopic": "Reinforced Concrete & Prestressed Design",
    "difficulty": "Medium",
    "question": "A method of prestressing concrete wherein high-strength steel strands are stressed between external bulkheads before the concrete is poured into formwork.",
    "answer": "Pre-tensioning",
    "choices": [
      "Pre-tensioning",
      "Post-tensioning",
      "De-bonding",
      "External Tendoning"
    ],
    "explanation": "Pre-tensioning is commonly performed in precast manufacturing plants; prestress is transferred into concrete via bond upon cutting the strands."
  },
  {
    "id": 3120,
    "area": "PSAD",
    "subtopic": "Strength of Materials & Mechanics of Deformable Bodies",
    "difficulty": "Medium",
    "question": "The condition of a material wherein it undergoes permanent, irreversible deformation beyond its elastic limit without undergoing instantaneous fracture.",
    "answer": "Plasticity",
    "choices": [
      "Plasticity",
      "Elasticity",
      "Brittleness",
      "Resilience"
    ],
    "explanation": "Plasticity allows energy absorption in plastic hinges during severe windstorms or earthquake events."
  },
  {
    "id": 3121,
    "area": "PSAD",
    "subtopic": "Structural Mechanics & Statics",
    "difficulty": "Medium",
    "question": "The structural property representing resistance to deformation, mathematically defined as the reciprocal of deflection (1 / Δ).",
    "answer": "Rigidity of a Structure",
    "choices": [
      "Rigidity of a Structure",
      "Flexibility of a Structure",
      "Compliance",
      "Ductility"
    ],
    "explanation": "Rigidity expresses how effectively a structure resists translational or rotational deflection under applied load."
  },
  {
    "id": 3122,
    "area": "PSAD",
    "subtopic": "Structural Mechanics & Statics",
    "difficulty": "Medium",
    "question": "The property representing the tendency of a structure to deform under unit applied load, defined as the mathematical reciprocal of stiffness (f = 1 / k).",
    "answer": "Flexibility of a Structure",
    "choices": [
      "Flexibility of a Structure",
      "Rigidity of a Structure",
      "Hardness",
      "Toughness"
    ],
    "explanation": "In matrix structural analysis, the flexibility matrix [f] is the inverse of the stiffness matrix [k]."
  },
  {
    "id": 3123,
    "area": "PSAD",
    "subtopic": "Reinforced Concrete & Prestressed Design",
    "difficulty": "Hard",
    "question": "The gradual loss of stress that occurs over time in a prestressing steel tendon or concrete member when held at a constant strain.",
    "answer": "Stress Relaxation",
    "choices": [
      "Stress Relaxation",
      "Creep",
      "Shrinkage",
      "Fatigue Decay"
    ],
    "explanation": "Prestress loss due to tendon relaxation is accounted for in prestressed concrete design (NSCP 2015 Sec. 420.3)."
  },
  {
    "id": 3124,
    "area": "PSAD",
    "subtopic": "Strength of Materials & Mechanics of Deformable Bodies",
    "difficulty": "Medium",
    "question": "The capacity of a structural material to absorb strain energy during deformation within its elastic limit and release that energy upon unloading.",
    "answer": "Resilience",
    "choices": [
      "Resilience",
      "Toughness",
      "Hardness",
      "Plasticity"
    ],
    "explanation": "The modulus of resilience is represented by the triangular area under the linear elastic portion of the stress-strain curve: Ur = σ_y² / (2E)."
  },
  {
    "id": 3125,
    "area": "PSAD",
    "subtopic": "Seismic Engineering & NSCP Provisions",
    "difficulty": "Medium",
    "question": "The dangerous physical phenomenon where the frequency of dynamic external excitation matches the natural frequency of a structure, creating massive amplification of vibration amplitudes.",
    "answer": "Resonance",
    "choices": [
      "Resonance",
      "Damping",
      "Harmonic Drift",
      "Flutter"
    ],
    "explanation": "Structural resonance must be avoided in earthquake, bridge, and tall building design by tuning stiffness and installing tuned mass dampers."
  },
  {
    "id": 3126,
    "area": "PSAD",
    "subtopic": "Seismic Engineering & NSCP Provisions",
    "difficulty": "Hard",
    "question": "A building story whose lateral stiffness is less than 70 percent of that of the story immediately above it, or less than 80 percent of the average stiffness of the three stories above (NSCP 2015).",
    "answer": "Soft Story",
    "choices": [
      "Soft Story",
      "Weak Story",
      "Torsional Irregularity",
      "Reentrant Corner"
    ],
    "explanation": "Soft stories (often caused by open ground-floor parking or high retail ceilings) represent severe seismic vertical stiffness irregularities."
  },
  {
    "id": 3127,
    "area": "PSAD",
    "subtopic": "Structural Mechanics & Statics",
    "difficulty": "Easy",
    "question": "The single vector force that represents the combined action of a system of forces, determining whether a body remains in equilibrium or accelerates.",
    "answer": "Resultant Force",
    "choices": [
      "Resultant Force",
      "Equilibrant Force",
      "Couple Moment",
      "Normal Reaction"
    ],
    "explanation": "For static equilibrium, the resultant force and resultant moment must both equal zero: ΣF = 0 and ΣM = 0."
  },
  {
    "id": 3128,
    "area": "PSAD",
    "subtopic": "Seismic Engineering & NSCP Provisions",
    "difficulty": "Medium",
    "question": "The lateral displacement of one building floor level relative to the floor level immediately above or below it under seismic or wind lateral forces.",
    "answer": "Story Drift",
    "choices": [
      "Story Drift",
      "Absolute Deflection",
      "Diaphragm Displacement",
      "Foundation Rotation"
    ],
    "explanation": "NSCP 2015 strictly limits design story drift (Δ) to prevent structural damage, P-delta amplification, and cladding failure."
  },
  {
    "id": 3129,
    "area": "PSAD",
    "subtopic": "Seismic Engineering & NSCP Provisions",
    "difficulty": "Hard",
    "question": "Torsional shearing stress induced in building lateral-force-resisting frames and shear walls when the center of mass and center of rigidity do not coincide.",
    "answer": "Torsional Shear Stress",
    "choices": [
      "Torsional Shear Stress",
      "Direct Shear Stress",
      "Flexural Stress",
      "Punching Shear"
    ],
    "explanation": "When CM and CR are separated by eccentricity e, total floor shear generates a twisting moment that induces torsional shear stresses."
  },
  {
    "id": 3130,
    "area": "PSAD",
    "subtopic": "Strength of Materials & Mechanics of Deformable Bodies",
    "difficulty": "Easy",
    "question": "The onset of significant irreversible plastic strain in a structural metal with little or no increase in applied stress.",
    "answer": "Yielding",
    "choices": [
      "Yielding",
      "Fracture",
      "Necking",
      "Buckling"
    ],
    "explanation": "Yield point marks the transition from linear elastic behavior to plastic deformation, governed by yield strength Fy."
  },
  {
    "id": 3131,
    "area": "PSAD",
    "subtopic": "Strength of Materials & Mechanics of Deformable Bodies",
    "difficulty": "Medium",
    "question": "The total capacity of a structural material to absorb mechanical energy in both elastic and plastic ranges up to the point of complete rupture.",
    "answer": "Toughness",
    "choices": [
      "Toughness",
      "Resilience",
      "Hardness",
      "Stiffness"
    ],
    "explanation": "Toughness equals the total area under the complete stress-strain curve from zero load to tensile fracture."
  },
  {
    "id": 3132,
    "area": "PSAD",
    "subtopic": "Strength of Materials & Mechanics of Deformable Bodies",
    "difficulty": "Easy",
    "question": "The fundamental constant of proportionality (modulus of elasticity E) that defines the linear relationship between normal stress and normal strain in Hooke’s law.",
    "answer": "Young's Modulus",
    "choices": [
      "Young's Modulus",
      "Shear Modulus",
      "Bulk Modulus",
      "Poisson's Ratio"
    ],
    "explanation": "For structural steel, Young’s modulus E = 200,000 MPa (29,000 ksi); for concrete, Ec ≈ 4700 √f’c MPa."
  },
  {
    "id": 3133,
    "area": "MSTE",
    "subtopic": "Pavement Distress, Asphalt & Concrete Paving",
    "difficulty": "Easy",
    "question": "A series of interconnected polygonal fatigue cracks in an asphalt concrete surface resembling reptile skin, caused by repeated wheel load applications.",
    "answer": "Alligator Cracking",
    "choices": [
      "Alligator Cracking",
      "Block Cracking",
      "Longitudinal Cracking",
      "Reflection Cracking"
    ],
    "explanation": "Alligator (fatigue) cracking initiates at the bottom of the HMA layer where tensile strain is highest under repeated axle loads."
  },
  {
    "id": 3134,
    "area": "MSTE",
    "subtopic": "Ports, Harbors, Waves & Coastal Engineering",
    "difficulty": "Easy",
    "question": "The vertical distance measured from the wave trough to the wave crest in an ocean wave train.",
    "answer": "Wave Amplitude",
    "choices": [
      "Wave Amplitude",
      "Wave Length",
      "Wave Period",
      "Wave Celerity"
    ],
    "explanation": "Wave height H is the vertical distance from trough to crest; wave amplitude a = H / 2."
  },
  {
    "id": 3135,
    "area": "MSTE",
    "subtopic": "Pavement Distress, Asphalt & Concrete Paving",
    "difficulty": "Easy",
    "question": "A high-grade pavement layer composed of carefully proportioned coarse aggregate, fine aggregate, mineral filler, and asphalt bituminous binder.",
    "answer": "Asphaltic Concrete",
    "choices": [
      "Asphaltic Concrete",
      "Water-bound Macadam",
      "Soil Cement",
      "Lean Concrete"
    ],
    "explanation": "Asphaltic concrete (hot mix asphalt, HMA) is compacted at high temperatures to form a durable, flexible wearing surface."
  },
  {
    "id": 3136,
    "area": "MSTE",
    "subtopic": "Traffic Engineering, Markings & Signs",
    "difficulty": "Easy",
    "question": "The arithmetic average of the instantaneous spot speeds of all vehicles passing a specified point along a highway during a given time interval.",
    "answer": "Average Speed",
    "choices": [
      "Average Speed",
      "Space Mean Speed",
      "Design Speed",
      "Running Speed"
    ],
    "explanation": "Spot speed average (time mean speed) is obtained using radar guns or speed traps at a single fixed road cross section."
  },
  {
    "id": 3137,
    "area": "MSTE",
    "subtopic": "Highway Geometric Design & Sight Distances",
    "difficulty": "Easy",
    "question": "Longitudinal roadside safety appurtenances designed to redirect errant vehicles, mitigate rollover crashes, and shield roadside hazards.",
    "answer": "Highway Barriers",
    "choices": [
      "Highway Barriers",
      "Delineators",
      "Chevron Signs",
      "Rumble Strips"
    ],
    "explanation": "Highway barriers include W-beam steel guardrails, concrete New Jersey / F-shape barriers, and high-tension cable barriers."
  },
  {
    "id": 3138,
    "area": "MSTE",
    "subtopic": "Pavement Distress, Asphalt & Concrete Paving",
    "difficulty": "Easy",
    "question": "The structural component of a road placed directly beneath the surface course which receives traffic loads and distributes them safely to the subgrade.",
    "answer": "Base Course",
    "choices": [
      "Base Course",
      "Subgrade",
      "Seal Coat",
      "Prime Coat"
    ],
    "explanation": "Base courses consist of high-quality crushed stone or stabilized gravel meeting DPWH Item 200/201 specifications."
  },
  {
    "id": 3139,
    "area": "MSTE",
    "subtopic": "Traffic Engineering, Markings & Signs",
    "difficulty": "Medium",
    "question": "The theoretical maximum hourly rate at which passenger cars can traverse a highway lane under ideal roadway, geometric, and traffic conditions.",
    "answer": "Basic Capacity",
    "choices": [
      "Basic Capacity",
      "Possible Capacity",
      "Practical Capacity",
      "Design Capacity"
    ],
    "explanation": "Basic capacity represents the ultimate ceiling under ideal conditions (typically 2,000 to 2,400 pcphpl for freeways)."
  },
  {
    "id": 3140,
    "area": "MSTE",
    "subtopic": "Pavement Distress, Asphalt & Concrete Paving",
    "difficulty": "Easy",
    "question": "The mechanical process of accurately proportioning cement, water, fine and coarse aggregates, and admixtures prior to concrete mixing.",
    "answer": "Batching",
    "choices": [
      "Batching",
      "Curing",
      "Screeding",
      "Finishing"
    ],
    "explanation": "Weight batching provides precise water-cement ratio control and uniform compressive strength in concrete production."
  },
  {
    "id": 3141,
    "area": "MSTE",
    "subtopic": "Ports, Harbors, Waves & Coastal Engineering",
    "difficulty": "Easy",
    "question": "The measurement and physical mapping of ocean water depths, navigational channels, and seabed underwater topography.",
    "answer": "Bathymetry",
    "choices": [
      "Bathymetry",
      "Topography",
      "Altimetry",
      "Hypsometry"
    ],
    "explanation": "Bathymetric survey charts provide navigational depths and underwater terrain contours for port and dredging design."
  },
  {
    "id": 3142,
    "area": "MSTE",
    "subtopic": "Ports, Harbors, Waves & Coastal Engineering",
    "difficulty": "Easy",
    "question": "An empirical scale ranging from 0 (calm) to 12 (hurricane) used internationally to relate wind speed to observed sea and land conditions.",
    "answer": "Beaufort Scale",
    "choices": [
      "Beaufort Scale",
      "Richter Scale",
      "Saffir-simpson Scale",
      "Mohs Scale"
    ],
    "explanation": "Devised by Sir Francis Beaufort in 1805 to standardize wind velocity estimates for maritime navigation."
  },
  {
    "id": 3143,
    "area": "MSTE",
    "subtopic": "Ports, Harbors, Waves & Coastal Engineering",
    "difficulty": "Medium",
    "question": "A heavy cast-iron or steel double-headed mooring post mounted near the waterline of a berth deck for securing ship mooring hawsers during storms.",
    "answer": "Bitt",
    "choices": [
      "Bitt",
      "Bollard",
      "Dolphin",
      "Fender"
    ],
    "explanation": "Bitts are sturdy twin vertical posts installed on decks or quays to snub and secure heavy mooring lines."
  },
  {
    "id": 3144,
    "area": "MSTE",
    "subtopic": "Pavement Distress, Asphalt & Concrete Paving",
    "difficulty": "Medium",
    "question": "A 20 mm thick premix bitumen wearing course layer laid over an asphalt road surface and topped with a bitumen seal coat.",
    "answer": "Bitumen Carpet",
    "choices": [
      "Bitumen Carpet",
      "Tack Coat",
      "Prime Coat",
      "Slurry Seal"
    ],
    "explanation": "Bitumen carpet provides a thin renewal wearing course protecting base courses from weathering and tire abrasion."
  },
  {
    "id": 3145,
    "area": "MSTE",
    "subtopic": "Pavement Distress, Asphalt & Concrete Paving",
    "difficulty": "Medium",
    "question": "The upward migration and accumulation of excessive bituminous binder on an asphalt road surface, producing a mirror-like film that reduces skid resistance.",
    "answer": "Bleeding or Flushing",
    "choices": [
      "Bleeding or Flushing",
      "Raveling",
      "Polishing",
      "Stripping"
    ],
    "explanation": "Bleeding occurs in hot weather when excessive asphalt content or low air voids force bitumen to exude to the surface."
  },
  {
    "id": 3146,
    "area": "MSTE",
    "subtopic": "Pavement Distress, Asphalt & Concrete Paving",
    "difficulty": "Medium",
    "question": "Interconnected cracks forming large rectangular or polygonal patterns with sharp corners, caused by temperature shrinkage of asphalt or underlying cement base.",
    "answer": "Block Cracking",
    "choices": [
      "Block Cracking",
      "Alligator Cracking",
      "Longitudinal Cracking",
      "Edge Cracking"
    ],
    "explanation": "Block cracking is non-load-related, caused primarily by daily thermal contraction cycles and binder age-hardening."
  },
  {
    "id": 3147,
    "area": "MSTE",
    "subtopic": "Pavement Distress, Asphalt & Concrete Paving",
    "difficulty": "Hard",
    "question": "Localized upward buckling and explosive shattering of Portland cement concrete pavement slabs occurring at transverse joints during extreme summer heat.",
    "answer": "Blowups",
    "choices": [
      "Blowups",
      "Pumping",
      "Faulting",
      "Spalling"
    ],
    "explanation": "Blowups occur when incompressible debris packs into joints, preventing thermal expansion and causing extreme compressive buckling."
  },
  {
    "id": 3148,
    "area": "MSTE",
    "subtopic": "Ports, Harbors, Waves & Coastal Engineering",
    "difficulty": "Easy",
    "question": "A massive coastal barrier structure constructed offshore to dissipate destructive wave action and provide calm water within a harbor basin.",
    "answer": "Breakwater",
    "choices": [
      "Breakwater",
      "Groin",
      "Bulkhead",
      "Seawall"
    ],
    "explanation": "Breakwaters protect inner port basins from incoming sea swells; types include rubble-mound, caisson, and floating breakwaters."
  },
  {
    "id": 3149,
    "area": "MSTE",
    "subtopic": "Highway Geometric Design & Sight Distances",
    "difficulty": "Easy",
    "question": "The distance traversed by a motor vehicle from the instant the vehicle brakes are actuated until the vehicle comes to a complete halt.",
    "answer": "Braking Distance",
    "choices": [
      "Braking Distance",
      "Perception Distance",
      "Reaction Distance",
      "Passing Distance"
    ],
    "explanation": "Braking distance db = V² / (254(f ± G)), depending on initial speed V, tire-road friction coefficient f, and roadway grade G."
  },
  {
    "id": 3150,
    "area": "MSTE",
    "subtopic": "Ports, Harbors, Waves & Coastal Engineering",
    "difficulty": "Medium",
    "question": "Waves whose forward crest particle velocity exceeds wave celerity, causing the wave front to steepen and collapse forward (H / L > 1/7).",
    "answer": "Breaking Waves",
    "choices": [
      "Breaking Waves",
      "Standing Waves",
      "Seiching Waves",
      "Internal Waves"
    ],
    "explanation": "Waves break in deep water when steepness H/L > 0.142, and in shallow water when water depth d ≈ 1.28 H."
  },
  {
    "id": 3151,
    "area": "MSTE",
    "subtopic": "Ports, Harbors, Waves & Coastal Engineering",
    "difficulty": "Medium",
    "question": "Isolated marine berthing dolphins equipped with energy-absorbing fenders designed to absorb the kinetic impact of berthing ships and hold them against broadside winds.",
    "answer": "Breasting Dolphins",
    "choices": [
      "Breasting Dolphins",
      "Mooring Dolphins",
      "Turning Basins",
      "Quay Walls"
    ],
    "explanation": "Breasting dolphins contact ship hulls via resilient rubber fenders to cushion berthing impact forces."
  },
  {
    "id": 3152,
    "area": "MSTE",
    "subtopic": "Ports, Harbors, Waves & Coastal Engineering",
    "difficulty": "Easy",
    "question": "A sturdy vertical post anchored firmly onto a wharf, pier, or quay deck to which ship mooring lines and cables are secured.",
    "answer": "Bollard",
    "choices": [
      "Bollard",
      "Fender",
      "Capstan",
      "Fairlead"
    ],
    "explanation": "Bollards (such as tee-head, horn, or kidney bollards) withstand horizontal mooring line tensions of 50 to 200+ tons."
  },
  {
    "id": 3153,
    "area": "MSTE",
    "subtopic": "Highway Geometric Design & Sight Distances",
    "difficulty": "Medium",
    "question": "A dangerous horizontal curve alignment consisting of two consecutive curves curving in the same direction separated by a very short tangent.",
    "answer": "Broken-back Curve",
    "choices": [
      "Broken-back Curve",
      "Reverse Curve",
      "Compound Curve",
      "Spiral Curve"
    ],
    "explanation": "Broken-back curves violate driver expectations and should be avoided or replaced by a single continuous horizontal curve."
  },
  {
    "id": 3154,
    "area": "MSTE",
    "subtopic": "Ports, Harbors, Waves & Coastal Engineering",
    "difficulty": "Easy",
    "question": "A vertical retaining wall or partition built along a shoreline to retain upland soil and prevent fill material from sliding into the water.",
    "answer": "Bulkhead",
    "choices": [
      "Bulkhead",
      "Breakwater",
      "Groin",
      "Jetty"
    ],
    "explanation": "Bulkheads retain soil at the water’s edge while being subjected to wave action and lateral earth pressures."
  },
  {
    "id": 3155,
    "area": "MSTE",
    "subtopic": "Traffic Engineering, Markings & Signs",
    "difficulty": "Medium",
    "question": "The maximum sustained 15-minute rate of traffic flow, expressed in passenger cars per hour per lane, accommodated by a uniform freeway segment.",
    "answer": "Traffic Capacity",
    "choices": [
      "Traffic Capacity",
      "Traffic Volume",
      "Traffic Density",
      "Level of Service"
    ],
    "explanation": "Capacity represents the maximum throughput rate of a roadway facility under prevailing traffic and environmental conditions."
  },
  {
    "id": 3156,
    "area": "MSTE",
    "subtopic": "Highway Geometric Design & Sight Distances",
    "difficulty": "Easy",
    "question": "The point along a highway cross section where the planned excavation cut slope or embankment fill slope intersects the existing natural ground line.",
    "answer": "Catch Point",
    "choices": [
      "Catch Point",
      "Grade Point",
      "Hinge Point",
      "Crown Point"
    ],
    "explanation": "Catch points determine right-of-way limits and slope stake locations during highway earthwork construction."
  },
  {
    "id": 3157,
    "area": "MSTE",
    "subtopic": "Traffic Engineering, Markings & Signs",
    "difficulty": "Easy",
    "question": "V-shaped diagonal pavement markings used to channelize traffic, outline channelization islands, and guide vehicles into proper turning lanes.",
    "answer": "Chevron Markings",
    "choices": [
      "Chevron Markings",
      "Transverse Bars",
      "Stop Lines",
      "Zebra Crossings"
    ],
    "explanation": "Chevron markings alert motorists and delineate gore areas where exit ramps separate from freeway lanes."
  },
  {
    "id": 3158,
    "area": "MSTE",
    "subtopic": "Highway Geometric Design & Sight Distances",
    "difficulty": "Easy",
    "question": "Horizontal curves of uniform constant radius used to transition vehicular travel smoothly between intersecting straight roadway tangents.",
    "answer": "Circular Curves",
    "choices": [
      "Circular Curves",
      "Parabolic Curves",
      "Spiral Transitions",
      "Vertical Curves"
    ],
    "explanation": "Laid out in the field using transit deflection angles and chords from the Point of Curvature (PC) to Point of Tangency (PT)."
  },
  {
    "id": 3159,
    "area": "MSTE",
    "subtopic": "Ports, Harbors, Waves & Coastal Engineering",
    "difficulty": "Hard",
    "question": "A non-breaking standing wave pattern formed against a vertical breakwater or seawall resulting from full reflection of oncoming incident waves.",
    "answer": "Clapotis",
    "choices": [
      "Clapotis",
      "Solitary Wave",
      "Tidal Bore",
      "Tsunami"
    ],
    "explanation": "Clapotis generates twice the wave height of the incident wave at the vertical wall, exerting severe pulsating hydrostatic pressure."
  },
  {
    "id": 3160,
    "area": "MSTE",
    "subtopic": "Pavement Distress, Asphalt & Concrete Paving",
    "difficulty": "Medium",
    "question": "A rigid pavement constructed with continuous longitudinal reinforcing steel and no transverse contraction joints, keeping microcracks tightly closed.",
    "answer": "Continuously Reinforced Concrete Pavement",
    "choices": [
      "Continuously Reinforced Concrete Pavement",
      "Jointed Plain Concrete Pavement",
      "Jointed Reinforced Concrete Pavement",
      "Flexible Pavement"
    ],
    "explanation": "CRCP eliminates joint faulting and joint maintenance, widely specified for heavily trafficked high-speed interstate corridors."
  },
  {
    "id": 3161,
    "area": "MSTE",
    "subtopic": "Traffic Engineering, Markings & Signs",
    "difficulty": "Easy",
    "question": "Traffic conflicts that occur when two vehicular travel paths directly intersect each other at an at-grade junction.",
    "answer": "Crossing Conflicts",
    "choices": [
      "Crossing Conflicts",
      "Merging Conflicts",
      "Diverging Conflicts",
      "Weaving Conflicts"
    ],
    "explanation": "Crossing conflicts are the most severe conflict types at intersections, posing the highest risk of right-angle (T-bone) collisions."
  },
  {
    "id": 3162,
    "area": "MSTE",
    "subtopic": "Highway Geometric Design & Sight Distances",
    "difficulty": "Easy",
    "question": "The transverse slope provided on a roadway cross section to shed surface water rapidly towards roadside gutters and drainage ditches.",
    "answer": "Cross Slope",
    "choices": [
      "Cross Slope",
      "Longitudinal Grade",
      "Superelevation Runoff",
      "Profile Grade"
    ],
    "explanation": "Standard normal crown cross slopes typically range from 1.5% to 2.0% for paved surfaces."
  },
  {
    "id": 3163,
    "area": "MSTE",
    "subtopic": "Ports, Harbors, Waves & Coastal Engineering",
    "difficulty": "Medium",
    "question": "Ocean surface waves traveling in deep water where the ratio of water depth to wavelength exceeds 0.5 (d / L > 0.5).",
    "answer": "Deep Water Waves",
    "choices": [
      "Deep Water Waves",
      "Shallow Water Waves",
      "Transitional Waves",
      "Capillary Waves"
    ],
    "explanation": "In deep water, wave propagation velocity is independent of seabed depth and depends solely on wavelength (c = √(gL / 2π))."
  },
  {
    "id": 3164,
    "area": "MSTE",
    "subtopic": "Traffic Engineering, Markings & Signs",
    "difficulty": "Easy",
    "question": "The difference between the actual travel time experienced by a motor vehicle traversing a road segment and an ideal travel time at free-flow speed.",
    "answer": "Traffic Delay",
    "choices": [
      "Traffic Delay",
      "Flow Variance",
      "Headway Lag",
      "Queue Latency"
    ],
    "explanation": "Delay is a primary measure of effectiveness (MOE) used to determine highway level of service (LOS) at signalized intersections."
  },
  {
    "id": 3165,
    "area": "MSTE",
    "subtopic": "Highway Geometric Design & Sight Distances",
    "difficulty": "Easy",
    "question": "Small retroreflective devices mounted along roadside shoulders or safety barriers in continuous series to guide drivers along roadway alignment at night.",
    "answer": "Delineators",
    "choices": [
      "Delineators",
      "Chevrons",
      "Rumble Strips",
      "Traffic Cones"
    ],
    "explanation": "Delineators outline curves, lane transitions, and bridge approaches under nighttime driving conditions."
  },
  {
    "id": 3166,
    "area": "MSTE",
    "subtopic": "Traffic Engineering, Markings & Signs",
    "difficulty": "Easy",
    "question": "The number of vehicles occupying a unit length of roadway at a given instant in time, typically expressed in vehicles per kilometer or per mile.",
    "answer": "Traffic Density",
    "choices": [
      "Traffic Density",
      "Traffic Flow",
      "Traffic Volume",
      "Occupancy Ratio"
    ],
    "explanation": "Density k = q / v is a spatial parameter directly indicating traffic congestion and proximity between vehicles."
  },
  {
    "id": 3167,
    "area": "MSTE",
    "subtopic": "Highway Geometric Design & Sight Distances",
    "difficulty": "Easy",
    "question": "The selected maximum safe speed that can be maintained over a designated highway section when environmental conditions are favorable.",
    "answer": "Design Speed",
    "choices": [
      "Design Speed",
      "Operating Speed",
      "Average Running Speed",
      "Pace Speed"
    ],
    "explanation": "Design speed dictates minimum curve radii, sight distances, and superelevation rates along a highway corridor."
  },
  {
    "id": 3168,
    "area": "MSTE",
    "subtopic": "Ports, Harbors, Waves & Coastal Engineering",
    "difficulty": "Hard",
    "question": "The phenomenon involving the lateral transmission and bending of wave energy along a wave crest into the sheltered shadow zone behind a breakwater or headland.",
    "answer": "Wave Diffraction",
    "choices": [
      "Wave Diffraction",
      "Wave Refraction",
      "Wave Reflection",
      "Wave Shoaling"
    ],
    "explanation": "Wave diffraction allows wave disturbances to penetrate into harbor waters behind protecting breakwater barriers."
  },
  {
    "id": 3169,
    "area": "MSTE",
    "subtopic": "Ports, Harbors, Waves & Coastal Engineering",
    "difficulty": "Medium",
    "question": "A tidal cycle characterized by having only one high water (tide) and one low water (tide) per lunar day.",
    "answer": "Diurnal Tides",
    "choices": [
      "Diurnal Tides",
      "Semi-diurnal Tides",
      "Mixed Tides",
      "Equinoctial Tides"
    ],
    "explanation": "Diurnal tides have a tidal period of approximately 24 hours and 50 minutes."
  },
  {
    "id": 3170,
    "area": "MSTE",
    "subtopic": "Traffic Engineering, Markings & Signs",
    "difficulty": "Easy",
    "question": "The traffic maneuver and conflict that occurs when a vehicle departs or separates from a main traffic stream, such as exiting via an off-ramp.",
    "answer": "Diverging Conflicts",
    "choices": [
      "Diverging Conflicts",
      "Merging Conflicts",
      "Crossing Conflicts",
      "Weaving Conflicts"
    ],
    "explanation": "Diverging maneuvers occur at off-ramps and deceleration lanes where exiting vehicles leave the primary stream."
  },
  {
    "id": 3171,
    "area": "MSTE",
    "subtopic": "Ports, Harbors, Waves & Coastal Engineering",
    "difficulty": "Easy",
    "question": "An artificial basin structure equipped with watertight gates that can be dewatered to allow inspection, maintenance, and hull repair of vessels.",
    "answer": "Dry Dock",
    "choices": [
      "Dry Dock",
      "Wet Dock",
      "Floating Pontoon",
      "Wharf Basin"
    ],
    "explanation": "Dry docks (graving docks) allow vessels to settle onto keel blocks in a completely dry working environment."
  },
  {
    "id": 3172,
    "area": "MSTE",
    "subtopic": "Traffic Engineering, Markings & Signs",
    "difficulty": "Medium",
    "question": "The psychological stage in PIEV theory where fear, anger, or perceived urgency influences the mental decision transmitted to physical muscles.",
    "answer": "Piev Emotion",
    "choices": [
      "Piev Emotion",
      "Piev Perception",
      "Piev Intellection",
      "Piev Volition"
    ],
    "explanation": "PIEV theory comprises Perception, Intellection, Emotion, and Volition, governing driver reaction times."
  },
  {
    "id": 3173,
    "area": "MSTE",
    "subtopic": "Highway Geometric Design & Sight Distances",
    "difficulty": "Easy",
    "question": "A divided arterial highway designed for high-speed through-traffic with partial or full control of access and grade separations at major intersections.",
    "answer": "Expressway",
    "choices": [
      "Expressway",
      "Collector Street",
      "Local Access Road",
      "Parkway"
    ],
    "explanation": "Expressways provide rapid intercity transit with high operating speeds and restricted at-grade access points."
  },
  {
    "id": 3174,
    "area": "MSTE",
    "subtopic": "Ports, Harbors, Waves & Coastal Engineering",
    "difficulty": "Easy",
    "question": "A designated open water navigational corridor possessing certified safe water depth and width for vessel navigation.",
    "answer": "Fairway",
    "choices": [
      "Fairway",
      "Turning Basin",
      "Anchorage Roadstead",
      "Berthing Slip"
    ],
    "explanation": "Fairways are clearly marked with buoys and beacons to guide ships safely past shallows and underwater hazards."
  },
  {
    "id": 3175,
    "area": "MSTE",
    "subtopic": "Pavement Distress, Asphalt & Concrete Paving",
    "difficulty": "Medium",
    "question": "The vertical elevation difference across adjacent concrete slabs at a transverse joint, commonly caused by subbase pumping and loss of load transfer.",
    "answer": "Joint Faulting",
    "choices": [
      "Joint Faulting",
      "Slab Warping",
      "Spalling",
      "Blowup"
    ],
    "explanation": "Joint faulting creates rough ride quality and slap noise as heavy truck wheels impact stepped slab edges."
  },
  {
    "id": 3176,
    "area": "MSTE",
    "subtopic": "Ports, Harbors, Waves & Coastal Engineering",
    "difficulty": "Medium",
    "question": "The unobstructed horizontal distance over open water over which wind blows in a constant direction to generate wave action.",
    "answer": "Wind Fetch",
    "choices": [
      "Wind Fetch",
      "Wind Duration",
      "Wave Runup",
      "Wave Flight"
    ],
    "explanation": "Fetch length is a critical input parameter in empirical wave forecasting equations along with wind speed and duration."
  },
  {
    "id": 3177,
    "area": "MSTE",
    "subtopic": "Pavement Distress, Asphalt & Concrete Paving",
    "difficulty": "Easy",
    "question": "A multi-layered pavement structure with a bituminous asphalt surface course that distributes wheel loads to the subgrade via grain-to-grain contact.",
    "answer": "Flexible Pavement",
    "choices": [
      "Flexible Pavement",
      "Rigid Pavement",
      "Semi-rigid Pavement",
      "Composite Slab"
    ],
    "explanation": "Flexible pavements consist of surface, base, subbase, and subgrade layers designed via empirical structural number (SN) methods."
  },
  {
    "id": 3178,
    "area": "MSTE",
    "subtopic": "Traffic Engineering, Markings & Signs",
    "difficulty": "Easy",
    "question": "The rate at which vehicles pass a specific point on a roadway, expressed in vehicles per hour (q = k × v).",
    "answer": "Traffic Flow",
    "choices": [
      "Traffic Flow",
      "Traffic Density",
      "Traffic Headway",
      "Traffic Queue"
    ],
    "explanation": "Traffic flow rate q represents the product of traffic density k and space mean speed v."
  },
  {
    "id": 3179,
    "area": "MSTE",
    "subtopic": "Highway Geometric Design & Sight Distances",
    "difficulty": "Medium",
    "question": "The specified maximum distance within which excavated earthwork material is transported without incurring overhaul charges.",
    "answer": "Free Haul Distance",
    "choices": [
      "Free Haul Distance",
      "Economic Haul Limit",
      "Mass Haul Length",
      "Borrow Run"
    ],
    "explanation": "Hauling earthwork beyond the free haul distance is classified and paid as overhaul."
  },
  {
    "id": 3180,
    "area": "MSTE",
    "subtopic": "Traffic Engineering, Markings & Signs",
    "difficulty": "Medium",
    "question": "The time clearance between successive vehicles in a major traffic stream that a merging driver evaluates to safely execute a merge maneuver.",
    "answer": "Traffic Gap",
    "choices": [
      "Traffic Gap",
      "Time Headway",
      "Clear Spacing",
      "Stopping Distance"
    ],
    "explanation": "Critical gap is the minimum time headway in the priority stream accepted by minor-street drivers."
  },
  {
    "id": 3181,
    "area": "MSTE",
    "subtopic": "Pavement Distress, Asphalt & Concrete Paving",
    "difficulty": "Medium",
    "question": "Permeable synthetic textile fabrics placed in pavement and earthwork layers to provide filtration, separation, drainage, and soil reinforcement.",
    "answer": "Geotextiles",
    "choices": [
      "Geotextiles",
      "Geomembranes",
      "Geofoam",
      "Geogrids"
    ],
    "explanation": "Geotextiles prevent fine subgrade soil particles from migrating upward into coarse aggregate drainage layers."
  },
  {
    "id": 3182,
    "area": "MSTE",
    "subtopic": "Highway Geometric Design & Sight Distances",
    "difficulty": "Easy",
    "question": "A highway intersection design that eliminates crossing conflicts by placing conflicting vehicular streams at different vertical elevations.",
    "answer": "Grade Separation",
    "choices": [
      "Grade Separation",
      "Roundabout",
      "Signalized Junction",
      "Channelized Intersection"
    ],
    "explanation": "Grade separations use overpasses or underpasses combined with ramps to form interchanges such as cloverleafs or diamonds."
  },
  {
    "id": 3183,
    "area": "MSTE",
    "subtopic": "Ports, Harbors, Waves & Coastal Engineering",
    "difficulty": "Medium",
    "question": "A coastal protection structure built perpendicular to the shoreline to interrupt littoral drift and trap longshore sand along a beach.",
    "answer": "Groin",
    "choices": [
      "Groin",
      "Breakwater",
      "Seawall",
      "Revetment"
    ],
    "explanation": "Groins trap moving sediment on the updrift side while causing erosion on the downdrift side."
  },
  {
    "id": 3184,
    "area": "MSTE",
    "subtopic": "Traffic Engineering, Markings & Signs",
    "difficulty": "Easy",
    "question": "Highway signs that inform and advise road users of route numbers, directions, distances, destinations, and points of interest.",
    "answer": "Guide Signs",
    "choices": [
      "Guide Signs",
      "Regulatory Signs",
      "Warning Signs",
      "Roadwork Signs"
    ],
    "explanation": "Guide signs feature green or blue retroreflective backgrounds with white lettering indicating interchanges and highway routes."
  },
  {
    "id": 3185,
    "area": "MSTE",
    "subtopic": "Traffic Engineering, Markings & Signs",
    "difficulty": "Easy",
    "question": "The elapsed time interval between the passage of consecutive vehicles past a reference line, measured from front bumper to front bumper.",
    "answer": "Time Headway",
    "choices": [
      "Time Headway",
      "Space Headway",
      "Distance Gap",
      "Time Lag"
    ],
    "explanation": "Time headway (ht) is the reciprocal of traffic flow rate (ht = 1 / q)."
  },
  {
    "id": 3186,
    "area": "MSTE",
    "subtopic": "Ports, Harbors, Waves & Coastal Engineering",
    "difficulty": "Medium",
    "question": "A solid marine structure projecting perpendicular to the shoreline into the sea to protect river mouths, stabilize navigation channels, and berth vessels.",
    "answer": "Jetty",
    "choices": [
      "Jetty",
      "Breakwater",
      "Groin",
      "Dolphin"
    ],
    "explanation": "Jetties maintain channel mouth depths by preventing sand spits and shoals from choking river harbor entrances."
  },
  {
    "id": 3187,
    "area": "MSTE",
    "subtopic": "Pavement Distress, Asphalt & Concrete Paving",
    "difficulty": "Medium",
    "question": "The chipping, breakdown, or disintegration of concrete slab edges along transverse or longitudinal joints or cracks.",
    "answer": "Joint Spalling",
    "choices": [
      "Joint Spalling",
      "Faulting",
      "Scaling",
      "Raveling"
    ],
    "explanation": "Joint spalling results from localized high compressive stresses, incompressibles trapped in joints, or poor dowel bar alignment."
  },
  {
    "id": 3188,
    "area": "MSTE",
    "subtopic": "Pavement Distress, Asphalt & Concrete Paving",
    "difficulty": "Medium",
    "question": "Pavement cracks running parallel to the direction of vehicular travel and roadway centerline, caused by joint shrinkage or wheel path fatigue.",
    "answer": "Longitudinal Cracking",
    "choices": [
      "Longitudinal Cracking",
      "Transverse Cracking",
      "Block Cracking",
      "Crescent Cracking"
    ],
    "explanation": "Longitudinal cracks in wheel paths indicate fatigue distress, while longitudinal cracks on joints indicate poor joint compaction."
  },
  {
    "id": 3189,
    "area": "MSTE",
    "subtopic": "Highway Geometric Design & Sight Distances",
    "difficulty": "Medium",
    "question": "A graphical curve depicting cumulative earthwork excavation and embankment volumes along a highway alignment, used to plan optimum haul strategies.",
    "answer": "Mass Diagram",
    "choices": [
      "Mass Diagram",
      "Cross-section Profile",
      "Grade Line",
      "Flow Chart"
    ],
    "explanation": "The mass diagram indicates balance points, haul directions, economic haul limits, and borrow or waste quantities."
  },
  {
    "id": 3190,
    "area": "MSTE",
    "subtopic": "Pavement Distress, Asphalt & Concrete Paving",
    "difficulty": "Medium",
    "question": "A dense, voidless, impermeable mixture of bitumen, fine aggregate, and mineral filler heated to about 200°C and poured hot without mechanical compaction.",
    "answer": "Mastic Asphalt",
    "choices": [
      "Mastic Asphalt",
      "Asphaltic Concrete",
      "Water Bound Macadam",
      "Chip Seal"
    ],
    "explanation": "Mastic asphalt is widely used on bridge decks, roofs, and heavy industrial pavements due to its absolute impermeability."
  },
  {
    "id": 3191,
    "area": "MSTE",
    "subtopic": "Traffic Engineering, Markings & Signs",
    "difficulty": "Easy",
    "question": "The traffic process whereby a vehicle in an acceleration lane or ramp enters and merges into a moving freeway traffic stream traveling in the same direction.",
    "answer": "Merging",
    "choices": [
      "Merging",
      "Diverging",
      "Weaving",
      "Platooning"
    ],
    "explanation": "Merging vehicles accelerate to freeway traffic speeds before slipping into an acceptable gap in the right lane."
  },
  {
    "id": 3192,
    "area": "MSTE",
    "subtopic": "Traffic Engineering, Markings & Signs",
    "difficulty": "Hard",
    "question": "A mathematical model of traffic flow that analyzes aggregate traffic stream properties, treating vehicular traffic as a continuous fluid (flow, speed, density).",
    "answer": "Macroscopic Traffic Model",
    "choices": [
      "Macroscopic Traffic Model",
      "Microscopic Traffic Model",
      "Mesoscopic Model",
      "Car-following Model"
    ],
    "explanation": "Macroscopic models (such as the Lighthill-Whitham-Richards continuum model) focus on global traffic stream flow relationships."
  },
  {
    "id": 3193,
    "area": "MSTE",
    "subtopic": "Traffic Engineering, Markings & Signs",
    "difficulty": "Hard",
    "question": "A traffic simulation model that analyzes the individual kinematics, headway spacing, and car-following behavior of each distinct vehicle.",
    "answer": "Microscopic Traffic Model",
    "choices": [
      "Microscopic Traffic Model",
      "Macroscopic Traffic Model",
      "Continuum Model",
      "Fluid Dynamic Model"
    ],
    "explanation": "Microscopic models (such as General Motors car-following models) simulate individual vehicle acceleration and lane changes."
  },
  {
    "id": 3194,
    "area": "MSTE",
    "subtopic": "Ports, Harbors, Waves & Coastal Engineering",
    "difficulty": "Medium",
    "question": "A massive coastal breakwater constructed of masonry or rock fill that encloses a harbor basin and frequently carries a roadway or rail on its crown.",
    "answer": "Mole",
    "choices": [
      "Mole",
      "Groin",
      "Bulkhead",
      "Revetment"
    ],
    "explanation": "Moles serve the dual purpose of protecting the harbor as a breakwater and providing a quay or roadway along its crest."
  },
  {
    "id": 3195,
    "area": "MSTE",
    "subtopic": "Ports, Harbors, Waves & Coastal Engineering",
    "difficulty": "Easy",
    "question": "Seasonal prevailing wind systems that blow consistently from one direction during half the year and reverse direction during the other half.",
    "answer": "Monsoon",
    "choices": [
      "Monsoon",
      "Trade Winds",
      "Cyclone",
      "Westerlies"
    ],
    "explanation": "In the Philippines, the southwest monsoon (Habagat) blows from May to October, and the northeast monsoon (Amihan) from November to April."
  },
  {
    "id": 3196,
    "area": "MSTE",
    "subtopic": "Ports, Harbors, Waves & Coastal Engineering",
    "difficulty": "Medium",
    "question": "Isolated marine pile clusters positioned behind the berthing line, designed exclusively to secure ship mooring cables rather than absorb berthing impact.",
    "answer": "Mooring Dolphins",
    "choices": [
      "Mooring Dolphins",
      "Breasting Dolphins",
      "Quay Piers",
      "Wharf Heads"
    ],
    "explanation": "Mooring dolphins are set back from the vessel hull line, angled at approximately 45° off the bow and stern to secure spring and breast lines."
  },
  {
    "id": 3197,
    "area": "MSTE",
    "subtopic": "Ports, Harbors, Waves & Coastal Engineering",
    "difficulty": "Medium",
    "question": "Tides of minimum tidal range occurring during the first and third quarters of the moon when the gravitational forces of the sun and moon act at right angles.",
    "answer": "Neap Tides",
    "choices": [
      "Neap Tides",
      "Spring Tides",
      "Diurnal Tides",
      "Equinoctial Tides"
    ],
    "explanation": "Neap tides occur in quadrature when gravitational attractions of sun and moon counteract each other, resulting in low tidal ranges."
  },
  {
    "id": 3198,
    "area": "MSTE",
    "subtopic": "Traffic Engineering, Markings & Signs",
    "difficulty": "Medium",
    "question": "The proportion or percentage of time that a traffic presence detector or loop sensor is covered by vehicles over a sampling period.",
    "answer": "Traffic Occupancy",
    "choices": [
      "Traffic Occupancy",
      "Traffic Density",
      "Traffic Volume",
      "Headway Fraction"
    ],
    "explanation": "Occupancy is electronically measured by inductive loop detectors and serves as a direct proxy for traffic density."
  },
  {
    "id": 3199,
    "area": "MSTE",
    "subtopic": "Highway Geometric Design & Sight Distances",
    "difficulty": "Easy",
    "question": "A scenic arterial highway located within an expansive park or ribbon of parkland, typically restricted to non-commercial passenger vehicle traffic.",
    "answer": "Parkway",
    "choices": [
      "Parkway",
      "Freeway",
      "Industrial Arterial",
      "Bypass"
    ],
    "explanation": "Parkways feature landscaped borders, scenic alignments, and exclusion of commercial heavy truck traffic."
  },
  {
    "id": 3200,
    "area": "MSTE",
    "subtopic": "Highway Geometric Design & Sight Distances",
    "difficulty": "Easy",
    "question": "The minimum sight distance required on a two-lane highway to permit a driver to safely overtake a slower vehicle without colliding with oncoming traffic.",
    "answer": "Passing Sight Distance",
    "choices": [
      "Passing Sight Distance",
      "Stopping Sight Distance",
      "Decision Sight Distance",
      "Intersection Sight Distance"
    ],
    "explanation": "Passing sight distance (PSD) provides sufficient visual clearance for overtaking, passing, and returning to the lane safely."
  },
  {
    "id": 3201,
    "area": "MSTE",
    "subtopic": "Pavement Distress, Asphalt & Concrete Paving",
    "difficulty": "Easy",
    "question": "The layered structural system placed over a prepared soil subgrade to support vehicular wheel loads and provide smooth, durable ride quality.",
    "answer": "Pavement",
    "choices": [
      "Pavement",
      "Subgrade",
      "Embankment",
      "Roadbed"
    ],
    "explanation": "Pavements are categorized as flexible (asphalt) or rigid (Portland cement concrete)."
  },
  {
    "id": 3202,
    "area": "MSTE",
    "subtopic": "Pavement Distress, Asphalt & Concrete Paving",
    "difficulty": "Medium",
    "question": "The transient vertical deformation of a pavement under an applied heavy wheel load, measured by a Falling Weight Deflectometer (FWD) or Benkelman beam.",
    "answer": "Pavement Deflection",
    "choices": [
      "Pavement Deflection",
      "Pavement Settlement",
      "Pavement Raveling",
      "Faulting"
    ],
    "explanation": "Pavement surface deflection reflects the structural capacity and elastic modulus of underlying pavement layers."
  },
  {
    "id": 3203,
    "area": "MSTE",
    "subtopic": "Pavement Distress, Asphalt & Concrete Paving",
    "difficulty": "Easy",
    "question": "Any visible cracking, deformation, disintegration, or surface defect indicating degradation of the structural or functional condition of a pavement.",
    "answer": "Pavement Distress",
    "choices": [
      "Pavement Distress",
      "Skid Loss",
      "Pumping Defect",
      "Slab Heave"
    ],
    "explanation": "Pavement distress surveys evaluate distress type, severity, and extent to compute the Pavement Condition Index (PCI)."
  },
  {
    "id": 3204,
    "area": "MSTE",
    "subtopic": "Pavement Distress, Asphalt & Concrete Paving",
    "difficulty": "Easy",
    "question": "The longitudinal profile irregularities of a road surface that induce vehicular vibrations and affect ride quality, quantified by the International Roughness Index (IRI).",
    "answer": "Pavement Roughness",
    "choices": [
      "Pavement Roughness",
      "Skid Resistance",
      "Deflection Index",
      "Texture Depth"
    ],
    "explanation": "Roughness is measured in m/km using laser profilers, directly correlating with vehicle operating costs and driver comfort."
  },
  {
    "id": 3205,
    "area": "MSTE",
    "subtopic": "Ports, Harbors, Waves & Coastal Engineering",
    "difficulty": "Easy",
    "question": "The time in seconds required for two consecutive wave crests to pass a fixed reference point in space.",
    "answer": "Wave Period",
    "choices": [
      "Wave Period",
      "Wave Frequency",
      "Wave Celerity",
      "Wave Length"
    ],
    "explanation": "Wave period T is related to wave frequency f by T = 1 / f."
  },
  {
    "id": 3206,
    "area": "MSTE",
    "subtopic": "Ports, Harbors, Waves & Coastal Engineering",
    "difficulty": "Easy",
    "question": "A sheltered coastal water body including approach navigation channels and anchorages where vessels may safely load, unload, or seek refuge.",
    "answer": "Port",
    "choices": [
      "Port",
      "Estuary",
      "Lagoon",
      "Bayou"
    ],
    "explanation": "Ports provide marine terminal infrastructure for maritime trade, container handling, and passenger transport."
  },
  {
    "id": 3207,
    "area": "MSTE",
    "subtopic": "Pavement Distress, Asphalt & Concrete Paving",
    "difficulty": "Medium",
    "question": "An initial application of low-viscosity liquid asphalt sprayed onto an untreated absorbent aggregate base to penetrate and bind the surface before paving.",
    "answer": "Prime Coat",
    "choices": [
      "Prime Coat",
      "Tack Coat",
      "Seal Coat",
      "Slurry Coat"
    ],
    "explanation": "Prime coats seal capillaries, coat loose dust particles, and provide adhesion between untreated base and bituminous surface layers."
  },
  {
    "id": 3208,
    "area": "MSTE",
    "subtopic": "Ports, Harbors, Waves & Coastal Engineering",
    "difficulty": "Easy",
    "question": "A solid marine berthing platform constructed parallel to the shoreline and backed directly by land or fill material for mooring vessels.",
    "answer": "Quay",
    "choices": [
      "Quay",
      "Pier",
      "Jetty",
      "Dolphin"
    ],
    "explanation": "Quays run parallel to the shore, backed by ground for cargo handling, whereas piers project outward at an angle."
  },
  {
    "id": 3209,
    "area": "MSTE",
    "subtopic": "Traffic Engineering, Markings & Signs",
    "difficulty": "Easy",
    "question": "A line of stopped or slowly moving vehicles formed when arrival demand exceeds the operational discharge capacity of a roadway or intersection.",
    "answer": "Traffic Queue",
    "choices": [
      "Traffic Queue",
      "Traffic Platoon",
      "Traffic Stream",
      "Headway Bunch"
    ],
    "explanation": "Queue length and waiting time are evaluated using queuing theory (M/M/1, M/D/1 models) in traffic engineering."
  },
  {
    "id": 3210,
    "area": "MSTE",
    "subtopic": "Pavement Distress, Asphalt & Concrete Paving",
    "difficulty": "Medium",
    "question": "The progressive dislodgment and loss of coarse and fine aggregate particles from an asphalt pavement surface due to binder weathering or tire scuffing.",
    "answer": "Pavement Raveling",
    "choices": [
      "Pavement Raveling",
      "Bleeding",
      "Stripping",
      "Polishing"
    ],
    "explanation": "Raveling produces a rough, pitted surface texture that accelerates moisture infiltration into underlying courses."
  },
  {
    "id": 3211,
    "area": "MSTE",
    "subtopic": "Traffic Engineering, Markings & Signs",
    "difficulty": "Medium",
    "question": "The total time elapsed from the instant an unexpected obstacle enters a driver’s field of view until the driver initiates physical braking or steering (PIEV time).",
    "answer": "Piev Reaction Time",
    "choices": [
      "Piev Reaction Time",
      "Braking Time",
      "Deceleration Time",
      "Perception Time"
    ],
    "explanation": "AASHTO standard design reaction time is 2.5 seconds, encompassing Perception, Intellection, Emotion, and Volition."
  },
  {
    "id": 3212,
    "area": "MSTE",
    "subtopic": "Ports, Harbors, Waves & Coastal Engineering",
    "difficulty": "Medium",
    "question": "The bending of ocean wave crest lines as they propagate into shallow coastal water due to differences in wave celerity caused by seabed contours.",
    "answer": "Wave Refraction",
    "choices": [
      "Wave Refraction",
      "Wave Diffraction",
      "Wave Reflection",
      "Wave Resonance"
    ],
    "explanation": "Wave refraction concentrates wave energy on coastal headlands and disperses wave energy in bays and coves."
  },
  {
    "id": 3213,
    "area": "MSTE",
    "subtopic": "Traffic Engineering, Markings & Signs",
    "difficulty": "Easy",
    "question": "Traffic signs that notify road users of statutory traffic laws, speed regulations, and legal prohibitions whose disregard constitutes an offense.",
    "answer": "Regulatory Signs",
    "choices": [
      "Regulatory Signs",
      "Warning Signs",
      "Guide Signs",
      "Construction Signs"
    ],
    "explanation": "Regulatory signs include STOP, YIELD, speed limits, and turn prohibitions, typically circular or octagonal with red and white coloring."
  },
  {
    "id": 3214,
    "area": "MSTE",
    "subtopic": "Traffic Engineering, Markings & Signs",
    "difficulty": "Easy",
    "question": "Raised or grooved transverse or longitudinal pavement patterns that alert distracted drivers to lane departures via tactile vibrations and audible roaring.",
    "answer": "Rumble Strips",
    "choices": [
      "Rumble Strips",
      "Chevrons",
      "Delineators",
      "Jiggle Bars"
    ],
    "explanation": "Shoulder and centerline rumble strips significantly reduce run-off-road and head-on crossover collisions on rural highways."
  },
  {
    "id": 3215,
    "area": "MSTE",
    "subtopic": "Traffic Engineering, Markings & Signs",
    "difficulty": "Easy",
    "question": "The average speed maintained by a vehicle over a designated highway segment while in motion, equal to distance divided by running time.",
    "answer": "Running Speed",
    "choices": [
      "Running Speed",
      "Journey Speed",
      "Spot Speed",
      "Pace Speed"
    ],
    "explanation": "Running speed excludes stopped delays at intersections and red lights (unlike journey speed, which includes all delays)."
  },
  {
    "id": 3216,
    "area": "MSTE",
    "subtopic": "Pavement Distress, Asphalt & Concrete Paving",
    "difficulty": "Easy",
    "question": "The construction process of striking off and leveling freshly poured concrete using a straightedge moved in a sawing motion across surface forms.",
    "answer": "Screeding",
    "choices": [
      "Screeding",
      "Floating",
      "Troweling",
      "Curing"
    ],
    "explanation": "Screeding establishes the correct surface elevation and grade before bull-floating and texturing."
  },
  {
    "id": 3217,
    "area": "MSTE",
    "subtopic": "Pavement Distress, Asphalt & Concrete Paving",
    "difficulty": "Medium",
    "question": "A very thin bituminous surface application applied over an asphalt pavement to waterproof the surface and prevent aggregate dislodgment.",
    "answer": "Seal Coat",
    "choices": [
      "Seal Coat",
      "Tack Coat",
      "Prime Coat",
      "Base Coat"
    ],
    "explanation": "Seal coats (fog seals, sand seals, or chip seals) prolong asphalt pavement service life by preventing oxidation and water intrusion."
  },
  {
    "id": 3218,
    "area": "MSTE",
    "subtopic": "Ports, Harbors, Waves & Coastal Engineering",
    "difficulty": "Hard",
    "question": "A standing wave oscillation occurring in an enclosed or semi-enclosed water basin (such as a harbor, lake, or bay) triggered by seismic or wind pulses.",
    "answer": "Seiche",
    "choices": [
      "Seiche",
      "Tsunami",
      "Tidal Bore",
      "Spring Tide"
    ],
    "explanation": "Seiches can create large standing wave surges in harbors with oscillation periods ranging from minutes to hours."
  },
  {
    "id": 3219,
    "area": "MSTE",
    "subtopic": "Ports, Harbors, Waves & Coastal Engineering",
    "difficulty": "Medium",
    "question": "A tidal regime characterized by having two high waters and two low waters of roughly equivalent heights during each lunar day.",
    "answer": "Semi-diurnal Tides",
    "choices": [
      "Semi-diurnal Tides",
      "Diurnal Tides",
      "Mixed Tides",
      "Solitary Tides"
    ],
    "explanation": "Semi-diurnal tides occur twice every 24 hours and 50 minutes, common along the Atlantic and European coasts."
  },
  {
    "id": 3220,
    "area": "MSTE",
    "subtopic": "Ports, Harbors, Waves & Coastal Engineering",
    "difficulty": "Medium",
    "question": "Ocean waves propagating in water where the depth-to-wavelength ratio is less than or equal to 0.04 (d / L ≤ 0.04), where celerity is solely depth-controlled.",
    "answer": "Shallow Water Waves",
    "choices": [
      "Shallow Water Waves",
      "Deep Water Waves",
      "Transitional Waves",
      "Seiche Waves"
    ],
    "explanation": "In shallow water, wave speed depends exclusively on water depth: c = √(gd)."
  },
  {
    "id": 3221,
    "area": "MSTE",
    "subtopic": "Highway Geometric Design & Sight Distances",
    "difficulty": "Easy",
    "question": "The portion of the roadway contiguous with the traveled way provided for emergency stops, stopped vehicles, and lateral structural support of the pavement.",
    "answer": "Highway Shoulders",
    "choices": [
      "Highway Shoulders",
      "Median Strip",
      "Clear Zone",
      "Curb Gutter"
    ],
    "explanation": "Shoulders improve highway safety, accommodate disabled vehicles, and provide lateral containment for pavement base courses."
  },
  {
    "id": 3222,
    "area": "MSTE",
    "subtopic": "Pavement Distress, Asphalt & Concrete Paving",
    "difficulty": "Medium",
    "question": "The frictional force developed at the contact interface between vehicle tires and wet road surfaces that prevents vehicular skidding.",
    "answer": "Skid Resistance",
    "choices": [
      "Skid Resistance",
      "Rolling Resistance",
      "Bearing Resistance",
      "Hydroplaning Gap"
    ],
    "explanation": "Skid resistance is evaluated using locked-wheel skid trailers (ASTM E274) or British Pendulum Testers."
  },
  {
    "id": 3223,
    "area": "MSTE",
    "subtopic": "Ports, Harbors, Waves & Coastal Engineering",
    "difficulty": "Medium",
    "question": "The statistical average wave height (Hs or H1/3) of the highest one-third of all waves recorded in a given wave train over a specified observation period.",
    "answer": "Significant Wave Height",
    "choices": [
      "Significant Wave Height",
      "Maximum Wave Height",
      "Median Wave Height",
      "Rms Wave Height"
    ],
    "explanation": "Significant wave height closely matches the visual wave height estimates reported by experienced mariners at sea."
  },
  {
    "id": 3224,
    "area": "MSTE",
    "subtopic": "Traffic Engineering, Markings & Signs",
    "difficulty": "Hard",
    "question": "The harmonic mean of the speeds of all vehicles occupying a given length of highway at a specific instant in time, representing true spatial travel speed.",
    "answer": "Space Mean Speed",
    "choices": [
      "Space Mean Speed",
      "Time Mean Speed",
      "Running Speed",
      "Median Spot Speed"
    ],
    "explanation": "Space mean speed vs = L / (Σ t_i / n) is always less than or equal to time mean speed vt (vt = vs + σs² / vs)."
  },
  {
    "id": 3225,
    "area": "MSTE",
    "subtopic": "Ports, Harbors, Waves & Coastal Engineering",
    "difficulty": "Medium",
    "question": "Tides of maximum range occurring twice each lunar month during new and full moon phases when the gravitational pulls of the sun and moon align (syzygy).",
    "answer": "Spring Tides",
    "choices": [
      "Spring Tides",
      "Neap Tides",
      "Diurnal Tides",
      "Meteorological Tides"
    ],
    "explanation": "Spring tides produce the highest high tides and lowest low tides due to aligned solar and lunar gravitational fields."
  },
  {
    "id": 3226,
    "area": "MSTE",
    "subtopic": "Highway Geometric Design & Sight Distances",
    "difficulty": "Easy",
    "question": "The minimum sight distance required along a highway for a driver traveling at design speed to safely bring the vehicle to a full stop before striking an obstruction.",
    "answer": "Stopping Sight Distance",
    "choices": [
      "Stopping Sight Distance",
      "Passing Sight Distance",
      "Decision Sight Distance",
      "Corner Sight Distance"
    ],
    "explanation": "Stopping sight distance SSD = 0.278 V t + V² / (254 (f ± G)), required continuously along every point of a highway."
  },
  {
    "id": 3227,
    "area": "MSTE",
    "subtopic": "Ports, Harbors, Waves & Coastal Engineering",
    "difficulty": "Medium",
    "question": "An abnormal, catastrophic rise in coastal water level accompanying tropical typhoons, caused by extreme barometric pressure drops and strong onshore winds.",
    "answer": "Storm Surge",
    "choices": [
      "Storm Surge",
      "Tsunami",
      "Tidal Bore",
      "Seiche"
    ],
    "explanation": "Storm surges generate devastating coastal inundation, as witnessed during Super Typhoon Yolanda (Haiyan) in 2013."
  },
  {
    "id": 3228,
    "area": "MSTE",
    "subtopic": "Pavement Distress, Asphalt & Concrete Paving",
    "difficulty": "Hard",
    "question": "An empirical dimensionless index (SN) used in AASHTO flexible pavement design that reflects the required overall structural capacity of all pavement layers.",
    "answer": "Structural Number",
    "choices": [
      "Structural Number",
      "California Bearing Ratio",
      "Resilient Modulus",
      "Modulus of Subgrade Reaction"
    ],
    "explanation": "Structural Number SN = a1D1 + a2D2m2 + a3D3m3, combining layer thicknesses (D), layer coefficients (a), and drainage factors (m)."
  },
  {
    "id": 3229,
    "area": "MSTE",
    "subtopic": "Highway Geometric Design & Sight Distances",
    "difficulty": "Easy",
    "question": "The prepared, compacted natural soil or borrow foundation layer upon which all pavement structural layers and base courses are constructed.",
    "answer": "Subgrade",
    "choices": [
      "Subgrade",
      "Subbase",
      "Base Course",
      "Wearing Surface"
    ],
    "explanation": "Subgrade strength is quantified by its California Bearing Ratio (CBR) or resilient modulus (Mr) to determine pavement thickness."
  },
  {
    "id": 3230,
    "area": "MSTE",
    "subtopic": "Highway Geometric Design & Sight Distances",
    "difficulty": "Easy",
    "question": "The transverse banking or tilting of a highway curve inward toward the center of curvature to counteract vehicular centrifugal force.",
    "answer": "Superelevation",
    "choices": [
      "Superelevation",
      "Camber",
      "Cross Crown",
      "Grade Rotation"
    ],
    "explanation": "Governed by e + f = v² / (127 R), where e is superelevation rate, f is side friction factor, and R is curve radius."
  },
  {
    "id": 3231,
    "area": "MSTE",
    "subtopic": "Pavement Distress, Asphalt & Concrete Paving",
    "difficulty": "Medium",
    "question": "A very light application of bituminous emulsion applied onto an existing aged pavement surface to ensure strong bonding with a new asphalt overlay.",
    "answer": "Tack Coat",
    "choices": [
      "Tack Coat",
      "Prime Coat",
      "Seal Coat",
      "Fog Seal"
    ],
    "explanation": "Tack coats prevent slippage cracking and debonding between old and new pavement layers."
  },
  {
    "id": 3232,
    "area": "MSTE",
    "subtopic": "Highway Geometric Design & Sight Distances",
    "difficulty": "Hard",
    "question": "The length of highway transition over which the outer roadway cross slope rotates from the normal crown slope to a zero flat cross slope on the tangent.",
    "answer": "Tangent Runout",
    "choices": [
      "Tangent Runout",
      "Superelevation Runoff",
      "Spiral Transition",
      "Grade Parabola"
    ],
    "explanation": "Tangent runout transitions the outside lane from adverse cross-slope (-2%) to level (0%) before the circular curve begins."
  },
  {
    "id": 3233,
    "area": "MSTE",
    "subtopic": "Ports, Harbors, Waves & Coastal Engineering",
    "difficulty": "Medium",
    "question": "A solitary wave of great height that surges rapidly up a funnel-shaped river estuary against the direction of natural river flow during flood tide.",
    "answer": "Tidal Bore",
    "choices": [
      "Tidal Bore",
      "Seiche",
      "Clapotis",
      "Storm Surge"
    ],
    "explanation": "Tidal bores form steep-fronted surges when incoming spring tides are compressed by narrowing funnel estuaries."
  },
  {
    "id": 3234,
    "area": "MSTE",
    "subtopic": "Traffic Engineering, Markings & Signs",
    "difficulty": "Hard",
    "question": "The arithmetic average of the spot speeds of all vehicles recorded at a single fixed location on a highway over a designated time interval.",
    "answer": "Time Mean Speed",
    "choices": [
      "Time Mean Speed",
      "Space Mean Speed",
      "Median Speed",
      "Pace Speed"
    ],
    "explanation": "Time mean speed vt = (Σ vi) / n weighs faster vehicles more heavily than slower vehicles."
  },
  {
    "id": 3235,
    "area": "MSTE",
    "subtopic": "Traffic Engineering, Markings & Signs",
    "difficulty": "Easy",
    "question": "A traffic condition in which vehicular demand approaches or exceeds facility capacity, characterized by slower speeds, stop-and-go queuing, and increased delays.",
    "answer": "Traffic Congestion",
    "choices": [
      "Traffic Congestion",
      "Free Flow",
      "Traffic Wave",
      "Steady Stream"
    ],
    "explanation": "Traffic congestion develops when travel demand exceeds service throughput, causing Level of Service (LOS) to degrade to E or F."
  },
  {
    "id": 3236,
    "area": "MSTE",
    "subtopic": "Ports, Harbors, Waves & Coastal Engineering",
    "difficulty": "Easy",
    "question": "Extremely long, destructive ocean gravity waves generated by sudden vertical submarine displacements caused by earthquakes, volcanic collapses, or undersea landslides.",
    "answer": "Tsunamis",
    "choices": [
      "Tsunamis",
      "Tidal Waves",
      "Seiches",
      "Storm Waves"
    ],
    "explanation": "Tsunamis travel at immense celerities in deep ocean (c = √(gd) > 700 km/h) and build into catastrophic shoaling wall waves in shallow coastal bays."
  },
  {
    "id": 3237,
    "area": "MSTE",
    "subtopic": "Pavement Distress, Asphalt & Concrete Paving",
    "difficulty": "Medium",
    "question": "A traditional road base course composed of crushed stone aggregate mechanically interlocked by heavy rolling and bound with stone dust screening slurry.",
    "answer": "Water Bound Macadam",
    "choices": [
      "Water Bound Macadam",
      "Asphalt Concrete",
      "Portland Cement Concrete",
      "Soil Stabilized Base"
    ],
    "explanation": "Water-bound macadam (WBM) relies on aggregate interlock and stone screening dust voids filling for structural bearing capacity."
  },
  {
    "id": 3238,
    "area": "MSTE",
    "subtopic": "Traffic Engineering, Markings & Signs",
    "difficulty": "Medium",
    "question": "The traffic maneuver wherein vehicles entering and exiting along a highway must cross paths obliquely within a limited merging-diverging section without traffic signals.",
    "answer": "Weaving",
    "choices": [
      "Weaving",
      "Merging",
      "Diverging",
      "Platooning"
    ],
    "explanation": "Weaving areas occur between consecutive on-ramps and off-ramps connected by an auxiliary lane."
  },
  {
    "id": 3239,
    "area": "MSTE",
    "subtopic": "Ports, Harbors, Waves & Coastal Engineering",
    "difficulty": "Easy",
    "question": "A marine berthing structure built parallel to the shoreline or breakwater where vessels tie up to discharge or receive cargo and passengers.",
    "answer": "Wharf",
    "choices": [
      "Wharf",
      "Jetty",
      "Groin",
      "Bulkhead"
    ],
    "explanation": "Wharves provide continuous berthing along harbor waterways, supported on pilings or gravity retaining caissons."
  },
  {
    "id": 3240,
    "area": "MSTE",
    "subtopic": "Ports, Harbors, Waves & Coastal Engineering",
    "difficulty": "Medium",
    "question": "A polar circular diagram that graphically depicts the statistical frequency, direction, and speed distribution of winds at a meteorological station over an extended period.",
    "answer": "Wind Rose",
    "choices": [
      "Wind Rose",
      "Fetch Diagram",
      "Barogram",
      "Hydrograph"
    ],
    "explanation": "Wind roses are vital for orienting airport runways and designing port harbor breakwater entrances."
  }
];
