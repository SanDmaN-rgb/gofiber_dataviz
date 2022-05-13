export const AxisX = ({xScale, innerHeight, tickFormat}) =>  
				xScale.ticks().map((tickValue) => (
          <g key={tickValue} transform={`translate(${xScale(tickValue)},0)`}>
            <line y2={innerHeight} stroke="black" className=" stroke-[#C0C0BB]"/>
            <text
              className=" fill-[#635F5D]"
              style={{ textAnchor: 'middle' }}
              y={innerHeight}
              dy=".71em"
            >
              {tickFormat(tickValue)}
            </text>
          </g>
        ));