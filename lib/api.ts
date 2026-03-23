export async function apiFetch<T>(
  url: string,
  options?: RequestInit,
): Promise<T> {
  const ur = `${process.env.NEXT_PUBLIC_API_URL}${url}`;
  const res = await fetch(ur, options);
  if (!res.ok) {
    throw new Error(`API request failed with status ${res.status}`);
  }

  const data: T = await res.json();
  return data;
}
