const traces = [
  "M480 36H328L290 74H206L164 116H92",
  "M480 72H344L306 110V170L268 208H156",
  "M480 108H388L350 146V226L314 262H244",
];

export function CircuitBackground() {
  return (
    <div className="circuit-background" aria-hidden="true">
      {["upper", "lower"].map((position) => (
        <svg
          key={position}
          className={`circuit-background-art circuit-background-${position}`}
          viewBox="0 0 480 300"
          fill="none"
          focusable="false"
        >
          <g className="circuit-background-traces">
            {traces.map((d) => <path key={d} d={d} />)}
          </g>
          <g className="circuit-background-nodes">
            <circle cx="88" cy="116" r="4" />
            <circle cx="152" cy="208" r="4" />
            <circle cx="240" cy="262" r="4" />
            <circle cx="306" cy="146" r="3" />
          </g>
          <path className="circuit-background-signal" d={traces[1]} pathLength="1" />
        </svg>
      ))}
    </div>
  );
}
