import React from 'react';
import * as Lucide from 'lucide-react';

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className = '', size }) => {
  // Safe lookup with type assertion
  const IconComponent = (Lucide as Record<string, React.ComponentType<{ className?: string; size?: number }>>)[name];

  if (!IconComponent) {
    // Return a fallback icon (HelpCircle) if specified icon doesn't exist
    const Fallback = Lucide.HelpCircle;
    return <Fallback className={className} size={size} />;
  }

  return <IconComponent className={className} size={size} />;
};
