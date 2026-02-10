import { Tickets } from '@/app/(home)/_components/tickets';
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item';
import { ShieldIcon } from 'lucide-react';

export default function Home() {
  return (
    <>
      <section className="border-y border-dashed bg-muted dark:bg-muted/20">
        <div className="container grid grid-cols-2 border-x">
          <div className="group relative scale-75 select-none space-y-3 p-6">
            <Tickets className="-ml-8 transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:-rotate-2 group-hover:scale-105" />
            <Tickets className="-mr-14 transition-all duration-500 ease-out group-hover:translate-x-3 group-hover:rotate-1 group-hover:scale-105" />
            <Tickets className="-mr-8 ml-12 transition-all duration-500 ease-out group-hover:translate-y-2 group-hover:rotate-2 group-hover:scale-105" />
          </div>

          <div className="mt-18 space-y-3">
            <h3 className="font-semibold text-3xl">
              Control total sobre tus entradas
            </h3>
            <p className="font-mono text-lg text-muted-foreground">
              Organiza y publica tus eventos con lo justo y necesario.
            </p>
            <ul className="space-y-3">
              <li>Fechas, horarios y ubicación en un solo lugar</li>
              <li>Cambios simples, sin afectar a tus asistentes</li>
              <li>Página pública lista para compartir</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container grid grid-cols-3 gap-4 border-x px-6 py-10">
        <Item variant="outline">
          <ItemMedia variant="icon">
            <ShieldIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Pagos seguros</ItemTitle>
            <ItemDescription>
              Procesa pagos de forma segura con multiples metodos de pago
              integrados.
            </ItemDescription>
          </ItemContent>
        </Item>

        <Item variant="outline">
          <ItemMedia variant="icon">
            <ShieldIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Analitica en tiempo real</ItemTitle>
            <ItemDescription>
              Monitorea ventas, asistencia y metricas clave desde tu dashboard.
            </ItemDescription>
          </ItemContent>
        </Item>

        <Item variant="outline">
          <ItemMedia variant="icon">
            <ShieldIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Check-in movil</ItemTitle>
            <ItemDescription>
              Escanea entradas con QR desde cualquier dispositivo movil.
            </ItemDescription>
          </ItemContent>
        </Item>
      </section>
    </>
  );
}
