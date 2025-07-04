
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Plus, Calendar, CheckCircle } from 'lucide-react';

const WeddingChecklist = () => {
  const [checklist, setChecklist] = useState([
    {
      id: 1,
      category: '12+ Months Before',
      tasks: [
        { id: 1, text: 'Set wedding date', completed: true },
        { id: 2, text: 'Book venue', completed: true },
        { id: 3, text: 'Create guest list', completed: false },
        { id: 4, text: 'Set budget', completed: false }
      ]
    },
    {
      id: 2,
      category: '6-8 Months Before',
      tasks: [
        { id: 5, text: 'Book photographer', completed: false },
        { id: 6, text: 'Choose wedding dress', completed: false },
        { id: 7, text: 'Send save the dates', completed: false }
      ]
    },
    {
      id: 3,
      category: '3-4 Months Before',
      tasks: [
        { id: 8, text: 'Order wedding cake', completed: false },
        { id: 9, text: 'Book honeymoon', completed: false }
      ]
    }
  ]);

  const toggleTask = (categoryId: number, taskId: number) => {
    setChecklist(prev => 
      prev.map(category => 
        category.id === categoryId 
          ? {
              ...category,
              tasks: category.tasks.map(task =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
              )
            }
          : category
      )
    );
  };

  const totalTasks = checklist.reduce((acc, category) => acc + category.tasks.length, 0);
  const completedTasks = checklist.reduce((acc, category) => 
    acc + category.tasks.filter(task => task.completed).length, 0
  );
  const progress = Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-1">Wedding Checklist</h2>
          <p className="text-sm text-gray-600">{completedTasks} of {totalTasks} completed</p>
        </div>
        <Button variant="outline" size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Task
        </Button>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-[#917f4f] to-[#b8a76a] h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Checklist Categories */}
      <div className="space-y-6 max-h-96 overflow-y-auto">
        {checklist.map((category) => (
          <div key={category.id}>
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="h-4 w-4 text-[#917f4f]" />
              <h3 className="font-medium text-gray-900">{category.category}</h3>
            </div>
            <div className="space-y-2 ml-6">
              {category.tasks.map((task) => (
                <div key={task.id} className="flex items-center gap-3">
                  <Checkbox
                    checked={task.completed}
                    onCheckedChange={() => toggleTask(category.id, task.id)}
                    className="data-[state=checked]:bg-[#917f4f] data-[state=checked]:border-[#917f4f]"
                  />
                  <span className={`text-sm ${task.completed ? 'line-through text-gray-500' : 'text-gray-700'}`}>
                    {task.text}
                  </span>
                  {task.completed && (
                    <CheckCircle className="h-4 w-4 text-[#917f4f] ml-auto" />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingChecklist;
