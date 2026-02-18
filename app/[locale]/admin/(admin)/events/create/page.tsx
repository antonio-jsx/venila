import { CreateEvent } from '@/admin/events/_components/create-event';
import { Provider } from '../provider';

export default function CreateEventPage() {
  return (
    <Provider steps={4}>
      <CreateEvent />
    </Provider>
  );
}
