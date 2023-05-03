import { ReactNode } from 'react';

interface propsWithChildren {
  children: ReactNode;
}

export const DarkLayout = ({ children }: propsWithChildren) => {
  return (
    <div className="bg-gray-100 text-blue-600 ">
      <h3>Ligth-layout</h3>
      <div className="mb-32 grid text-center">{children}</div>
    </div>
  );
};
