const HeaderItem = ({ title, Icon }) => {
  return (
    <div className="group flex flex-col items-center w-12 sm:w-20 hover:text-white cursor-pointer">
      <Icon className="h-8 group-hover:animate-bounce mb-1" />
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
