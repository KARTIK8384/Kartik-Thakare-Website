export function TimingWaveform() {
  return (
    <div className="timing-waveform" role="img" aria-label="Illustrative RTL timing diagram with clock, reset, valid, and data signals">
      <div className="timing-waveform-heading" aria-hidden="true">
        <span><i /> RTL / WAVEFORMS</span>
        <span>TIMING SKETCH</span>
      </div>
      <svg viewBox="0 0 600 190" fill="none" aria-hidden="true" focusable="false">
        <g className="waveform-grid">
          {[100, 180, 260, 340, 420, 500, 580].map((x) => (
            <path key={x} d={`M${x} 29V178`} />
          ))}
          {[64, 100, 136, 172].map((y) => <path key={y} d={`M14 ${y}H586`} />)}
        </g>
        <g className="waveform-labels">
          <text x="16" y="20">SIGNAL</text>
          <text x="100" y="20">0 ns</text>
          <text x="180" y="20">20</text>
          <text x="260" y="20">40</text>
          <text x="340" y="20">60</text>
          <text x="420" y="20">80</text>
          <text x="500" y="20">100</text>
          <text x="16" y="50">clk</text>
          <text x="16" y="86">rst_n</text>
          <text x="16" y="122">valid</text>
          <text x="16" y="158">data[7:0]</text>
        </g>
        <g className="waveform-traces">
          <path d="M100 56H120V38H160V56H200V38H240V56H280V38H320V56H360V38H400V56H440V38H480V56H520V38H560V56H586" />
          <path className="waveform-control" d="M100 92H180V74H586" />
          <path className="waveform-control" d="M100 128H200V110H360V128H440V110H586" />
          <path d="M100 146H194L206 164H354L366 146H434L446 164H586M100 164H194L206 146H354L366 164H434L446 146H586" />
        </g>
        <g className="waveform-values">
          <text x="139" y="159">00</text>
          <text x="272" y="159">A5</text>
          <text x="392" y="159">3C</text>
          <text x="506" y="159">F0</text>
        </g>
        <g className="waveform-cursor">
          <path d="M0 28V179" />
          <path d="M-4 25H4L0 30Z" fill="currentColor" stroke="none" />
        </g>
      </svg>
    </div>
  );
}
