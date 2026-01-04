import {
  Biohazard,
  BrickWall,
  ChevronDown,
  CloudRain,
  HelpCircle,
  HousePlus,
  Layers,
  ListChevronsDownUp,
  Search,
  Wrench,
  X
} from "lucide-react";
import { useState } from "react";

export function meta() {
  return [
    { title: "Knowledge Base & Resources | Elite Basement Solutions" },
    {
      name: "description",
      content:
        "Learn about basement waterproofing, mold remediation, foundation repair, home remodeling, and plumbing. Expert knowledge and FAQs from Elite Basement Solutions."
    }
  ];
}

type Category = "all" | "waterproofing" | "foundation" | "mold" | "remodeling" | "plumbing";

interface KnowledgeItem {
  id: string;
  term: string;
  definition: string;
  category: Category;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "basement" | "mold";
}

const knowledgeBase: KnowledgeItem[] = [
  // Waterproofing
  {
    id: "water-table",
    term: "Water Table",
    definition:
      "The underground water level beneath your home that rises and falls with rainfall and seasonal changes. When the water table rises, hydrostatic pressure builds against your foundation, forcing water to find entry points into your basement. Every home sits above groundwater, proper management is essential.",
    category: "waterproofing"
  },
  {
    id: "hydrostatic-pressure",
    term: "Hydrostatic Pressure",
    definition:
      "The force exerted by groundwater pushing against your foundation walls and floor. This pressure can exceed 2,000 pounds per square foot, causing cracks, bowing walls, and water intrusion. Pressure relief systems channel this water safely away rather than fighting against it.",
    category: "waterproofing"
  },
  {
    id: "cove-joint",
    term: "Cove Joint",
    definition:
      "The seam where your basement wall meets the floor - the most common entry point for water. During construction, the floor is poured after the walls cure, creating a natural gap. When hydrostatic pressure builds, water follows the path of least resistance through this joint.",
    category: "waterproofing"
  },
  {
    id: "french-drain",
    term: "French Drain / Perimeter Drainage",
    definition:
      "A drainage system installed around the interior or exterior perimeter of your basement. Unlike generic 'french drains,' professional pressure-relief systems are custom-designed for your specific foundation, water table level, and soil conditions. One-size-fits-all solutions often fail.",
    category: "waterproofing"
  },
  {
    id: "sump-pump",
    term: "Sump Pump System",
    definition:
      "The heart of any waterproofing system. Professional-grade submersible pumps collect water from perimeter drains and discharge it away from your foundation. Battery backup systems ensure protection during power outages, exactly when you need it most during severe storms.",
    category: "waterproofing"
  },
  {
    id: "vapor-barrier",
    term: "Vapor Barrier",
    definition:
      "Heavy-duty plastic sheeting (typically 6+ mil thickness) applied to foundation walls or crawlspace surfaces. Vapor barriers contain moisture behind them while directing it into drainage systems. They prevent humid air from entering living spaces and reduce the moisture load that promotes mold growth.",
    category: "waterproofing"
  },
  {
    id: "efflorescence",
    term: "Efflorescence",
    definition:
      "White, crystalline deposits that appear on concrete and masonry surfaces. This occurs when water moves through the material, dissolving salts and depositing them on the surface as it evaporates. While not mold itself, efflorescence is a clear warning sign of moisture problems that can lead to mold growth.",
    category: "waterproofing"
  },
  {
    id: "mira-drain",
    term: "Wall Drainage Panels",
    definition:
      "Dimpled plastic panels installed against foundation walls, creating an air gap that allows water to drain down into the perimeter system. In block foundations, weep holes are drilled at the base to relieve water trapped inside the hollow cores. This prevents hydrostatic pressure from building inside walls.",
    category: "waterproofing"
  },
  {
    id: "gravity-drain",
    term: "Gravity Drainage",
    definition:
      "When terrain allows, water can be drained away from foundations by gravity alone, no pump required. Perimeter drains outlet downhill, naturally lowering the water table around your home. This provides ultimate reliability with no mechanical dependence or power failure concerns.",
    category: "waterproofing"
  },
  {
    id: "concrete-porosity",
    term: "Concrete Porosity",
    definition:
      "Concrete is far more porous than most homeowners realize. During curing, excess water evaporates and leaves behind a network of microscopic capillaries. Residential concrete contains 12-20% air by volume. While liquid water needs pressure to penetrate, water vapor flows freely through these pores. This is why basements can feel damp even without visible leaks, as moisture constantly migrates through the concrete as vapor.",
    category: "waterproofing"
  },
  {
    id: "penetrating-sealers",
    term: "Penetrating Concrete Sealers",
    definition:
      "Unlike surface coatings that sit on top of concrete, penetrating sealers absorb into the pores and chemically react with the concrete itself. Silicate-based sealers react with lime and calcium, expanding and hardening within the pores to create a permanent bond. This stops both liquid water and water vapor from passing through. Surface paints eventually crack and peel; penetrating sealers become part of the concrete.",
    category: "waterproofing"
  },
  {
    id: "waterproof-paint-limits",
    term: "Waterproof Paint Limitations",
    definition:
      "Store-bought 'waterproofing' paints are typically latex-based coatings that sit on the concrete surface. While they may slow moisture temporarily, they cannot stop water vapor or withstand hydrostatic pressure. Over time, lime from the concrete attacks the paint, causing cracking and peeling. These products treat symptoms, not causes, and can actually trap moisture behind them, accelerating deterioration.",
    category: "waterproofing"
  },
  {
    id: "moisture-sources",
    term: "Basement Moisture Sources",
    definition:
      "Basements are the largest source of moisture in most homes, often over 15 gallons daily, far exceeding cooking and showering combined. Sources include: water vapor through concrete, groundwater seepage, condensation on cold surfaces, humid outdoor air, unvented dryers, and leaky HVAC ducts. Controlling moisture requires addressing all sources: sealing concrete, managing groundwater, proper ventilation, and eliminating internal sources.",
    category: "waterproofing"
  },
  {
    id: "pre-finish-sealing",
    term: "Sealing Before Finishing",
    definition:
      "Never finish a basement without addressing moisture first. Finished walls and floor coverings trap moisture, which accumulates and breeds mold within days. Even minor dampness behind drywall leads to hidden mold growth and ruined finishes. A typical basement remodel costs $10,000+. Protect that investment by sealing all moisture sources before any finishing work begins.",
    category: "waterproofing"
  },
  {
    id: "footer",
    term: "Footer / Footing",
    definition:
      "The footer is the concrete base your entire house sits on. When builders dig the hole for your home, the footer is the first component poured. The foundation walls are built on top of the footer, and the entire weight of the house rests on it. Keeping the footer structurally sound and properly drained is essential for long-term stability.",
    category: "waterproofing"
  },
  {
    id: "water-management",
    term: "Water Management",
    definition:
      "The process of keeping your home dry by controlling water rather than fighting it. Water is one of the strongest forces on Earth, so the goal is to manage it and allow it to run its natural course through a proper drainage system, then discharge it away from your home. This process continues automatically any time water tries to enter.",
    category: "waterproofing"
  },
  {
    id: "micro-drain",
    term: "Micro Drain",
    definition:
      "A 1-inch drain typically installed around water heaters, water softeners, oil tanks, and other basement equipment where full-size drainage pipe cannot fit. The micro drain captures any water that may leak from these units and diverts it into the main drainage system, preventing puddling on the floor.",
    category: "waterproofing"
  },
  {
    id: "lateral-drain",
    term: "Lateral Drain",
    definition:
      "A perimeter drainage system goes around the basement walls, but if water seeps through the center of the floor or areas away from the cove joint, a lateral drain is needed. It runs across the middle of the floor (or wherever water penetration occurs) and connects to the main drainage system.",
    category: "waterproofing"
  },
  {
    id: "threshold-drain",
    term: "Threshold Drain",
    definition:
      "A 4-inch grated drain installed in front of sliding doors, bilco doors, or other entry points where a full waterproofing system cannot fit. The grate collects water before it enters the living space and diverts it to the drainage system.",
    category: "waterproofing"
  },
  {
    id: "sump-pit",
    term: "Sump Pit",
    definition:
      "A container placed in a designated area of the basement that houses the sump pumps. The pit collects water from the perimeter drainage system. When water reaches a certain level, the pump activates and discharges the water away from the home. Properly sized pits prevent pumps from cycling too frequently.",
    category: "waterproofing"
  },
  {
    id: "downspout-extensions",
    term: "Downspout Extensions",
    definition:
      "Pipes attached to the end of gutter downspouts that extend the discharge point away from your foundation. Typically made of flexible black ADS pipe, they can be routed around landscaping to find the best discharge location. Water should discharge at least 10 feet from the foundation to prevent it from cycling back.",
    category: "waterproofing"
  },
  {
    id: "swales",
    term: "Swales",
    definition:
      "A swale is a shallow, low tract of land designed to manage water runoff and direct it away from structures. Properly graded swales steer surface water away from your foundation before it has a chance to soak into the soil and create hydrostatic pressure against your basement walls.",
    category: "waterproofing"
  },
  // Foundation & Crack Repair
  {
    id: "foundation-types",
    term: "Foundation Types",
    definition:
      "Homes are built on various foundations: poured concrete (most common in newer construction), concrete block/cinder block, brick, or stone (in older homes). Each type has different vulnerabilities and repair approaches. Poured concrete develops shrinkage cracks; block foundations can crack at mortar joints; stone foundations may deteriorate between stones.",
    category: "foundation"
  },
  {
    id: "shrinkage-cracks",
    term: "Shrinkage Cracks",
    definition:
      "As concrete cures, water evaporates and the material contracts slightly, often resulting in hairline cracks. Most shrinkage cracks are cosmetic and pose no structural threat, but they create pathways for water intrusion. Addressing them early prevents larger problems.",
    category: "foundation"
  },
  {
    id: "structural-cracks",
    term: "Structural vs. Non-Structural Cracks",
    definition:
      "Vertical cracks typically result from settling and are usually non-structural. Horizontal cracks, stair-step cracks in block walls, or cracks wider than 1/4 inch may indicate structural movement requiring immediate attention. Any crack that's growing, shifting, or causing wall displacement needs professional evaluation.",
    category: "foundation"
  },
  {
    id: "epoxy-injection",
    term: "Epoxy Injection",
    definition:
      "A repair method for narrow, non-moving cracks in poured concrete. Two-part epoxy is injected under pressure, filling the crack completely and bonding the concrete together. Best suited for dry cracks that have finished moving. Not recommended for actively leaking cracks or those still under stress.",
    category: "foundation"
  },
  {
    id: "hydraulic-cement",
    term: "Hydraulic Cement",
    definition:
      "Fast-setting, waterproof cement used to seal minor cracks and small leaks. Sets in minutes and can stop active water flow. Effective for small repairs but not a substitute for comprehensive waterproofing. Treats symptoms rather than the underlying pressure causing leaks.",
    category: "foundation"
  },
  {
    id: "carbon-fiber",
    term: "Carbon Fiber Reinforcement",
    definition:
      "High-strength carbon fiber straps bonded to foundation walls to prevent further movement. Stronger than steel by weight, these straps stabilize bowing or cracked walls without excavation. A permanent solution that stops crack progression and maintains structural integrity.",
    category: "foundation"
  },
  {
    id: "wall-anchors",
    term: "Wall Anchors & Stabilization",
    definition:
      "Steel plates installed on interior walls, connected by rods to anchor plates buried in stable soil outside the foundation. This system counteracts inward pressure on bowing walls and can gradually straighten them over time. Avoids the cost and disruption of wall replacement.",
    category: "foundation"
  },
  {
    id: "roughcasting",
    term: "Roughcasting / Wall Resurfacing",
    definition:
      "Complete restoration of deteriorated stone or block foundations. The wall is prepared, vapor barrier applied, wire mesh attached, then multiple coats of fiber-reinforced cement applied. Results in a smooth, sealed surface that looks like new construction while controlling moisture.",
    category: "foundation"
  },
  {
    id: "v-grooving",
    term: "V-Grooving",
    definition:
      "A crack repair technique where the crack is widened into a V-shape using a grinder or chisel. This removes loose material and creates better surface area for the repair compound to bond. The groove is then filled with hydraulic cement or patching compound for a lasting repair.",
    category: "foundation"
  },
  {
    id: "bowed-walls",
    term: "Bowed Walls",
    definition:
      "Walls that curve inward due to hydrostatic pressure from water-saturated soil pushing against the foundation. When water builds up behind a block foundation, the wall can develop a visible bow or bulge. In extreme cases, foundations can collapse from this pressure if not addressed within a reasonable timeframe.",
    category: "foundation"
  },
  {
    id: "lolly-columns",
    term: "Lolly Columns",
    definition:
      "Support columns spread throughout the basement that, along with the foundation walls, bear the weight of the home from the first floor up. These steel posts rest on the footer and support main beams. Damaged or corroded lolly columns can compromise structural integrity and may need replacement or reinforcement.",
    category: "foundation"
  },
  {
    id: "loose-soil",
    term: "Loose Soil",
    definition:
      "When ground becomes saturated over time, the soil surrounding your house loosens and shifts, creating easier pathways for water to reach your foundation. As water hits the foundation, it builds pressure and causes further soil shifting, creating a worsening cycle that continues until professionally addressed.",
    category: "foundation"
  },
  {
    id: "drylok",
    term: "DRYLOK and Sealers",
    definition:
      "DRYLOK is a common moisture-resistant paint/sealer used on basement walls. While it provides a clean finish and resists some dampness, it is not a substitute for true waterproofing. Sealers like DRYLOK work best on above-grade areas with minor moisture, not basements with active water intrusion or hydrostatic pressure.",
    category: "foundation"
  },
  {
    id: "expansion-joints",
    term: "Expansion Control Joints",
    definition:
      "Joints placed into concrete slabs at strategic locations to control where cracking occurs. As concrete expands and contracts with temperature changes, stress concentrates at these joints rather than causing random cracks. While not a complete safeguard, they help minimize and control cracking patterns.",
    category: "foundation"
  },
  // Mold Remediation
  {
    id: "mold-basics",
    term: "Understanding Mold",
    definition:
      "Mold is a living organism, a type of fungus essential to nature's decomposition process. Indoors, it becomes problematic. Mold needs only moisture, oxygen, and organic material (wood, drywall, carpet) to thrive. It reproduces through microscopic spores that travel through air, making containment critical during remediation.",
    category: "mold"
  },
  {
    id: "mold-species",
    term: "Common Mold Species",
    definition:
      "Stachybotrys (black mold) gets attention, but Aspergillus, Penicillium, Cladosporium, and Alternaria are more common indoors. All can cause health issues. The species matters less than the extent of growth and your individual sensitivity. Any visible mold colony warrants professional assessment.",
    category: "mold"
  },
  {
    id: "mold-health",
    term: "Health Effects of Mold",
    definition:
      "Mold exposure can cause allergic reactions (sneezing, runny nose, red eyes, skin rash), asthma attacks in sensitized individuals, and respiratory irritation. Those with compromised immune systems or chronic lung conditions face higher risks. Prolonged exposure in contaminated environments may cause more severe reactions.",
    category: "mold"
  },
  {
    id: "mold-testing",
    term: "Mold Testing & Inspection",
    definition:
      "Professional mold inspection identifies the extent of contamination, moisture sources, and affected materials. Air sampling and surface testing can identify species and spore counts. However, if you see or smell mold, you have a problem regardless of test results, remediation should follow.",
    category: "mold"
  },
  {
    id: "remediation-process",
    term: "Professional Remediation Process",
    definition:
      "Proper remediation involves: containment (sealing the work area with plastic sheeting), negative air pressure (preventing spores from spreading), HEPA filtration (capturing airborne spores), removal of contaminated materials, treatment of salvageable surfaces, and addressing the moisture source. DIY cleaning often spreads contamination.",
    category: "mold"
  },
  {
    id: "hepa-filtration",
    term: "HEPA Filtration",
    definition:
      "High-Efficiency Particulate Air filters capture 99.97% of particles 0.3 microns or larger, including mold spores. HEPA vacuums and air scrubbers are essential during remediation. Standard vacuums can actually spread spores by exhausting them back into the air.",
    category: "mold"
  },
  {
    id: "containment",
    term: "Containment & Negative Air",
    definition:
      "During remediation, the work area is sealed with heavy plastic sheeting. Negative air machines create lower pressure inside the containment, ensuring any air leakage flows inward rather than carrying spores into clean areas. This protects the rest of your home during the remediation process.",
    category: "mold"
  },
  {
    id: "moisture-control",
    term: "Preventing Mold Growth",
    definition:
      "Mold prevention centers on moisture control: maintain indoor humidity below 60% (ideally 30-50%), fix leaks promptly, ensure proper ventilation in bathrooms and kitchens, vent dryers outside, and address any basement water issues before finishing the space. No moisture, no mold.",
    category: "mold"
  },
  {
    id: "moisture-trapping",
    term: "Moisture Trapping Problems",
    definition:
      "Covering basement walls with plastic sheets or vapor-barrier-faced insulation seems logical but often creates severe problems. Moisture passing through concrete becomes trapped behind the covering, creating a perfect environment for mold growth. Instead of trapping moisture, proper systems either stop it at the source (penetrating sealers) or direct it into drainage systems (wall panels with weep systems).",
    category: "mold"
  },
  // Home Remodeling
  {
    id: "basement-finishing",
    term: "Basement Finishing Basics",
    definition:
      "Transforming a basement into living space requires addressing moisture first. Even minor dampness leads to mold behind walls and ruined finishes. Professional finishing includes vapor barriers, moisture-resistant materials (greenboard, mold-resistant drywall), proper insulation, and adequate ventilation.",
    category: "remodeling"
  },
  {
    id: "egress-requirements",
    term: "Egress Windows",
    definition:
      "Building codes require bedrooms to have emergency escape routes. Basement bedrooms need egress windows large enough for a person to exit and a firefighter to enter. Typical minimum: 5.7 square feet of opening, 24 inches high, 20 inches wide, with sill no more than 44 inches from floor.",
    category: "remodeling"
  },
  {
    id: "subfloor-systems",
    term: "Basement Flooring Systems",
    definition:
      "Concrete floors are cold and can transmit moisture. Raised subfloor systems create an air gap and insulation layer, allowing minor moisture to evaporate harmlessly while providing a warm, comfortable floor. Options include dimpled membrane systems with plywood or interlocking tile systems.",
    category: "remodeling"
  },
  {
    id: "insulation",
    term: "Basement Insulation",
    definition:
      "Below-grade walls require different insulation approaches than above-grade. Rigid foam board directly against concrete provides both insulation and moisture control. Never use fiberglass batts against foundation walls, because they absorb moisture and promote mold. Spray foam is excellent but requires professional installation.",
    category: "remodeling"
  },
  {
    id: "ceiling-options",
    term: "Basement Ceiling Options",
    definition:
      "Drop ceilings provide easy access to plumbing and electrical above while hiding imperfections. Drywall ceilings create a more finished look but limit access. Consider your needs: frequent access to utilities favors drop ceilings; maximum ceiling height and aesthetics favor drywall.",
    category: "remodeling"
  },
  {
    id: "electrical",
    term: "Electrical Considerations",
    definition:
      "Basements require GFCI-protected outlets (ground fault circuit interrupters) due to moisture potential. Adequate lighting is crucial in naturally dark spaces. Recessed lights work well with lower ceilings. Consider separate circuits for high-draw items like home theaters, workshops, or exercise equipment.",
    category: "remodeling"
  },
  // Plumbing
  {
    id: "plumbing-fixtures",
    term: "Plumbing Fixtures",
    definition:
      "Fixtures include toilets, faucets, shower heads, handles, and valves (the visible, functional components of your plumbing system). Quality fixtures combine durability with aesthetics. When selecting fixtures, consider water efficiency ratings (WaterSense certification), finish durability, and compatibility with your existing plumbing. Bathroom and kitchen fixtures see daily use, so investing in quality pays dividends.",
    category: "plumbing"
  },
  {
    id: "plumbing-valves",
    term: "Valves & Shut-offs",
    definition:
      "Valves regulate and control water flow throughout your plumbing system. Main shut-off valves allow you to stop water to the entire house during emergencies or repairs. Individual fixture shut-offs (under sinks, behind toilets) let you isolate specific fixtures. Knowing your valve locations before an emergency is essential - a burst pipe with an unknown shut-off location causes exponentially more damage.",
    category: "plumbing"
  },
  {
    id: "winterizing",
    term: "Winterizing Pipes",
    definition:
      "Frozen pipes can burst, causing extensive water damage. Winterizing involves insulating exposed pipes (especially in unheated areas like crawlspaces, garages, and exterior walls), maintaining adequate heat, and knowing how to drain systems for extended vacancies. Pipes in exterior walls are particularly vulnerable. A frozen pipe isn't just an inconvenience, it's a potential flood waiting to happen.",
    category: "plumbing"
  },
  {
    id: "tankless-heaters",
    term: "Tankless Water Heaters",
    definition:
      "Tankless (on-demand) water heaters heat water instantly as it flows through the unit, eliminating standby energy losses from maintaining a tank of hot water. Benefits include endless hot water supply, smaller footprint, and longer lifespan (20+ years vs. 10-15 for tank heaters). However, they have higher upfront costs and may require gas line or electrical upgrades.",
    category: "plumbing"
  },
  {
    id: "discharge-lines",
    term: "Discharge & Drain Lines",
    definition:
      "Discharge lines carry water away from your home, from sump pumps, washing machines, and fixtures. Proper discharge prevents water from cycling back toward your foundation. Drain lines must maintain adequate slope for gravity flow and avoid sharp bends that cause clogs. Discharge points should direct water at least 10 feet from the foundation, or tie into storm drains where permitted.",
    category: "plumbing"
  },
  {
    id: "water-pressure",
    term: "Water Pressure",
    definition:
      "Residential water pressure should typically range between 40-80 PSI (pounds per square inch). Low pressure causes weak flow and poor appliance performance. High pressure (above 80 PSI) stresses pipes, fittings, and appliances, leading to leaks and premature failure. Pressure regulators control incoming municipal pressure. If you notice pressure changes, it may indicate supply issues, failing regulators, or developing leaks.",
    category: "plumbing"
  },
  {
    id: "drain-cleaning",
    term: "Drain Cleaning & Maintenance",
    definition:
      "Clogged drains result from accumulated hair, soap, grease, and debris. Chemical drain cleaners can damage pipes and are harmful to septic systems. Mechanical cleaning (snaking, hydro-jetting) is preferred for stubborn clogs. Prevention includes drain screens, avoiding grease disposal in sinks, and periodic enzyme treatments. Slow drains often indicate developing blockages that worsen over time.",
    category: "plumbing"
  },
  {
    id: "pipe-materials",
    term: "Pipe Materials",
    definition:
      "Modern homes use various pipe materials: copper (durable, expensive), PEX (flexible, freeze-resistant, cost-effective), PVC/CPVC (for drain and some supply lines), and galvanized steel (older homes, prone to corrosion). Each has advantages and limitations. Older homes may have lead pipes or lead solder, which are a health hazard requiring replacement. Knowing your pipe materials helps anticipate maintenance needs.",
    category: "plumbing"
  },
  {
    id: "water-heater-maintenance",
    term: "Water Heater Maintenance",
    definition:
      "Tank water heaters require periodic maintenance: annual flushing removes sediment that reduces efficiency and capacity, anode rod inspection every 2-3 years prevents tank corrosion, and temperature settings should be 120°F for safety and efficiency. Signs of failing heaters include rusty water, rumbling sounds, leaks around the base, and inadequate hot water. Most tank heaters last 10-15 years.",
    category: "plumbing"
  },
  {
    id: "backflow-prevention",
    term: "Backflow Prevention",
    definition:
      "Backflow occurs when contaminated water flows backward into clean water supply - a serious health hazard. Backflow preventers (check valves, vacuum breakers) are required on irrigation systems, boiler connections, and other cross-connection points. Many municipalities require annual backflow testing. Sewer backflow preventers protect against sewage backing up during heavy rains or municipal system overloads.",
    category: "plumbing"
  }
];

