export default function DashboardLayout({
  children,
  users,
  revenue,
  notification,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notification: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = true;

  return isLoggedIn ? (
    <>
      <div> {children}</div>
      <div>
        <div>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div>{notification}</div>
      </div>
    </>
  ) : (
    login
  );
}
