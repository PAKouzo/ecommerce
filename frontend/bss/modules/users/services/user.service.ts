import axios from "axios";
import { UserInterface } from "./user.interface";

class UserService {
  constructor() {}

  async update(id: string, data: UserInterface) {
    const res = await axios.put(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/countries/${id}`,
      { data },
    );
    return res;
  }
}

export default UserService;
