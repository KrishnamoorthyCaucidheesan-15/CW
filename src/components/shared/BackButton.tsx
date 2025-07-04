
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
  label?: string;
  to?: string;
  className?: string;
}

const BackButton = ({ label = 'Back', to, className = '' }: BackButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center text-[#917f4f] hover:text-[#7a6a42] transition-colors font-medium ${className}`}
    >
      <ArrowLeft className="h-4 w-4 mr-2" />
      {label}
    </button>
  );
};

export default BackButton;
