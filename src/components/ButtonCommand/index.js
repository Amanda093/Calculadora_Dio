import { ButtonCom } from "./styles";

const ButtonCommand = ({label, onClick}) => {
  return (
    <ButtonCom onClick={onClick} type="button">
     {label}
    </ButtonCom>
  );
}
export default ButtonCommand;
  