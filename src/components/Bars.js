export const Bars = ({data , xScale, yScale, tooltipFormat}) =>
  			data.map((d) => (
          <rect
            className="bar"
            key={Math.random()}
            x={0}
            y={yScale(d.Device)}
            width={xScale(d.Downloads)}
            height={yScale.bandwidth()}
          >
            <title>{tooltipFormat(d.Downloads)}</title>
          </rect>
        ));
