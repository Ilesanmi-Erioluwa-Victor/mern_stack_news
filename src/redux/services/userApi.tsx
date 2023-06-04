import { AnyAction } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Baseurl } from 'src/utils/Baseurl';

type User = {
  password: string;
  name: string;
  email: string;
};

export const userApi = createApi({
  reducerPath: 'userApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: Baseurl,
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<User, Partial<User>>({
      query: (body) => ({
        url: '/register',
        method: 'POST',
        body,
      }),
    }),
    // getUserById: builder.query<User, { id: string }>({
    //   query: ({ id }) => `users/${id}`,
    // }),
  }),
});

export const {
    useRegisterUserMutation,
    // useGetUserByIdQuery
} = userApi;
