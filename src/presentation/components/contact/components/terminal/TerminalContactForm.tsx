import React, { useState } from 'react';
import { ContactFormData } from "@/src/presentation/presenters/contact/ContactPresenter";
import { useChatStore } from "@/src/presentation/stores/chat-store";

interface Props {
}

export function TerminalContactForm({}: Props) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    projectType: 'Web Development',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { openChat, registerCustomer, sendMessage } = useChatStore();

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const contactIdentifier = formData.phone || formData.email;
      const registered = await registerCustomer(formData.name, contactIdentifier);

      if (registered) {
        const chatContext = `สวัสดีครับ สนใจทำโปรเจกต์ประเภท ${formData.projectType}\n` +
                            (formData.budget ? `งบประมาณที่ตั้งไว้ระดับ: ${formData.budget}\n` : '') +
                            `รายละเอียดเพิ่มเติม:\n${formData.message}`;

        openChat();
        await sendMessage(chatContext);
        
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: 'Web Development',
          budget: '',
          message: ''
        });
      }
    } finally {
      setIsSubmitting(false);
    }
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
            disabled={isSubmitting}
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
            disabled={isSubmitting}
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
            disabled={isSubmitting}
            className="flex-1 bg-transparent border-b border-green-900 focus:border-green-500 outline-none text-green-400 disabled:opacity-50"
          />
          <span className="text-green-600">&quot;</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 group">
          <label className="text-green-600 w-32 shrink-0">--type=&quot;</label>
          <select 
            value={formData.projectType}
            onChange={(e) => handleChange('projectType', e.target.value)}
            disabled={isSubmitting}
            className="flex-1 bg-transparent border-b border-green-900 focus:border-green-500 outline-none text-green-400 appearance-none cursor-pointer disabled:opacity-50"
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
            disabled={isSubmitting}
            rows={4}
            className="w-full bg-black border border-green-900 focus:border-green-500 p-2 outline-none text-green-400 resize-y disabled:opacity-50"
          />
          <span className="text-green-600">EOF</span>
        </div>
        
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="text-black bg-green-500 hover:bg-green-400 border border-green-500 px-6 py-2 font-bold uppercase transition-colors disabled:opacity-50 disabled:bg-green-800 disabled:text-green-400"
          >
            {isSubmitting ? 'Transmitting...' : './send.sh'}
          </button>
        </div>
      </form>
    </div>
  );
}
