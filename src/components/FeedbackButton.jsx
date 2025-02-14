import { useState } from 'react';
import { FeedbackWorkflow } from '@questlabs/react-sdk';
import { useAuth } from '../context/AuthContext';

export default function FeedbackButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-l-lg shadow-lg hover:bg-blue-700 transition-colors"
      >
        Feedback
      </button>

      {isOpen && (
        <FeedbackWorkflow
          uniqueUserId={user?.id || 'anonymous-user'}
          questId="c-greta-feedback-workflow"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          accent="#0284c7"
        >
          <FeedbackWorkflow.ThankYou />
        </FeedbackWorkflow>
      )}
    </>
  );
}