import { IPositionResponse } from '../models/response/positionResponse';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const positionAPI = createApi({
  reducerPath: "positionAPI",
  tagTypes: ['Position'],
  baseQuery: fetchBaseQuery({
    baseUrl: `https://frontend-test-assignment-api.abz.agency/api/v1`,
  }),
  endpoints: (build) => ({
    getAllPositions: build.query<IPositionResponse, void>({
      query: () => `/positions`,
      providesTags: result => ['Position']
    }),
  }),
});

