interface ContainerProps {
    children: React.ReactNode;
  }
  
  const Container: React.FC<ContainerProps> = ({
    children
  }) => {
    return ( 
      <div className="mx-auto max-w-screen-lg">
        {children}
      </div>
     );
  };
  
  export default Container;