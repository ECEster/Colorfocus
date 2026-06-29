/* ── SVG Thumbnail helpers ── */
const S = (body) => `<svg viewBox="0 0 300 380" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="380" fill="white"/><g stroke="#1a1a1a" stroke-width="1.3" fill="none" stroke-linecap="round" stroke-linejoin="round">${body}</g></svg>`;

/* Mandala helper: repeat element 8× around center */
const ring8 = (r, el) => Array.from({length:8}, (_,i) => `<g transform="translate(150,190) rotate(${i*45})">${el(r)}</g>`).join('');
const ring6 = (r, el) => Array.from({length:6}, (_,i) => `<g transform="translate(150,190) rotate(${i*60})">${el(r)}</g>`).join('');

/* Pre-built SVG thumbnails */
const THUMBS = {

  mandala1: S(`
    <g transform="translate(150,190)">
      <circle r="140"/><circle r="118"/><circle r="96"/><circle r="74"/><circle r="52"/><circle r="30"/><circle r="10"/>
      ${Array.from({length:8},(_,i)=>`<g transform="rotate(${i*45})"><ellipse cx="0" cy="-107" rx="14" ry="22"/><circle cx="0" cy="-130" r="5"/></g>`).join('')}
      ${Array.from({length:8},(_,i)=>`<g transform="rotate(${i*45})"><ellipse cx="0" cy="-63" rx="10" ry="16"/></g>`).join('')}
      ${Array.from({length:16},(_,i)=>`<line x1="0" y1="-119" x2="0" y2="-140" transform="rotate(${i*22.5})"/>`).join('')}
      ${Array.from({length:8},(_,i)=>`<g transform="rotate(${i*45+22.5})"><circle cx="0" cy="-85" r="4"/></g>`).join('')}
    </g>
  `),

  mandala2: S(`
    <g transform="translate(150,190)">
      <circle r="138"/><circle r="115"/><circle r="92"/><circle r="70"/><circle r="48"/><circle r="25"/>
      ${Array.from({length:6},(_,i)=>`<g transform="rotate(${i*60})"><path d="M0,-100 Q18,-80 0,-60 Q-18,-80 0,-100"/><path d="M0,-72 Q12,-58 0,-44 Q-12,-58 0,-72"/><circle cx="0" cy="-122" r="6"/><line x1="0" y1="-115" x2="0" y2="-138"/></g>`).join('')}
      ${Array.from({length:6},(_,i)=>`<g transform="rotate(${i*60+30})"><line x1="0" y1="-70" x2="0" y2="-115"/><circle cx="0" cy="-92" r="4"/></g>`).join('')}
      ${Array.from({length:12},(_,i)=>`<line x1="0" y1="-25" x2="0" y2="-48" transform="rotate(${i*30})"/>`).join('')}
    </g>
  `),

  botanisch1: S(`
    <g transform="translate(150,200)">
      ${Array.from({length:5},(_,i)=>`<path d="M0,0 Q${30*Math.cos((i*72-90)*Math.PI/180)},${30*Math.sin((i*72-90)*Math.PI/180)} ${60*Math.cos((i*72-90)*Math.PI/180)},${60*Math.sin((i*72-90)*Math.PI/180)} Q${40*Math.cos((i*72-90)*Math.PI/180)},${40*Math.sin((i*72-90)*Math.PI/180)} 0,0" transform="rotate(${i*72})"/>`).join('')}
      ${Array.from({length:5},(_,i)=>`<path d="M0,0 Q${48*Math.cos((i*72-90+36)*Math.PI/180)},${48*Math.sin((i*72-90+36)*Math.PI/180)} ${88*Math.cos((i*72-90+36)*Math.PI/180)},${88*Math.sin((i*72-90+36)*Math.PI/180)} Q${65*Math.cos((i*72-90+36)*Math.PI/180)},${65*Math.sin((i*72-90+36)*Math.PI/180)} 0,0"/>`).join('')}
      ${Array.from({length:5},(_,i)=>`<ellipse cx="${75*Math.cos((i*72-90)*Math.PI/180)}" cy="${75*Math.sin((i*72-90)*Math.PI/180)}" rx="18" ry="28" transform="rotate(${i*72},0,0)"/>`).join('')}
      <circle r="18"/><circle r="10"/>
    </g>
    <path d="M150,320 C150,300 148,280 150,260" stroke-width="2"/>
    <path d="M150,300 Q120,275 105,255" stroke-width="1.5"/>
    <path d="M150,280 Q180,260 192,240" stroke-width="1.5"/>
    <ellipse cx="112" cy="248" rx="28" ry="14" transform="rotate(-35,112,248)"/>
    <line x1="112" y1="248" x2="140" y2="285" stroke-width="0.8"/>
    <ellipse cx="188" cy="235" rx="28" ry="14" transform="rotate(25,188,235)"/>
    <line x1="188" y1="235" x2="160" y2="268" stroke-width="0.8"/>
  `),

  botanisch2: S(`
    <path d="M150,350 Q95,300 80,220 Q70,150 100,100 Q130,60 150,50 Q170,60 200,100 Q230,150 220,220 Q205,300 150,350"/>
    <path d="M150,350 L150,50" stroke-width="1.8"/>
    ${Array.from({length:10},(_,i)=>`<path d="M150,${90+i*26} Q${i%2===0?108:192},${90+i*26-15} ${i%2===0?82:218},${90+i*26+8}" stroke-width="1"/>`).join('')}
    <ellipse cx="80" cy="160" rx="55" ry="30" transform="rotate(-30,80,160)"/>
    <path d="M80,160 L108,148" stroke-width="0.8"/>
    ${Array.from({length:5},(_,i)=>`<path d="M80,160 Q${60+i*8},${145-i*6} ${55+i*10},${130-i*8}" stroke-width="0.7"/>`).join('')}
    <ellipse cx="220" cy="200" rx="55" ry="28" transform="rotate(25,220,200)"/>
    <path d="M220,200 L192,190" stroke-width="0.8"/>
  `),

  fantasy1: S(`
    <g transform="translate(150,195)">
      <ellipse cx="0" cy="0" rx="70" ry="55"/>
      <path d="M-30,-45 Q-50,-85 -40,-110 Q-20,-100 -10,-70"/>
      <path d="M30,-45 Q50,-85 40,-110 Q20,-100 10,-70"/>
      <path d="M-70,0 Q-120,-10 -130,30 Q-120,60 -70,45"/>
      <path d="M70,0 Q120,-10 130,30 Q120,60 70,45"/>
      <ellipse cx="0" cy="-15" rx="35" ry="25"/>
      <circle cx="-15" cy="-25" r="10"/><circle cx="15" cy="-25" r="10"/>
      <circle cx="-15" cy="-25" r="5" fill="#1a1a1a"/><circle cx="15" cy="-25" r="5" fill="#1a1a1a"/>
      <path d="M-18,5 Q0,18 18,5"/>
      <path d="M-5,-50 L-8,-68 M5,-50 L8,-68"/>
      <circle cx="-8" cy="-70" r="4"/><circle cx="8" cy="-70" r="4"/>
      ${Array.from({length:6},(_,i)=>`<path d="M${-50+i*18},10 Q${-45+i*18},25 ${-50+i*18},40" stroke-width="1"/>`).join('')}
      ${Array.from({length:4},(_,i)=>`<path d="M${-85+i*6},-5 Q${-80+i*6},10 ${-85+i*6},25" stroke-width="0.9"/>`).join('')}
      ${Array.from({length:4},(_,i)=>`<path d="M${72+i*6},-5 Q${77+i*6},10 ${72+i*6},25" stroke-width="0.9"/>`).join('')}
    </g>
    <path d="M80,320 Q150,310 220,320" stroke-width="1.5"/>
    <path d="M60,340 Q150,325 240,340" stroke-width="1"/>
  `),

  fantasy2: S(`
    <g transform="translate(150,195)">
      <path d="M0,-130 L25,-60 L65,-60 L35,-20 L50,50 L0,20 L-50,50 L-35,-20 L-65,-60 L-25,-60 Z"/>
      <path d="M0,-130 L0,20"/>
      <path d="M-25,-60 L35,-20 M25,-60 L-35,-20"/>
      <path d="M50,50 L0,-130 L-50,50"/>
      <path d="M-65,-60 L65,-60"/>
      <path d="M0,-90 L18,-40 M0,-90 L-18,-40"/>
      ${Array.from({length:5},(_,i)=>`<polygon points="${[-20+i*10]},${-70+i*8} ${-15+i*10},${-55+i*8} ${-10+i*10},${-70+i*8}" stroke-width="0.8"/>`).join('')}
      <path d="M-90,-30 L-65,-60 L-45,-20"/>
      <path d="M90,-30 L65,-60 L45,-20"/>
      ${Array.from({length:6},(_,i)=>`<circle cx="${-60+i*24}" cy="-40" r="3" stroke-width="0.9"/>`).join('')}
      <circle cx="0" cy="20" r="12"/><circle cx="0" cy="20" r="6"/>
      <circle cx="50" cy="50" r="8"/><circle cx="-50" cy="50" r="8"/>
    </g>
  `),

  dieren1: S(`
    <g transform="translate(150,185)">
      <circle r="110"/>
      <circle r="85"/>
      <circle cx="-30" cy="-35" r="30"/><circle cx="30" cy="-35" r="30"/>
      <circle cx="-30" cy="-35" r="18"/><circle cx="30" cy="-35" r="18"/>
      <circle cx="-30" cy="-35" r="8" fill="#1a1a1a"/><circle cx="30" cy="-35" r="8" fill="#1a1a1a"/>
      <path d="M-12,5 Q0,20 12,5"/>
      <path d="M0,5 L0,15"/>
      <ellipse cx="-55" cy="-100" rx="18" ry="32" transform="rotate(-20,-55,-100)"/>
      <ellipse cx="55" cy="-100" rx="18" ry="32" transform="rotate(20,55,-100)"/>
      ${Array.from({length:8},(_,i)=>`<path d="M${-105+i*5*2.5},${Math.sqrt(110*110-(105-i*5*2.5)*(105-i*5*2.5))*0.7} Q${-95+i*5*2.5},${Math.sqrt(110*110-(95-i*5*2.5)*(95-i*5*2.5))*0.85} ${-85+i*5*2.5},${Math.sqrt(110*110-(85-i*5*2.5)*(85-i*5*2.5))}" stroke-width="0.9"/>`).join('')}
      ${Array.from({length:9},(_,i)=>`<path d="M${-95+i*23},${Math.sqrt(Math.max(0,110*110-(95-i*23)*(95-i*23)))} L${-95+i*23},85" stroke-width="0.8"/>`).join('')}
      ${Array.from({length:5},(_,i)=>`<path d="M${-40+i*18},45 Q${-38+i*18},60 ${-40+i*18},75" stroke-width="0.9"/>`).join('')}
    </g>
    <path d="M80,340 Q150,330 220,340" stroke-width="1.2"/>
    <path d="M95,355 Q150,345 205,355" stroke-width="1"/>
  `),

  dieren2: S(`
    <g transform="translate(150,195)">
      <path d="M0,-30 Q-80,-40 -120,10 Q-140,50 -110,90 Q-80,130 -40,110 Q-20,105 0,80 Q20,105 40,110 Q80,130 110,90 Q140,50 120,10 Q80,-40 0,-30"/>
      <path d="M0,80 Q-60,30 -80,-30 Q-70,-80 -40,-100 Q-20,-120 0,-100 Q20,-120 40,-100 Q70,-80 80,-30 Q60,30 0,80"/>
      ${Array.from({length:5},(_,i)=>`<path d="M${-60+i*24},-60 Q${-55+i*24},-40 ${-60+i*24},-20" stroke-width="0.9"/>`).join('')}
      <ellipse cx="-60" cy="50" rx="30" ry="20" transform="rotate(-20,-60,50)"/>
      <ellipse cx="60" cy="50" rx="30" ry="20" transform="rotate(20,60,50)"/>
      <path d="M-50,-50 Q-70,-20 -60,20"/>
      <path d="M50,-50 Q70,-20 60,20"/>
      <circle cx="-20" cy="-55" r="10"/><circle cx="20" cy="-55" r="10"/>
      <circle cx="-20" cy="-55" r="5" fill="#1a1a1a"/><circle cx="20" cy="-55" r="5" fill="#1a1a1a"/>
      <path d="M-8,-35 Q0,-28 8,-35"/>
      <path d="M-10,-80 L-15,-100 M10,-80 L15,-100"/>
    </g>
  `),

  seizoen1: S(`
    <path d="M90,60 Q110,30 140,40 Q155,20 170,40 Q195,28 205,55 Q225,52 228,75 Q240,85 230,105 Q240,125 220,135 Q215,160 195,155 Q185,175 165,165 Q155,185 140,175 Q125,185 115,165 Q95,175 85,155 Q65,160 60,135 Q40,125 50,105 Q40,85 52,75 Q55,52 75,55 Q80,32 90,60"/>
    ${Array.from({length:7},(_,i)=>`<path d="M90,${95+i*7} Q140,${90+i*5} 210,${95+i*7}" stroke-width="0.8"/>`).join('')}
    <path d="M230,230 Q210,200 185,210 Q195,180 175,170 Q165,195 150,185 Q135,195 125,170 Q105,180 115,210 Q90,200 70,230"/>
    <path d="M150,185 L150,225" stroke-width="1.5"/>
    ${Array.from({length:6},(_,i)=>`<path d="M150,${195+i*5} Q${140-i*3},${193+i*5} ${130-i*4},${198+i*5}" stroke-width="0.8"/><path d="M150,${195+i*5} Q${160+i*3},${193+i*5} ${170+i*4},${198+i*5}" stroke-width="0.8"/>`).join('')}
    <path d="M45,310 Q70,280 100,295 Q110,265 135,270 Q140,290 150,280 Q160,290 165,270 Q190,265 200,295 Q230,280 255,310"/>
    <path d="M150,280 L150,310" stroke-width="1.5"/>
    <path d="M60,355 Q90,330 120,345 Q135,320 150,330 Q165,320 180,345 Q210,330 240,355"/>
  `),

  seizoen2: S(`
    <g transform="translate(150,190)">
      ${Array.from({length:6},(_,i)=>`<g transform="rotate(${i*60})">
        <line x1="0" y1="0" x2="0" y2="-130" stroke-width="2"/>
        <line x1="0" y1="-40" x2="-25" y2="-65" stroke-width="1.3"/>
        <line x1="0" y1="-40" x2="25" y2="-65" stroke-width="1.3"/>
        <line x1="0" y1="-70" x2="-20" y2="-90" stroke-width="1.2"/>
        <line x1="0" y1="-70" x2="20" y2="-90" stroke-width="1.2"/>
        <line x1="0" y1="-95" x2="-12" y2="-107" stroke-width="1"/>
        <line x1="0" y1="-95" x2="12" y2="-107" stroke-width="1"/>
        <circle cx="0" cy="-130" r="5"/>
        <circle cx="-25" cy="-65" r="3.5"/><circle cx="25" cy="-65" r="3.5"/>
        <circle cx="-20" cy="-90" r="3"/><circle cx="20" cy="-90" r="3"/>
      </g>`).join('')}
      ${Array.from({length:6},(_,i)=>`<line x1="0" y1="0" x2="${90*Math.cos((i*60+30)*Math.PI/180)}" y2="${90*Math.sin((i*60+30)*Math.PI/180)}" stroke-width="1" stroke-dasharray="4 4"/>`).join('')}
      <circle r="12"/><circle r="6"/>
    </g>
  `),

  geometrisch1: S(`
    <g transform="translate(150,190)">
      ${[
        [0,0],[0,-82],[71,-41],[71,41],[0,82],[-71,41],[-71,-41],
        [0,-164],[142,-82],[142,82],[0,164],[-142,82],[-142,-82]
      ].map(([x,y]) => {
        const s=38, h=s*0.866;
        return `<polygon points="${x},${y-s} ${x+h},${y-s/2} ${x+h},${y+s/2} ${x},${y+s} ${x-h},${y+s/2} ${x-h},${y-s/2}"/>
                <polygon points="${x},${y-s*0.6} ${x+h*0.6},${y-s*0.3} ${x+h*0.6},${y+s*0.3} ${x},${y+s*0.6} ${x-h*0.6},${y+s*0.3} ${x-h*0.6},${y-s*0.3}"/>`;
      }).join('')}
    </g>
  `),

  geometrisch2: S(`
    <g transform="translate(150,190)">
      ${Array.from({length:7},(_,row)=>Array.from({length:7},(_,col)=>{
        const x=-90+col*30, y=-90+row*30;
        return `<rect x="${x}" y="${y}" width="30" height="30"/>
                <line x1="${x}" y1="${y}" x2="${x+30}" y2="${y+30}" stroke-width="0.7"/>
                <line x1="${x+30}" y1="${y}" x2="${x}" y2="${y+30}" stroke-width="0.7"/>`;
      }).join('')).join('')}
      ${Array.from({length:6},(_,i)=>`<polygon points="0,${-130+i*44} 38,${-108+i*44} 38,${-64+i*44} 0,${-42+i*44} -38,${-64+i*44} -38,${-108+i*44}" stroke-width="1.4" stroke-dasharray="${i%2===0?'':'5 3'}"/>`).join('')}
    </g>
  `),

  sprookjes1: S(`
    <g transform="translate(150,200)">
      <rect x="-90" y="60" width="180" height="100" rx="4"/>
      ${Array.from({length:4},(_,i)=>`<rect x="${-78+i*46}" y="90" width="26" height="35" rx="13"/>`).join('')}
      <rect x="-90" y="55" width="180" height="10"/>
      <path d="M-90,60 L-120,-40 L-60,30 Z"/>
      <path d="M90,60 L120,-40 L60,30 Z"/>
      <rect x="-25" y="-40" width="50" height="100"/>
      <path d="M-25,-40 L0,-120 L25,-40 Z"/>
      <path d="M-90,60 L-90,-20 L-60,-20 L-60,60"/>
      <path d="M90,60 L90,-20 L60,-20 L60,60"/>
      ${Array.from({length:3},(_,i)=>`<rect x="${-78+i*46}" y="90" width="26" height="35" rx="13"/>`).join('')}
      <circle cx="0" cy="-85" r="8"/>
      ${Array.from({length:5},(_,i)=>`<line x1="0" y1="-145" x2="${20*Math.cos((i*72-90)*Math.PI/180)}" y2="${-145+20*Math.sin((i*72-90)*Math.PI/180)}" stroke-width="1"/>`).join('')}
      ${Array.from({length:8},(_,i)=>`<circle cx="${-110+i*30}" cy="${-${50+i*8}}" r="2"/>`).join('')}
      <path d="M-110,55 L110,55"/>
      <path d="M-90,158 L-90,175 L90,175 L90,158"/>
    </g>
  `),

  sprookjes2: S(`
    <g transform="translate(150,200)">
      <ellipse cx="0" cy="60" rx="100" ry="80"/>
      ${Array.from({length:12},(_,i)=>`<path d="M${100*Math.cos((i*30-90)*Math.PI/180)},${60+80*Math.sin((i*30-90)*Math.PI/180)} Q${115*Math.cos((i*30-90)*Math.PI/180)},${60+95*Math.sin((i*30-90)*Math.PI/180)} ${105*Math.cos((i*30-90)*Math.PI/180)},${60+105*Math.sin((i*30-90)*Math.PI/180)}" stroke-width="0.9"/>`).join('')}
      <ellipse cx="0" cy="60" rx="65" ry="52"/>
      <ellipse cx="0" cy="60" rx="35" ry="28"/>
      <circle cx="0" cy="60" r="10"/>
      <path d="M0,-80 Q-12,-40 -8,20"/>
      <path d="M0,-80 Q12,-40 8,20"/>
      <ellipse cx="-28" cy="-40" rx="22" ry="35" transform="rotate(-25,-28,-40)"/>
      <ellipse cx="28" cy="-40" rx="22" ry="35" transform="rotate(25,28,-40)"/>
      <ellipse cx="0" cy="-20" rx="12" ry="18"/>
      <circle cx="-6" cy="-30" r="5"/><circle cx="6" cy="-30" r="5"/>
      <circle cx="-6" cy="-30" r="2.5" fill="#1a1a1a"/><circle cx="6" cy="-30" r="2.5" fill="#1a1a1a"/>
      <path d="M-4,-12 Q0,-8 4,-12"/>
      <path d="M-10,-80 L-14,-100 M10,-80 L14,-100"/>
      <circle cx="-14" cy="-102" r="4"/><circle cx="14" cy="-102" r="4"/>
      ${Array.from({length:6},(_,i)=>`<circle cx="${-80+i*30}" cy="${-120+i*10}" r="${3-i*0.3}"/>`).join('')}
    </g>
  `),

  pinup1: S(`
    <g transform="translate(150,195)">
      <ellipse cx="0" cy="-115" rx="32" ry="38"/>
      <path d="M-15,-80 Q-45,-50 -40,0 Q-38,50 -30,100 Q-10,130 0,135 Q10,130 30,100 Q38,50 40,0 Q45,-50 15,-80"/>
      <path d="M-40,0 Q-70,10 -65,50 Q-60,90 -30,100"/>
      <path d="M40,0 Q70,10 65,50 Q60,90 30,100"/>
      <path d="M-30,100 Q-50,145 -55,170 Q-45,175 -35,170 Q-15,140 0,135"/>
      <path d="M30,100 Q50,145 55,170 Q45,175 35,170 Q15,140 0,135"/>
      <path d="M-55,170 Q-50,185 -30,185 L30,185 Q50,185 55,170"/>
      <ellipse cx="0" cy="-135" rx="38" ry="18"/>
      <path d="M-38,-135 Q-42,-155 -30,-165 Q-15,-175 0,-170 Q15,-175 30,-165 Q42,-155 38,-135"/>
      <circle cx="-12" cy="-120" r="7"/><circle cx="12" cy="-120" r="7"/>
      <path d="M-8,-102 Q0,-95 8,-102"/>
      ${Array.from({length:6},(_,i)=>`<path d="M${-30+i*12},30 Q${-28+i*12},50 ${-30+i*12},70" stroke-width="0.8"/>`).join('')}
      <path d="M-35,-80 L-55,-110 Q-52,-125 -40,-120 Q-30,-115 -32,-100 L-15,-80"/>
      <path d="M35,-80 L55,-110 Q52,-125 40,-120 Q30,-115 32,-100 L15,-80"/>
    </g>
  `),

  pinup2: S(`
    <g transform="translate(150,200)">
      <ellipse cx="0" cy="-120" rx="30" ry="35"/>
      <path d="M-18,-88 Q-35,-60 -32,-20 Q-28,20 0,-10 Q28,20 32,-20 Q35,-60 18,-88"/>
      <path d="M-32,-20 Q-75,0 -90,80 L90,80 Q75,0 32,-20"/>
      <path d="M-90,80 Q-110,120 -105,170 L-50,170 Q-30,110 0,90 Q30,110 50,170 L105,170 Q110,120 90,80"/>
      <path d="M-105,170 L105,170"/>
      ${Array.from({length:9},(_,i)=>`<path d="M${-90+i*22},80 Q${-85+i*22},125 ${-105+i*24},170" stroke-width="0.8"/>`).join('')}
      ${Array.from({length:6},(_,i)=>`<ellipse cx="${-100+i*40}" cy="${90+i*8}" rx="12" ry="6" transform="rotate(${-10+i*5},-100+i*40,${90+i*8})"/>`).join('')}
      <path d="M-32,-20 L-60,-40 Q-80,-30 -70,-10 L-45,0"/>
      <path d="M32,-20 L60,-40 Q80,-30 70,-10 L45,0"/>
      <ellipse cx="0" cy="-140" rx="35" ry="15"/>
      <path d="M-35,-140 Q-32,-160 -20,-168 Q-8,-175 0,-172 Q8,-175 20,-168 Q32,-160 35,-140"/>
      <circle cx="-10" cy="-126" r="6"/><circle cx="10" cy="-126" r="6"/>
      <path d="M-6,-108 Q0,-102 6,-108"/>
    </g>
  `),

  historisch1: S(`
    <g transform="translate(150,200)">
      <ellipse cx="0" cy="-125" rx="28" ry="32"/>
      <path d="M-20,-95 Q-35,-70 -32,-40 Q-28,-10 0,-5 Q28,-10 32,-40 Q35,-70 20,-95"/>
      <path d="M-32,-40 Q-60,-35 -65,10 Q-68,45 -50,50 L50,50 Q68,45 65,10 Q60,-35 32,-40"/>
      <path d="M-50,50 Q-85,80 -110,170 L110,170 Q85,80 50,50"/>
      <path d="M-110,170 Q-120,200 -110,210 Q-60,200 0,195 Q60,200 110,210 Q120,200 110,170"/>
      ${Array.from({length:8},(_,i)=>`<path d="M${-110+i*32},170 Q${-100+i*30},185 ${-110+i*32},200" stroke-width="0.9"/>`).join('')}
      <path d="M-65,10 Q-80,0 -75,-25 Q-65,-45 -50,-40"/>
      <path d="M65,10 Q80,0 75,-25 Q65,-45 50,-40"/>
      <path d="M-75,-25 L-90,-60 Q-85,-80 -70,-75 L-50,-40"/>
      <path d="M75,-25 L90,-60 Q85,-80 70,-75 L50,-40"/>
      ${Array.from({length:5},(_,i)=>`<path d="M${-40+i*18},-60 Q${-38+i*18},-75 ${-40+i*18},-88" stroke-width="0.8"/>`).join('')}
      <ellipse cx="0" cy="-148" rx="35" ry="18"/>
      <path d="M-35,-148 Q-30,-170 0,-175 Q30,-170 35,-148"/>
      <circle cx="-10" cy="-132" r="5.5"/><circle cx="10" cy="-132" r="5.5"/>
      <path d="M-5,-115 Q0,-110 5,-115"/>
      ${Array.from({length:4},(_,i)=>`<path d="M${-30+i*18},-15 Q${-28+i*18},2 ${-30+i*18},20" stroke-width="0.8"/>`).join('')}
    </g>
  `),

  historisch2: S(`
    <g transform="translate(150,200)">
      <ellipse cx="0" cy="-125" rx="27" ry="30"/>
      <path d="M-19,-97 Q-34,-72 -30,-42 Q-25,-12 0,-8 Q25,-12 30,-42 Q34,-72 19,-97"/>
      <path d="M-30,-42 Q-52,-38 -55,5 L55,5 Q52,-38 30,-42"/>
      <path d="M-55,5 L-45,170 L45,170 L55,5"/>
      <rect x="-55" y="5" width="110" height="30" rx="4"/>
      ${Array.from({length:5},(_,i)=>`<line x1="${-40+i*20}" y1="5" x2="${-40+i*20}" y2="35" stroke-width="0.9"/>`).join('')}
      <path d="M-45,170 L-45,200 L45,200 L45,170"/>
      ${Array.from({length:7},(_,i)=>`<path d="M${-45+i*15},170 L${-42+i*15},200" stroke-width="0.9"/>`).join('')}
      ${Array.from({length:4},(_,i)=>`<path d="M${-40+i*22},40 Q${-38+i*22},80 ${-40+i*22},120" stroke-width="0.8"/>`).join('')}
      <path d="M-30,-42 L-65,-55 Q-80,-50 -78,-30 L-55,5"/>
      <path d="M30,-42 L65,-55 Q80,-50 78,-30 L55,5"/>
      ${Array.from({length:4},(_,i)=>`<path d="M${-70+i*8},-50 Q${-68+i*8},-35 ${-70+i*8},-22" stroke-width="0.8"/>`).join('')}
      <ellipse cx="0" cy="-148" rx="33" ry="18"/>
      <path d="M-33,-148 Q-30,-170 0,-178 Q30,-170 33,-148"/>
      <circle cx="-10" cy="-132" r="5"/><circle cx="10" cy="-132" r="5"/>
      <path d="M-5,-115 Q0,-109 5,-115"/>
      <ellipse cx="0" cy="-170" rx="22" ry="12"/>
      <path d="M-22,-170 Q-20,-182 0,-186 Q20,-182 22,-170"/>
      ${Array.from({length:5},(_,i)=>`<circle cx="${-50+i*25}" cy="0" r="4"/>`).join('')}
    </g>
  `)
};

