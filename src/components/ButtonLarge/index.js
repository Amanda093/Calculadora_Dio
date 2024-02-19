import { ButtonLar } from "./styles";

const ButtonLarge = ({label, onClick}) => {
  return (
    <ButtonLar onClick={onClick} type="button">
     {label}
    </ButtonLar>
  );
}
export default ButtonLarge;
  