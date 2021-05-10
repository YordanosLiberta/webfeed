const PostCard = (props) => {
  const { body, title, id } = props;
  return (
    <div style={{ margin: 20, border: "1px solid red" }}>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default PostCard;
