

function Layout() {
  return (
    <div className="flex min-h-screen">
   
      <aside className="w-64 bg-[#14432a] rounded-l-2xl pt-15 shrink-0">
        <Header />
        <Sebar />
      </aside>

     
      <main className="flex-1 p-9">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;