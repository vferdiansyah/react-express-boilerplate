const getUserFullName = (req, res, next) => {
  res.status(200).send({
    error: false,
    data: {
      fullName: 'Test User'
    }
  });
};

export { getUserFullName };