const faqs: FaqItem[] = [
  {
    id: "faq-why-leak",
    question: "Why does my basement leak?",
    answer:
      "Basement leaks stem from several causes: hydrostatic pressure from rising groundwater, cracks in foundation walls or floors, deteriorated exterior waterproofing, clogged or failed drainage systems, improper grading directing surface water toward the foundation, or window wells and bulkheads allowing water entry. Often, multiple factors combine. A professional inspection identifies the specific sources affecting your home.",
    category: "basement"
  },
  {
    id: "faq-wait",
    question: "What happens if I wait to fix my wet basement?",
    answer:
      "Delaying repairs typically worsens the problem and increases costs. Ongoing moisture promotes mold growth (beginning within 24-48 hours of water exposure), damages stored belongings, and creates health hazards. Persistent water can erode foundation materials, widen cracks, and compromise structural integrity. A damp basement also reduces your home's value and can complicate future sales.",
    category: "basement"
  },
  {
    id: "faq-cost",
    question: "How much does basement waterproofing cost?",
    answer:
      "Costs vary significantly based on the problem scope, foundation type, basement size, and chosen solutions. Simple crack repairs might cost a few hundred dollars; comprehensive perimeter drainage systems with sump pumps run several thousand. Rather than guessing, we provide free inspections and detailed proposals so you understand exactly what's needed and what it costs before committing.",
    category: "basement"
  },
  {
    id: "faq-dust",
    question: "Will waterproofing work create dust and mess?",
    answer:
      "Interior waterproofing does create dust from concrete cutting. We protect your home with containment barriers, covering HVAC systems and doorways with plastic sheeting and setting up negative air machines. HEPA-filtered air scrubbers capture airborne particles. After completion, we thoroughly clean the work area and remove all debris. Most homeowners are surprised how clean we leave things.",
    category: "basement"
  },
  {
    id: "faq-value",
    question: "Will waterproofing increase my home's value?",
    answer:
      "A dry basement with a transferable warranty is a significant selling point. Buyers are increasingly aware of moisture issues and their consequences. A properly waterproofed basement also opens possibilities for finished living space, effectively adding square footage to your home. The investment typically returns value both in daily enjoyment and resale.",
    category: "basement"
  },
  {
    id: "faq-toxic-mold",
    question: "Should I be worried about toxic mold?",
    answer:
      'The term "toxic mold" is somewhat misleading, as molds themselves aren\'t toxic, though some produce mycotoxins. The health risks from common indoor molds (allergic reactions, respiratory irritation) are well-documented and affect many people. Whether or not a specific mold is "toxic", any significant indoor mold growth should be professionally remediated and the moisture source eliminated.',
    category: "mold"
  },
  {
    id: "faq-mold-common",
    question: "How common is mold in homes?",
    answer:
      "Mold is everywhere - spores are naturally present in outdoor and indoor air. The question isn't whether mold exists, but whether conditions allow it to grow. Any home with moisture problems can develop mold. Studies suggest a significant percentage of buildings have some water damage history, making mold growth potential widespread.",
    category: "mold"
  },
  {
    id: "faq-mold-entry",
    question: "How does mold get inside my home?",
    answer:
      "Mold spores enter through doors, windows, HVAC systems, and on clothing, shoes, and pets. This is normal and unavoidable. Problems begin when spores land on moist surfaces with organic material, then they germinate and grow. Controlling indoor moisture is the key to preventing mold, not trying to eliminate spores.",
    category: "mold"
  },
  {
    id: "faq-mold-risk",
    question: "Who is most at risk from mold exposure?",
    answer:
      "Those with allergies, asthma, or other respiratory conditions often react more strongly to mold. People with weakened immune systems (from illness, chemotherapy, or medications) face higher risk of mold infections. Infants, elderly individuals, and those with chronic lung diseases should be especially cautious around mold-contaminated environments.",
    category: "mold"
  },
  {
    id: "faq-mold-remove",
    question: "Can I remove mold myself?",
    answer:
      "Small areas of mold (under 10 square feet) on hard surfaces can often be cleaned with detergent and water. However, larger contaminations, mold in HVAC systems, or mold behind walls requires professional remediation. DIY attempts on significant mold often spread contamination. If you smell mold but can't see it, hidden growth likely requires professional investigation.",
    category: "mold"
  },
  {
    id: "faq-mold-prevent",
    question: "How do I prevent mold from returning?",
    answer:
      "Address the moisture source - this is essential. Fix leaks promptly, maintain humidity between 30-50%, ensure adequate ventilation (especially in bathrooms and kitchens), vent dryers outside, use exhaust fans, and address any basement water intrusion. Regular inspection of prone areas catches new growth early before it spreads.",
    category: "mold"
  }
];

