export type User = {
  id: number;
  birthday: Date;
  email: string;
  content: string;
  firstName: string;
  lastName: string;
  role: "viewer" | "editor";
};
