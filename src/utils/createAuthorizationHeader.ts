export default function createAuthorizationHeader(token: string) {
  return {
    Authorization: `Bearer ${token}`,
  };
}
