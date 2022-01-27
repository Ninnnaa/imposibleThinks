export interface TableInterface {
  id: number,
  areaId: number,
  joinedWith?: number,
  sku: string,
  defaultSku: string,
  status: string,
  countActive: number,
}
