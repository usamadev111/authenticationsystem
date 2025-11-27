import sanitize from "mongo-sanitize";

export const registerUSer = (req, res) => {
  // console.log(req.body);

  try {
    const { name, email, password } = sanitize(req.body);

    res.json({
      name,
      email,
      password,
    });
  } catch (error) {
    console.log("Failed to register the user");
  }
};
