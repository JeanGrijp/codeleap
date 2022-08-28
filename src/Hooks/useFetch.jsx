import { useQuery } from 'react-query';
import api from '../services/API/axios';

const useFetch = (param) => {
  const { data, isFetching } = useQuery(param, async () => {
    const response = await api.get(param);

    return response.data;
  }, {
    refetchOnWindowFocus: true,
    staleTime: 1000 * 60,
  });

  return { data, isFetching };
};

export default useFetch;
