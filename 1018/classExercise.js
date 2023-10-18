router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`hello ${id}`);
});
