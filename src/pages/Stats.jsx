import { Legend, Pie, PieChart, Tooltip, Cell } from 'recharts';
import { useContext } from 'react';
import { DialContext } from '../context/DialContext';

const Stats = () => {
  const { interactions } = useContext(DialContext);

  const callCount = interactions.filter(
    item => item.interactionMethod === 'Call',
  ).length;
  const textCount = interactions.filter(
    item => item.interactionMethod === 'Text',
  ).length;
  const videoCount = interactions.filter(
    item => item.interactionMethod === 'Video',
  ).length;

  const data = [
    { name: 'Call', value: callCount },
    { name: 'Text', value: textCount },
    { name: 'Video', value: videoCount },
  ];

  return (
    <div className="my-10 max-w-6xl container mx-auto px-4 md:px-0">
      <h2 className="text-4xl font-bold mb-8 text-[#1e293b]">
        Friendship Analytics
      </h2>

      <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 min-h-125">
        <h3 className="text-sm font-semibold text-gray-500 mb-10">
          By Interaction Type
        </h3>

        <PieChart
          style={{
            width: '100%',
            maxWidth: '500px',
            maxHeight: '80vh',
            margin: 'auto',
            aspectRatio: 1,
          }}
          responsive
        >
          <Pie
            data={data}
            innerRadius="65%"
            outerRadius="90%"
            cornerRadius={10}
            paddingAngle={8}
            dataKey="value"
            isAnimationActive={true}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <Legend iconType="circle" />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default Stats;
