import { useState } from "react";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  const toggleLiked = () => {
    setLiked(!liked);
  };

  return (
    <button onClick={toggleLiked}>
      {liked
        ? "Wonderful Coctail! I link it "
        : "This is not my favorite drink"}
    </button>
  );
}
