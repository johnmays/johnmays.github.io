const LinkButton = ({ onClick, children, as: Component = 'button'}) => {
    return (
      <Component onClick={onClick} className="button">
        {children}
      </Component>
    );
  };

export default LinkButton;