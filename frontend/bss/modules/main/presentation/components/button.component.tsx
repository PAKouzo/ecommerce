import { RouterPath } from "@/shared/constant/router";
import { Button } from "antd";
import { useRouter } from "next/navigation";

const ButtonMainPage = () => {
  const router = useRouter();

  const handleClickToUser = () => {
    router.push(RouterPath.USER);
  };

  const handleClickToProduct = () => {
    router.push(RouterPath.PRODUCT);
  };

  return (
    <div>
      <Button type="primary" onClick={handleClickToProduct}>
        Products
      </Button>
      <Button type="primary" onClick={handleClickToUser}>
        Users
      </Button>
    </div>
  );
};

export default ButtonMainPage;
