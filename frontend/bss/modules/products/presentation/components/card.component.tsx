"use client";

import { Card } from "antd";
import { useEffect, useState } from "react";
import { Button } from "antd";
import { RouterPath } from "@/shared/constant/router";
import { useRouter } from "next/navigation";

const CardComponent = () => {
  const [isFlashSale, setIsFlashSale] = useState(false);
  const router = useRouter();

  const handleClickToUser = () => {
    router.push(RouterPath.USER);
  };

  useEffect(() => {
    const checkTime = () => {
      const timeNow = new Date("2026-03-12T09:00:00");
      const hour = timeNow.getHours();

      if (hour >= 9 && hour < 11) {
        setIsFlashSale(true);
      } else {
        setIsFlashSale(false);
      }
    };

    checkTime();
    const interval = setInterval(checkTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        // eslint-disable-next-line @next/next/no-img-element
        <img
          draggable={false}
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <div>
        <div>
          <p>IPHONE 15</p>
          <p>1000 USD</p>
        </div>
        <div>
          {isFlashSale ? (
            <Button type="primary" onClick={handleClickToUser}>
              Add to cart
            </Button>
          ) : (
            <Button type="primary">Out of stock</Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default CardComponent;
