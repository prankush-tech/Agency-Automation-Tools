'use client'
import React, { useEffect } from 'react';
import { Chart } from 'chart.js';

type Props = {};

const ChartDashboard = (props: Props) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const canvas = document.getElementById('myChart') as HTMLCanvasElement;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            datasets: [
              {
                data: [66, 144, 146, 116, 107, 131, 43],
                label: 'Applied',
                borderColor: '#e2f24b',
                backgroundColor: '#e2f24b',
                borderWidth: 2,
                
            },
            {
                data: [40, 100, 44, 70, 63, 30, 10],
                label: 'Accepted',
                borderColor: '#e2f24b',
                backgroundColor: '#e2f24b',
                borderWidth: 2,
                
            },
            {
                data: [20, 24, 50, 34, 33, 23, 12],
                label: 'Pending',
                borderColor: '#e2f24b',
                backgroundColor: '#e2f24b',
                borderWidth: 2,
                
            },
            {
                data: [6, 20, 52, 12, 11, 78, 21],
                label: 'Rejected',
                borderColor: '#e2f24b',
                backgroundColor: '#e2f24b',
                borderWidth: 2,

              },
            ],
          },
        });
      }
    }
  }, []);

  return (
    <React.Fragment>
      <div className="w-fit lg:w-[100vw] flex">
        <div className="border-2  rounded-xl  w-full h-fit my-auto  shadow-md">
          <canvas id="myChart"></canvas>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChartDashboard;
