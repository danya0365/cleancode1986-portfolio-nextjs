"use client";

import { ContactFormData, ContactViewModel } from "@/src/presentation/presenters/contact/ContactPresenter";
import { TerminalBlock } from "@/src/presentation/components/ui/terminal/TerminalBlock";
import { TerminalContactForm } from "../components/terminal/TerminalContactForm";

export interface ContactTerminalProps {
  viewModel: ContactViewModel;
  submitting: boolean;
  submitStatus: { success: boolean; message: string } | null;
  submitContactForm: (data: ContactFormData) => Promise<void>;
}

export function ContactTerminalView({ viewModel, submitting, submitStatus, submitContactForm }: ContactTerminalProps) {
  return (
    <div className="bg-gray-950 min-h-screen text-green-500 font-mono p-4 sm:p-8 md:p-12 overflow-x-hidden">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        
        {/* CLI Header */}
        <div className="mb-4 border-b border-green-900 pb-4">
          <h1 className="text-xl sm:text-2xl font-bold text-green-400 mb-2">Secure SSH Transmission Channel</h1>
          <p className="text-green-700 text-sm">Establishing encrypted connection to core team...</p>
        </div>

        {/* Global Config Output */}
        <TerminalBlock command="cat /etc/communication_protocols.conf" path="~">
          <div className="text-blue-300 bg-gray-900 border border-gray-800 p-4 rounded text-sm overflow-x-auto">
            <span className="text-gray-500"># Primary communication endpoints</span><br/>
            <span className="text-green-600">export</span> EMAIL_TARGET=&quot;<span className="text-amber-400">{viewModel.contactEmail}</span>&quot;<br/>
            <span className="text-green-600">export</span> PHONE_COMM=&quot;<span className="text-amber-400">{viewModel.contactPhone}</span>&quot;<br/>
            <span className="text-green-600">export</span> BASE_LOCATION=&quot;<span className="text-amber-400">{viewModel.officeAddress}</span>&quot;<br/>
          </div>
        </TerminalBlock>

        {/* Interactive Form Block */}
        <TerminalBlock command="./init_contact_handshake.sh" path="~">
          <TerminalContactForm 
            submitting={submitting} 
            submitStatus={submitStatus} 
            submitContactForm={submitContactForm} 
          />
        </TerminalBlock>
        
        {/* Interactive CLI End Prompt Block */}
        <div className="flex items-center text-sm sm:text-base mt-2">
          <span className="text-green-500 font-bold mr-2 whitespace-nowrap">guest@cleancode1986:~$</span>
          <span className="w-3 h-5 bg-green-500 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
