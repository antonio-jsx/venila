export type TitleId = {
  id: number;
  title: string;
};

export interface RemoveStore {
  id: number;
  title: string;
  modal: boolean;
  remove: (options: TitleId) => void;
  closeModal: () => void;
}
