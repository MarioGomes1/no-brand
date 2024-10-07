import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useState } from "react";

//1.
const queryClient = useQueryClient;

//2

<QueryClientProvider client={queryClient}>
  <TestComponent />
</QueryClientProvider>;

function TestComponent() {
  const { searchInput, setSearchInput } = useState();
  const queryClient = useQueryClient();
  //query key is used to connect the queries in order to invalidate and refetch
  //3 Query...get some data from remote server
  const { data, isLoading } = useQuery({
    queryFn: () => fetchData(searchInput),
    queryKey: ["whatevername", { searchInput }], // accepts additional arguments i.e a state that changes
  });

  //4 TO MUTATE DATA in REMOTE SERVER
  const { mutate } = useMutation({
    mutationFn: () => createData(),
    onSuccess: queryClient.invalidateQueries(["whatevername"]),
  });
}

function fetchData() {}
function createData() {}
