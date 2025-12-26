interface MapProps {
  className?: string;
}

const pennsylvania = {
  bucks:
    "M92.9,34.2 L102.5,25.3 L112.1,19.1 L129.5,10.0 L130.5,12.2 L134.1,15.7 L141.9,15.2 L146.5,19.2 L145.6,29.6 L147.4,34.6 L158.9,36.6 L162.1,44.1 L171.7,50.0 L174.9,55.7 L184.0,60.2 L190.0,68.4 L182.7,72.3 L178.1,71.4 L172.6,77.0 L157.9,81.4 L159.3,72.5 L152.9,70.1 L141.0,63.2 L92.9,34.2 Z",
  chester:
    "M10.0,123.1 L18.7,118.3 L28.3,104.4 L27.9,93.8 L35.2,82.9 L35.2,73.5 L43.4,70.2 L65.9,56.8 L76.4,59.2 L78.2,57.2 L81.5,62.7 L83.7,61.2 L87.4,68.5 L96.1,71.7 L96.6,76.4 L101.1,75.2 L104.8,79.8 L108.9,79.3 L101.6,82.3 L103.0,84.2 L97.0,88.5 L99.3,89.6 L87.9,94.7 L78.7,103.7 L78.7,108.4 L70.0,110.4 L63.1,114.1 L54.0,123.1 L10.0,123.1 Z",
  delaware:
    "M108.9,79.3 L119.5,90.6 L125.0,95.6 L121.3,103.4 L127.7,104.8 L120.4,106.9 L109.4,108.1 L101.6,112.9 L91.1,108.9 L78.7,108.4 L78.7,103.7 L87.9,94.7 L99.3,89.6 L97.0,88.5 L103.0,84.2 L101.6,82.3 L108.9,79.3 Z",
  philly:
    "M119.5,90.6 L128.6,86.2 L120.8,80.7 L126.3,75.8 L132.3,76.9 L140.5,81.7 L152.9,70.1 L159.3,72.5 L157.9,81.4 L146.9,88.7 L138.2,92.9 L136.9,101.9 L127.7,104.8 L121.3,103.4 L125.0,95.6 L119.5,90.6 Z",
  montgomery:
    "M65.9,56.8 L87.4,30.6 L92.9,34.2 L141.0,63.2 L152.9,70.1 L140.5,81.7 L132.3,76.9 L126.3,75.8 L120.8,80.7 L128.6,86.2 L119.5,90.6 L108.9,79.3 L104.8,79.8 L101.1,75.2 L96.6,76.4 L96.1,71.7 L87.4,68.5 L83.7,61.2 L81.5,62.7 L78.2,57.2 L76.4,59.2 L65.9,56.8 Z"
};

const newJersey =
  "M38.3,138.0 L42.0,133.9 L44.4,131.8 L45.7,127.9 L48.9,125.3 L53.5,122.5 L63.6,120.9 L70.2,118.0 L70.2,113.6 L74.5,112.0 L76.3,109.9 L85.4,105.3 L90.2,104.4 L93.4,101.1 L96.0,101.7 L100.5,99.2 L96.8,94.7 L91.5,92.0 L89.6,88.7 L84.0,85.3 L82.2,81.0 L75.5,79.8 L74.5,76.9 L75.0,70.8 L72.3,68.5 L67.8,68.8 L65.4,67.9 L64.9,62.6 L66.8,60.7 L64.6,59.3 L67.0,53.0 L69.9,53.3 L76.1,46.1 L69.7,38.5 L73.1,35.4 L77.9,33.6 L82.2,30.0 L81.1,28.5 L85.6,26.2 L88.6,23.1 L92.3,15.2 L98.1,10.8 L102.4,10.0 L125.8,21.0 L160.9,36.7 L161.7,37.9 L156.4,49.8 L153.2,53.9 L152.1,58.1 L150.5,59.5 L148.7,61.6 L138.8,63.8 L137.8,69.2 L135.4,70.2 L134.6,73.4 L134.6,76.1 L139.6,77.9 L143.9,76.8 L150.3,79.6 L154.0,80.1 L155.0,77.3 L156.1,83.1 L155.3,89.9 L151.6,101.5 L148.1,117.2 L146.8,128.2 L136.2,143.5 L133.2,146.6 L130.8,147.2 L131.6,149.2 L129.0,152.7 L123.7,156.7 L123.4,157.9 L115.2,161.4 L106.6,168.3 L101.1,175.8 L95.2,185.3 L89.9,189.1 L84.8,190.0 L81.9,189.1 L83.5,183.5 L87.5,177.3 L88.3,172.9 L82.7,170.6 L77.9,170.3 L76.3,168.7 L71.5,168.9 L69.7,171.2 L67.3,169.7 L66.8,166.7 L62.0,164.3 L61.2,162.4 L58.5,163.2 L54.5,158.9 L52.7,159.4 L47.9,155.7 L45.2,152.1 L40.2,150.5 L41.8,141.6 L38.6,139.8 L38.3,138.0 Z";

