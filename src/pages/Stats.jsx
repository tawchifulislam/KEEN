import React, { useEffect, useState } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Stats = () => {
  const [data, setData] = useState([
    { name: 'Call', value: 0 },
    { name: 'Text', value: 0 },
    { name: 'Video', value: 0 },
  ]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('timeline') || '[]');
    const counts = {
      Call: saved.filter(e => e.type === 'Call').length,
      Text: saved.filter(e => e.type === 'Text').length,
      Video: saved.filter(e => e.type === 'Video').length,
    };
    setData([
      { name: 'Call', value: counts.Call },
      { name: 'Text', value: counts.Text },
      { name: 'Video', value: counts.Video },
    ]);
  }, []);

  const COLORS = ['#244D3F', '#7E35E1', '#37A163']; // Call, Text, Video

  return (
    <div className="bg-[#f8fafc] max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Friendship Analytics
      </h1>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-sm font-semibold text-gray-700 mb-6">
          By Interaction Type
        </h2>
        <div className="w-full h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius="60%"
                outerRadius="75%"
                paddingAngle={3}
                dataKey="value"
                cornerRadius={6}
              >
                {data.map((entry, ind) => (
                  <Cell key={`cell-${ind}`} fill={COLORS[ind]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Stats;
