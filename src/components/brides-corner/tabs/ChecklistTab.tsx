
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar, CheckCircle, Plus, Bell } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';

interface Task {
  id: number;
  text: string;
  completed: boolean;
  category: string;
  reminderEmail?: string;
  reminderDate?: string;
}

const ChecklistTab = () => {
  const [checklist, setChecklist] = useState<Task[]>([
    {
      id: 1,
      category: '12+ Months Before',
      text: 'Set wedding date',
      completed: true
    },
    {
      id: 2,
      category: '12+ Months Before',
      text: 'Book venue',
      completed: true
    },
    {
      id: 3,
      category: '12+ Months Before',
      text: 'Create guest list',
      completed: false
    },
    {
      id: 4,
      category: '12+ Months Before',
      text: 'Set budget',
      completed: false
    },
    {
      id: 5,
      category: '6-8 Months Before',
      text: 'Book photographer',
      completed: false
    },
    {
      id: 6,
      category: '6-8 Months Before',
      text: 'Choose wedding dress',
      completed: false
    },
    {
      id: 7,
      category: '6-8 Months Before',
      text: 'Send save the dates',
      completed: false
    },
    {
      id: 8,
      category: '3-4 Months Before',
      text: 'Order wedding cake',
      completed: false
    },
    {
      id: 9,
      category: '3-4 Months Before',
      text: 'Book honeymoon',
      completed: false
    }
  ]);

  const [newTask, setNewTask] = useState('');
  const [newTaskCategory, setNewTaskCategory] = useState('12+ Months Before');
  const [reminderEmail, setReminderEmail] = useState('');
  const [reminderDate, setReminderDate] = useState('');
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);

  const toggleTask = (taskId: number) => {
    setChecklist(prev => 
      prev.map(task => 
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addTask = () => {
    if (newTask.trim()) {
      const task: Task = {
        id: Date.now(),
        text: newTask,
        completed: false,
        category: newTaskCategory
      };
      setChecklist(prev => [...prev, task]);
      setNewTask('');
    }
  };

  const setReminder = (taskId: number) => {
    if (reminderEmail && reminderDate) {
      setChecklist(prev => 
        prev.map(task => 
          task.id === taskId 
            ? { ...task, reminderEmail, reminderDate }
            : task
        )
      );
      // Here you would typically send the reminder data to your backend
      console.log(`Email reminder set for task ${taskId}: ${reminderEmail} on ${reminderDate}`);
      setReminderEmail('');
      setReminderDate('');
      setSelectedTaskId(null);
    }
  };

  const totalTasks = checklist.length;
  const completedTasks = checklist.filter(task => task.completed).length;
  const progress = Math.round((completedTasks / totalTasks) * 100);

  const categories = ['12+ Months Before', '6-8 Months Before', '3-4 Months Before', '1 Month Before'];
  const groupedTasks = categories.map(category => ({
    category,
    tasks: checklist.filter(task => task.category === category)
  }));

  return (
    <div className="space-y-6">
      {/* Progress Overview */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-1">Wedding Checklist</h2>
            <p className="text-sm text-gray-600">{completedTasks} of {totalTasks} completed</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-[#917f4f]">{progress}%</div>
            <div className="text-sm text-gray-500">Complete</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
          <div
            className="bg-gradient-to-r from-[#917f4f] to-[#b8a76a] h-3 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Add New Task */}
        <div className="flex gap-2">
          <Input
            placeholder="Add new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1"
          />
          <select
            value={newTaskCategory}
            onChange={(e) => setNewTaskCategory(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <Button onClick={addTask}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Checklist Categories */}
      <div className="space-y-6">
        {groupedTasks.map(({ category, tasks }) => (
          <div key={category} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-[#917f4f]" />
              <h3 className="text-lg font-semibold text-gray-900">{category}</h3>
            </div>
            <div className="space-y-3">
              {tasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between group">
                  <div className="flex items-center gap-3 flex-1">
                    <Checkbox
                      checked={task.completed}
                      onCheckedChange={() => toggleTask(task.id)}
                      className="data-[state=checked]:bg-[#917f4f] data-[state=checked]:border-[#917f4f]"
                    />
                    <span className={`text-sm ${task.completed ? 'line-through text-gray-500' : 'text-gray-700'}`}>
                      {task.text}
                    </span>
                    {task.completed && (
                      <CheckCircle className="h-4 w-4 text-[#917f4f]" />
                    )}
                    {task.reminderEmail && (
                      <Bell className="h-4 w-4 text-blue-500" />
                    )}
                  </div>
                  {!task.completed && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => setSelectedTaskId(task.id)}
                        >
                          <Bell className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Set Email Reminder</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="your@email.com"
                              value={reminderEmail}
                              onChange={(e) => setReminderEmail(e.target.value)}
                            />
                          </div>
                          <div>
                            <Label htmlFor="date">Reminder Date</Label>
                            <Input
                              id="date"
                              type="date"
                              value={reminderDate}
                              onChange={(e) => setReminderDate(e.target.value)}
                            />
                          </div>
                          <Button 
                            onClick={() => selectedTaskId && setReminder(selectedTaskId)}
                            className="w-full"
                          >
                            Set Reminder
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
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

export default ChecklistTab;
