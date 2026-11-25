import type { CSSProperties } from "react";
import { Diagram } from "@/components/ui/Diagram";

export type DiagramInput = { label: string; kind: "sat" | "radio" };

const COLORS = { sat: "#22d3ee", radio: "#8b5cf6" } as const;

interface NetworkDiagramProps {
  inputs: DiagramInput[];
  routerLabel?: string;
  outputLabel: string;
  ariaLabel: string;
  className?: string;
}

/** Retraso escalonado de un segmento (globals.css lo lee desde --d). */
function dStyle(delay: string): CSSProperties {
  return { ["--d" as string]: delay } as CSSProperties;
}

/** Varias entradas (satélite o radioenlace) convergen en un router y salen hacia el destino. */
export function NetworkDiagram({
  inputs,
  routerLabel = "Router",
  outputLabel,
  ariaLabel,
  className,
}: NetworkDiagramProps) {
  const rowH = 40;
  const h = Math.max(190, inputs.length * rowH + 50);
  const cy = h / 2;
  const top = (h - inputs.length * rowH) / 2;

  return (
    <Diagram className={className}>
      <svg
        viewBox={`0 0 480 ${h}`}
        className="diagram w-full"
        role="img"
        aria-label={ariaLabel}
      >
        {inputs.map((input, i) => {
          const y = top + rowH * i + rowH / 2;
          const color = COLORS[input.kind];
          const delay = `${0.1 + i * 0.1}s`;
          const d = `M160 ${y} C 205 ${y}, 215 ${cy}, 246 ${cy}`;
          return (
            <g key={`${input.label}-${i}`}>
              <circle
                className="seg node-pulse"
                cx="28"
                cy={y}
                r="6"
                fill={color}
                style={dStyle(delay)}
              />
              <text
                className="seg"
                x="44"
                y={y + 4}
                fontSize="11"
                fill="#8fa3bd"
                style={dStyle(delay)}
              >
                {input.label}
              </text>
              <path
                className="seg"
                d={d}
                fill="none"
                stroke={color}
                strokeOpacity="0.35"
                strokeWidth="1.5"
                style={dStyle(delay)}
              />
              <path
                className="flow"
                d={d}
                fill="none"
                stroke={color}
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </g>
          );
        })}

        {/* Router */}
        <g className="seg" style={dStyle("0.7s")}>
          <rect
            x="246"
            y={cy - 18}
            width="48"
            height="36"
            rx="8"
            fill="#0a1827"
            stroke="#22d3ee"
            strokeWidth="1.5"
          />
          <circle cx="260" cy={cy} r="2.5" fill="#22d3ee" />
          <circle cx="270" cy={cy} r="2.5" fill="#22d3ee" />
          <circle cx="280" cy={cy} r="2.5" fill="#22d3ee" />
          <text
            x="270"
            y={cy + 34}
            fontSize="10"
            fill="#8fa3bd"
            textAnchor="middle"
          >
            {routerLabel}
          </text>
        </g>

        {/* Salida */}
        <path
          className="seg"
          d={`M294 ${cy} L360 ${cy}`}
          stroke="#22d3ee"
          strokeOpacity="0.35"
          strokeWidth="1.5"
          style={dStyle("0.8s")}
        />
        <path
          className="flow"
          d={`M294 ${cy} L360 ${cy}`}
          stroke="#22d3ee"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <g className="seg" style={dStyle("0.9s")}>
          <rect
            x="360"
            y={cy - 22}
            width="100"
            height="44"
            rx="10"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="1.5"
          />
          <text
            x="410"
            y={cy + 4}
            fontSize="12"
            fill="#e8eef7"
            textAnchor="middle"
          >
            {outputLabel}
          </text>
        </g>
      </svg>
    </Diagram>
  );
}
