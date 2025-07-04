
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DollarSign, PieChart, TrendingUp, Edit3 } from 'lucide-react';

const BudgetPlanner = () => {
  const [budget] = useState([
    { category: 'Venue', budgeted: 150000, actual: 145000, color: '#917f4f' },
    { category: 'Photography', budgeted: 80000, actual: 75000, color: '#b8a76a' },
    { category: 'Dress & Attire', budgeted: 100000, actual: 120000, color: '#d4c794' },
    { category: 'Catering', budgeted: 200000, actual: 180000, color: '#e6deb8' },
    { category: 'Decorations', budgeted: 75000, actual: 0, color: '#f0ecd4' }
  ]);

  const totalBudgeted = budget.reduce((acc, item) => acc + item.budgeted, 0);
  const totalActual = budget.reduce((acc, item) => acc + item.actual, 0);
  const remaining = totalBudgeted - totalActual;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-LK', {
      style: 'currency',
      currency: 'LKR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-1">Budget Tracker</h2>
          <p className="text-sm text-gray-600">Keep your wedding on budget</p>
        </div>
        <Button variant="outline" size="sm">
          <Edit3 className="h-4 w-4 mr-2" />
          Edit
        </Button>
      </div>

      {/* Budget Summary */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="h-4 w-4 text-[#917f4f]" />
            <span className="text-sm font-medium text-gray-600">Total Budget</span>
          </div>
          <div className="text-xl font-bold text-gray-900">
            {formatCurrency(totalBudgeted)}
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium text-gray-600">Remaining</span>
          </div>
          <div className={`text-xl font-bold ${remaining >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {formatCurrency(remaining)}
          </div>
        </div>
      </div>

      {/* Budget Categories */}
      <div className="space-y-3 mb-6">
        {budget.map((item, index) => {
          const percentage = item.budgeted > 0 ? (item.actual / item.budgeted) * 100 : 0;
          const isOverBudget = item.actual > item.budgeted;

          return (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">{item.category}</span>
                <span className="text-sm text-gray-600">
                  {formatCurrency(item.actual)} / {formatCurrency(item.budgeted)}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    isOverBudget ? 'bg-red-500' : 'bg-gradient-to-r from-[#917f4f] to-[#b8a76a]'
                  }`}
                  style={{ width: `${Math.min(percentage, 100)}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="flex gap-3">
        <Button variant="outline" className="flex-1" size="sm">
          <PieChart className="h-4 w-4 mr-2" />
          View Chart
        </Button>
        <Button variant="outline" className="flex-1" size="sm">
          Export
        </Button>
      </div>
    </div>
  );
};

export default BudgetPlanner;
