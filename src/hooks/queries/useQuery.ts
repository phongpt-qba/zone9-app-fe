import { useQuery } from '@tanstack/react-query';

export interface QueryOptions {
  enabled?: boolean;
  staleTime?: number;
}

export default useQuery;
