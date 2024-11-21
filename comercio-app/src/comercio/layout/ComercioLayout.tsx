import NavBar from '../components/NavBar';

const ComercioLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className='card'>{children}</div>
    </>
  );
};

export default ComercioLayout;
