type Props = {
  id: string;
};

const Activity = ({ id }: Props) => {
  return (
    <div>
      <div>Activity</div>
      <div>{id}</div>
    </div>
  );
};

export default Activity;
