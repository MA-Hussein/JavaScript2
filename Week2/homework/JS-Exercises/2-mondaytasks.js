"use strict";

const mondayTasks = [
  {
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];

const hourlyRate = 25;

const taskAmount = mondayTasks.map(task => task.duration / 60 * hourlyRate);

const totalAmount = taskAmount.reduce((cumulativeAmount, amount)=>{
  return cumulativeAmount + amount;
});
	
console.log(`€${totalAmount}`);




