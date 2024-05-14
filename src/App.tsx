import UserForm from "./components/form/UserForm";

export default function App() {
  return (
    <div className="mx-auto max-w-[500px]">
      <UserForm
        user={{
          id: 1,
          birthday: new Date(),
          firstName: "Rico",
          lastName: "Kamdem",
          email: "email@ledemkam.ol",
          content: "Hello, ich bin Rico!",
          role: "viewer",
        }}
      />
    </div>
  );
}
