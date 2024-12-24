import { mockApi } from '../mockApi';
import type { StockDTO, CreateStockDTO, UpdateStockDTO } from '../../types/api';

export const stockApi = {
  getAllStocks: () => mockApi.getAllStocks(),
  addStock: (stock: CreateStockDTO) => mockApi.addStock(stock),
  updateStock: (id: number, stock: UpdateStockDTO) => mockApi.updateStock(id, stock),
  deleteStock: (id: number) => mockApi.deleteStock(id)
};