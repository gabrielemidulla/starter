export interface PingResponse {
  message: string;
  timestamp: string;
  data?: unknown;
}

export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: string;
}

export type Environment = 'development' | 'production' | 'test'