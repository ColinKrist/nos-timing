import { endpoints } from "./consts";
import type {
  EventEntriesSearchPayload,
  EventEntriesSearchResponse,
  EventSearchPayload,
  EventSearchResponse,
  LoginPayload,
  LoginResponse,
} from "./types";

export const login = async (data: LoginPayload): Promise<LoginResponse> => {
  const response = await fetch(endpoints.login, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  if (!response.ok) {
    throw new Error("Login response was not ok");
  }

  return (await response.json()) as LoginResponse;
};

export const getEvents = async (
  data: EventSearchPayload
): Promise<EventSearchResponse> => {
  const response = await fetch(endpoints.events, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  if (!response.ok) {
    throw new Error("Get events response was not ok");
  }

  return (await response.json()) as EventSearchResponse;
};

export const getEventEntries = async (
  data: EventEntriesSearchPayload
): Promise<EventEntriesSearchResponse> => {
  const response = await fetch(endpoints.eventEntries, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  if (!response.ok) {
    throw new Error("Get event entries response was not ok");
  }

  return (await response.json()) as EventEntriesSearchResponse;
};
