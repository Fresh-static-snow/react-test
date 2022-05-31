import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IForm } from "../models/form.types";
import { IUsersResponse } from "../models/response/userResponse";

type Token = {
  [token: string]: string
}

interface IUserPost {
  body: {}
  headers: Token
}

export const userAPI = createApi({
  reducerPath: "userAPI",
  tagTypes: ["User"],
  baseQuery: fetchBaseQuery({
    baseUrl: `https://frontend-test-assignment-api.abz.agency/api/v1`,
  }),
  endpoints: (build) => ({
    getAllUsers: build.query<IUsersResponse, any>({
      query: ({ page, count }) => `/users?page=${page}&count=${count}`,
      providesTags: (result) => ["User"],
    }),

    createUser: build.mutation<IUserPost, IUserPost>({
      query: ({body, headers}) => ({
        url: "/users",
        method: "POST",
        headers: headers,
        //{'Token': token},
        body: body,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});
