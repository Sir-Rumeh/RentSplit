import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';

const Reminders = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        Reminders
      </div>
    </DashboardLayout>
  );
};

export default Reminders;