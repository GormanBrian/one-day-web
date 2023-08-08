import { useParams } from "react-router-dom";

const Skill = () => {
  const { skillId } = useParams();
  return (
    <div>
      <div>Skill</div>
      <div>{skillId}</div>
    </div>
  );
};

export default Skill;
