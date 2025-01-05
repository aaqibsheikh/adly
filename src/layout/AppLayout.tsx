import { Outlet } from 'react-router-dom';
function AppLayout() {
  return (
    <>
        <div className="flex flex-col w-full h-screen bg-white" id="app-layout-main">
            <Outlet />
      </div>
    </>
  );
}

export default AppLayout;
