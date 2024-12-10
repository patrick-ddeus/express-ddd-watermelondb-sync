export interface IRepository<Output = any> {
  ListOne?(input: unknown): Promise<Output | null>;
  listAll?(input?: unknown): Promise<Output[]>;
  createOne?(input: unknown): Promise<Output>;
  createMany?(input: unknown[]): Promise<Output[]>;
  updateOne?(id: string, input: unknown): Promise<Output>;
  deleteOne?(id: string): Promise<void>;
}