const categories = [
  { id: "all" as Category, label: "All Topics", Icon: Layers },
  { id: "waterproofing" as Category, label: "Waterproofing", Icon: CloudRain },
  { id: "foundation" as Category, label: "Foundation", Icon: BrickWall },
  { id: "mold" as Category, label: "Mold", Icon: Biohazard },
  { id: "remodeling" as Category, label: "Remodeling", Icon: HousePlus },
  { id: "plumbing" as Category, label: "Plumbing", Icon: Wrench }
];

const KnowledgeCard = ({
  item,
  isOpen,
  onToggle
}: {
  item: KnowledgeItem;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const categoryColors: Record<Category, string> = {
    all: "bg-elite-teal/20 text-elite-teal",
    waterproofing: "bg-blue-500/20 text-blue-400",
    foundation: "bg-amber-500/20 text-amber-400",
    mold: "bg-emerald-500/20 text-emerald-400",
    remodeling: "bg-purple-500/20 text-purple-400",
    plumbing: "bg-cyan-500/20 text-cyan-400"
  };

  return (
    <div className="bg-surface overflow-hidden rounded-xl border border-white/5">
      <button
        className="flex w-full cursor-pointer items-center justify-between p-4 text-left transition-colors hover:bg-white/5"
        onClick={onToggle}
      >
        <div className="flex items-center gap-3">
          <span
            className={`rounded-full px-2.5 py-1 text-xs font-medium capitalize ${categoryColors[item.category]}`}
          >
            {item.category}
          </span>
          <h3 className="text-primary font-medium">{item.term}</h3>
        </div>
        <ChevronDown
          className={`text-muted shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          size={20}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="text-muted border-t border-white/5 px-4 py-4 text-sm leading-relaxed">
          {item.definition}
        </div>
      </div>
    </div>
  );
};

const FaqCard = ({
  item,
  isOpen,
  onToggle
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="bg-surface overflow-hidden rounded-xl border border-white/5">
      <button
        className="flex w-full cursor-pointer items-center justify-between gap-4 p-4 text-left transition-colors hover:bg-white/5"
        onClick={onToggle}
      >
        <div className="flex items-start gap-3">
          <HelpCircle className="text-elite-teal mt-0.5 shrink-0" size={20} />
          <h3 className="text-primary font-medium">{item.question}</h3>
        </div>
        <ChevronDown
          className={`text-muted shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          size={20}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="text-muted border-t border-white/5 px-4 py-4 pl-12 text-sm leading-relaxed">
          {item.answer}
        </div>
      </div>
    </div>
  );
};

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [activeFaqTab, setActiveFaqTab] = useState<"basement" | "mold">("basement");

  const toggleItem = (id: string) => {
    setOpenItems((prevItem) => {
      const nextItem = new Set(prevItem);

      if (nextItem.has(id)) {
        nextItem.delete(id);
      } else {
        nextItem.add(id);
      }

      return nextItem;
    });
  };

  const filteredKnowledge = knowledgeBase.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;

    const matchesSearch =
      searchQuery === "" ||
      item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const filteredFaqs = faqs.filter((item) => {
    const matchesTab = item.category === activeFaqTab;

    const matchesSearch =
      searchQuery === "" ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  return (
    <article className="mx-auto max-w-6xl pb-24 md:pb-0">
      <header className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2">
          <p className="text-elite-teal mb-2 text-xs font-medium tracking-[0.2em]">
            KNOWLEDGE BASE
          </p>
          <h1 className="text-primary font-serif text-3xl leading-tight md:text-4xl lg:text-5xl">
            Resources & FAQs
          </h1>
          <div className="bg-elite-teal/20 my-6 h-px w-24" />
          <p className="text-muted mt-4 text-base md:text-lg">
            Everything you need to understand basement waterproofing, mold remediation, foundation
            repair, and home remodeling. Search our knowledge base or browse by category.
          </p>
        </div>
        <div className="bg-elite-teal flex flex-col items-center justify-center rounded-2xl p-6 text-center">
          <ListChevronsDownUp className="mb-2 h-8 w-8 text-white/80" />
          <span className="text-3xl font-semibold text-white">{knowledgeBase.length}+</span>
          <p className="mt-1 text-sm text-white/80">Topics covered</p>
        </div>
      </header>
      <div className="bg-surface mb-6 rounded-2xl p-4">
        <div className="relative">
          <Search className="text-muted absolute top-1/2 left-4 -translate-y-1/2" size={20} />
          <input
            className="text-primary placeholder:text-muted w-full rounded-xl bg-white/5 py-3 pr-10 pl-12 text-base transition-colors outline-none focus:bg-white/10"
            placeholder="Search topics, terms, or questions..."
            type="text"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
          {searchQuery && (
            <button
              className="text-muted hover:text-primary absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer transition-colors"
              onClick={() => setSearchQuery("")}
            >
              <X size={18} />
            </button>
          )}
        </div>
      </div>
      <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-5">
        <div className="bg-surface flex items-center gap-3 rounded-xl p-4">
          <div className="rounded-lg bg-blue-500/20 p-2">
            <CloudRain className="text-blue-400" size={20} />
          </div>
          <div>
            <p className="text-primary text-lg font-semibold">
              {knowledgeBase.filter((base) => base.category === "waterproofing").length}
            </p>
            <p className="text-muted text-xs">Waterproofing</p>
          </div>
        </div>
        <div className="bg-surface flex items-center gap-3 rounded-xl p-4">
          <div className="rounded-lg bg-amber-500/20 p-2">
            <BrickWall className="text-amber-400" size={20} />
          </div>
          <div>
            <p className="text-primary text-lg font-semibold">
              {knowledgeBase.filter((base) => base.category === "foundation").length}
            </p>
            <p className="text-muted text-xs">Foundation</p>
          </div>
        </div>
        <div className="bg-surface flex items-center gap-3 rounded-xl p-4">
          <div className="rounded-lg bg-emerald-500/20 p-2">
            <Biohazard className="text-emerald-400" size={20} />
          </div>
          <div>
            <p className="text-primary text-lg font-semibold">
              {knowledgeBase.filter((base) => base.category === "mold").length}
            </p>
            <p className="text-muted text-xs">Mold</p>
          </div>
        </div>
        <div className="bg-surface flex items-center gap-3 rounded-xl p-4">
          <div className="rounded-lg bg-purple-500/20 p-2">
            <HousePlus className="text-purple-400" size={20} />
          </div>
          <div>
            <p className="text-primary text-lg font-semibold">
              {knowledgeBase.filter((base) => base.category === "remodeling").length}
            </p>
            <p className="text-muted text-xs">Remodeling</p>
          </div>
        </div>
        <div className="bg-surface flex items-center gap-3 rounded-xl p-4">
          <div className="rounded-lg bg-cyan-500/20 p-2">
            <Wrench className="text-cyan-400" size={20} />
          </div>
          <div>
            <p className="text-primary text-lg font-semibold">
              {knowledgeBase.filter((base) => base.category === "plumbing").length}
            </p>
            <p className="text-muted text-xs">Plumbing</p>
          </div>
        </div>
      </div>
      <div className="bg-surface mb-6 flex flex-wrap gap-2 rounded-2xl p-4">
        {categories.map(({ Icon, id, label }) => (
          <button
            key={id}
            className={`flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeCategory === id
                ? "bg-elite-teal text-white"
                : "text-muted hover:text-primary bg-white/5 hover:bg-white/10"
            }`}
            onClick={() => setActiveCategory(id)}
          >
            <Icon size={16} />
            {label}
          </button>
        ))}
      </div>
      <section className="mb-8">
        <h2 className="text-primary mb-4 font-serif text-2xl">
          {activeCategory === "all"
            ? "All Topics"
            : `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Topics`}
        </h2>
        <div className="space-y-2">
          {filteredKnowledge.length > 0 ? (
            filteredKnowledge.map((item) => (
              <KnowledgeCard
                key={item.id}
                isOpen={openItems.has(item.id)}
                item={item}
                onToggle={() => toggleItem(item.id)}
              />
            ))
          ) : (
            <div className="bg-surface rounded-xl p-8 text-center">
              <p className="text-muted">No topics found matching your search.</p>
            </div>
          )}
        </div>
      </section>
      {/* FAQs */}
      <section className="mb-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-primary font-serif text-2xl">Frequently Asked Questions</h2>
          <div className="bg-surface flex gap-1 rounded-full p-1">
            <button
              className={`cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeFaqTab === "basement"
                  ? "bg-elite-teal text-white"
                  : "text-muted hover:text-primary"
              }`}
              onClick={() => setActiveFaqTab("basement")}
            >
              Basement
            </button>
            <button
              className={`cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeFaqTab === "mold"
                  ? "bg-elite-teal text-white"
                  : "text-muted hover:text-primary"
              }`}
              onClick={() => setActiveFaqTab("mold")}
            >
              Mold
            </button>
          </div>
        </div>
        <div className="space-y-2">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((item) => (
              <FaqCard
                key={item.id}
                isOpen={openItems.has(item.id)}
                item={item}
                onToggle={() => toggleItem(item.id)}
              />
            ))
          ) : (
            <div className="bg-surface rounded-xl p-8 text-center">
              <p className="text-muted">No FAQs found matching your search.</p>
            </div>
          )}
        </div>
      </section>
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#0d0d0d] p-6 md:flex-row md:p-8">
        <div>
          <p className="text-center text-lg font-medium text-white md:text-left md:text-xl">
            Still have questions?
          </p>
          <p className="text-sm text-white/60">
            Our experts are ready to help with your specific situation
          </p>
        </div>
        <a
          className="bg-elite-teal rounded-full px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          href="/contact"
        >
          Get Expert Advice
        </a>
      </div>
    </article>
  );
}