const delaware = {
  newCastle:
    "M52.0,25.0 L61.3,15.8 L68.3,12.0 L77.2,10.0 L89.7,10.4 L100.5,14.6 L100.9,15.6 L94.9,19.3 L92.5,26.1 L88.3,29.6 L85.5,28.9 L75.3,37.9 L76.2,42.3 L81.3,45.7 L81.8,51.2 L78.1,54.3 L78.1,58.9 L84.6,64.7 L87.9,71.3 L82.7,72.7 L78.6,78.6 L68.3,81.0 L55.7,80.2 L54.8,69.7 L52.0,34.6 L52.0,25.0 Z",
  kent: "M55.7,80.2 L68.3,81.0 L78.6,78.6 L82.7,72.7 L87.9,71.3 L97.7,78.1 L102.3,85.7 L103.7,92.1 L101.4,96.0 L102.3,110.1 L109.8,115.5 L114.0,125.7 L105.1,123.7 L102.3,129.3 L91.6,131.2 L86.9,137.4 L82.3,140.1 L60.8,140.8 L57.6,100.2 L56.2,86.8 L55.7,80.2 Z",
  sussex:
    "M60.8,140.8 L82.3,140.1 L86.9,137.4 L91.6,131.2 L102.3,129.3 L105.1,123.7 L114.0,125.7 L114.9,130.1 L129.8,143.8 L137.3,147.0 L142.0,144.4 L143.8,148.4 L146.2,162.8 L148.0,190.0 L110.3,189.9 L64.6,188.9 L63.6,175.8 L62.7,166.1 L60.8,140.8 Z"
};

export const SoutheasternPennsylvania = ({ className }: MapProps) => {
  return (
    <svg
      aria-label="Southeastern Pennsylvania service area"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 200 140"
    >
      <defs>
        <linearGradient id="pennsylvania-gradient" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#667d7d" />
          <stop offset="100%" stopColor="#4a5f5f" />
        </linearGradient>
      </defs>
      <path
        d={pennsylvania.chester}
        fill="url(#pennsylvania-gradient)"
        stroke="#0d0d0d"
        strokeWidth="1"
      />
      <path
        d={pennsylvania.bucks}
        fill="url(#pennsylvania-gradient)"
        stroke="#0d0d0d"
        strokeWidth="1"
      />
      <path
        d={pennsylvania.montgomery}
        fill="url(#pennsylvania-gradient)"
        stroke="#0d0d0d"
        strokeWidth="1"
      />
      <path
        d={pennsylvania.delaware}
        fill="url(#pennsylvania-gradient)"
        stroke="#0d0d0d"
        strokeWidth="1"
      />
      <path d={pennsylvania.philly} fill="#6d7a51" stroke="#0d0d0d" strokeWidth="1" />
      <text fill="#fff" fontSize="8" fontWeight="500" textAnchor="middle" x="135" y="45">
        Bucks
      </text>
      <text fill="#fff" fontSize="8" fontWeight="500" textAnchor="middle" x="105" y="60">
        Montgomery
      </text>
      <text fill="#fff" fontSize="8" fontWeight="500" textAnchor="middle" x="60" y="90">
        Chester
      </text>
      <text fill="#fff" fontSize="8" fontWeight="500" textAnchor="middle" x="103" y="102">
        Delaware
      </text>
    </svg>
  );
};

export const NewJersey = ({ className }: MapProps) => {
  return (
    <svg
      aria-label="New Jersey service area"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 200 200"
    >
      <defs>
        <linearGradient id="nj-gradient" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#667d7d" />
          <stop offset="100%" stopColor="#4a5f5f" />
        </linearGradient>
      </defs>
      {/* NJ State */}
      <path d={newJersey} fill="url(#nj-gradient)" stroke="#0d0d0d" strokeWidth="1.5" />
    </svg>
  );
};

export const NorthernDelaware = ({ className }: MapProps) => {
  return (
    <svg
      aria-label="Northern Delaware service area"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 200 200"
    >
      <defs>
        <linearGradient id="de-gradient" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#667d7d" />
          <stop offset="100%" stopColor="#4a5f5f" />
        </linearGradient>
      </defs>
      {/* New Castle County - highlighted */}
      <path d={delaware.newCastle} fill="url(#de-gradient)" stroke="#0d0d0d" strokeWidth="1" />
      {/* Kent and Sussex counties - faded */}
      <path d={delaware.kent} fill="#2a2a2a" stroke="#0d0d0d" strokeWidth="1" />
      <path d={delaware.sussex} fill="#2a2a2a" stroke="#0d0d0d" strokeWidth="1" />
      {/* Label */}
      <text fill="#fff" fontSize="10" fontWeight="500" textAnchor="middle" x="68" y="50">
        New Castle
      </text>
    </svg>
  );
};
