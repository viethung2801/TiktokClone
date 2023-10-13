import { useState } from "react";

function RandomGift(){
      // random gift
  const gifts = ["a", "b", "c", "d"];

  const [gift, setGift] = useState();

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length,1);
    setGift(gifts[index]);
  }
    return (
        <div>
            <h1>{gift || 'Chưa lấy phần thưởng'}</h1>
            <button onClick={randomGift}>Lấy thưởng</button>
        </div>
    )
}

export default RandomGift