/* ── Coloring pages dataset ── */
const PAGES = [
  {
    id:1, category:'mandala', isNew:true, difficulty:2,
    title:  {nl:'Lotus Mandala',         en:'Lotus Mandala'},
    desc:   {nl:'Een klassieke mandala met lotusblaadjes in acht richtingen. Ideaal om te beginnen.',
             en:'A classic mandala featuring lotus petals in eight directions. Great for beginners.'},
    thumb:  THUMBS.mandala1
  },
  {
    id:2, category:'mandala', isNew:false, difficulty:3,
    title:  {nl:'Ster Mandala',           en:'Star Mandala'},
    desc:   {nl:'Zeshoekige symmetrie met gestileerde bloemvormen en sierlijke lijnen.',
             en:'Six-fold symmetry with stylised floral shapes and elegant linework.'},
    thumb:  THUMBS.mandala2
  },
  {
    id:3, category:'botanisch', isNew:true, difficulty:2,
    title:  {nl:'Roos in Volle Bloei',    en:'Rose in Full Bloom'},
    desc:   {nl:'Een prachtige roos met gedetailleerde bloembladen en sierlijke bladeren.',
             en:'A beautiful rose with detailed petals and elegant leaves.'},
    thumb:  THUMBS.botanisch1
  },
  {
    id:4, category:'botanisch', isNew:false, difficulty:1,
    title:  {nl:'Tropische Bladeren',     en:'Tropical Leaves'},
    desc:   {nl:'Weelderige tropische bladeren met fijne nerven — rustgevend om in te kleuren.',
             en:'Lush tropical leaves with delicate veins — deeply calming to colour.'},
    thumb:  THUMBS.botanisch2
  },
  {
    id:5, category:'fantasy', isNew:false, difficulty:3,
    title:  {nl:'Draak der Winden',       en:'Dragon of the Winds'},
    desc:   {nl:'Een majestueuze draak met schubben en uitgespreide vleugels.',
             en:'A majestic dragon with intricate scales and outstretched wings.'},
    thumb:  THUMBS.fantasy1
  },
  {
    id:6, category:'fantasy', isNew:true, difficulty:2,
    title:  {nl:'Magische Kristallen',    en:'Magic Crystals'},
    desc:   {nl:'Sierlijke kristalformaties met geometrische facetten en magie-vonken.',
             en:'Elegant crystal formations with geometric facets and magic sparks.'},
    thumb:  THUMBS.fantasy2
  },
  {
    id:7, category:'dieren', isNew:false, difficulty:2,
    title:  {nl:'Wijze Uil',              en:'Wise Owl'},
    desc:   {nl:'Een decoratieve uil met geometrische veerpatronen in Art-Nouveau stijl.',
             en:'A decorative owl with geometric feather patterns in Art Nouveau style.'},
    thumb:  THUMBS.dieren1
  },
  {
    id:8, category:'dieren', isNew:true, difficulty:2,
    title:  {nl:'Vlinder Tuin',           en:'Butterfly Garden'},
    desc:   {nl:'Een siervlinder met gedetailleerde vleugels vol patronen en bloemen.',
             en:'An ornate butterfly with intricately patterned wings full of florals.'},
    thumb:  THUMBS.dieren2
  },
  {
    id:9, category:'seizoen', isNew:false, difficulty:1,
    title:  {nl:'Herfstbladeren',         en:'Autumn Leaves'},
    desc:   {nl:'Esdoorn- en eikenbladeren in een warme herfstcompositie.',
             en:'Maple and oak leaves arranged in a warm autumn composition.'},
    thumb:  THUMBS.seizoen1
  },
  {
    id:10, category:'seizoen', isNew:true, difficulty:2,
    title:  {nl:'Winters Sneeuwvlok',     en:'Winter Snowflake'},
    desc:   {nl:'Een perfecte zeshoekige sneeuwvlok met zes lagen fijne details.',
             en:'A perfect six-fold snowflake with six layers of delicate detail.'},
    thumb:  THUMBS.seizoen2
  },
  {
    id:11, category:'geometrisch', isNew:false, difficulty:1,
    title:  {nl:'Hexagonen Patroon',      en:'Hexagon Pattern'},
    desc:   {nl:'Een meditatiefpatroon van zeshoeken geïnspireerd op de Bloem des Levens.',
             en:'A meditative hexagon pattern inspired by the Flower of Life.'},
    thumb:  THUMBS.geometrisch1
  },
  {
    id:12, category:'geometrisch', isNew:false, difficulty:2,
    title:  {nl:'Diamantrooster',         en:'Diamond Grid'},
    desc:   {nl:'Herhalende vierkanten en diagonalen creëren een hypnotisch optisch effect.',
             en:'Repeating squares and diagonals create a hypnotic optical effect.'},
    thumb:  THUMBS.geometrisch2
  },
  {
    id:13, category:'sprookjes', isNew:true, difficulty:2,
    title:  {nl:'Sprookjeskasteel',       en:'Fairy-tale Castle'},
    desc:   {nl:'Een droomkasteel met drie torens, kantelen en sterren aan de hemel.',
             en:'A dream castle with three towers, battlements, and stars in the sky.'},
    thumb:  THUMBS.sprookjes1
  },
  {
    id:14, category:'sprookjes', isNew:false, difficulty:3,
    title:  {nl:'Fee met Bloem',          en:'Fairy with Flower'},
    desc:   {nl:'Een elegante fee omgeven door een grote bloem met sierlijke bloembladeren.',
             en:'An elegant fairy surrounded by a large flower with ornate petals.'},
    thumb:  THUMBS.sprookjes2
  },
  {
    id:15, category:'pinup', isNew:false, difficulty:2,
    title:  {nl:'Pin-up Dame 1940s',      en:'Pin-up Lady 1940s'},
    desc:   {nl:'Elegante jaren-40 dame met victory rolls kapsel en sierlijk silhouet.',
             en:'Elegant 1940s lady with victory rolls hairstyle and graceful silhouette.'},
    thumb:  THUMBS.pinup1
  },
  {
    id:16, category:'pinup', isNew:true, difficulty:2,
    title:  {nl:'Retro Glamour 1950s',    en:'Retro Glamour 1950s'},
    desc:   {nl:'Vrolijke jaren-50 dame in uitstaande rok met polkadotpatroon.',
             en:'Cheerful 1950s lady in a full circle skirt with polka dot pattern.'},
    thumb:  THUMBS.pinup2
  },
  {
    id:17, category:'historisch', isNew:false, difficulty:3,
    title:  {nl:'Victoriaanse Japon',     en:'Victorian Gown'},
    desc:   {nl:'Een uitgebreide Victoriaanse jurk met korset, kant en sierlijke plooien.',
             en:'An elaborate Victorian gown with corset, lace, and elegant pleats.'},
    thumb:  THUMBS.historisch1
  },
  {
    id:18, category:'historisch', isNew:true, difficulty:2,
    title:  {nl:'Europees Volkskostuum',  en:'European Folk Costume'},
    desc:   {nl:'Traditioneel Europees volkskostuum met versierd schort en kapje.',
             en:'Traditional European folk costume with embroidered apron and cap.'},
    thumb:  THUMBS.historisch2
  }
];

const CATEGORIES = [
  { key:'mandala',     icon:'🔮', nl:'Mandala\'s',          en:'Mandalas'          },
  { key:'botanisch',   icon:'🌸', nl:'Natuur & Botanisch',   en:'Nature & Botanical'},
  { key:'fantasy',     icon:'🐉', nl:'Fantasy & Abstract',   en:'Fantasy & Abstract'},
  { key:'dieren',      icon:'🦋', nl:'Dieren & Wildlife',    en:'Animals & Wildlife'},
  { key:'seizoen',     icon:'🍁', nl:'Seizoenen',            en:'Seasons'           },
  { key:'geometrisch', icon:'⬡',  nl:'Geometrisch',          en:'Geometric'         },
  { key:'sprookjes',   icon:'🏰', nl:'Sprookjes & Magie',    en:'Fairy Tales'       },
  { key:'pinup',       icon:'💄', nl:'Pin-up (1940–1960)',   en:'Pin-up (1940–1960)'},
  { key:'historisch',  icon:'👗', nl:'Historische Kleding',  en:'Historical Fashion'}
];
