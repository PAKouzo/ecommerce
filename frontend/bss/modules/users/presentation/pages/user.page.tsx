import { UserInterface } from "../../services/user.interface";
import UserService from "../../services/user.service";
import InputComponent from "../components/input.component";

const UserPage = () => {
  const userService = new UserService();

  const updateProfile = async (id: string, data: UserInterface) => {
    try {
      const res = await userService.update(id, data);
    } catch (error) {
      console.error("Failed when updating profile!");
      throw error;
      // toast.error("Failed when updating profile!");
    }
  };

  return (
    <div>
      <InputComponent />
    </div>
  );
};

export default UserPage;
