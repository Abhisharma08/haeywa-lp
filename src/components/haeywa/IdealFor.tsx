import { Briefcase, Calculator, Network, Store, UserCog } from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

const idealFor: {
  name: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
}[] = [
  { name: 'Startups & SMEs', icon: Briefcase },
  { name: 'Finance & Accounts Teams', icon: Calculator },
  { name: 'Multi-branch Organisations', icon: Network },
  { name: 'Field & Retail Operations', icon: Store },
  { name: 'Corporate Admins', icon: UserCog },
];

export default function IdealFor() {
  return (
    <section id="ideal-for" className="py-20 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-secondary sm:text-4xl">
            Ideal For
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            haeywa is designed to empower a wide range of businesses and roles.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {idealFor.map((item) => (
            <div key={item.name} className="flex flex-col items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <p className="font-semibold text-foreground">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
