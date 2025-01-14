import { Logo } from "@/components/ui/Logo";

export function Header(): JSX.Element {
  return (
    <header className="-mb-28 flex justify-center py-4">
      <Logo className="z-10 h-20 cursor-pointer text-sky-800" />
    </header>
  );
}
