import { Tickets } from '@/app/(home)/_components/tickets';
import { Decorator } from '@/components/decorator';

export default function Home() {
  return (
    <section>
      <div className="container relative grid grid-cols-2 items-center gap-8 border-x py-8">
        <div className="group relative scale-75 select-none space-y-4">
          <Tickets className="-ml-8 transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:-rotate-2 group-hover:scale-105" />
          <Tickets className="-mr-14 transition-all duration-500 ease-out group-hover:translate-x-3 group-hover:rotate-1 group-hover:scale-105" />
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold text-3xl">Control sobre tus entradas</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li>Define precios y capacidad del evento.</li>
            <li>Fechas, horarios y ubicación claras</li>
            <li>Tu evento listo para compartir</li>
          </ul>
        </div>

        <Decorator />
      </div>
    </section>
  );
}
