
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DollarSign, PieChart, TrendingUp, Edit3, Plus, Check, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface BudgetItem {
  id: number;
  category: string;
  budgeted: number;
  actual: number;
  color: string;
}

const BudgetTab = () => {
  const [budget, setBudget] = useState<BudgetItem[]>([
    { id: 1, category: 'Venue', budgeted: 150000, actual: 145000, color: '#917f4f' },
    { id: 2, category: 'Photography', budgeted: 80000, actual: 75000, color: '#b8a76a' },
    { id: 3, category: 'Dress & Attire', budgeted: 100000, actual: 120000, color: '#d4c794' },
    { id: 4, category: 'Catering', budgeted: 200000, actual: 180000, color: '#e6deb8' },
    { id: 5, category: 'Decorations', budgeted: 75000, actual: 0, color: '#f0ecd4' },
    { id: 6, category: 'Music & Entertainment', budgeted: 60000, actual: 55000, color: '#c9b882' }
  ]);

  const [newCategory, setNewCategory] = useState('');
  const [newBudget, setNewBudget] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editValue, setEditValue] = useState('');

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

  const addBudgetItem = () => {
    if (newCategory && newBudget) {
      const item: BudgetItem = {
        id: Date.now(),
        category: newCategory,
        budgeted: parseInt(newBudget),
        actual: 0,
        color: '#917f4f'
      };
      setBudget(prev => [...prev, item]);
      setNewCategory('');
      setNewBudget('');
    }
  };

  const startEdit = (id: number, currentValue: number) => {
    setEditingId(id);
    setEditValue(currentValue.toString());
  };

  const saveEdit = () => {
    if (editingId && editValue) {
      setBudget(prev => 
        prev.map(item => 
          item.id === editingId ? { ...item, actual: parseInt(editValue) || 0 } : item
        )
      );
      setEditingId(null);
      setEditValue('');
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditValue('');
  };

  const deleteBudgetItem = (id: number) => {
    setBudget(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Budget Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="h-4 w-4 text-[#917f4f]" />
            <span className="text-sm font-medium text-gray-600">Total Budget</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {formatCurrency(totalBudgeted)}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-600">Total Spent</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {formatCurrency(totalActual)}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <div className="flex items-center gap-2 mb-2">
            <PieChart className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium text-gray-600">Remaining</span>
          </div>
          <div className={`text-2xl font-bold ${remaining >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {formatCurrency(remaining)}
          </div>
        </div>
      </div>

      {/* Overall Progress Bar */}
      <div className="bg-white rounded-lg shadow-sm border p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Overall Budget Progress</span>
          <span className="text-sm text-gray-600">{Math.round((totalActual / totalBudgeted) * 100)}% spent</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className={`h-3 rounded-full transition-all duration-300 ${
              totalActual > totalBudgeted ? 'bg-red-500' : 'bg-gradient-to-r from-[#917f4f] to-[#b8a76a]'
            }`}
            style={{ width: `${Math.min((totalActual / totalBudgeted) * 100, 100)}%` }}
          />
        </div>
      </div>

      {/* Budget Table */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Budget Breakdown</h3>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Category
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Budget Category</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="category">Category Name</Label>
                  <Input
                    id="category"
                    placeholder="e.g., Flowers"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="budget">Budget Amount (LKR)</Label>
                  <Input
                    id="budget"
                    type="number"
                    placeholder="50000"
                    value={newBudget}
                    onChange={(e) => setNewBudget(e.target.value)}
                  />
                </div>
                <Button onClick={addBudgetItem} className="w-full">
                  Add Category
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Category</TableHead>
              <TableHead>Budget</TableHead>
              <TableHead>Spent</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {budget.map((item) => {
              const percentage = item.budgeted > 0 ? (item.actual / item.budgeted) * 100 : 0;
              const isOverBudget = item.actual > item.budgeted;

              return (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.category}</TableCell>
                  <TableCell>{formatCurrency(item.budgeted)}</TableCell>
                  <TableCell>
                    {editingId === item.id ? (
                      <div className="flex items-center gap-2">
                        <Input
                          type="number"
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          className="w-24 h-8"
                        />
                        <Button size="sm" variant="ghost" onClick={saveEdit}>
                          <Check className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" onClick={cancelEdit}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <button
                        onClick={() => startEdit(item.id, item.actual)}
                        className="text-left hover:bg-gray-50 p-1 rounded"
                      >
                        {formatCurrency(item.actual)}
                      </button>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-300 ${
                            isOverBudget ? 'bg-red-500' : 'bg-gradient-to-r from-[#917f4f] to-[#b8a76a]'
                          }`}
                          style={{ width: `${Math.min(percentage, 100)}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-500 w-10">
                        {percentage.toFixed(0)}%
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    {isOverBudget ? (
                      <span className="text-xs text-red-600 font-medium">
                        Over by {formatCurrency(item.actual - item.budgeted)}
                      </span>
                    ) : item.actual === 0 ? (
                      <span className="text-xs text-gray-500">Not started</span>
                    ) : (
                      <span className="text-xs text-green-600">On track</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => startEdit(item.id, item.actual)}
                        className="h-8 w-8 p-0"
                      >
                        <Edit3 className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => deleteBudgetItem(item.id)}
                        className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BudgetTab;
