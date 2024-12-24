import type { StockDTO, CreateStockDTO, UpdateStockDTO } from '../types/api';

let mockStocks: StockDTO[] = [
  {
    id: 1,
    symbol: 'AAPL',
    name: 'Apple Inc.',
    quantity: 10,
    buyPrice: 150.00,
    currentPrice: 173.50
  },
  {
    id: 2,
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    quantity: 5,
    buyPrice: 2800.00,
    currentPrice: 2960.25
  }
];

export const mockApi = {
  getAllStocks: async (): Promise<StockDTO[]> => {
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
    return [...mockStocks];
  },

  addStock: async (stock: CreateStockDTO): Promise<StockDTO> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const newStock = {
      ...stock,
      id: Date.now(),
      currentPrice: stock.buyPrice * 1.05 // Simulate slightly higher current price
    };
    mockStocks.push(newStock);
    return newStock;
  },

  updateStock: async (id: number, stock: UpdateStockDTO): Promise<StockDTO> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const index = mockStocks.findIndex(s => s.id === id);
    if (index === -1) throw new Error('Stock not found');
    
    mockStocks[index] = {
      ...mockStocks[index],
      ...stock
    };
    return mockStocks[index];
  },

  deleteStock: async (id: number): Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    mockStocks = mockStocks.filter(s => s.id !== id);
  }
};