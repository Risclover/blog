import { ReactNode } from "react";

type Props = { children: ReactNode };

export const Header = ({ children }: Props) => (
  <header className="w-full flex flex-col text-slate-50 bg-slate-900">
    {children}
  </header>
);

export default Header;
