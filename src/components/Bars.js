export const Bars = ({data , xScale, yScale, tooltipFormat}) =>
  			data.map((d) => (
          <rect
            className="fill-[#0F8C79] hover:fill-[#137B80] hover:cursor-pointer duration-300"
            key={Math.random()}
            x={0}
            y={yScale(d.Device)}
            width={xScale(d.Downloads)}
            height={yScale.bandwidth()}
          >
            <title>{tooltipFormat(d.Downloads)}</title>
          </rect>
        ));
