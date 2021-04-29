import React from 'react';
import { joinClassNames } from '../lib/joinClassNames';

interface VerticalMenuProps {
  className?: string;
}

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Settings', href: '#', current: false }
];

export const VerticalMenu = (props: VerticalMenuProps) => {
  return (
    <nav className="space-y-1" aria-label="Sidebar">
      {navigation.map(item => (
        <a
          key={item.name}
          href={item.href}
          className={joinClassNames(
            item.current
              ? 'bg-gray-100 text-gray-900'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
            'flex items-center px-3 py-2 text-sm font-medium rounded-md',
            props.className || ''
          )}
          aria-current={item.current ? 'page' : undefined}
        >
          <span className="truncate">{item.name}</span>
        </a>
      ))}
    </nav>
  );
};
