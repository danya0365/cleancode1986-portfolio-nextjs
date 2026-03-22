import React, { useState } from 'react';
import { ContactFormData } from "@/src/presentation/presenters/contact/ContactPresenter";

interface Props {
  submitting: boolean;
  submitStatus: { success: boolean; message: string } | null;
  submitContactForm: (data: ContactFormData) => Promise<void>;
}

export function TerminalContactForm({ submitting, submitStatus, submitContactForm }: Props) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    projectType: 'Web Development',
    budget: '',
    message: ''
  });

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitContactForm(formData);
  };

  return (
    <div className="font-mono text-sm sm:text-base border border-green-900/50 p-4 bg-gray-900">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="text-amber-400 mb-2 font-bold"># Execute payload transmission</div>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 group">
          <label className="text-green-600 w-32 shrink-0">--name=&quot;</label>
          <input 
            required
            type="text" 
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            disabled={submitting}
            className="flex-1 bg-transparent border-b border-green-900 focus:border-green-500 outline-none text-green-400 disabled:opacity-50"
          />
          <span className="text-green-600">&quot;</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 group">
          <label className="text-green-600 w-32 shrink-0">--email=&quot;</label>
          <input 
            required
            type="email" 
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            disabled={submitting}
            className="flex-1 bg-transparent border-b border-green-900 focus:border-green-500 outline-none text-green-400 disabled:opacity-50"
          />
          <span className="text-green-600">&quot;</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 group">
          <label className="text-green-600 w-32 shrink-0">--phone=&quot;</label>
          <input 
            type="tel" 
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            disabled={submitting}
            className="flex-1 bg-transparent border-b border-green-900 focus:border-green-500 outline-none text-green-400 disabled:opacity-50"
          />
          <span className="text-green-600">&quot;</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 group">
          <label className="text-green-600 w-32 shrink-0">--type=&quot;</label>
          <select 
            value={formData.projectType}
            onChange={(e) => handleChange('projectType', e.target.value)}
            disabled={submitting}
            className="flex-1 bg-transparent border-b border-green-900 focus:border-green-500 outline-none text-green-400 disabled:opacity-50 appearance-none cursor-pointer"
          >
            <option className="bg-gray-900" value="Web Development">Web Development</option>
            <option className="bg-gray-900" value="Mobile App">Mobile App</option>
            <option className="bg-gray-900" value="UI/UX Design">UI/UX Design</option>
            <option className="bg-gray-900" value="Consulting">Consulting</option>
            <option className="bg-gray-900" value="Other">Other</option>
          </select>
          <span className="text-green-600">&quot;</span>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <label className="text-green-600 shrink-0">cat &lt;&lt; 'EOF' &gt; message.txt</label>
          <textarea 
            required
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            disabled={submitting}
            rows={4}
            className="w-full bg-black border border-green-900 focus:border-green-500 p-2 outline-none text-green-400 disabled:opacity-50 resize-y"
          />
          <span className="text-green-600">EOF</span>
        </div>
        
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
          <button 
            type="submit" 
            disabled={submitting}
            className="text-black bg-green-500 hover:bg-green-400 border border-green-500 px-6 py-2 font-bold uppercase transition-colors disabled:opacity-50 disabled:bg-green-800 disabled:text-green-400"
          >
            {submitting ? 'Transmitting...' : './send.sh'}
          </button>
          
          {submitStatus && (
            <div className={`text-sm $\\{submitStatus.success ? 'text-green-400' : 'text-red-400'\\}`}>
              [{submitStatus.success ? 'OK' : 'ERROR'}] {submitStatus.message}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
