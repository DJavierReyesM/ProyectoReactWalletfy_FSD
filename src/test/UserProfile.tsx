type UserProfileProps2 = {
  name: string;
  url: string;
  verified?: boolean;
  children?: React.ReactNode;
};

const UserProfile2 = (props: UserProfileProps2) => {
  const { name, url, verified, children } = props;

  return (
    <div className="cd-p-[1rem] cd-shadow-lg cd-rounded-md cd-border cd-border-gray-200 cd-text-center cd-justify-center cd-items-center">
      <img width="150" src={url} alt={`Avatar of ${name}`} />
      <h2 className="cd-text-base cd-font-bold">
        {name} ({getNameLength2()})
      </h2>

      <p
        className={`cd-text-sm ${
          verified ? 'cd-text-green-500' : 'cd-text-red-500'
        }`}
      >
        {verified ? 'Verified' : 'Not verified'} user
      </p>

      {children}
    </div>
  );

  function getNameLength2() {
    return name.length;
  }
};

export default UserProfile2;
