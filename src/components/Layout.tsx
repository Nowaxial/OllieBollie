import HeaderResponsive from './HeaderResponsive';

const Layout = ({ children }) => {
  return (
    <div>
      <HeaderResponsive />
      {children}
    </div>
  );
};

export default Layout;
