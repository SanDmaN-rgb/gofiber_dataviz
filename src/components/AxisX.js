export const AxisX = ({xScale, innerHeight, tickFormat}) =>  
				xScale.ticks().map((tickValue) => (
          <g className="tick"key={tickValue} transform={`translate(${xScale(tickValue)},0)`}>
            <line y2={innerHeight} stroke="black"/>
            <text
              style={{ textAnchor: 'middle' }}
              y={innerHeight}
              dy=".71em"
            >
              {tickFormat(tickValue)}
            </text>
          </g>
        ));