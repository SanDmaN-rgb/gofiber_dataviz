export const AxisY = ({yScale}) => 
				yScale.domain().map((tickValue) => (
          <g className="tick">
          <text
            key={tickValue+Math.random()}
            style={{ textAnchor: 'end' }}
            x={-4}
            dy=".32em"
            y={
              yScale(tickValue) + yScale.bandwidth() / 2
            }
          >
            {tickValue}
          </text>
          </g>
        ));